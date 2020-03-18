// 动态获取img高度设置底部外边距
$(function() {
    var h1 = $(".promise li img").height();
    var h = h1 * .6;
    console.log(h);
    $(".promise").css({ "margin-bottom": h + "px" });

})