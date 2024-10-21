const checkbox = document.querySelector(".switch-checkbox");
const body = document.querySelector("body");
const listItem = document.querySelector(".list-item");
checkbox.addEventListener("click",chechboxClick);

function chechboxClick(e)
{
    if(e.target.checked)
    {
        body.className = "bg-light";
        body.style.cssText = "color: #212529;";
    }
    else if (!e.target.checked)
    {
        body.className = "bg-dark";
        body.style.cssText = "color: #fff;";
    }
}