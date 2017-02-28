//根据hash获取对应page对象
var hash2page = {
//        "#rw_list": rw_list_page,
//        "#rw_detail": rw_detail_page,
//        "#rw_create": rw_create_page,
//        "": rw_list_page
};

var LoadPage = function (page) {
    if (page.LoadPage instanceof Function) {
        page.LoadPage();
    }
};

$(function () {
    $(window).on('hashchange', function (e) {
        alert("tttt");
        //LoadPage(hash2page[location.hash]);
    });

    LoadPage(newthing_page);
    //LoadPage(hash2page[location.hash]);
});
