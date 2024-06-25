// Smooth scrolling to anchor links
document.querySelectorAll('.HeadingTxt a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1); // Remove '#' from href to get target id
        const target = document.getElementById(targetId);

        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});