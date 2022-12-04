const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

for (const item of [...items]) {
  const catg = item.querySelector("h2");
  const elems = catg.nextElementSibling.children;
  console.log(`Category: ${catg.textContent}`);
  console.log(`Elements: ${elems.length}`);
}
