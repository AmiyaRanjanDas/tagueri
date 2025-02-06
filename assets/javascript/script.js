// ===================================================
// ====================sidebar========================
// ===================================================
function test(){
    var mydivpos = document.getElementById("home_section").offsetTop;
    var scrollPos = document.documentElement.scrollTop;
  
    if (scrollPos >= mydivpos+700) {
      document.getElementById("sideNavbar_container").classList.remove("hidden");
    } else {
      document.getElementById("sideNavbar_container").classList.add("hidden");
      closeMenu();
    }
}

window.onload = function () {
    test();
};

window.onscroll = function () {
  test();
};


// ===================================================
// ====================sidebar Menu===================
// ===================================================
const menuIcon = document.getElementById("menu_icon");
const menu_btn_1=document.getElementById("menu_btn_1");
const menu_btn_2=document.getElementById("menu_btn_2");
const navbar = document.querySelector('.sidebar_content .navbar');
const menuItems = document.querySelectorAll('.sidebar_content .navbar > li');

// Function to close all submenus
function closeAllSubmenus() {
    const submenus = document.querySelectorAll('.sidebar_content .navbar ul');
    submenus.forEach(submenu => {
        submenu.style.display = 'none';
    });
}
// Function to close entire menu
function closeMenu() {
    menu_btn_1.style.display="block";
    menu_btn_2.style.display="none";
    menuIcon.style.fill="black";
    navbar.style.display = 'none';
    menuItems.forEach(item => {        
        item.style.color="#000";
    })
    closeAllSubmenus();
}
closeMenu();
// Toggle menu on hamburger icon click
menuIcon.addEventListener('click', (e) => {
    menu_btn_1.style.display="none";
    menu_btn_2.style.display="block";
    menuIcon.style.fill="#0091e9";
    e.stopPropagation(); // Prevent event from bubbling up
    if (navbar.style.display === 'none' || !navbar.style.display) {
        navbar.style.display = 'flex';
    } else {
        closeMenu();
    }
});
menuItems.forEach(item => {
    const submenu = item.querySelector('ul');
    if (submenu) {
        item.addEventListener('click', (e) => {
            e.stopPropagation();
            
            // Reset all submenus first
            menuItems.forEach(otherItem => {
                otherItem.style.color = "#000";
                const otherSubmenu = otherItem.querySelector('ul');
                if (otherSubmenu) {
                    otherSubmenu.style.display = 'none';
                }
            });
            
            // Highlight current item
            item.style.color = "#0091E9";
            
            // Close all submenus first
            closeAllSubmenus();
            
            // Open current submenu
            submenu.style.display = 'flex';
            
            // Reset navbar height before calculating
            navbar.style.height = 'auto';
            
            // Calculate and set new height
            const navbarHeight = calculateNavbarHeight();
            navbar.style.height = `${navbarHeight}px`;
        });
    }
});

function calculateNavbarHeight() {
    const openSubmenu = document.querySelector('.sidebar_content .navbar ul[style*="display: flex"]');
    
    if (openSubmenu) {
        const parentItem = openSubmenu.closest('li');
        return parentItem.offsetHeight + openSubmenu.offsetHeight -24;
    }
    
    return navbar.scrollHeight;
}

// Modify close menu function to reset height
function closeMenu() {
    menu_btn_1.style.display = "block";
    menu_btn_2.style.display = "none";
    menuIcon.style.fill = "black";
    navbar.style.display = 'none';
    navbar.style.height = 'auto'; // Reset height when closing
    menuItems.forEach(item => {        
        item.style.color = "#000";
    });
    closeAllSubmenus();
}

// Prevent submenu items from closing the menu
document.querySelectorAll('.navbar ul li').forEach(submenuItem => {
    submenuItem.addEventListener('click', (e) => {
        e.stopPropagation(); 
    });
});

// ======================================================
// ==============Home section animation==================
// ======================================================
// Get necessary elements
const navbar_logo = document.querySelector('.navbar_section .logo');
const navbar_navbar = document.querySelector('.navbar_section .navbar');
const navbar_buttons = document.querySelector('.navbar_section .button_section');
const homeSection = document.querySelector('.home_section');

const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');
const bg3 = document.querySelector('.bg3');
const bg4 = document.querySelector('.dynamic_container');
const bg5 = document.querySelector('.focus_container');
const bg6 = document.querySelector('#carousel1');
const bg7 = document.querySelector('#carousel2');
const bg8 = document.querySelector('.footer_section');

