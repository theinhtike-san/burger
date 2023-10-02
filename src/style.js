function openMenu(){
    document.getElementById("menu").style.right = "0%";
    document.getElementById("close").style.display = "flex";
    document.getElementById("open").style.display = "none";
}
function closeMenu(){
    document.getElementById("menu").style.right = "-100%";
    document.getElementById("open").style.display = "flex";
    document.getElementById("close").style.display = "none";
}
const menuLink = document.getElementById("menuLink");

menuLink.onclick = () => {
    document.getElementById("menu").style.right = "-100%";
    document.getElementById("open").style.display = "flex";
    document.getElementById("close").style.display = "none";

}


