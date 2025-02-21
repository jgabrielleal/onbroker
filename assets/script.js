$(document).ready(function () {
    // Swiper para os prêmios
    var swiperPremios = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 20,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
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
            0: { slidesPerView: 1 },
            1024: { slidesPerView: 3 }
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

    // Swiper para as avaliações
    var swiperAvaliacao = new Swiper(".mySwiperavaliacao", {
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
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });

    // Swiper para os ativos financeiros
    var swiperAtivos = new Swiper(".mySwiperAtivos", {
        loop: true,
        spaceBetween: 20,
        centeredSlides: true,
        speed: 9000, // Movimento contínuo mais suave
        slidesPerView: "auto", // Permite ajuste dinâmico
        autoplay: {
            delay: 0, // Sem pausa
            disableOnInteraction: false,
        },
        allowTouchMove: false, // Impede arrastar manualmente
        breakpoints: {
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
        }
    });

    // **Reduzir a velocidade ao passar o mouse**
    $(".mySwiperAtivos").on("mouseenter", function () {
        swiperAtivos.autoplay.stop();
        swiperAtivos.params.speed = 15000; // Mais lento
        swiperAtivos.autoplay.start();
    });

    // **Voltar ao normal ao tirar o mouse**
    $(".mySwiperAtivos").on("mouseleave", function () {
        swiperAtivos.autoplay.stop();
        swiperAtivos.params.speed = 9000; // Rápido novamente
        swiperAtivos.autoplay.start();
    });

    // Criar os gráficos do TradingView
    function createTradingViewWidget(containerId, symbol) {
        let widgetContainer = document.getElementById(containerId);

        if (widgetContainer) {
            let script = document.createElement("script");
            script.type = "text/javascript";
            script.src = "https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js";
            script.async = true;
            script.innerHTML = JSON.stringify({
                "symbol": symbol,
                "width": "100%",
                "height": "250",
                "locale": "br",
                "dateRange": "12M",
                "colorTheme": "dark",
                "trendLineColor": "#37a6ef",
                "underLineColor": "#00ff99",
                "isTransparent": true
            });

            widgetContainer.appendChild(script);
        }
    }

    // Adicionar os gráficos aos cards
    createTradingViewWidget("meta", "NASDAQ:META");
    createTradingViewWidget("tesla", "NASDAQ:TSLA");
    createTradingViewWidget("apple", "NASDAQ:AAPL");
    createTradingViewWidget("amazon", "NASDAQ:AMZN");
    createTradingViewWidget("microsoft", "NASDAQ:MSFT");
    createTradingViewWidget("bitcoin", "BINANCE:BTCUSDT");
    createTradingViewWidget("ethereum", "BINANCE:ETHUSDT");

    document.addEventListener("DOMContentLoaded", function () {
        document.querySelectorAll(".ativos-card, .tradingview-widget-container").forEach((el) => {
            el.style.pointerEvents = "none"; // Impede interação em todos os elementos
        });
    });

});
