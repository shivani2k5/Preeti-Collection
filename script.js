const products = [
    {
        id: "PCM1001",
        code: "PCM1001",
        name: "Maheshwari Silk Printed Suit",
        fabric: "Maheshwari Silk",
        work: "Printed",
        price: 1675,
        gst: "5% GST",
        moq: "Min Qt. 10",
        category: ["casual"],
        image: "images/PCM1001.jpeg"
    },
    {
        id: "PCM1002",
        code: "PCM1002",
        name: "Maheshwari Silk Printed Suit",
        fabric: "Maheshwari Silk",
        work: "Printed",
        price: 1675,
        gst: "5% GST",
        moq: "Min Qt. 10",
        category: ["casual"],
        image: "images/PCM1002.jpeg"
    },
    {
        id: "PCM1003",
        code: "PCM1003",
        name: "Maheshwari Silk Printed Suit",
        fabric: "Maheshwari Silk",
        work: "Printed",
        price: 1675,
        gst: "5% GST",
        moq: "Min Qt. 10",
        category: ["casual"],
        image: "images/PCM1003.jpeg"
    },
    {
        id: "PCM1004",
        code: "PCM1004",
        name: "Maheshwari Silk Printed Suit",
        fabric: "Maheshwari Silk",
        work: "Printed",
        price: 1675,
        gst: "5% GST",
        moq: "Min Qt. 10",
        category: ["casual"],
        image: "images/PCM1004.jpeg"
    },
    {
        id: "PCM1005",
        code: "PCM1005",
        name: "Maheshwari Silk Printed Suit",
        fabric: "Maheshwari Silk",
        work: "Printed",
        price: 1675,
        gst: "5% GST",
        moq: "Min Qt. 10",
        category: ["casual"],
        image: "images/PCM1005.jpeg"
    },
    {
        id: "PCM1006",
        code: "PCM1006",
        name: "Maheshwari Silk Printed Suit",
        fabric: "Maheshwari Silk",
        work: "Printed",
        price: 1675,
        gst: "5% GST",
        moq: "Min Qt. 10",
        category: ["casual"],
        image: "images/PCM1006.jpeg"
    },
    {
        id: "PCM1007",
        code: "PCM1007",
        name: "Maheshwari Silk Printed Suit",
        fabric: "Maheshwari Silk",
        work: "Printed",
        price: 1675,
        gst: "5% GST",
        moq: "Min Qt. 10",
        category: ["casual"],
        image: "images/PCM1007.jpeg"
    },
    {
        id: "PCM1008",
        code: "PCM1008",
        name: "Maheshwari Silk Printed Suit",
        fabric: "Maheshwari Silk",
        work: "Printed",
        price: 1675,
        gst: "5% GST",
        moq: "Min Qt. 10",
        category: ["casual"],
        image: "images/PCM1008.jpeg"
    },
    {
        id: "PCM101",
        code: "PCM101",
        name: "banarsi Cotton Suit",
        fabric: "Banarsi Cotton",
        work: "Printed",
        price: 1675,
        gst: "5% GST",
        moq: "Min Qt. 10",
        category: ["casual","cotton"],
        image: "images/PCB101.jpeg"
    },
    {
        id: "PCM102",
        code: "PCM102",
        name: "banarsi Cotton Suit",
        fabric: "Banarsi Cotton",
        work: "Printed",
        price: 1675,
        gst: "5% GST",
        moq: "Min Qt. 10",
        category: ["casual","cotton"],
        image: "images/PCB102.jpeg"
    },
    {
        id: "PCM103",
        code: "PCM103",
        name: "banarsi Cotton Suit",
        fabric: "Banarsi Cotton",
        work: "Printed",
        price: 1675,
        gst: "5% GST",
        moq: "Min Qt. 10",
        category: ["casual","cotton"],
        image: "images/PCB103.jpeg"
    },
    {
        id: "PCM104",
        code: "PCM104",
        name: "banarsi Cotton Suit",
        fabric: "Banarsi Cotton",
        work: "Printed",
        price: 1675,
        gst: "5% GST",
        moq: "Min Qt. 10",
        category: ["casual","cotton"],
        image: "images/PCB104.jpeg"
    },
    {
        id: "PCJ101",
        code: "PCM101",
        name: "Jaam Cotton Casual Suit",
        fabric: "Jaam Cotton",
        work: "Printed",
        price: 650,
        gst: "5% GST",
        moq: "Min Qt. 10",
        category: ["casual","cotton"],
        image: "images/PCJ101.jpeg"
    },
    {
        id: "PCM102",
        code: "PCM102",
        name: "Jaam Cotton Casual Suit",
        fabric: "Jaam Cotton",
        work: "Printed",
        price: 650,
        gst: "5% GST",
        moq: "Min Qt. 10",
        category: ["casual","cotton"],
        image: "images/PCJ102.jpeg"
    },
    {
        id: "PCJ103",
        code: "PCJ103",
        name: "Jaam Cotton Casual Suit",
        fabric: "Jaam Cotton",
        work: "Printed",
        price: 650,
        gst: "5% GST",
        moq: "Min Qt. 10",
        category: ["casual","cotton"],
        image: "images/PCJ103.jpeg"
    },
    {
        id: "PCM104",
        code: "PCM104",
        name: "Jaam Cotton Casual Suit",
        fabric: "Jaam Cotton",
        work: "Printed",
        price: 650,
        gst: "5% GST",
        moq: "Min Qt. 10",
        category: ["casual","cotton"],
        image: "images/PCJ104.jpeg"
    },
];

