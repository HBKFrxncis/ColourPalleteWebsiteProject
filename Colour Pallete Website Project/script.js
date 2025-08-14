document.addEventListener('DOMContentLoaded', function() {
    var scrollButton = document.getElementById('scrollButton');

    // Function to handle button click event
    function scrollToSection() {
        var section1 = document.getElementById('section1'); // Get the target section
        section1.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section with smooth scrolling
    }

    // Attach click event listener to the button
    scrollButton.addEventListener('click', scrollToSection);
});

document.addEventListener('DOMContentLoaded', function() {
    var scrollButton = document.getElementById('scrollButton2');

    // Function to handle button click event
    function scrollToSection() {
        var section2 = document.getElementById('section2'); // Change to the ID of your target section
        section2.scrollIntoView({ behavior: 'smooth' }); // Scroll to the target section with smooth scrolling
    }

    // Attach click event listener to the button
    scrollButton.addEventListener('click', scrollToSection);
});

document.addEventListener('DOMContentLoaded', function() {
    var colorLink = document.getElementById('colorLink');
    var paletteLink = document.getElementById('paletteLink');

    // Function to scroll to section 1 (List of Palettes)
    function scrollToPaletteSection() {
        var section1 = document.getElementById('section1');
        section1.scrollIntoView({ behavior: 'smooth' });
    }

    // Function to scroll to section 2 (List of Colors)
    function scrollToColorSection() {
        var section2 = document.getElementById('section2');
        section2.scrollIntoView({ behavior: 'smooth' });
    }

    // Attach click event listener to the 'List of Palettes' link
    colorLink.addEventListener('click', scrollToPaletteSection);

    // Attach click event listener to the 'List of Colors' link
    paletteLink.addEventListener('click', scrollToColorSection);
});


document.addEventListener('DOMContentLoaded', function() {
    var colorLink = document.getElementById('colorLink');
    var paletteLink = document.getElementById('paletteLink');

    // Function to scroll to section 1 (List of Colours)
    function scrollToColorSection(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        var section1 = document.getElementById('section1');
        section1.scrollIntoView({ behavior: 'smooth' });
    }

    // Function to scroll to section 2 (List of Palettes)
    function scrollToPaletteSection(event) {
        event.preventDefault(); // Prevent the default behavior of the link
        var section2 = document.getElementById('section2');
        section2.scrollIntoView({ behavior: 'smooth' });
    }

    // Attach click event listener to the 'List of Colours' link
    colorLink.addEventListener('click', scrollToColorSection);

    // Attach click event listener to the 'List of Palettes' link
    paletteLink.addEventListener('click', scrollToPaletteSection);
});