const leftContent = document.querySelector('.constant .all_content .left');
const rightContent = document.querySelector('.constant .all_content .right');
const rgh_Content = document.querySelector('.constant .all_content .right .rgh_cont');
const leftOriginal = document.querySelector('.constant .all_content .left .orig_cont');
const rightOriginal = document.querySelector('.constant .all_content .right .original');
const leftFake = document.querySelector('.constant .all_content .left .fake');
const rightFake = document.querySelector('.constant .all_content .right .fake');
const leftBlueBox = document.querySelector('.constant .all_content .left .blue_box');
const rightBlueText = document.querySelector('.constant .all_content .right .blue_text');

// Get initial positions
const bg1Top = bg1.offsetTop;
const bg2Top = bg2.offsetTop;
const bg3Top = bg3.offsetTop;
const bg4Top = bg4.offsetTop;
const bg5Top = bg5.offsetTop;
const bg6Top = bg6.offsetTop;
const bg7Top = bg7.offsetTop;
const bg8Top = bg8.offsetTop;

// Animation function for first section (until end of bg1)
function animationOne(scrollPosition) {
    const progress = (scrollPosition - bg1Top) / window.innerHeight;
    if (progress >= 0 && progress <= 1) {        
        //navbar animation
        navbar_logo.style.transform=`translateX(0)`;
        navbar_navbar.style.transform=`translateX(0)`;
        navbar_buttons.style.transform=`translateX(0)`;
        //to move the bg to proper place
        bg1.style.top=`0vh`;
        bg2.style.top=`100vh`;
        // Slide left content to the left
        leftContent.style.transform = `translateY(-0px)`;        
        // Fade out right content 
        rightOriginal.style.opacity = 1;
        //make the right fake h1 showed up     
        rightFake.style.opacity = 0;
        //make the bluebox open up              
        leftBlueBox.style.transform=`rotate(0deg)`; 
        leftBlueBox.style.width=`16px`; 
        leftBlueBox.style.height=`16px`; 
        leftBlueBox.style.right=`112px`; 
        leftBlueBox.style.bottom=`7px`; 
        leftBlueBox.style.borderRadius = `0 5px 0 0`;
        leftBlueBox.style.padding = `0`;
        leftBlueBox.style.color = `#0091e9`;
        // Reset other properties
        leftBlueBox.style.border = `0px`;
    }
}

// Animation function for second section (until end of bg2)
function animationTwo(scrollPosition) {
    const progress = (scrollPosition - bg2Top) / window.innerHeight;
    if (progress >= 0 && progress <= 1) {
        
        navbar_logo.style.transform=`translateX(-500px)`;
        navbar_navbar.style.transform=`translateX(1500px)`;
        navbar_buttons.style.transform=`translateX(500px)`;
        //for bg to move to top
        bg2.style.top=`0vh`;
        bg3.style.top=`100vh`;
        // Slide left content to the left
        leftContent.style.transform = `translateY(-260px)`;         
        rgh_Content.style.transform = `translateY(0px)`;
        // Fade out right content 
        leftOriginal.style.opacity = 1;
        leftFake.style.opacity = 0;
        rightOriginal.style.opacity = 0;
        rightFake.style.opacity = 1;
        //make the bluebox open up              
        leftBlueBox.style.transform=`rotate(90deg)`; 
        leftBlueBox.style.width=`${16+250}px`; 
        leftBlueBox.style.height=`${16+250}px`; 
        leftBlueBox.style.right=`0px`; 
        leftBlueBox.style.bottom=`-272px`; 
        leftBlueBox.style.borderRadius = `0 95px 0 0`;
        leftBlueBox.style.padding = `35px 32px 20px 16px`;
        leftBlueBox.style.color = `rgb(252,252,252)`;
        
        leftBlueBox.style.background = `#0091e9`;
        leftBlueBox.style.border = `0`;

        //blueText box animation
        rightBlueText.style.opacity=0;
    }
}

// Animation function for third section (until end of bg3)
function animationThree(scrollPosition) {
    const progress = (scrollPosition - bg3Top) / window.innerHeight;
    if (progress >= 0 && progress <= 1) {
        //for bg to move to top
        bg3.style.top=`0vh`;
        bg4.style.top=`100vh`;
        
        leftBlueBox.style.transform=`rotate(0deg)`; 
        leftBlueBox.style.width=`16px`; 
        leftBlueBox.style.height=`16px`; 
        leftBlueBox.style.right=`112px`; 
        leftBlueBox.style.bottom=`7px`;         
        leftBlueBox.style.borderRadius = `0 7px 0 0`;
        leftBlueBox.style.padding = `0`;
        leftBlueBox.style.background = `transparent`;
        leftBlueBox.style.color = `transparent`;
        leftBlueBox.style.border = `2px solid white`;
        
        // //animation func 2
        leftContent.style.transform = `translateY(0px)`;    
        rgh_Content.style.transform = `translateY(260px)`;
        
        // // Fade out right content
        // const opacity3 = 1 - (progress * 1.5); 
        leftOriginal.style.opacity = 0;
        leftFake.style.opacity = 1;
        rightOriginal.style.opacity = 1;
        rightFake.style.opacity = 0;

        //blueText box animation
        rightBlueText.style.opacity=1;
    }
}

