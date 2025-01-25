document.getElementById('orderForm').addEventListener('submit', function (e) {
	e.preventDefault(); // Prevent form submission

	const orderId = document.getElementById('orderId').value.trim();
	const alertPlaceholder = document.getElementById('alertPlaceholder');

	// Clear previous alerts
	alertPlaceholder.innerHTML = '';

	// Show loading message
	alertPlaceholder.innerHTML = '<div class="text-center text-primary">Tracking your order...</div>';

	// Simulate tracking logic with a delay
	setTimeout(() => {
		alertPlaceholder.innerHTML = ''; // Clear loading message

		if (orderId === '12345') {
			showAlert('success', 'Order found! Your package is on its way.');
		} else {
			showAlert('danger', 'Order not found. Please check your Order ID.');
		}
	},
		2000); // Simulated 2-second delay

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