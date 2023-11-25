function checkSelection() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var notification = document.getElementById('notification');
    var educationCheckboxes = document.querySelectorAll('input[name="education"]:checked');
  
    if (checkboxes.length < 4) {
        notification.textContent = 'Please select at least 4 courses.';
        notification.style.color = 'red';
    } else if (checkboxes.length > 4) {
        notification.textContent = 'Please select a maximum of 4 courses.';
        notification.style.color = 'red';
    } else {
        notification.textContent = '';
        // Add logic to handle the selected courses (e.g., submit form).
    }

    // Ensure only one option is selected for education
    if (educationCheckboxes.length > 1) {
        notification.textContent = 'Please select only one option for highest level of education.';
        notification.style.color = 'red';
    } else if (educationCheckboxes.length === 1 && checkboxes.length === 4) {
        notification.textContent = ''; // Clear the notification if everything is valid
    }
}
