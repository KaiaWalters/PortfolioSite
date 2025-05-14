 $(document).ready(function() {
    // Initialize the carousel with custom settings
    $('#projectsCarousel').carousel({
      interval: 5000,  // Change slides every 5 seconds
      pause: "hover",  // Pause on hover
      wrap: true       // Continuous cycling
    });
    
    // Improve swipe support for mobile devices
    if ('ontouchstart' in document.documentElement) {
      let startX;
      let endX;
      
      $('#projectsCarousel').on('touchstart', function(event) {
        startX = event.originalEvent.touches[0].pageX;
      });
      
      $('#projectsCarousel').on('touchmove', function(event) {
        endX = event.originalEvent.touches[0].pageX;
      });
      
      $('#projectsCarousel').on('touchend', function() {
        const threshold = 50; // Minimum distance for swipe
        const swipeDiff = startX - endX;
        
        if (swipeDiff > threshold) {
          $(this).carousel('next');
        } else if (swipeDiff < -threshold) {
          $(this).carousel('prev');
        }
      });
    }
  });
