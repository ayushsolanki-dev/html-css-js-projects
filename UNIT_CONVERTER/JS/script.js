function ONKEYPRESS_KEYCODE(event)
{
    var KEYCODE = event.which;
    // alert(KEYCODE);

    if (KEYCODE>=48 && KEYCODE<=57 || KEYCODE==46) 
    {
        return true;    
    }
    else
    {
        return false;
    }
}
function meter_converter()
{
    var oper = parseFloat(document.getElementById("input_value").value);
    var unit_one = document.getElementById("op").value;
    var unit_two = document.getElementById("op1").value;
    var INPUT_VALUE = document.getElementById("input_value").value;
    
    if(unit_one=="meter" && unit_two=="meter" && INPUT_VALUE=="") 
    {
        document.getElementById("result_id").value="Plz Enter Number !!";
        document.getElementById("result_id").style.color="red"; 
    }
    else if (unit_one=="meter" && unit_two=="kilometer" && INPUT_VALUE=="") 
    {
        document.getElementById("result_id").value="Plz Enter Number !!";
        document.getElementById("result_id").style.color="red";
    }
    else if (unit_one=="meter" && unit_two=="centimeter" && INPUT_VALUE=="") 
    {
        document.getElementById("result_id").value="Plz Enter Number !!";
        document.getElementById("result_id").style.color="red";
    }
    else if ((unit_one=="centimeter" && unit_two=="centimeter" && INPUT_VALUE=="") || (unit_one=="centimeter" && unit_two=="meter" && INPUT_VALUE=="") || (unit_one=="centimeter" && unit_two=="kilometer" && INPUT_VALUE==""))
    {
        document.getElementById("result_id").value="Plz Enter Number !!";
        document.getElementById("result_id").style.color="red";
    }
    else if ((unit_one=="kilometer" && unit_two=="kilometer" && INPUT_VALUE=="") || (unit_one=="kilometer" && unit_two=="centimeter" && INPUT_VALUE=="") || (unit_one=="kilometer" && unit_two=="meter" && INPUT_VALUE=="")) 
    {
        document.getElementById("result_id").value="Plz Enter Number !!";
        document.getElementById("result_id").style.color="red";       
    }
    else if(unit_one=="meter" && unit_two=="centimeter")
    {
        var c1 = oper*100;
        document.getElementById("result_id").value=c1+"cm";
    }
    else if(unit_one=="meter" && unit_two=="kilometer")
    {
        var k1 = oper/1000;
        document.getElementById("result_id").value=k1+"km";
    }
    else if(unit_one=="meter" && unit_two=="meter")
    {
        var m1 = oper;
        document.getElementById("result_id").value=oper+"m";
    }
    else if(unit_one=="centimeter" && unit_two=="meter")
    {
        var m2 = oper/100;
        document.getElementById("result_id").value=m2+"m";
    }
    else if(unit_one=="centimeter" && unit_two=="kilometer")
    {
        var k2 = oper/100000.0;
        document.getElementById("result_id").value=k2+"km";
    }
    else if(unit_one=="centimeter" && unit_two=="centimeter")
    {
        var c2 = oper;
        document.getElementById("result_id").value=c2+"cm";

    }
    else if(unit_one=="kilometer" && unit_two=="meter")
    {
        var m3 = oper * 1000;
        document.getElementById("result_id").value=m3+"m";
    }
    else if(unit_one=="kilometer" && unit_two=="centimeter")
    {
        var c3 = 100000 * oper;
        document.getElementById("result_id").value=c3+"cm";
    }
    else if(unit_one=="kilometer" && unit_two=="kilometer")
    {
        var k3 = oper;
        document.getElementById("result_id").value=k3+"km";
    }
    else if (unit_one=="sc" && unit_two=="sc1") 
    {
        document.getElementById("result_id").value="";
        document.getElementById("op").value="sc";  
        document.getElementById("op1").value="sc1";
    }
}
function update_value()
{
    var data = document.getElementById("input_value").value;
    var DATA_LENGTH = data.length;
    if (data.startsWith("0")) 
    {
        document.getElementById("input_value").value="";
        document.getElementById("op").value="sc";  
        document.getElementById("op1").value="sc1";
        document.getElementById("result_id").value="";
    }
    else if (DATA_LENGTH<=1) 
    {
        document.getElementById("op").value="sc";  
        document.getElementById("op1").value="sc1";
        document.getElementById("result_id").value="";
    }
    else
    {
        document.getElementById("op").value="sc";  
        document.getElementById("op1").value="sc1";
        document.getElementById("result_id").value="";
    }
}