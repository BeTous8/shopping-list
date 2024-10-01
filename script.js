const ulist = document.querySelector("ul");
const input = document.querySelector("input");
const addBtn = document.querySelector("button");

// Load shopping list from localStorage when the page loads
window.addEventListener("load", () => {
    const storedList = JSON.parse(localStorage.getItem("shoppingList")) || [];
    storedList.forEach(item => {
        const list = document.createElement("li");
        const span = document.createElement("span");
        const delBtn = document.createElement("button");
        list.append(span, delBtn);
        span.textContent = item;
        delBtn.textContent = "Delete";
        ulist.append(list);

        // Add event listener to delete button
        delBtn.addEventListener("click", () => {
            list.remove();
            removeFromLocalStorage(item);
        });
    });
});


function saveToLocalStorage(newItem) {
    const storedList = JSON.parse(localStorage.getItem("shoppingList")) || [];
    storedList.push(newItem);
    localStorage.setItem("shoppingList", JSON.stringify(storedList));
}

// Function to remove an item from localStorage
function removeFromLocalStorage(itemToRemove) {
    let storedList = JSON.parse(localStorage.getItem("shoppingList")) || [];
    storedList = storedList.filter(item => item !== itemToRemove);
    localStorage.setItem("shoppingList", JSON.stringify(storedList));
}



addBtn.addEventListener("click", () => {
    newItem = input.value;
    input.value = "";
    input.focus();
    const list = document.createElement("li");
    const span = document.createElement("span");
    const delBtn = document.createElement("button");
    
    span.textContent = newItem;
    delBtn.textContent = "Delete";

    list.append(span, delBtn);
    ulist.append(list);

    saveToLocalStorage(newItem);


    delBtn.addEventListener("click", () => {
        list.remove();

        removeFromLocalStorage(newItem);        
    });
});


