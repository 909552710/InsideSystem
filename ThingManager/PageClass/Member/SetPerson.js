function SetPerson() {
    this.txt = "参与人：";
    this.button = new MemberButton();
    this.html = "<ul>" +
                    "<li>" + this.txt + "</li>" +
                    "<li>" + this.button.html + "</li>" +
                "</ul>";
}

function MemberButton() {
    this.id = "member_button";
    this.btn_txt = "选择人员";
    this.btn_style = "";        //class name
    this.html = "<input id='" + this.id + "' class='" + this.btn_style + "' type='button' onclick='ChoosePerson()' value='" + this.btn_txt + "' />";
}


function ChoosePerson() {
    alert("弹出人员列表");
} 