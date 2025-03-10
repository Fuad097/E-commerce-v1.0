let allproducts = [];
let currentPage = 1;
const itemsPerPage = 15;
let basketarray = [];
let basketcounter = 0;
const cardBody = document.getElementById("cardsbody");
const filterbtn = document.getElementById("filterbtn");
const filterbody = document.getElementById("filterbody");
const sortBtn = document.getElementById("sortbtn");
const selectsize = document.getElementById("sizes");
const selectcolor = document.getElementById("colorselect");
const selectSex = document.getElementById("Sex");
const applyBtn = document.getElementById("Applybtn");
const mapbody = document.getElementById("map");
const pages = document.querySelector(".pagination");
const pagelist = pages.querySelectorAll("li button");


function showSpinner() {
  const overlay = document.createElement("div");
  overlay.id = "spinner-overlay";
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = 2000;
  /* A semi-transparent dark background to cover the page */
  overlay.style.backgroundColor = "rgba(0,0,0,0.5)";

  // Create the spinner element
  const spinner = document.createElement("div");
  spinner.style.width = "80px";
  spinner.style.height = "80px";
  spinner.style.border = "5px solid #f3f3f3";         // Light gray
  spinner.style.borderTop = "5px solid black";      // Blue
  spinner.style.borderRadius = "50%";
  spinner.style.animation = "spin 1s linear infinite"; // Use the @keyframes spin
  overlay.appendChild(spinner);

  // Add it to the page
  document.body.appendChild(overlay);
}

// spinner
function delay(ms){
  return new Promise((res)=>setTimeout(res,ms))
}


// Hide the spinner after we're done waiting
function hideSpinner() {
  const spinneroverlay = document.getElementById("spinner-overlay");
  if (spinneroverlay) {
    spinneroverlay.remove();
  }
}

// Fetch products

async function Products() {
  showSpinner()
  const response = await fetch("./assets/data.json");
  const json = await response.json();
  await delay(2000)
  hideSpinner()
  allproducts = json;

  renderProducts(getPaginatedProducts(currentPage));
}
Products();

