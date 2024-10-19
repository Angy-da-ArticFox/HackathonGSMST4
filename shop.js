document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const resultsList = document.getElementById('results-list');
    
    // Clear previous results
    resultsList.innerHTML = '';
  
    // Product list organized by categories
    const products = [
      // Computer Components
      {name: 'Keyboard', link: 'https://www.amazon.com/Mechanical-Keyboard-Switches-Backlit-Ergonomic/dp/B0BXW1B222'},
      {name: 'Gaming Mouse', link: 'https://www.amazon.com/PC-Accessories-Under-10-Games/s?keywords=PC+Accessories&rh=n%3A318813011%2Cp_36%3A2422977011'},
      {name: 'Monitor', link: 'https://www.amazon.com/Mamol-Computer-Privacy-Screen-Filter/dp/B0BHYXNCL8'},
      {name: 'Graphics Card', link: 'https://www.amazon.com/s?k=cheap+graphics+cards'},
      {name: 'Motherboard', link: 'https://www.amazon.com/s?k=cheap+mother+board'},
      {name: 'CPU Cooler', link: 'https://www.amazon.com/s?k=cheap+cpu+cooler'},
      {name: 'CPU', link: 'https://www.amazon.com/s?k=cheap+cpu'},
      {name: 'Laptop Stand', link: 'https://www.amazon.com/s?k=cheap+laptop+stand'},
      {name: 'USB Flash Drive', link: 'https://www.amazon.com/s?k=cheap+usb+drive'},
      {name: 'Printer', link: 'https://www.amazon.com/s?k=cheap+printer'},
      {name: 'Wireless Router', link: 'https://www.amazon.com/s?k=cheap+wireless+router'},
  
      // School Supplies
      {name: 'Notebook', link: 'https://www.amazon.com/s?k=cheap+note+book'},
      {name: 'Graphing Calculator', link: 'https://www.amazon.com/s?k=cheap+calculator'},
      {name: 'Colored Pencils', link: 'https://www.amazon.com/s?k=cheap+pencil'},
      {name: 'Binder', link: 'https://www.amazon.com/s?k=cheap+binder'},
      {name: 'Backpack', link: 'https://www.amazon.com/s?k=cheap+backpack'},
      {name: 'Lunch Box', link: 'https://www.amazon.com/s?k=cheap+lunch+box'},
  
      // Kitchen Utensils
      {name: 'Frying Pan', link: 'https://www.amazon.com/s?k=cheap+pan'},
      {name: 'Spatula', link: 'https://www.amazon.com/s?k=cheap+spatula'}
    ];
  
    // Filter products based on the search query
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
  
    // Display filtered products
    filteredProducts.forEach(product => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="${product.link}" target="_blank">${product.name}</a>`;
      resultsList.appendChild(li);
    });
  
    // Show a message if no products found
    if (filteredProducts.length === 0) {
      resultsList.innerHTML = '<li>No products found.</li>';
    }
  });
  