// function AppliedFilter(){
//   const selectsize = document.getElementById("sizes").value;
//    selectsize.addEventListener("change", (e)=>{
//     e.preventDefault()
//     const target = e.target.value
//     if(target === menCloth.size){
//       console.log('size chosen')
//     }
//    })
//  }

// function Product() {
//   fetch("./assets/data.json")
//     .then((res) => res.json())
//     .then((data) => {
//       allproducts.push(data);

//       data.forEach((subproduct) => {
//         switch (subproduct.category) {
//           case "Polos":
//             subproduct.products.forEach((product) => {
//               const div1 = document.createElement("div");
//               div1.classList.add("col-md-3");
//               div1.innerHTML = `
//             <div class="card m-2" style="cursor:pointer" data-bs-toggle="modal" data-bs-target="#modal1">
//             <img src="${product.image}" style="width:230px;height:200px;margin-top:10px"/>
//             <div class="card-body p-2">
//             <h5 class="card-title">${product.name}</h5>
//             <div class="d-flex flex-column gap-3">
//             <div class="d-flex justify-content-start gap-4">
//             <p class=""><span class="fw-semibold">Price:</span> ${product.price}</p>
//             <p class=""><span class="fw-semibold">Size:</span> ${product.size}</p>
//             </div>
//             <div class="d-flex justify-content-between">
//             <button class="btn btn-dark fw-semibold px-3">Buy</button>
//             <button class="btn btn-dark fw-semibold"><span><i class="fa fa-regular fa-heart"></i></span> Add Favourite</button>
//             </div>
//             </div>
//             </div>
//             </div>

//             `;
//               cardBody.appendChild(div1);
//             });
//             break;
//           case "Trousers":
//             subproduct.products.forEach((product) => {
//               const div1 = document.createElement("div");
//               div1.classList.add("col-md-3");
//               div1.innerHTML = `
//               <div class="card m-2" style="cursor:pointer" data-bs-toggle="modal" data-bs-target="#modal1">
//               <img src="${product.image}" style="width:230px;height:200px;margin-top:10px"/>
//               <div class="card-body p-2">
//               <h5 class="card-title">${product.name}</h5>
//               <div class="d-flex flex-column gap-3">
//               <div class="d-flex justify-content-start gap-4">
//               <p class=""><span class="fw-semibold">Price:</span> ${product.price}</p>
//               <p class=""><span class="fw-semibold">Size:</span> ${product.size}</p>
//               </div>
//               <div class="d-flex justify-content-between">
//               <button class="btn btn-dark fw-semibold px-3">Buy</button>
//               <button class="btn btn-dark fw-semibold"><span><i class="fa fa-regular fa-heart"></i></span> Add Favourite</button>
//               </div>
//               </div>
//               </div>
//               </div>

//               `;
//               cardBody.appendChild(div1);
//             });
//             break;
//           case "Shoes":
//             subproduct.products.forEach((product) => {
//               const div1 = document.createElement("div");
//               div1.classList.add("col-md-3");
//               div1.innerHTML = `
//               <div class="card m-2" style="cursor:pointer" data-bs-toggle="modal" data-bs-target="#modal1">
//               <img src="${product.image}" style="width:230px;height:200px;margin-top:10px"/>
//               <div class="card-body p-2">
//               <h5 class="card-title">${product.name}</h5>
//               <div class="d-flex flex-column gap-3">
//               <div class="d-flex justify-content-start gap-4">
//               <p class=""><span class="fw-semibold">Price:</span> ${product.price}</p>
//               <p class=""><span class="fw-semibold">Size:</span> ${product.size}</p>
//               </div>
//               <div class="d-flex justify-content-between">
//               <button class="btn btn-dark fw-semibold px-3">Buy</button>
//               <button class="btn btn-dark fw-semibold"><span><i class="fa fa-regular fa-heart"></i></span> Add Favourite</button>
//               </div>
//               </div>
//               </div>
//               </div>

//               `;
//               cardBody.appendChild(div1);
//             });
//             break;
//           case "Coats":
//             subproduct.products.forEach((product) => {
//               const div1 = document.createElement("div");
//               div1.classList.add("col-md-3");
//               div1.innerHTML = `
//               <div class="card m-2" style="cursor:pointer" data-bs-toggle="modal" data-bs-target="#modal1">
//               <img src="${product.image}" style="width:230px;height:200px;margin-top:10px"/>
//               <div class="card-body p-2">
//               <h5 class="card-title">${product.name}</h5>
//               <div class="d-flex flex-column gap-3">
//               <div class="d-flex justify-content-start gap-4">
//               <p class=""><span class="fw-semibold">Price:</span> ${product.price}</p>
//               <p class=""><span class="fw-semibold">Size:</span> ${product.size}</p>
//               </div>
//               <div class="d-flex justify-content-between">
//               <button class="btn btn-dark fw-semibold px-3">Buy</button>
//               <button class="btn btn-dark fw-semibold"><span><i class="fa fa-regular fa-heart"></i></span> Add Favourite</button>
//               </div>
//               </div>
//               </div>
//               </div>

