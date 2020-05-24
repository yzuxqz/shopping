$(function () {
    sum_all_num();
    sum_all_price();
    //全选功能
    // 1.把全选按钮的状态赋值给单个按钮和另一个全选按钮
    $(".checkall").change(function () {
        $(".j-checkbox,.checkall").prop("checked", $(this).prop("checked"));
        //3.点全选修改背景色
        if ($(this).prop("checked")) {
            $(".cart-item").addClass("check-cart-item");
        } else {
            $(".cart-item").removeClass("check-cart-item");
        }
        //4.点击单个复选框修改总数量和总额
        sum_all_num();
        sum_all_price();
    })

    // 2.每次点击小按钮就判断：小复选框选中个数是否为3
    $(".j-checkbox").change(function () {
        if ($(".j-checkbox:checked").length === $(".j-checkbox").length) {
            $(".checkall").prop("checked", true);
        } else {
            $(".checkall").prop("checked", false);
        }
        //3.点单个按钮修改背景色
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item").addClass("check-cart-item");
        } else {
            $(this).parents(".cart-item").removeClass("check-cart-item");
        }
        //4.点击单个复选框修改总数量和总额
        sum_all_num();
        sum_all_price();
    })

    //按钮增减商品数量功能
    $(".increment").click(function () {
        // 1.变量的初始值是文本框的值
        var amount = $(this).siblings(".itxt").val();
        amount++;
        $(this).siblings("input").val(amount);
        //2.商品小计价格
        var sum = $(this).parents(".p-num").siblings(".p-price").html();
        sum = sum.substr(1) * amount;
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + sum.toFixed(2));
        //4.更新总数量和总价格
        sum_all_num();
        sum_all_price();
    })
    $(".decrement").click(function () {
        // 1.变量的初始值是文本框的值
        var amount = $(this).siblings(".itxt").val();
        //3.如果商品数量为1，不呢再减
        if (amount == 1) {
            return false;
        }
        amount--;
        $(this).siblings("input").val(amount);
        //2.商品小计价格
        var sum = $(this).parents(".p-num").siblings(".p-price").html();
        sum = sum.substr(1) * amount;
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + sum.toFixed(2));
        //4.更新总数量和总价格
        sum_all_num();
        sum_all_price();
    })

    //文本框输入修改商品数量功能
    $(".itxt").change(function () {
        //1.变量的初值是文本框的值
        var amount = $(this).val();
        //2.商品小计价格
        var sum = $(this).parents(".p-num").siblings(".p-price").html();
        sum = sum.substr(1) * amount;
        $(this).parents(".p-num").siblings(".p-sum").html("￥" + sum.toFixed(2));
        //3.更新总数量和总价格
        sum_all_num();
        sum_all_price();
    })

    //删除商品
    // 1.商品后面的删除按钮
    $(".p-action").click(function () {
        $(this).parent().remove();
        sum_all_num();
        sum_all_price();
    })
    //2.删除选中的商品
    $(".remove-batch").click(function () {
        $(".j-checkbox:checked").parents(".cart-item").remove();
        sum_all_num();
        sum_all_price();
    })
    //3.清理购物车
    $(".clear-all").click(function () {
        $(".cart-item").remove();
        sum_all_num();
        sum_all_price();
    })

    //商品总计数量
    function sum_all_num() {
        var sum_num = 0;
        $(".j-checkbox:checked").each(function (index, domEle) {
            sum_num += parseInt($(domEle).parent().siblings(".p-num").find(".itxt").val());
        });
        $(".amount-sum em").html(sum_num);
    }

    //商品总计价格
    function sum_all_price() {
        var sum_price = 0;
        $(".j-checkbox:checked").each(function (index, domEle) {
            sum_price += parseFloat($(domEle).parent().siblings(".p-sum").html().substr(1));
        });
        $(".price-sum em").html("￥" + sum_price.toFixed(2));
    }
})