let cart = JSON.parse(localStorage.getItem("preetiCart")) || [];
let wishlist = JSON.parse(localStorage.getItem("preetiWishlist")) || [];
let currentFilter = "all";

function saveData() {
    localStorage.setItem("preetiCart", JSON.stringify(cart));
    localStorage.setItem("preetiWishlist", JSON.stringify(wishlist));
}

function productImage(product) {
    return `
        <img
            class="product-photo"
            src="${product.image}"
            alt="${product.name}"
            onerror="this.style.display='none'"
        >
    `;
}

function getQuantity(id) {
    const item = cart.find(item => item.id === id);
    return item ? item.quantity : 0;
}

function isWishlisted(id) {
    return wishlist.includes(id);
}

function renderProducts() {
    const grid = document.getElementById("productsGrid");

    const filtered = currentFilter === "all"
        ? products
        : products.filter(product =>
            product.category.includes(currentFilter)
        );

    grid.innerHTML = filtered.map(product => {

        const quantity = getQuantity(product.id);
        const wished = isWishlisted(product.id);

        const priceHTML = product.price
            ? `
                <div>
                    <div class="price">₹${product.price}</div>
                    <div class="price-note">${product.gst}</div>
                </div>
            `
            : `
                <div>
                    <div class="price">Enquire</div>
                    <div class="price-note">Wholesale pricing</div>
                </div>
            `;

        const actionHTML = quantity > 0
            ? `
                <div class="quantity-control">
                    <button onclick="changeQuantity('${product.id}',-1)">−</button>
                    <span>${quantity}</span>
                    <button onclick="changeQuantity('${product.id}',1)">+</button>
                </div>
            `
            : `
                <button class="add-btn" onclick="addToCart('${product.id}')">
                    Add to Cart
                </button>
            `;

        return `
            <article class="product-card">

                <div class="product-image-frame">

                    ${productImage(product)}

                    <div class="product-placeholder">
                        PC
                    </div>

                    <div class="product-tag">
                        ${product.code}
                    </div>

                    <button
                        class="wish-card-btn ${wished ? "active" : ""}"
                        onclick="toggleWishlist('${product.id}')"
                        aria-label="Wishlist"
                    >
                        <svg><use href="#icon-heart"></use></svg>
                    </button>

                </div>

                <div class="product-info">

                    <div class="product-code">
                        ${product.code}
                    </div>

                    <h3 class="product-name">
                        ${product.name}
                    </h3>

                    <!-- NEW: Only Fabric + Work -->
                    <div class="product-details">
                        <span>Fabric: ${product.fabric}</span>
                        <span>Work: ${product.work}</span>
                    </div>

                    <div class="product-meta">
                        <span class="meta-pill">${product.moq}</span>
                        ${product.category.includes("cotton") ? '<span class="meta-pill">Cotton</span>' : ''}
                        ${product.category.includes("party") ? '<span class="meta-pill">Party Wear</span>' : ''}
                        ${product.category.includes("silk") ? '<span class="meta-pill">Cotton Silk</span>' : ''}
                    </div>

                    <div class="product-bottom">
                        ${priceHTML}
                        ${actionHTML}
                    </div>

                </div>

            </article>
        `;
    }).join("");
}

function addToCart(id) {
    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            id,
            quantity: 1
        });
    }

    saveData();
    renderProducts();
    updateCounts();
    renderCart();
    showToast("Added to cart");
}

function changeQuantity(id, change) {
    const item = cart.find(item => item.id === id);

    if (!item) return;

    item.quantity += change;

    if (item.quantity <= 0) {
        cart = cart.filter(item => item.id !== id);
    }

    saveData();
    renderProducts();
    updateCounts();
    renderCart();
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);

    saveData();
    renderProducts();
    updateCounts();
    renderCart();
}

function toggleWishlist(id) {
    if (wishlist.includes(id)) {
        wishlist = wishlist.filter(item => item !== id);
        showToast("Removed from wishlist");
    } else {
        wishlist.push(id);
        showToast("Added to wishlist");
    }

    saveData();
    renderProducts();
    updateCounts();
    renderWishlist();
}

function updateCounts() {
    const cartTotal = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    document.getElementById("cartCount").textContent = cartTotal;
    document.getElementById("wishlistCount").textContent = wishlist.length;
    document.getElementById("cartTotal").textContent = cartTotal;
}

