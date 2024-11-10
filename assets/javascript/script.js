// ===================================================
// ====================sidebar========================
// ===================================================
function test(){
    var mydivpos = document.getElementById("home_section").offsetTop;
    var scrollPos = document.documentElement.scrollTop;
  
    if (scrollPos >= mydivpos+10) {
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
const menuIcon = document.querySelector('.sidebar_content .fa-bars');
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
    navbar.style.display = 'none';
    menuItems.forEach(item => {        
        item.style.color="#000";
    })
    closeAllSubmenus();
}
closeMenu();
// Toggle menu on hamburger icon click
menuIcon.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    if (navbar.style.display === 'none' || !navbar.style.display) {
        navbar.style.display = 'flex';
    } else {
        closeMenu();
    }
});
// Handle submenu toggles
menuItems.forEach(item => {
    const submenu = item.querySelector('ul');
    if (submenu) { // Only add click handler if item has submenu
        item.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent event from bubbling up
            
            // Close all other submenus first
            menuItems.forEach(otherItem => {
                otherItem.style.color="#000";
                if (otherItem !== item) {
                    const otherSubmenu = otherItem.querySelector('ul');
                    if (otherSubmenu) {
                        otherSubmenu.style.display = 'none';
                    }
                }
            });
            
            item.style.color=" #0091E9";
            
            // Toggle clicked submenu
            if (submenu.style.display === 'none' || !submenu.style.display) {
                submenu.style.display = 'flex';
            } else {
                submenu.style.display = 'none';
            }
        });
    }
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const isClickInsideMenu = e.target.closest('.menu');
    if (!isClickInsideMenu) {
        closeMenu();
    }
});

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
const homeSection = document.querySelector('.home_section');
const bg1 = document.querySelector('.bg1');
const bg2 = document.querySelector('.bg2');
const bg3 = document.querySelector('.bg3');
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

// Animation function for first section (until end of bg1)
function animationOne(scrollPosition) {
    const progress = (scrollPosition - bg1Top) / window.innerHeight;
    if (progress >= 0 && progress <= 1) {
        // Slide left content to the left
        const slideDistance = Math.max(-250,progress * -400); 
        leftContent.style.transform = `translateY(${slideDistance}px)`;
        
        // Fade out right content
        const opacity1 = 1 - (progress * 1.5); 
        rightOriginal.style.opacity = Math.max(0, opacity1);

        //make the right fake h1 showed up
        const opacity2 = (progress * 1.5);          
        rightFake.style.opacity = Math.min(1, opacity2);

        //make the bluebox open up
        const deg = Math.min(90,progress * 150);             
        const wid = Math.min(250,progress * 350);             
        const hei = Math.min(300,progress * 350);             
        leftBlueBox.style.transform=`rotate(${deg}deg)`; 
        leftBlueBox.style.width=`${12+wid}px`; 
        leftBlueBox.style.height=`${12+hei}px`; 
        const lf=Math.max(0,92-progress*200);
        const bt=Math.max(-290,7-progress*370); 
        leftBlueBox.style.right=`${lf}px`; 
        leftBlueBox.style.bottom=`${bt}px`; 
        leftBlueBox.style.borderRadius = `0 ${5+deg}px 0 0`;

        leftBlueBox.style.padding = `${Math.min(50,deg)}px ${Math.min(40,deg)}px ${Math.min(20,deg)}px ${Math.min(20,deg)}px`;
        leftBlueBox.style.color = `rgb(${
            Math.min(252, Math.floor(progress * 300))
        }, ${
            Math.min(252, Math.floor(145 + progress * 300))
        }, ${
            Math.min(252, Math.floor(233 + progress * 300))
        })`;

        // Reset other properties
        leftFake.style.opacity = 0;
        leftBlueBox.style.border = `0px`;
    }
}

