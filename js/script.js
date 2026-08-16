document.addEventListener('DOMContentLoaded', function() {
    var typed = new Typed('.typing-text', {
        strings: [
            'Product Designer.', 
            'Product Manager.', 
            'Quality Assurance.', 
            'Web Developer.', 
            'Tech Enthusiast.'
            // 'UI/UX Designer.', 
            // 'Web Designer.', 
            // 'Front End Developer.'
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
        cursorChar: '|',
    });
});