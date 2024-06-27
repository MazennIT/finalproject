let images = [
  "./Grand Background.webp",
  "./iconic image 2.jpg",
  "./iconic image 3.jpg",
  "./iconic image 4.jpeg",
  "./iconic image 5.jpeg",
];
let producttosell = document.getElementsByClassName("producttosell");
let currentindexx = 0;

let imgelem = document.getElementById("grandimage");
let circlee = document.getElementsByClassName("circlee");
document.addEventListener("DOMContentLoaded", () => {
  const nextBtn = document.getElementById("nextt");
  const prevBtn = document.getElementById("prevv");
  const radios = document.querySelectorAll('input[type="radio"]');
  let currentIndex = 0;
  radios[currentIndex].checked = true;
  radios.forEach((radio) => {
    radio.addEventListener('click', (event) => {
        event.preventDefault();
    });
});
  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % radios.length;
    radios[currentIndex].checked = true;
    imgelem.src = images[currentIndex];
  });

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + radios.length) % radios.length;
    radios[currentIndex].checked = true;
    imgelem.src = images[currentIndex];
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const productsData = [
      { name: "Original Kuffiya Scarf", price: "110 DT", imgSrc: "./original kuffiya scarf.jpg" },
      { name: "This Is Not A Watermelon Sweater", price: "85 DT", imgSrc: "./this is not a watermelon sweater.webp" },
      { name: "Palestine Map in Geographie Necklace/Chain", price: "63 DT", imgSrc: "./Palestine Map in Geographie Necklace.webp" },
      { name: "Large Flag", price: "22 DT", imgSrc: "./Large Flag.webp" },
      { name: "Arabic Palestine Tank Top", price: "63 DT", imgSrc: "./Arabic Palestine Tank Top.webp" },
      { name: "Original Kuffiya Scarf Hijab/Headscarf", price: "63 DT", imgSrc: "./Original kuffiya hijab headscarf.webp" },
      { name: "Palestine Cap", price: "63 DT", imgSrc: "./Palestine Cap.webp" },
      { name: "Beaded Geographie Bracelet", price: "41 DT", imgSrc: "./Beaded Geographie Bracelet.webp" },
      { name: "Palestine Football/Soccer Jersey", price: "79 DT", imgSrc: "./Palestine Football Jersey.webp" },
      { name: "Kuffiya Shawl", price: "72 DT", imgSrc: "./kuffiya shawl.webp" },
      { name: "Palestine Solidarity Pins (10 Pieces)", price: "41 DT", imgSrc: "./Palestine solidarity pins.webp" },
    ];
  
    const productsContainer = document.getElementsByClassName("productstosell")[0];
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const carouselStatus = document.getElementById("carousel-status");
   
    let currentIndex = 0;
    const itemsPerView = 4;
    const totalItems = productsData.length;
    const totalPages = Math.ceil(totalItems / itemsPerView);
  
    function createProductElement(product) {
      const productDiv = document.createElement("div");
      productDiv.classList.add("producttosell");
     
      const img = document.createElement("img");
      img.src = product.imgSrc;
      img.alt = product.name;
      const productstosellproperties = document.createElement("div");
      productstosellproperties.classList.add("productstosellproperties");

      const name = document.createElement("p");
      name.textContent = product.name;
  
      const price = document.createElement("h1");
      price.textContent = product.price;
  
      productDiv.appendChild(img);
      productstosellproperties.appendChild(name);
      productstosellproperties.appendChild(price);
      productDiv.appendChild(productstosellproperties)
  
      return productDiv;
    }
  
    function renderProducts() {
      productsContainer.innerHTML = "";
      const start = currentIndex * itemsPerView;
      const end = Math.min(start + itemsPerView, totalItems);
      for (let i = start; i < end; i++) {
        const productElement = createProductElement(productsData[i]);
        productsContainer.appendChild(productElement);
      }
      updateStatus();
    }
  
    function updateStatus() {
      const page = currentIndex + 1;
      carouselStatus.textContent = `${page} of ${totalPages}`;
    }
  
    prevBtn.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
      } else {
        currentIndex = totalPages - 1;
      }
      renderProducts();
    });
  
    nextBtn.addEventListener("click", () => {
      if (currentIndex < totalPages - 1) {
        currentIndex++;
      } else {
        currentIndex = 0;
      }
      renderProducts();
    });
  
    renderProducts(); // Initial render
  });