//                               `;
//               cardBody.appendChild(div1);
//             });
//             break;
//           case "Suits":
//             subproduct.products.forEach((product) => {
//               const div1 = document.createElement("div");
//               div1.classList.add("col-md-3");
//               div1.innerHTML = `
//               <div class="card m-2" style="cursor:pointer" data-bs-toggle="modal" data-bs-target="#modal1">
//               <img src="${product.image}" style="width:230px;height:200px;margin-top:10px"/>
//               <div class="card-body p-2">
//               <h5 class="card-title">${product.name}</h5>
//               <div class="d-flex flex-column gap-3">
//               <div class="d-flex justify-content-start gap-4">
//               <p class=""><span class="fw-semibold">Price:</span> ${product.price}</p>
//               <p class=""><span class="fw-semibold">Size:</span> ${product.size}</p>
//               </div>
//               <div class="d-flex justify-content-between">
//               <button class="btn btn-dark fw-semibold px-3">Buy</button>
//               <button class="btn btn-dark fw-semibold"><span><i class="fa fa-regular fa-heart"></i></span> Add Favourite</button>
//               </div>
//               </div>
//               </div>
//               </div>

//               `;
//               cardBody.appendChild(div1);
//             });
//             break;
//           default:
//             subproduct.products.forEach((product) => {
//               const div1 = document.createElement("div");
//               div1.classList.add("col-md-3");
//               div1.innerHTML = `
//               <div class="card m-2" style="cursor:pointer" data-bs-toggle="modal" data-bs-target="#modal1">
//               <img src="${product.image}" style="width:230px;height:200px;margin-top:10px"/>
//               <div class="card-body p-2">
//               <h5 class="card-title">${product.name}</h5>
//               <div class="d-flex flex-column gap-3">
//               <div class="d-flex justify-content-start gap-4">
//               <p class=""><span class="fw-semibold">Price:</span> ${product.price}</p>
//               <p class=""><span class="fw-semibold">Size:</span> ${product.size}</p>
//               </div>
//               <div class="d-flex justify-content-between">
//               <button class="btn btn-dark fw-semibold px-3">Buy</button>
//               <button class="btn btn-dark fw-semibold"><span><i class="fa fa-regular fa-heart"></i></span> Add Favourite</button>
//               </div>
//               </div>
//               </div>
//               </div>

//               `;
//               cardBody.appendChild(div1);
//             });
//         }
//       });
//       womendata.subproducts.forEach((subproduct) => {
//         switch (subproduct.category) {
//           case "T-shirts":
//             subproduct.products.forEach((product) => {
//               const div1 = document.createElement("div");
//               div1.classList.add("col-md-3");
//               div1.innerHTML = `
//                 <div class="card m-2" style="cursor:pointer" data-bs-toggle="modal" data-bs-target="#modal1">
//                 <img src="${product.image}" style="width:230px;height:200px;margin-top:10px"/>
//                 <div class="card-body p-2">
//                 <h5 class="card-title">${product.name}</h5>
//                 <div class="d-flex flex-column gap-3">
//                 <div class="d-flex justify-content-start gap-4">
//                 <p class=""><span class="fw-semibold">Price:</span> ${product.price}</p>
//                 <p class=""><span class="fw-semibold">Size:</span> ${product.size}</p>
//                 </div>
//                 <div class="d-flex justify-content-between">
//                 <button class="btn btn-dark fw-semibold px-3">Buy</button>
//                 <button class="btn btn-dark fw-semibold"><span><i class="fa fa-regular fa-heart"></i></span> Add Favourite</button>
//                 </div>
//                 </div>
//                 </div>
//                 </div>

//                 `;
//               cardBody.appendChild(div1);
//             });
//             break;
//           case "Dresses":
//             subproduct.products.forEach((product) => {
//               const div1 = document.createElement("div");
//               div1.classList.add("col-md-3");
//               div1.innerHTML = `
//                 <div class="card m-2" style="cursor:pointer" data-bs-toggle="modal" data-bs-target="#modal1">
//                 <img src="${product.image}" style="width:230px;height:200px;margin-top:10px"/>
//                 <div class="card-body p-2">
//                 <h5 class="card-title">${product.name}</h5>
//                 <div class="d-flex flex-column gap-3">
//                 <div class="d-flex justify-content-start gap-4">
//                 <p class=""><span class="fw-semibold">Price:</span> ${product.price}</p>
//                 <p class=""><span class="fw-semibold">Size:</span> ${product.size}</p>
//                 </div>
//                 <div class="d-flex justify-content-between">
//                 <button class="btn btn-dark fw-semibold px-3">Buy</button>
//                 <button class="btn btn-dark fw-semibold"><span><i class="fa fa-regular fa-heart"></i></span> Add Favourite</button>
//                 </div>
//                 </div>
//                 </div>
//                 </div>

