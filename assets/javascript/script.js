window.onload = function () {
  document.getElementById("sideNavbar_container").classList.add("hidden");
};

window.onscroll = function (oEvent) {
  var mydivpos = document.getElementById("home_section").offsetTop;
  var scrollPos = document.documentElement.scrollTop;

  if (scrollPos >= mydivpos+10) {
    document.getElementById("sideNavbar_container").classList.remove("hidden");
  } else {
    document.getElementById("sideNavbar_container").classList.add("hidden");
  }
};



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
