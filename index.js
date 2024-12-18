let items = ["Арбуз", "Книга", "Кофе", "Макароны", "Молоко", "Сахар", "Яблоки"];

const itemList = document.getElementById("item-list");
const addItemBtn = document.getElementById("add-item-btn");

function updateList() {
    itemList.innerHTML = "";
    items.sort();
    items.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = `${index + 1}) ${item}`;
        itemList.appendChild(li);
    });
}

function addItem() {
    const newItem = prompt("Введите название нового товара:");
    if (!newItem) {
        alert("Название товара не введено!");
        return;
    }
    items.push(newItem);
    updateList();
}

addItemBtn.addEventListener("click", addItem);

updateList();