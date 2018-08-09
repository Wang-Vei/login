window.onload=function () {
    let user=document.getElementById("userName");
    let psw=document.getElementById("psw");
    let login1=document.getElementById("login1");
    console.log(login1,psw,user);

    login1.onclick=function () {
        if(user.value=="成功" && psw.value=="nuli"){
            alert("success");
            user.value="";
            psw.value="";
        }
        else{
            window.open("error.html");
        }
    }

}