function getPaginatedProducts(page) {
  const startIndex = (page - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  return allproducts.slice(startIndex, endIndex);
}

pages.addEventListener("click", (e) => {
  // Only run if a "button.page-link" is clicked
  if (e.target.matches("button.page-link")) {
    const pageValue = e.target.getAttribute("data-page");

    if (pageValue === "Previous") {
      // Go back one page, but not below 1
      if (currentPage > 1) {
        currentPage--;
      }
    } else if (pageValue === "Next") {
      // Calculate total number of pages
      const totalPages = Math.ceil(allproducts.length / itemsPerPage);
      // Go forward one page, but not beyond totalPages
      if (currentPage < totalPages) {
        currentPage++;
      }
    } else {
      // If it's a number, convert to integer
      currentPage = parseInt(pageValue);
    }

    // After updating currentPage, render the slice for that page
    renderProducts(getPaginatedProducts(currentPage));
  }
});

// Filter function
function Filter() {
  const sidebar = document.getElementById("sidebar");

  filterbtn.classList.add("invisible");
  sortBtn.classList.add("invisible");
  sidebar.classList.remove("visually-hidden");

  const closefilterbtn = document.getElementById("closefilter");
  closefilterbtn.addEventListener("click", () => {
    sidebar.classList.add("visually-hidden"); // Remove the dynamically created div
    filterbtn.classList.remove("invisible"); // Show the filter button again
    sortBtn.classList.remove("invisible"); // Show the filter button again
  });
}
filterbtn.addEventListener("click", Filter);

// Display products

function renderProducts(products) {
  cardBody.innerHTML = "";
  products.forEach((product) => {
    const div1 = document.createElement("div");
    div1.classList.add("col");
    div1.innerHTML = `
     <div class="card  m-2" style="cursor:pointer">
     <img src="${product.image}" style="width:100%;height:300px"/>
     <div class="card-body p-2">
     <h5 class="card-title">${product.name}</h5>
     <div class="d-flex flex-column gap-3">
     <div class="d-flex justify-content-start gap-4">
     <p class=""><span class="fw-semibold">Price:</span> $${product.price}</p>
     <p class=""><span class="fw-semibold">Size:</span> ${product.size}</p>
     </div>
     <div class="d-flex justify-content-between">
     <button id="buyBtn" class="btn btn-dark fw-semibold px-3 buy-btn" data-bs-toggle="modal" data-bs-target="#modal1-${product.id}">Buy</button>
     <button class="btn btn-dark fw-semibold"><span><i class="fa fa-regular fa-heart"></i></span> Add Favourite</button>
     </div>
     </div>

     <div id="modal1-${product.id}" class="modal" tabindex="-1" >
        <div class="modal-dialog modal-lg">
          <div class="modal-content p-4">
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button
            <div id="modalbody" class="modal-body">
                <div class="row">
                <div class="col-md-5">
                  <img id="modalimage" src="${product.image}" style="width:200px;height:auto" />
                </div>
                <div class="col-md-5  gap-3">
                    <h5 class="mb-5" id="modalname">${product.name}</h5>
                    <div class="d-flex gap-3">
                    <p id="modalsize">${product.size}</p>
                    <div class="d-flex  gap-3">
                      <button  class="btn btn-dark  btn-sm minusbtn" style="width:"20px;height:10px">-</button>
                      <input  class="input" type="number" placeholder="0" style="width:40px;"/>
                      <button  class="btn btn-dark rounded-5 btn-sm plusbtn">+</button>
                    </div>
                    </div>
                    <div class="d-flex gap-3">
                    <p id="modalprice">$${product.price}</p>
                    </div>
                    <div class="d-flex gap-3">
                    <p id="modalcolor">${product.color}</p>
                    </div>
                    <div class="d-flex gap-3">
                    <button  class="btn btn-dark py-2 px-3 checkout-btn" data-product-id ="${product.id}" >Go to Chekout</button>
                    <button class="btn btn-dark py-2 px-3" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
       `;

    cardBody.appendChild(div1);
    let inputnum = div1.querySelector(".input");
    const plus = div1.querySelector(".plusbtn");
    const minus = div1.querySelector(".minusbtn");
    plus.addEventListener("click", () => {
      inputnum.value = parseInt(inputnum.value) || 0;
      inputnum.value++;
      basketcounter = parseInt(inputnum.value)
    });

    minus.addEventListener("click", () => {
      inputnum.value = parseInt(inputnum.value) || 0;
      if (inputnum.value > 0) {
        inputnum.value--;
      } else {
        inputnum.classList.add("disabled");
      }
      basketcounter = parseInt(inputnum.value)
    });
    
    
  });

  let countproduct = 0;
  let cartitems;
  cardBody.addEventListener("click", (e) => {
    if (e.target.classList.contains("checkout-btn")) {
      e.preventDefault();
      let countercrc = document.getElementById("countercircle");
      const counterText = document.getElementById("counter-text");

      // Get product ID from the button's data attribute
      const productId = e.target.getAttribute("data-product-id");

      // Find the corresponding product in the array
      const product = products.find((p) => p.id === parseInt(productId));
      counterText.style.zIndex = "10px";

      if (product) {
        // Push product to the basket
        countercrc.classList.remove("invisible");
        const productAlreadyInBasket = basketarray.some((item) => item.id === product.id);

        if(!productAlreadyInBasket){
          basketarray.push(product);
        }
        countproduct += parseInt(basketcounter);
        counterText.textContent = countproduct;
        cartitems = basketarray
          .map((item) => {
            return `<div class="cart-item d-flex align-items-center mt-4 px-3 py-2 border-bottom">
                <img src="${item.image}" alt="${item.name}" style="width: 100px; height: 100px; object-fit: cover; margin-right: 10px;">
                <div class="flex-grow-1">
                  <div class="d-flex justify-content-between">
                  <h5 class="fs-6">${item.name}</h5>
                  <i class="fa fa-solid fa-xmark fs-4 bg-gray" style="cursor:pointer;"></i>
                  </div>
                  <p>Size: ${item.size}</p>
                  <p>Quantity: ${countproduct}</p>
                  <div class="d-flex justify-content-between">
                  <p>Price: $${item.price}</p>
                  <button class="btn btn-dark px-4">Pay</button>
                  </div>
                </div>
              </div>`;
          })
          
      }
    }

   
  });
 

  const basket = document.getElementById("basketbtn");

  basket.addEventListener("click", () => {
    // overlay for reducing opacity of elements behind shoppingcart
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100vh";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Semi-transparent black
    overlay.style.zIndex = "999"; // Ensure it's behind the shopping cart
    document.body.appendChild(overlay);

    // shoppingcart
    const shoppingcart = document.createElement("div");
    shoppingcart.style.position = "absolute";
    shoppingcart.style.top = "0"; // Position at the top
    shoppingcart.style.right = "0"; // Position at the right
    shoppingcart.style.width = "400px";
    shoppingcart.style.height = "100vh";
    shoppingcart.style.backgroundColor = "white"; // Set the background to white
    shoppingcart.style.zIndex = "1000"; // Bring it to the front
    shoppingcart.innerHTML = `<div class="d-flex flex-column"> 
  
  <div class="d-flex justify-content-between px-3 my-2">
  <h5>Shopping list</h5>
  <i  class="fa fa-solid fa-xmark  fs-4" style="cursor:pointer;"></i>
  </div>  


  <div class="cart-items">
    ${cartitems}
  </div>
  </div>`;

  
  
    
    
    let cartcontainer = shoppingcart.querySelector(".cart-items")
    
    cartcontainer.innerHTML = cartitems
    cartcontainer.addEventListener("click",(e)=>{
      e.preventDefault();
      if(e.target.classList.contains("fa-xmark")){
        const cartitem = e.target.closest(".cart-item")
  
        if(cartitem){
          const itemName = cartitem.querySelector("h5").innerText;
          cartitem.remove()

          basketarray = basketarray.filter((p) => p.name !== itemName);
          
        
          let newTotal = basketarray.reduce((acc, p) => acc + p.quantity, 0);
          document.getElementById("counter-text").textContent = newTotal;
        }
      }
    })
    
    const icon = shoppingcart.querySelector(".fa-xmark");
    icon.addEventListener("click", () => {
      shoppingcart.classList.add("invisible");
      overlay.classList.add("invisible");
    });
    document.body.appendChild(shoppingcart); // Add it to the DOM
  });


 
}

applyBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedSize = selectsize.value;
  const selectedColor = selectcolor.value;
  const selectedSex = selectSex.value;

  const filteredproducts = allproducts.filter((item) => {
    cardBody.innerHTML = "";
    const sizeMatch = selectedSize === "All" || item.size === selectedSize;
    const colorMatch = selectedColor === "All" || item.color === selectedColor;
    const sexMatch = selectedSex === "All" || item.Sex === selectedSex;

    return sizeMatch && colorMatch && sexMatch;
  });
  renderProducts(filteredproducts);
});

// Map

const map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map);

navigator.geolocation.getCurrentPosition(function (pos) {
  const lat = pos.coords.latitude;
  const lng = pos.coords.longitude;

  marker.setLatLng([lat, lng]).update();
  map.setView([lat, lng], 13);
});
