<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>AJAX Examples</title>
  <!-- Include jQuery for AJAX functionality -->
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
  <!-- Include jQuery UI for autocomplete -->
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
  <link rel="stylesheet" href="https://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
</head>
<body>

<!-- Example 1: Updating a Web Page Without Reloading -->
<div id="news-feed">
  <!-- News feed content will be loaded here -->
</div>

<!-- Example 2: Form Submission Without Page Reload -->
<form id="comment-form">
  <label for="comment">Add a comment:</label>
  <textarea id="comment" name="comment"></textarea>
  <button type="submit">Submit</button>
</form>

<!-- Example 3: Autocomplete Search Suggestions -->
<label for="search-bar">Search:</label>
<input type="text" id="search-bar">

<!-- Example 4: Dynamic Content Loading -->
<div id="content-container">
  <!-- Content will be loaded here -->
</div>
<div id="scroll-trigger" style="height: 1px;"></div>

<script>
  // Example 1: Updating a Web Page Without Reloading
  $.ajax({
    url: 'https://api.example.com/news',
    method: 'GET',
    success: function(data) {
      $('#news-feed').html(data);
    }
  });

  // Example 2: Form Submission Without Page Reload
  document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var formData = new FormData(this);

    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://api.example.com/submit-comment', true);
    xhr.onload = function() {
      console.log(xhr.responseText);
    };
    xhr.send(formData);
  });

  // Example 3: Autocomplete Search Suggestions
  $('#search-bar').autocomplete({
    source: function(request, response) {
      $.ajax({
        url: 'https://api.example.com/search',
        method: 'GET',
        data: { query: request.term },
        success: function(data) {
          response(data);
        }
      });
    }
  });

  // Example 4: Dynamic Content Loading
  var observer = new IntersectionObserver(function(entries) {
    if (entries[0].isIntersecting) {
      fetch('https://api.example.com/more-content')
        .then(response => response.json())
        .then(data => {
          document.getElementById('content-container').innerHTML += data;
        });
    }
  });

  observer.observe(document.getElementById('scroll-trigger'));
</script>

</body>
</html>

-------------------------------------------------------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Additional AJAX Examples</title>
  <!-- Include jQuery for AJAX functionality -->
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

<!-- Example 5: Fetching JSON Data -->
<div id="json-example">
  <!-- JSON data will be loaded here -->
</div>

<!-- Example 6: Updating User Profile with AJAX -->
<div id="user-profile">
  <!-- User profile information will be loaded here -->
</div>

<!-- Example 7: Real-time Notifications -->
<div id="notifications">
  <!-- Notifications will be loaded here -->
</div>

<!-- Example 8: File Upload with AJAX -->
<form id="file-upload-form">
  <label for="file">Choose a file:</label>
  <input type="file" id="file" name="file">
  <button type="button" onclick="uploadFile()">Upload</button>
</form>

<script>
  // Example 5: Fetching JSON Data
  $.ajax({
    url: 'https://api.example.com/data.json',
    method: 'GET',
    dataType: 'json',
    success: function(data) {
      $('#json-example').html(JSON.stringify(data));
    }
  });

  // Example 6: Updating User Profile with AJAX
  $.ajax({
    url: 'https://api.example.com/user-profile',
    method: 'GET',
    success: function(data) {
      $('#user-profile').html(data);
    }
  });

  // Example 7: Real-time Notifications
  function fetchNotifications() {
    $.ajax({
      url: 'https://api.example.com/notifications',
      method: 'GET',
      success: function(data) {
        $('#notifications').html(data);
      }
    });
  }

  // Fetch notifications every 10 seconds
  setInterval(fetchNotifications, 10000);
  // Initial fetch
  fetchNotifications();

  // Example 8: File Upload with AJAX
  function uploadFile() {
    var fileInput = document.getElementById('file');
    var file = fileInput.files[0];

    var formData = new FormData();
    formData.append('file', file);

    $.ajax({
      url: 'https://api.example.com/upload',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: function(response) {
        console.log(response);
      }
    });
  }
</script>

</body>
</html>

-------------------------------------------------------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>More AJAX Examples</title>
  <!-- Include jQuery for AJAX functionality -->
  <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
</head>
<body>

<!-- Example 9: Polling for Live Data -->
<div id="live-data">
  <!-- Live data will be loaded here -->
</div>

<!-- Example 10: Updating Database Records -->
<form id="update-record-form">
  <label for="record-id">Enter Record ID:</label>
  <input type="text" id="record-id" name="record-id">
  <button type="button" onclick="updateRecord()">Update Record</button>
</form>

<!-- Example 11: Creating a Todo List with AJAX -->
<ul id="todo-list">
  <!-- Todo list items will be loaded here -->
</ul>

<!-- Example 12: Handling Errors with AJAX -->
<div id="error-example">
  <!-- Error message will be loaded here -->
