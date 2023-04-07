// Get the form element
var form = document.querySelector("form");

// Add an event listener to the form submit button
form.addEventListener("submit", function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    // Get the form data
    var formData = new FormData(form);

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // Set up the request
    xhr.open("POST", "process-form.php");

    // Set up the callback function
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            // Display a success message
            alert("Thanks for your message! We'll get back to you soon.");
        }
    };

    // Send the form data
    xhr.send(formData);
});
