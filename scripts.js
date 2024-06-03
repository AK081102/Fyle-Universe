$(document).ready(function () {
    $('#contactUsBtn').click(function () {
        $('#contactForm').toggle();
    });

    $(window).click(function (event) {
        if ($(event.target).is('#contactForm')) {
            $('#contactForm').hide();
        }
    });

    // Carousel hover effect to show overlay
    $('.carousel-item').hover(
        function () {
            $(this).find('.overlay').fadeIn(200);
        },
        function () {
            $(this).find('.overlay').fadeOut(200);
        }
    );

    // Initialize the carousel
    $('#whatWeDoCarousel').carousel({
        interval: 3000
    });

    // Handle the read more button click
    $('.overlay button').click(function () {
        window.open('https://fylehq.com', '_blank');
    });
});


// Change image based on project content click
$('.project-content').click(function() {
    var newImage = $(this).data('image');
    $('#projectImage').attr('src', newImage);

    // Remove active class from all project contents
    $('.project-content').removeClass('active');

    // Add active class to the clicked project content
    $(this).addClass('active');
});


// Project content click event to change image

$('.project-content').click(function() {
    var imageUrl = $(this).data('image');
    $('#projectImage').attr('src', imageUrl);
    $('.project-content').removeClass('active');
    $(this).addClass('active');
});

// Carousel hover effect to show overlay
$('#whatWeDoCarousel .carousel-item').hover(
    function() {
        $(this).find('.overlay').css('opacity', '1');
    },
    function() {
        $(this).find('.overlay').css('opacity', '0');
    }
);

$(document).ready(function() {
    $("#contactUsBtn").click(function() {
        $("#contactForm").show();
    });
});

let currentIndex = 0;
const images = document.querySelectorAll('.image-container');
const dots = document.querySelectorAll('.dot');
const gallery = document.getElementById('gallery');

function openOverlay(index) {
    const overlay = images[index].querySelector('.overlay-content');
    overlay.style.opacity = overlay.style.opacity === '1' ? '0' : '1';
}

function currentImage(index) {
    gallery.scrollTo({
        left: images[index].offsetLeft,
        behavior: 'smooth'
    });
    updateDots(index);
}

function updateDots(index) {
    dots[currentIndex].classList.remove('active');
    currentIndex = index;
    dots[currentIndex].classList.add('active');
}

// Add event listeners to dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentImage(index);
    });
});

// Set initial active dot
dots[currentIndex].classList.add('active');
