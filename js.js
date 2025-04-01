$(document).ready(function() {
    // Вкладки
    $(".tab-link").click(function() {
        $(".tab-link").removeClass("active");
        $(this).addClass("active");

        $(".tab-content").removeClass("active");
        $("#" + $(this).data("tab")).addClass("active");
    });

    // Попап
    $("#openPopup").click(function() {
        $("#popup").fadeIn();
    });

    $(".close").click(function() {
        $("#popup").fadeOut();
    });

    // Закрытие попапа при клике на любую пустую область
    $(document).click(function(event) {
        // Проверка, что клик был сделан вне попапа (и его содержимого)
        if ($(event.target).is("#popup")) {
            $("#popup").fadeOut();
        }
    });

    // Аккордеон
    $(".accordion-header").click(function() {
        var content = $(this).next(".accordion-content");

        $(".accordion-content").not(content).slideUp();
        $(".accordion-header").not(this).removeClass("active");

        if (content.is(":visible")) {
            content.slideUp();
        } else {
            content.slideDown();
        }
    });
});