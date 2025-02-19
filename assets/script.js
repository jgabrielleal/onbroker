$(document).ready(function () {
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 3000, // Tempo total da animação (3 segundos)
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '"><span class="progress"></span></span>';
            },
        },
        breakpoints: {
            0: {
                slidesPerView: 1, // Mobile: 1 slide visível
            },
            1024: {
                slidesPerView: 3, // Desktop: 3 slides visíveis
            }
        },
        on: {
            init: function () {
                let firstBullet = document.querySelector('.swiper-pagination-bullet-active .progress');
                if (firstBullet) {
                    firstBullet.style.animation = "progressFill 3s linear forwards";
                }
            },
            slideChangeTransitionStart: function () {
                document.querySelectorAll('.swiper-pagination-bullet .progress').forEach(el => {
                    el.style.animation = "none";
                    el.style.width = "0%";
                });

                let activeBullet = document.querySelector('.swiper-pagination-bullet-active .progress');
                if (activeBullet) {
                    activeBullet.style.animation = "progressFill 3s linear forwards";
                }
            }
        }
    });

    var swiper = new Swiper(".mySwiperavaliacao", {
        loop: true,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
});
