// Nav Menu CSS

run();

function run() {
  bindMenuToggleToMenuItems();
}

function toggleHide(element) {
  element.classList.toggle("hide");
}

function bindMenuToggleToMenuItems() {
  const menuToggle = document.querySelector(".menu__toggle");

  menuToggle.addEventListener("click", function() {
    const menuItems = document.querySelector(".menu__items");
    toggleHide(menuItems);
  });
}

// Nav Menu CSS End

// Learn More Modal JS

var modal=document.getElementById("myModal"),
    body=document.getElementsByTagName("body"),
    container=document.getElementById("myContainer"),
    btnOpen=document.getElementById("myBtn"),
    btnClose=document.getElementById("closeModal");

btnOpen.onclick=function(){modal.className="modal is-visuallyHidden",
  setTimeout(function(){container.className="MainContainer is-blurred",
  modal.className="modal"},100),
  container.parentElement.className="modalOpen"},
  btnClose.onclick=function(){modal.className="modal is-hidden is-visuallyHidden",
  body.className="",
  container.className="MainContainer",
  container.parentElement.className=""},
  window.onclick=function(e){e.target==modal&&(modal.className="modal is-hidden",
                                               body.className="",
                                               container.className="MainContainer",
                                               container.parentElement.className="")};