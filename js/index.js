$(function () {
    //当我们点击了小li 此时不需要执行 页面滚动事件里面的 li 的背景选择
    var flag = true; //节流阀（互斥锁）

    //显示与隐藏电梯导航
    toggleTool();
    $(window).scroll(function () {
        //1.显示与隐藏电梯导航
        toggleTool();
        //2.滚动到相应位置 电梯导航的li变色
        if (flag) {
            $(".floor .w").each(function (index, domEle) {
                if ($(document).scrollTop() >= $(domEle).offset().top) {
                    $(".fixedtool li").eq(index).addClass("current").siblings("li").removeClass("current");
                }
            })
        }
    })

    function toggleTool() {
        if ($(document).scrollTop() >= $(".recommed").offset().top) {
            $(".fixedtool").fadeIn();
        } else {
            $(".fixedtool").fadeOut();
        }
    }

    //点击电梯导航 滚动到相应区域
    $(".fixedtool ul").on("click", "li", function () {
        flag = false;
        var index = $(this).index();
        var Top = $(".floor .w").eq(index).offset().top;
        $("body,html").stop().animate({
            scrollTop: Top
        }, function () {
            flag = true; //开锁
        });
        $(this).addClass("current").siblings("li").removeClass("current");
    })
})