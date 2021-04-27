var $header = $("#header"),
    $gnbLink = $(".gnb > li > a", $header);


$gnbLink.mouseenter(function () {
    var $this = $(this);
    $header.removeClass();
    if ($this.parent().parent().hasClass("gnb_b")) {
        $header.addClass("on").addClass("gnb_b");
    } else {
        $header.addClass("on").addClass("gnb_c");
    }
});
