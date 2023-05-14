function toggleNav() {
  const sidenav = document.getElementById("mySidenav");
  const main = document.getElementById("main");
  const imgHeader = document.getElementById("img-header");
  const textMenu = document.querySelectorAll("#text-menu p");
  const footerImg = document.getElementById("footer-img");
  const footerName = document.getElementById("footer-name");
  const footerDescription = document.getElementById("footer-description");
  const logOut = document.getElementById("logout");

  // SIDEBAR WIDTH
  sidenav.style.width = sidenav.style.width == "78px" ? "250px" : "78px";
  main.style.marginLeft = main.style.marginLeft == "2px" ? "2px" : "2px";

  //IMAGE HEADER
  imgHeader.style.display = imgHeader.style.display == "none" ? "block" : "none";

  //MENU TEXT ITEMS
  for (i = 0; i < textMenu.length; i++) {
    textMenu[i].style.display = textMenu[i].style.display == "none" ? "inline" : "none";
  }

  //FOOTER ITENS
  footerImg.style.display = footerImg.style.display == "none" ? "block" : "none";
  footerName.style.display = footerName.style.display == "none" ? "block" : "none";
  footerDescription.style.display = footerDescription.style.display == "none" ? "block" : "none";
  logOut.style.margin = logOut.style.margin == "auto" ? "0" : "auto";
  logOut.style.padding = logOut.style.padding == "13px 0" ? "0" : "13px 0";
}