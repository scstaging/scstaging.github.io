 // Inner Nav
 const innerNav = document.querySelector('.inner-explore');
 function displayInnerNav(elem) {
     console.log(elem.lastElementChild)
     elem.lastElementChild.style.width = "62.5%";
     elem.lastElementChild.style.display = 'flex';
 }
 function removeInnerNav(elem) {
     elem.lastElementChild.style.width = "0";
     elem.lastElementChild.style.display = 'none';
 }