function renderCart() {
    const body = document.getElementById("cartBody");

    if (cart.length === 0) {
        body.innerHTML = `
            <div class="empty-state">
                <svg><use href="#icon-bag"></use></svg>
                <p>Your cart is empty.</p>
            </div>
        `;

        document.getElementById("whatsappOrder").style.pointerEvents = "none";
        document.getElementById("whatsappOrder").style.opacity = ".45";
        return;
    }

    document.getElementById("whatsappOrder").style.pointerEvents = "auto";
    document.getElementById("whatsappOrder").style.opacity = "1";

    body.innerHTML = cart.map(item => {

        const product = products.find(
            product => product.id === item.id
        );

        const price = product.price
            ? `₹${product.price} × ${item.quantity}`
            : `Wholesale enquiry × ${item.quantity}`;

        return `
            <div class="cart-item">

                <div class="cart-thumb">
                    ${productImage(product)}
                </div>

                <div class="cart-details">

                    <h4>${product.name}</h4>

                    <small>
                        ${product.code}
                    </small>

                    <div class="cart-price">
                        ${price}
                    </div>

                    <div class="drawer-quantity">
                        <button onclick="changeQuantity('${product.id}',-1)">−</button>
                        <span>${item.quantity}</span>
                        <button onclick="changeQuantity('${product.id}',1)">+</button>
                    </div>

                    <button
                        class="remove-btn"
                        onclick="removeFromCart('${product.id}')"
                    >
                        Remove
                    </button>

                </div>

            </div>
        `;
    }).join("");

    const message = cart.map(item => {
        const product = products.find(
            product => product.id === item.id
        );

        return `${product.name} (${product.code}) - Qty: ${item.quantity}`;
    }).join("%0A");

    const whatsappText =
        `Hello Preeti Collection,%0A%0AI would like to enquire/order:%0A${message}%0A%0AThank you.`;

    document.getElementById("whatsappOrder").href =
        `https://wa.me/919818822270?text=${whatsappText}`; 
} 
 
function renderWishlist() { 
    const body = document.getElementById("wishlistBody"); 
 
    const items = products.filter( 
        product => wishlist.includes(product.id) 
    ); 
 
    if (items.length === 0) { 
        body.innerHTML = ` 
            <div class="empty-state"> 
                <svg><use href="#icon-heart"></use></svg> 
                <p>Your wishlist is empty.</p> 
            </div> 
        `; 
        return; 
    } 
 
    body.innerHTML = items.map(product => ` 
        <div class="wishlist-item"> 
 
            <div class="wishlist-thumb"> 
                ${productImage(product)} 
            </div> 
 
            <div class="wishlist-details"> 
 
                <h4>${product.name}</h4> 
 
                <small> 
                    ${product.code} 
                </small> 
 
                <small> 
                    ${product.price ? "₹" + product.price : "Wholesale Enquiry"} 
                </small> 
 
                <button 
                    class="remove-btn" 
                    onclick="toggleWishlist('${product.id}')" 
                > 
                    Remove 
                </button> 
 
                <button 
                    class="add-btn" 
                    onclick="addToCart('${product.id}')" 
                > 
                    Add to Cart 
                </button> 
 
            </div> 
 
        </div> 
    `).join(""); 
} 
 
function openCart() { 
    closeMobileMenu(); 
 
    document.getElementById("cartDrawer").classList.add("active"); 
    document.getElementById("drawerOverlay").classList.add("active"); 
} 
 
function openWishlist() { 
    closeMobileMenu(); 
 
    document.getElementById("wishlistDrawer").classList.add("active"); 
    document.getElementById("drawerOverlay").classList.add("active"); 
} 
 
function closeDrawers() { 
    document.getElementById("cartDrawer").classList.remove("active"); 
    document.getElementById("wishlistDrawer").classList.remove("active"); 
    document.getElementById("drawerOverlay").classList.remove("active"); 
} 
 
function toggleMobileMenu() { 
    document.getElementById("mobileMenu").classList.toggle("active"); 
} 
 
function closeMobileMenu() { 
    document.getElementById("mobileMenu").classList.remove("active"); 
} 
 
function showToast(message) { 
    const toast = document.getElementById("toast"); 
 
    toast.textContent = message; 
    toast.classList.add("show"); 
 
    clearTimeout(window.toastTimer); 
 
    window.toastTimer = setTimeout(() => { 
        toast.classList.remove("show"); 
    }, 1800); 
} 
 
document.querySelectorAll(".filter-btn").forEach(button => { 
 
    button.addEventListener("click", () => { 
 
        document.querySelectorAll(".filter-btn") 
            .forEach(btn => btn.classList.remove("active")); 
 
        button.classList.add("active"); 
 
        currentFilter = button.dataset.filter; 
 
        renderProducts(); 
    }); 
 
}); 
 
renderProducts(); 
renderCart(); 
renderWishlist(); 
updateCounts();