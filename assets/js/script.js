// Function to fetch and display products for a container
function fetchAndDisplayProducts(container) {
	const category = container.dataset.category;
	const limit = parseInt(container.dataset.limit, 10);
	const rowId = container.dataset.rowId;
	const device = container.dataset.device;

	console.log(`Fetching products for: Category=${category}, Limit=${limit}, RowID=${rowId}, Device=${device}`);

	fetch('assets/data/products.json')
	.then(response => {
		if (!response.ok) {
			throw new Error('Failed to fetch product data');
		}
		return response.json();
	})
	.then(products => {
		// Filter products by category and device
		const filteredProducts = products.filter(
			product => product.category === category && product.device === device
		);

		// Limit the number of products
		const limitedProducts = filteredProducts.slice(0, limit);

		// Add products to the container
		if (limitedProducts.length > 0) {
			limitedProducts.forEach(product => {
				const productDiv = document.createElement('div');
				productDiv.classList.add('product-card');
				productDiv.innerHTML = `
				<a href="product_details.html">
					<img src="${product.image}" alt="${product.name}">
					<div class="card-body">
						<p class="card-title">
							${product.name}
						</p>
						<p class="card-text">
							${product.name}
						</p>
						<button class="btn btn-theme btn-sm">Buy Now</button>
					</div>
				</a>
				`;
				container.appendChild(productDiv);
			});
		} else {
			container.innerHTML = `<p>No products found for "${category}" on "${device}".</p>`;
		}
	})
	.catch(error => {
		console.error('Error:', error);
		container.innerHTML = '<p>Failed to load products.</p>';
	});
}

// Select all product containers and process them
document.querySelectorAll('.product-container').forEach(container => {
	fetchAndDisplayProducts(container);
});
