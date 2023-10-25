function loadData() {
    const fruitList = ["apple", "banana", "tomato"];
    const ulElement = document.querySelector("ul");

    fruitList.forEach((fruit) => {
        const itemElement = document.createElement("li");
        itemElement.textContent = fruit;
        ulElement.appendChild(itemElement);
    });
} 