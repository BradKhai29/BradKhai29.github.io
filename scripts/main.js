var close_buttons = document.querySelectorAll(".close-button");
var display_buttons = document.querySelectorAll(".ticket-details .button");

var ticket_reg = document.querySelector(".ticket-register");
var blur_block = document.querySelector(".blur");
var navbar = document.querySelectorAll(".navbar-text");

var menuBtn = document.querySelector(".menu");
let click = false;

menuBtn.addEventListener('click', function (e) {
      if (click == false)
      {
            for (let i = 1; i < navbar.length; i++)
            {
                  navbar[i].style.display = "block";
                  navbar[i].parentElement.style.width = "100%";
            }
            click = true;
            e.target.style.position = "fixed";
            e.target.style.top = "1";
            e.target.style.right = "0";
            return;
      }
      if (click == true) 
      {
            for (let i = 1; i < navbar.length; i++)
            {
                  navbar[i].style.display = "none";
                  navbar[i].parentElement.style.width = `fit-content`;
            }

            e.target.style.position = "static";
            click = false;
            return;
      }
});

//Non display section
close_buttons.forEach(button => {
      button.addEventListener('click', function () { non_display(blur_block, ticket_reg); });
});

blur_block.addEventListener('click', function () { non_display(blur_block, ticket_reg); });

//Display section
display_buttons.forEach(button => {
      button.addEventListener('click', function () { display(blur_block, ticket_reg); });
});
/**
 * This method is used to hide the block
 */
var non_display = (...elements) => { elements.forEach(element => { element.style.display = "none" }) };

/**
 * This method is used to display the block
 */
var display = (...elements) => { elements.forEach(element => { element.style.display = "block" }) };
