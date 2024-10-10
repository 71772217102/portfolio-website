let lastVisibleSection = null;

window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    let foundVisibleSection = false;

    sections.forEach((section) => {
        const sectionPosition = section.getBoundingClientRect();
        
        // Check if section is within the middle of the viewport and is not already visible
        if (sectionPosition.top >= 0 && sectionPosition.top <= window.innerHeight / 2 && !foundVisibleSection) {
            section.classList.add('visible');
            lastVisibleSection = section;  // Track which section was last visible
            foundVisibleSection = true;    // Stop after finding the first visible section
        } else {
            // Make sections invisible after scrolling far past them
            if (lastVisibleSection !== section) {
                section.classList.remove('visible');
            }
        }
    });
});