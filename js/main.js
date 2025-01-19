(function ($)
{
    "use strict";

    // Spinner
    var spinner = function ()
    {
        setTimeout(function ()
        {
            if ($('#spinner').length > 0)
            {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $(window).scroll(function ()
    {
        if ($(this).scrollTop() > 300)
        {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else
        {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event)
    {
        if (this.hash !== "")
        {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length)
            {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Back to top button
    $(window).scroll(function ()
    {
        if ($(this).scrollTop() > 300)
        {
            $('.back-to-top').fadeIn('slow');
        } else
        {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function ()
    {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1)
    {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function ()
    {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e)
    {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e)
    {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function ()
    {
        $('.progress .progress-bar').each(function ()
        {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function ()
    {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });


})(jQuery);

document.addEventListener('DOMContentLoaded', function ()
{
    // Add event listener for modal show event
    var dynamicModal = document.getElementById('dynamicModal');
    dynamicModal.addEventListener('show.bs.modal', function (event)
    {
        // Button that triggered the modal
        var button = event.relatedTarget;

        // Extract data attributes
        var title = button.getAttribute('data-title');
        var description = button.getAttribute('data-description');
        var role = button.getAttribute('data-role');
        var technologies = button.getAttribute('data-technologies');

        // Update modal content
        document.getElementById('dynamicModalLabel').textContent = title;
        document.getElementById('dynamicModalDescription').textContent = description;
        document.getElementById('dynamicModalRole').textContent = role;
        document.getElementById('dynamicModalTechnologies').textContent = technologies;
    });
});
