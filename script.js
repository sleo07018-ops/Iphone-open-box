const products = [
  {name:"iPhone 13", price:"R$ 2.399,90"},
  {name:"iPhone 13 Pro", price:"R$ 2.790,00"},
  {name:"iPhone 13 Pro Max", price:"R$ 3.349,90"},
  {name:"iPhone 14", price:"R$ 2.799,90"},
  {name:"iPhone 14 Pro/Plus", price:"R$ 3.399,90"},
  {name:"iPhone 14 Pro Max", price:"R$ 3.599,90"},
  {name:"iPhone 15", price:"R$ 3.499,90"},
  {name:"iPhone 15 Pro", price:"R$ 4.399,90"},
  {name:"iPhone 15 Pro Max 256GB", price:"R$ 4.699,90"},
  {name:"iPhone 16", price:"R$ 3.999,90"},
  {name:"iPhone 16e", price:"R$ 3.100,00"},
  {name:"iPhone 16 Pro", price:"R$ 4.999,90"},
  {name:"iPhone 16 Pro Max", price:"R$ 6.499,90"},
  {name:"iPhone 16 Pro Max 256GB", price:"R$ 7.390,90"},
  {name:"iPhone 17 Air", price:"R$ 6.499,90"},
  {name:"iPhone 17 256GB", price:"R$ 5.990,90"},
  {name:"iPhone 17 Pro Max", price:"R$ 7.499,90"},
  {name:"iPhone 17 Pro Max 256GB", price:"R$ 8.499,90"}
];

const PHONE = "5535984482805";
const catalog = document.getElementById("catalog");

products.forEach(p => {
  const card = document.createElement("article");
  card.className = "card";
  card.innerHTML = `
    <div>
      <div class="model">${p.name}</div>
      <div class="price">${p.price}</div>
      <a class="btn" href="https://wa.me/${PHONE}?text=Ol%C3%A1!%20Quero%20o%20${encodeURIComponent(p.name)}%20—%20${encodeURIComponent(p.price)}.%20Está%20disponível?" target="_blank">Chamar</a>
    </div>
  `;
  catalog.appendChild(card);
});
