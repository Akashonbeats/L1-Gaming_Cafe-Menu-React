window.onload = function() {
    // Show the body once everything is loaded
    document.body.style.display = 'block';

    // Initialize Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add visible class to trigger animations
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Stop observing after animation
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% is visible
    });

    // Target ALL elements to animate
    const elementsToAnimate = document.querySelectorAll('li h3, li h4');
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
    
    // Specifically handle table cells
    const tableCells = document.querySelectorAll('tbody tr td');
    tableCells.forEach(cell => {
        observer.observe(cell);
    });
};