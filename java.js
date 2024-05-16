const clickButton= function (event) {
    if (clickBt!=="") {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(clickBt));
        document.getElementById("myUl").appendChild(li);
        document.getElementById("newInput");
    }
}
let clickBt= document.getElementById("addList")
clickBt.addEventListener("click", clickButton)

