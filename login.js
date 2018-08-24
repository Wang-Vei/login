window.onload=function () {
    let user=document.getElementById("userName");
    let psw=document.getElementById("psw");
    let login1=document.getElementById("login1");
    console.log(login1,psw,user);

    login1.onclick=function () {
        if(user.value=="李双亚" && psw.value=="19970508"){
            alert("遇见你很开心，感谢遇见，感谢你！");
            user.value="";
            psw.value="";
        }
        else{
            window.open("error.html");
        }
    }

}