//                 `;
//               cardBody.appendChild(div1);
//             });
//             break;
//           case "Coats":
//             subproduct.products.forEach((product) => {
//               const div1 = document.createElement("div");
//               div1.classList.add("col-md-3");
//               div1.innerHTML = `
//                 <div class="card m-2" style="cursor:pointer" data-bs-toggle="modal" data-bs-target="#modal1">
//                 <img src="${product.image}" style="width:230px;height:200px;margin-top:10px"/>
//                 <div class="card-body p-2">
//                 <h5 class="card-title">${product.name}</h5>
//                 <div class="d-flex flex-column gap-3">
//                 <div class="d-flex justify-content-start gap-4">
//                 <p class=""><span class="fw-semibold">Price:</span> ${product.price}</p>
//                 <p class=""><span class="fw-semibold">Size:</span> ${product.size}</p>
//                 </div>
//                 <div class="d-flex justify-content-between">
//                 <button class="btn btn-dark fw-semibold px-3">Buy</button>
//                 <button class="btn btn-dark fw-semibold"><span><i class="fa fa-regular fa-heart"></i></span> Add Favourite</button>
//                 </div>
//                 </div>
//                 </div>
//                 </div>

//                 `;
//               cardBody.appendChild(div1);
//             });
//             break;
//           case "Shoes":
//             subproduct.products.forEach((product) => {
//               const div1 = document.createElement("div");
//               div1.classList.add("col-md-3");
//               div1.innerHTML = `
//                 <div class="card m-2" style="cursor:pointer" data-bs-toggle="modal" data-bs-target="#modal1">
//                 <img src="${product.image}" style="width:230px;height:200px;margin-top:10px"/>
//                 <div class="card-body p-2">
//                 <h5 class="card-title">${product.name}</h5>
//                 <div class="d-flex flex-column gap-3">
//                 <div class="d-flex justify-content-start gap-4">
//                 <p class=""><span class="fw-semibold">Price:</span> ${product.price}</p>
//                 <p class=""><span class="fw-semibold">Size:</span> ${product.size}</p>
//                 </div>
//                 <div class="d-flex justify-content-between">
//                 <button class="btn btn-dark fw-semibold px-3">Buy</button>
//                 <button class="btn btn-dark fw-semibold"><span><i class="fa fa-regular fa-heart"></i></span> Add Favourite</button>
//                 </div>
//                 </div>
//                 </div>
//                 </div>

//                 `;
//               cardBody.appendChild(div1);
//             });
//             break;
//           case "Trousers":
//             subproduct.products.forEach((product) => {
//               const div1 = document.createElement("div");
//               div1.classList.add("col-md-3");
//               div1.innerHTML = `
//                 <div class="card m-2" style="cursor:pointer" data-bs-toggle="modal" data-bs-target="#modal1">
//                 <img src="${product.image}" style="width:230px;height:200px;margin-top:10px"/>
//                 <div class="card-body p-2">
//                 <h5 class="card-title">${product.name}</h5>
//                 <div class="d-flex flex-column gap-3">
//                 <div class="d-flex justify-content-start gap-4">
//                 <p class=""><span class="fw-semibold">Price:</span> ${product.price}</p>
//                 <p class=""><span class="fw-semibold">Size:</span> ${product.size}</p>
//                 </div>
//                 <div class="d-flex justify-content-between">
//                 <button class="btn btn-dark fw-semibold px-3">Buy</button>
//                 <button class="btn btn-dark fw-semibold"><span><i class="fa fa-regular fa-heart"></i></span> Add Favourite</button>
//                 </div>
//                 </div>
//                 </div>
//                 </div>

//                 `;
//               cardBody.appendChild(div1);
//             });
//             break;
//           default:
//             subproduct.products.forEach((product) => {
//               const div1 = document.createElement("div");
//               div1.classList.add("col-md-3");
//               div1.innerHTML = `
//                 <div class="card m-2" style="cursor:pointer" data-bs-toggle="modal" data-bs-target="#modal1">
//                 <img src="${product.image}" style="width:230px;height:200px;margin-top:10px"/>
//                 <div class="card-body p-2">
//                 <h5 class="card-title">${product.name}</h5>
//                 <div class="d-flex flex-column gap-3">
//                 <div class="d-flex justify-content-start gap-4">
//                 <p class=""><span class="fw-semibold">Price:</span> ${product.price}</p>
//                 <p class=""><span class="fw-semibold">Size:</span> ${product.size}</p>
//                 </div>
//                 <div class="d-flex justify-content-between">
//                 <button class="btn btn-dark fw-semibold px-3">Buy</button>
//                 <button class="btn btn-dark fw-semibold"><span><i class="fa fa-regular fa-heart"></i></span> Add Favourite</button>
//                 </div>
//                 </div>
//                 </div>
//                 </div>

//                 `;
//               cardBody.appendChild(div1);
//             });
//         }
//       });

// Product();