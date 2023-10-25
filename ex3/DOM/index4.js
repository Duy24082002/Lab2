function loadData() {
    const firstLis = [...document.querySelectorAll("ul > li:first-child")];
    const lastLis = [...document.querySelectorAll("ul > li:last-child")];
    firstLis.forEach((li) => (li.textContent = "first"));
    lastLis.forEach((li) => (li.textContent = "last"));
} 