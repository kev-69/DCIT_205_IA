function checkSelection() {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    var notification = document.getElementById('notification');
    var educationCheckboxes = document.querySelectorAll('input[name="education"]:checked');

    // Validate checkboxes
    if (checkboxes.length < 4) {
        notification.textContent = 'Please select at least 4 courses.';
        notification.style.color = 'red';
    } else if (checkboxes.length > 4) {
        notification.textContent = 'Please select a maximum of 4 courses.';
        notification.style.color = 'red';
    } else {
        notification.textContent = '';
    }

    // Validate education checkboxes
    if (educationCheckboxes.length > 1) {
        notification.textContent = 'Please select only one option for highest level of education.';
        notification.style.color = 'red';
    } else if (educationCheckboxes.length === 1 && checkboxes.length === 4) {
        notification.textContent = ''; // Clear the notification if everything is valid
    }

    // Call the function to initialize the map
    initializeMap();
}

function initializeMap() {
    // Coordinates for your department's location
    var departmentLocation = [12.345678, -45.678901];

    // Create a map centered at the department's location
    var map = L.map('map').setView(departmentLocation, 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker(departmentLocation).addTo(map)
        .bindPopup('Computer Science Department');
}

    const textOverlay = document.getElementById('text-overlay');

    const animation = () => {
    textOverlay.style.transform = `translate(-50%, -50%) rotate(${Math.random() * 360}deg)`;
    textOverlay.style.transition = 'transform 1s ease-in-out';
};

    setInterval(animation, 2000);