</div>

<script>
  // Example 9: Polling for Live Data
  function fetchLiveData() {
    $.ajax({
      url: 'https://api.example.com/live-data',
      method: 'GET',
      success: function(data) {
        $('#live-data').html(data);
      }
    });
  }

  // Fetch live data every 5 seconds
  setInterval(fetchLiveData, 5000);
  // Initial fetch
  fetchLiveData();

  // Example 10: Updating Database Records
  function updateRecord() {
    var recordId = $('#record-id').val();

    $.ajax({
      url: 'https://api.example.com/update-record/' + recordId,
      method: 'PUT',
      success: function(response) {
        console.log(response);
      }
    });
  }

  // Example 11: Creating a Todo List with AJAX
  $.ajax({
    url: 'https://api.example.com/todo-list',
    method: 'GET',
    success: function(data) {
      $('#todo-list').html(data);
    }
  });

  // Example 12: Handling Errors with AJAX
  $.ajax({
    url: 'https://api.example.com/error-endpoint',
    method: 'GET',
    success: function(data) {
      // This success callback won't be triggered in case of an error
      $('#error-example').html(data);
    },
    error: function(xhr, status, error) {
      $('#error-example').html('Error: ' + status + ' - ' + error);
    }
  });
</script>

</body>
</html>

------------------------------------------------------------------------------------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Advanced jQuery Examples</title>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
        }

        .highlight {
            background-color: #ffffcc;
        }

        .accordion {
            cursor: pointer;
            border: 1px solid #ccc;
            padding: 10px;
            margin: 5px;
            background-color: #f1f1f1;
            font-weight: bold;
        }

        .content {
            display: none;
            padding: 10px;
            border-top: 1px solid #ccc;
        }

        button {
            padding: 10px;
            background-color: #4caf50;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>

    <div class="container">

        <h1>Advanced jQuery Examples</h1>

        <!-- Example 1: Document Ready Function -->
        <script>
            $(document).ready(function() {
                // Example 2: Click Event Handling
                $('#toggleButton').click(function() {
                    // Example 3: Hide and Show Elements
                    $('#toggleElement').toggle();

                    // Example 4: Toggle Class
                    $('#toggleElement').toggleClass('highlight');
                });

                // Example 5: Ajax Request
                $('#fetchDataButton').click(function() {
                    $.ajax({
                        url: 'https://jsonplaceholder.typicode.com/todos/1',
                        method: 'GET',
                        success: function(response) {
                            // Example 6: Change CSS Properties
                            $('#responseData').text(JSON.stringify(response));
                            $('#responseData').css('color', 'blue');
                        },
                        error: function(error) {
                            $('#responseData').text('Error fetching data');
                            $('#responseData').css('color', 'red');
                        }
                    });
                });

                // Example 7: Animate Element
                $('#animateButton').click(function() {
                    $('#animatedElement').animate({
                        opacity: 0.5,
                        left: '+=50',
                        height: 'toggle'
                    }, 1000);
                });

                // Example 8: Form Submission Handling
                $('#submitButton').click(function() {
                    // Simulating form submission
                    $('#formMessage').text('Form submitted successfully!');
                    $('#formMessage').css('color', 'green');
                });

                // Example 9: Adding and Removing Elements
                $('#addElementButton').click(function() {
                    $('<p>New Element Added</p>').appendTo('#elementContainer');
                });

                $('#removeElementButton').click(function() {
                    $('#elementContainer p:last-child').remove();
                });

                // Example 10: Accordion Effect
                $('.accordion').click(function() {
                    $(this).next('.content').slideToggle();
                });
            });
        </script>

        <!-- Example 2: Click Event Handling -->
        <button id="toggleButton">Toggle Element</button>
        <div id="toggleElement">This is a toggleable element</div>

        <!-- Example 5: Ajax Request -->
        <button id="fetchDataButton">Fetch Data</button>
        <div id="responseData"></div>

        <!-- Example 7: Animate Element -->
        <button id="animateButton">Animate Element</button>
        <div id="animatedElement" style="width: 100px; height: 100px; background-color: #ffcc00;"></div>

        <!-- Example 8: Form Submission Handling -->
        <form id="myForm">
            <input type="text" placeholder="Enter text">
            <button type="button" id="submitButton">Submit</button>
        </form>
        <div id="formMessage"></div>

        <!-- Example 9: Adding and Removing Elements -->
        <button id="addElementButton">Add Element</button>
        <button id="removeElementButton">Remove Element</button>
        <div id="elementContainer">
            <!-- Elements will be added/removed here -->
        </div>

        <!-- Example 10: Accordion Effect -->
        <div class="accordion">Section 1</div>
        <div class="content">Content for section 1</div>
        <div class="accordion">Section 2</div>
        <div class="content">Content for section 2</div>

    </div>

</body>
</html>
