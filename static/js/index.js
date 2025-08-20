window.HELP_IMPROVE_VIDEOJS = false;


$(document).ready(function() {
    // Check for click events on the navbar burger icon

    var options = {
			slidesToScroll: 1,
			slidesToShow: 1,
			loop: true,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
    }

		// Initialize all div with carousel class
    var carousels = bulmaCarousel.attach('.carousel', options);
	
    bulmaSlider.attach();

    // Hamburger menu behavior
    const menu = document.getElementById('ham-menu');
    const toggle = document.getElementById('ham-toggle');
    const panel = document.getElementById('ham-panel');
    if(toggle && menu){
      toggle.addEventListener('click', function(e){
        e.stopPropagation();
        menu.classList.toggle('is-open');
      });
      document.addEventListener('click', function(e){
        if(menu.classList.contains('is-open') && !menu.contains(e.target)){
          menu.classList.remove('is-open');
        }
      });
      panel && panel.addEventListener('click', function(e){
        const link = e.target.closest('a[href^="#"]');
        if(!link) return;
        menu.classList.remove('is-open');
        // allow default smooth scroll via CSS; ensure focus target exists
        const id = link.getAttribute('href');
        const el = document.querySelector(id);
        if(el){ el.setAttribute('tabindex','-1'); el.focus({preventScroll:true}); }
      });
    }
})
