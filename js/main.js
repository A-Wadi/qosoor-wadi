$(function () {
    $(".datepicker").datepicker();
});

function setPLinSearch() {
    $(".main #search").css("padding-left", $($(".main #search").next("button")).outerWidth(true) + 10)
}

$(document).ready(function () {
    setPLinSearch();
})

$(document).resize(function () {
    setPLinSearch();
})