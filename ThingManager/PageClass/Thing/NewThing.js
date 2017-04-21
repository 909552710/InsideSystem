var newthing_page = {
    LoadPage: function () {
        var t = new InputTarget();
        var p = new SetPerson();
        var d = new SetDateTime();
        $("#page_container").html("<p>新建事务</p>" + t.html);
        $("#page_container").html($("#page_container").html() + p.html + d.html + "<input id='SubmitNewThing' type='button' value='提交' />");
    }
};

$(function () {

});