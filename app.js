function change(){
    var img=document.getElementById("bulb");
    if(img.src.match("off"))
    {
        img.src="OFF BULB.jfif";

    }
    else{
        img.src="ON BULB.jfif";
    }
}