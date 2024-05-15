const clickButton= function () {
    if (clickBt!=="") {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(clickBt));
        document.getElementById("myUl").appendChild(li);
        document.getElementById("newInput").value = "";
    }
}
let clickBt= document.getElementById("addList")
clickBt.addEventListener("click", clickButton)

