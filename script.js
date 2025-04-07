const properties = [
  {
    id: 1,
    city: "newyork",
    title: "Luxury Condo in NYC",
    price: "$3000/month",
    location: "Manhattan",
    image: "https://source.unsplash.com/400x300/?apartment,newyork"
  },
  {
    id: 2,
    city: "delhi",
    title: "3BHK Flat in Delhi",
    price: "₹25,000/month",
    location: "South Delhi",
    image: "https://source.unsplash.com/400x300/?house,delhi"
  },
  {
    id: 3,
    city: "singapore",
    title: "Modern Studio in SG",
    price: "SGD 2000/month",
    location: "Orchard Road",
    image: "https://source.unsplash.com/400x300/?apartment,singapore"
  },
];

const container = document.getElementById("propertyList");
const cityFilter = document.getElementById("cityFilter");

function renderProperties(city = "all") {
  container.innerHTML = "";
  const filtered = city === "all" ? properties : properties.filter(p => p.city === city);
  filtered.forEach(prop => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img src="${prop.image}" class="card-img-top" alt="${prop.title}">
          <div class="card-body">
            <h5 class="card-title">${prop.title}</h5>
            <p class="card-text">${prop.location} • ${prop.price}</p>
            <a href="#" class="btn btn-primary">Contact Owner</a>
          </div>
        </div>
      </div>
    `;
  });
}

cityFilter.addEventListener("change", () => {
  renderProperties(cityFilter.value);
});

renderProperties(); // Initial load
