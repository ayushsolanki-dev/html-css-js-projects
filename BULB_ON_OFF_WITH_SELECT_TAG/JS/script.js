function ONCHANGE_BULB()
{
    var OPER = document.getElementById("op").value;
    if (OPER=="green") 
    {
        document.getElementById("on_btn").disabled=false;
    }
    else if (OPER=="red") 
    {
        document.getElementById("on_btn").disabled=false;
    }
    else if (OPER=="blue") 
    {
        document.getElementById("on_btn").disabled=false;   
    }
    else if(OPER=="yellow")
    {
        document.getElementById("on_btn").disabled=false;
    }
    else if (OPER=="sc") 
    {
        document.getElementById("on_btn").disabled=true;
    }
}

function ONCLICK_ON_BTN()
{
    var OPER = document.getElementById("op").value;
    // var ON_BTN = document.getElementById("on_btn");
    var IMG = document.getElementById("off_bulb_img");
    if (OPER=="green") 
    {
        document.getElementById("off_bulb_img").src="./IMAGES/green_bulb.png";
        document.getElementById("op").disabled=true;
        document.getElementById("off_btn").disabled=false;
        document.getElementById("on_btn").disabled=true;
        IMG.classList.add("ALL_BULB_IMG");
    }
    else if (OPER=="red") 
    {
        document.getElementById("off_bulb_img").src="./IMAGES/red_bulb.png";
        document.getElementById("op").disabled=true;
        document.getElementById("off_btn").disabled=false;
        document.getElementById("on_btn").disabled=true;
        IMG.classList.add("ALL_BULB_IMG");
    }
    else if (OPER=="blue") 
    {
        document.getElementById("off_bulb_img").src="./IMAGES/blue_bulb.png";
        document.getElementById("op").disabled=true;
        document.getElementById("off_btn").disabled=false;
        document.getElementById("on_btn").disabled=true;
    }
    else if (OPER=="yellow") 
    {
        document.getElementById("off_bulb_img").src="./IMAGES/yellow_bulb.png";
        document.getElementById("op").disabled=true;
        document.getElementById("off_btn").disabled=false;
        document.getElementById("on_btn").disabled=true;
        IMG.classList.add("ALL_BULB_IMG");
    }
}

function ONCLICK_OFF_BTN()
{
    document.getElementById("op").value="sc"
    document.getElementById("op").disabled=false;
    document.getElementById("off_bulb_img").src="./IMAGES/off_bulb.png";
    document.getElementById("off_btn").disabled=true;
}