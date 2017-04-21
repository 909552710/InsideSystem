function InputTarget() {
    this.txt = "目标 / 需求 / 描述";
    this.tips = "";
    this.html = "<ul>" +
                    "<li>" + this.txt + "</li>" +
                    "<li>" +
                        "<textarea>" + this.tips + "</textarea>" +
                    "</li>" +
                "</ul>";
}



//function Target_base() { }
//    Target_base.prototype.txt = "";
//    Target_base.prototype.tips = "";
//    Target_base.prototype.html = "";



//extend(Target_Input, Target_base);