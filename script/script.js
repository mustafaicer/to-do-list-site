const itemList = document.getElementById("item-list");
const addItemText = document.getElementById("add-item-text");
const radioMovie = document.getElementById("movie");
const radioBook = document.getElementById("book");
const radioPlan = document.getElementById("plan");
const radioMusic = document.getElementById("music");
const doneChecked = document.getElementById("done");
const addItemButton = document.getElementById("add-item-button");
const deleteAllItemButton = document.getElementById("delete-items");

addItemButton.addEventListener("click", createItem);
deleteAllItemButton.addEventListener("click",deleteAllItem);

function createItem()
{
    // get value
    if(addItemText.value.trim().length === 0)
    {
        alert("Item value is none...")
        return;
    }

    const itemHeader = document.createElement("h4");
    itemHeader.textContent = `${addItemText.value}`;
    addItemText.value = "";

    //  get list type
    let listType = document.createElement("span");

    if(radioMovie.checked) listType.innerHTML = "Movie";
    else if(radioBook.checked) listType.innerHTML = "Book";
    else if(radioPlan.checked) listType.innerHTML = "Plan";
    else if(radioMusic.checked) listType.innerHTML = "Music";
    else
    {
        alert("Enter list type");
        return;
    }

    const done = document.createElement("span");
    if(doneChecked.checked) done.innerHTML = ` - Done <i class="fa-solid fa-check ms-auto"></i>`;
    else done.innerHTML = ` - Not Done <i class="fa-solid fa-x"></i>`;

    done.style.cssText = "cursor: pointer; user-select: none;";
    done.addEventListener("click",function()
    {
        if(done.innerHTML === ` - Done <i class="fa-solid fa-check ms-auto"></i>`)
            done.innerHTML = " - Not Done <i class=\"fa-solid fa-x\"></i>";

        else if(done.innerHTML === " - Not Done <i class=\"fa-solid fa-x\"></i>")
            done.innerHTML = " - Done <i class=\"fa-solid fa-check ms-auto\"></i>";
    });

    const deleteButton = document.createElement("i");
    deleteButton.classList = "fa-solid fa-trash-can fs-3";
    deleteButton.addEventListener("click",deleteItem);

    const collocateButton = document.createElement("i");
    collocateButton.classList = "fa-solid fa-pencil me-3 fs-3";
    collocateButton.addEventListener("click",function()
    {
        itemHeader.contentEditable = true;
        itemHeader.focus();
        itemHeader.addEventListener("blur",function()
        {
            itemHeader.contentEditable = false;
        });
        itemHeader.addEventListener("keydown",function(event)
        {
            if(event.key === 'Enter')
                itemHeader.contentEditable = false;
        });
    });

    // create element 
    const listItem = document.createElement("div");
    listItem.className = "list-item rounded text-white mt-2";

    const divLeft = document.createElement("div");
    const divRight = document.createElement("div");
    divRight.classList = "ms-auto";
    itemList.appendChild(listItem);
    listItem.appendChild(divLeft);
    listItem.appendChild(divRight);

    divLeft.appendChild(itemHeader);
    divLeft.appendChild(listType);
    divLeft.appendChild(done);

    divRight.appendChild(collocateButton);
    divRight.appendChild(deleteButton);
}

function deleteItem(e)
{
    if(confirm("Are you sure for delete item?"))
        e.target.parentElement.parentElement.remove();

}

function deleteAllItem()
{
    const items = document.querySelectorAll("#item-list .list-item");
    if(items.length === 0)
        alert("No item");
    else
        if(confirm("Are you sure for delete all item?"))
            for(let item of items)
                item.remove(); 
}