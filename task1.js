const productList = document.getElementById("product-list");

// Sample product data (you can replace this with your data)
const products = [
    { id: 1, name: "complaint form", description: "A complaint form is a document or an online submission system used by organizations, businesses, government agencies, or individuals to collect information and feedback from customers, clients, employees, or the general public regarding issues, concerns, or problems they have encountered. The primary purpose of a complaint form is to provide a structured and organized way for individuals to communicate their grievances, allowing organizations to address and resolve issues effectively." },
    { id: 2, name: "property form", description: "A property information form is a document used in real estate transactions or property management to collect detailed information about a specific property. This form is typically filled out by property owners, sellers, or landlords and is often required when listing a property for sale or rent. The purpose of the form is to provide potential buyers, renters, or interested parties with comprehensive information about the property's characteristics, condition, and history." },
];

// Function to display products as cards
function displayProducts() {
    productList.innerHTML = "";
    products.forEach(product => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <button class="add-button" onclick="addProduct(${product.id})">add</button>
            <button class="delete-button"onclick="deleteProduct(${product.id})">Delete</button>
            <button class="view-button" onclick="viewProduct(${product.id})">View</button>
            
        `;
        productList.appendChild(card);
    });
}

// Function to add a new product
function addProduct() {
    const newName = prompt("Enter the product name:");
    const newDescription = prompt("Enter the product description:");
    const newProduct = {
        id: products.length + 1,
        name: newName,
        description: newDescription,
    };
    products.push(newProduct);
    displayProducts();
}

// Function to delete a product
function deleteProduct(id) {
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products.splice(index, 1);
        displayProducts();
    }
}
// Function to view a product
function viewProduct(id) {
    const product = products.find(product => product.id === id);
    if (product) {
        alert(`Product Name: ${product.name}\nProduct Description: ${product.description}`);
    } else {
        alert("Product not found!");
    }
}


// Initial display of products
displayProducts();