// Animation function for second section (until end of bg2)
function animationTwo(scrollPosition) {
    const progress = (scrollPosition - bg2Top) / window.innerHeight;
    if (progress >= 0 && progress <= 1) {
        // Reverse the progress 
        const reverseProgress = 1 - progress;
        const slideDistance = Math.max(-250, reverseProgress * -400);
        leftContent.style.transform = `translateY(${slideDistance}px)`;
        const deg = Math.min(90, reverseProgress * 150);
        const wid = Math.min(250, reverseProgress * 350);
        const hei = Math.min(300, reverseProgress * 350);
        leftBlueBox.style.transform = `rotate(${deg}deg)`;
        leftBlueBox.style.width = `${10 + wid}px`;
        leftBlueBox.style.height = `${10 + hei}px`;        
        const lf = Math.max(0, 92 - reverseProgress * 200);
        const bt = Math.max(-290, 7 - reverseProgress * 370);
        leftBlueBox.style.right = `${lf}px`;
        leftBlueBox.style.bottom = `${bt}px`;
        leftBlueBox.style.borderRadius = `0 ${5 + deg}px 0 0`;
        leftBlueBox.style.padding = `${Math.min(50, deg)}px ${Math.min(40, deg)}px ${Math.min(20, deg)}px ${Math.min(20, deg)}px`;
        
        const alpha = Math.max(0, (100 - progress * 200) / 100);  // Convert to 0-1 range
        leftBlueBox.style.background = `rgba(0, 145, 233, ${alpha})`;
        leftBlueBox.style.color = `rgba(255, 255, 255, ${alpha})`;

        leftBlueBox.style.border = `${Math.min(2,progress*5-2)}px solid white`;
        
        //animation func 2
        const slideDistance2 = Math.min(250,progress * 400); 
        rgh_Content.style.transform = `translateY(${slideDistance2}px)`;
        
        // Fade out right content
        const opacity3 = 1 - (progress * 1.5); 
        leftOriginal.style.opacity = Math.max(0, opacity3);
        rightFake.style.opacity=Math.max(0, opacity3);

        //make the right fake h1 showed up
        const opacity4 = (progress * 1.5);          
        leftFake.style.opacity = Math.min(1, opacity4);
        rightOriginal.style.opacity = Math.min(1, opacity4);
 
        rightBlueText.style.opacity=Math.min(1, progress);
        
    }
}

// Animation function for third section (until end of bg3)
function animationThree(scrollPosition) {
    const progress = (scrollPosition - bg3Top) / window.innerHeight;
    if (progress >= 0 && progress <= 1) {
        rightBlueText.style.opacity=Math.max(0, 1-progress*2.5);

         // Slide left content to the left
         const slideDistance = Math.max(-300,progress * -600); 
         leftContent.style.transform = `translateY(${slideDistance}px)`;
    }
}

// Main scroll handler
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            
            // Reset styles when scrolling back up
            if (scrollPosition < bg2Top) {
                leftFake.style.opacity = 0;
                rightFake.style.opacity = 0;
                leftContent.style.opacity = 1;
                rightContent.style.opacity = 1;
            }
            
            // Apply appropriate animations based on scroll position
            if (scrollPosition < bg2Top) {
                animationOne(scrollPosition);
            } else if (scrollPosition < bg3Top) {
                animationTwo(scrollPosition);
            } else {
                animationThree(scrollPosition);
            }
            
            ticking = false;
        });
        ticking = true;
    }
});

// Add CSS transitions for smooth animations
const style = document.createElement('style');
style.textContent = `
    .constant .all_content .left,
    .constant .all_content .right,
    .constant .all_content .left .fake,
    .constant .all_content .right .fake {
        transition: all 0.3s ease-out;
    }
`;
document.head.appendChild(style);


// ======================================================
// ==============footer text animation===================
// ======================================================
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const h1Elements = entry.target.querySelectorAll('h1');
        h1Elements.forEach((h1, index) => {
          h1.classList.add('slide-up');
          if (index === 1) {
            h1.classList.add('delay-1');
          }
        });
      }
    });
  }, observerOptions);
  
  // Start observing when the page loads
  window.addEventListener('load', () => {
    const footer = document.querySelector('.footer_section');
    if (footer) {
        console.log(1);
        
      observer.observe(footer);
    }
  });
