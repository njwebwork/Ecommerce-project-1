document.getElementById('contactForm').addEventListener('submit', function (e) {
	e.preventDefault(); // Prevent form submission

	const name = document.getElementById('name').value.trim();
	const email = document.getElementById('email').value.trim();
	const message = document.getElementById('message').value.trim();
	const alertPlaceholder = document.getElementById('alertPlaceholder');

	// Clear previous alerts
	alertPlaceholder.innerHTML = '';

	if (name && email && message) {
		// Simulate form submission success
		showAlert('success', 'Thank you for reaching out to us! We’ll get back to you shortly.');
		document.getElementById('contactForm').reset(); // Reset form fields
	} else {
		// Show error if fields are incomplete
		showAlert('danger', 'Please fill out all fields before submitting.');
	}

	function showAlert(type, message) {
		const alertDiv = document.createElement('div');
		alertDiv.className = `alert alert-${type} alert-dismissible fade show`;
		alertDiv.role = 'alert';
		alertDiv.innerHTML = `
		${message}
		<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
		`;
		alertPlaceholder.appendChild(alertDiv);
	}
});