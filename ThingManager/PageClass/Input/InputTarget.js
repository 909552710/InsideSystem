function InputTarget() {
    this.txt = "任务目标";
    this.tips = "输入提示";
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