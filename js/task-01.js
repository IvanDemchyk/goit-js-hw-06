const items = document.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);

for (const item of [...items]) {
  const catg = item.firstElementChild;
  const elems = item.lastElementChild.children;
  console.log(`Category: ${catg.textContent}`);
  console.log(`Elements: ${elems.length}`);
}
