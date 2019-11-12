//request1
//Get the DOM - welcome
//Add listener to this DOM，and callback function
//This callback function is in charge of the replacement of the text.
//Wrap the entire functions ( IIFE )


//request2
//1.Click the menu btn, display the hidden mobile menu
//2.Click the close btn hide the mobile menu.
//3.if the header width is larger than 800, hide the mobile menu, (Already: display the horizontal one) 
//Finanlly, style the nav.

//request3
//Get the position of the content boxes.
//If the y position of the rows plus its height surpasses current window's y, hide these boxes, and display the call to action btn.  

const DOM = {
    welcome: '#header-welcome',
    menuImg: '.header-menu',
    menuMobile: '.header-nav-mobile',
    closeMobile: '.header-closeImg',
    btnMain: '.main-button',
    rowHidden: ['.row:nth-child(4)','.row:nth-child(5)','.row:nth-child(6)']
};
function changeText(){
    this.innerHTML = 'Have a Good Time!';
};
function switchMenu(){
    let tempStr = document.querySelector(DOM.menuMobile).classList;
    (tempStr.contains('displayBlock'))? tempStr.remove('displayBlock'):tempStr.add('displayBlock');
};

function showBoxes(){
    for (child of DOM.rowHidden){
        console.log(child);
        document.querySelector(child).style.display='block';
    }
};

document.querySelector(DOM.welcome).addEventListener('click', changeText);
document.querySelector(DOM.menuImg).addEventListener('click', switchMenu);
document.querySelector(DOM.closeMobile).addEventListener('click', switchMenu);
document.querySelector(DOM.btnMain).addEventListener('click', showBoxes);

//Pending issue. The width is separated with that in CSS, which means I need to modify both files if I change the width
window.addEventListener("resize", function() {
    let tempStr = document.querySelector(DOM.menuMobile).classList;
    if (window.matchMedia("(min-width: 800px)").matches) {
    //Remove the class
    tempStr.remove('displayBlock')
    } else {
    console.log("stay as it is");
    }
    });