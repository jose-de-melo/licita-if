$(function () {
    $(".button.close").click(function () {
        $(".chat_window").animate({
            opacity: 0,
            height: "60"
        }, 600,function(){
            $(".chat_window").hide();
        });
    });

    $(".top_menu").click(function () {
        let size = $(".chat_window").height();
        if (size == 60) {
            $(".chat_window").animate({
                height: "500"
            });
        }else{
            $(".chat_window").animate({
                height: "60"
            });
        }
    });

    $(".button.minimize").click(function () {
        let size = $(".chat_window").height();
        if(size == 500)
            $(".chat_window").animate({
                height: "60"
            });
    });

    $(".button.maximize").click(function () {
        $(".chat_window").animate({
            height: "500"
        });
    });
});