// Animation function for 4th section (until end of dynamic_container)
function animationFour() {
    bg4.style.top=`0vh`;
    bg5.style.top=`100vh`;
    leftContent.style.transform = `translateY(-260px)`; 
    //blueText box animation
    rightBlueText.style.opacity=0; 
}

// Animation function for 5th section (until end of focus_container)
function animationFive() {
    bg5.style.top=`0vh`; 
    bg6.style.top=`100vh`; 
}

// Animation function for 5th section (until end of dynamic_container)
function animationSix() {
    bg6.style.top=`0vh`; 
    bg7.style.top=`100vh`; 
    bg8.style.top=`100vh`; 
}

// Animation function for 5th section (until end of dynamic_container)
function animationSeven() {
    bg7.style.top=`0vh`; 
    bg8.style.top=`0vh`; 
}

// Animation function for 5th section (until end of dynamic_container)
function animationEight() {
    bg7.style.top=`-100vh`; 
}

// Main scroll handler
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {            
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            // Apply appropriate animations based on scroll position
            if (scrollPosition < bg2Top) {
                animationOne(scrollPosition);
            } else if (scrollPosition < bg3Top) {
                animationTwo(scrollPosition);
            } else if(scrollPosition < bg4Top){
                animationThree(scrollPosition);
            } else if(scrollPosition < bg5Top){
                animationFour();
            } else if(scrollPosition < bg6Top){
                animationFive();
            } else if(scrollPosition < bg7Top){
                animationSix();
            } else if(scrollPosition < bg8Top){
                animationSeven();
            } else {
                animationEight();
            }
            ticking = false;
        });
        ticking = true;
    }
});


// ======================================================
// ==========Slider animation on mouse hold==============
// ======================================================
document.addEventListener('DOMContentLoaded', function() {
    // Get all carousel elements
    const carousels = document.querySelectorAll('.carousel');
    
    // Initialize each carousel
    carousels.forEach(function(carousel) {
        // Create Bootstrap carousel instance for each
        let bsCarousel = new bootstrap.Carousel(carousel, {
            interval: 3000,
            pause: false
        });

        // When mouse enters this carousel, start sliding
        carousel.addEventListener('mouseenter', function() {
            bsCarousel.cycle();
        });

        // When mouse leaves this carousel, stop sliding
        carousel.addEventListener('mouseleave', function() {
            bsCarousel.pause();
        });
    });
});

// ======================================================
// ==============footer text animation===================
// ======================================================
const triggerElement = document.createElement('div');
    triggerElement.style.position = 'absolute';
    triggerElement.style.top = '820vh';
    triggerElement.style.width = '1px';
    triggerElement.style.height = '1px';
    document.body.appendChild(triggerElement);

    const resetTriggerElement = document.createElement('div');
    resetTriggerElement.style.position = 'absolute';
    resetTriggerElement.style.top = '650vh';
    resetTriggerElement.style.width = '1px';
    resetTriggerElement.style.height = '1px';
    document.body.appendChild(resetTriggerElement);

    // Intersection Observer for applying animation
    const applyObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const h1Elements = document.querySelectorAll('.footer_section h1');
          h1Elements.forEach((h1, index) => {
            h1.classList.add('slide-up');
            if (index === 1) {
              h1.classList.add('delay-1');
            }
          });
        }
      });
    }, {
      root: null,
      threshold: 0.5 // Trigger when 50% of trigger element is visible
    });

    // Intersection Observer for removing animation
    const resetObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const h1Elements = document.querySelectorAll('.footer_section h1');
          h1Elements.forEach(h1 => {
            h1.classList.remove('slide-up', 'delay-1');
          });
        }
      });
    }, {
      root: null,
      threshold: 0.5 // Trigger when 50% of reset trigger element is visible
    });

    // Observe the trigger elements
    resetObserver.observe(resetTriggerElement);
    applyObserver.observe(triggerElement);
 