function calculator_gst()
{
    var DATA = parseInt(document.getElementById("input1").value);
    var gst =  parseInt(document.getElementById("gst").value);

    var GST = document.getElementById("gst").value;
    var USER_AMOUNT = document.getElementById("input1").value;
    var DATE = document.getElementById("date_id").value;
    var UNAME = document.getElementById("uname").value;
    var COURSES = document.getElementById("cource").value;
    if (GST=="sc") 
    {
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
        document.getElementById("error_show_msg").innerText="Plz Select Gst options !!";
    }
    else if((gst==5 && USER_AMOUNT=="") || (gst==10 && USER_AMOUNT=="") || (gst==15 && USER_AMOUNT=="") || (gst==20 && USER_AMOUNT=="")) 
    {
        document.getElementById("first").value="Plz Enter Amount !!";
        document.getElementById("first").style.color="red";
        document.getElementById("second").value="Plz Enter Amount !!";
        document.getElementById("second").style.color="red";
        document.getElementById("third").value="Plz Enter Amount !!";
        document.getElementById("third").style.color="red";
        document.getElementById("fourth").value="Plz Enter Amount !!";
        document.getElementById("fourth").style.color="red";
    }
    else
    {
        var gst_cal=(DATA*gst)/100;
        document.getElementById("first").value=gst_cal;
        document.getElementById("first").style.color="black";
        document.getElementById("second").value=gst_cal/2;
        document.getElementById("second").style.color="black";
        document.getElementById("third").value=gst_cal/2;
        document.getElementById("third").style.color="black";
        document.getElementById("fourth").value=gst_cal+DATA;
        document.getElementById("fourth").style.color="black";
    }
    if (gst==5 && DATE=="" && UNAME=="" && COURSES=="sc1" && USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (gst==10 && DATE=="" && UNAME=="" && COURSES=="sc1" && USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (gst==15 && DATE=="" && UNAME=="" && COURSES=="sc1" && USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (gst==20 && DATE=="" && UNAME=="" && COURSES=="sc1" && USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    if (DATE>="1" && UNAME>="1" && COURSES=="java" && USER_AMOUNT>="1" && gst==5) 
    {
        document.getElementById("error_show_msg").innerText="";
        GST_1=true;
    }
    else if(DATE>="1" && UNAME>="1" && COURSES=="java" && USER_AMOUNT>="1" && gst==10) 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if(DATE>="1" && UNAME>="1" && COURSES=="java" && USER_AMOUNT>="1" && gst==15) 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if(DATE>="1" && UNAME>="1" && COURSES=="java" && USER_AMOUNT>="1" && gst==20) 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (DATE>="1" && UNAME>="1" && COURSES=="python" && USER_AMOUNT>="1" && gst==5) 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (DATE>="1" && UNAME>="1" && COURSES=="python" && USER_AMOUNT>="1" && gst==10) 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (DATE>="1" && UNAME>="1" && COURSES=="python" && USER_AMOUNT>="1" && gst==15) 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (DATE>="1" && UNAME>="1" && COURSES=="python" && USER_AMOUNT>="1" && gst==20) 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (DATE>="1" && UNAME>="1" && COURSES=="c/c++" && USER_AMOUNT>="1" && gst==5) 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (DATE>="1" && UNAME>="1" && COURSES=="c/c++" && USER_AMOUNT>="1" && gst==10) 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (DATE>="1" && UNAME>="1" && COURSES=="c/c++" && USER_AMOUNT>="1" && gst==15) 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (DATE>="1" && UNAME>="1" && COURSES=="c/c++" && USER_AMOUNT>="1" && gst==20) 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="sc1" && USER_AMOUNT>="1" && gst==5) 
    {
        document.getElementById("first").value="you are not select course !!";
        document.getElementById("first").style.color="red";
        document.getElementById("second").value="you are not select course !!";
        document.getElementById("second").style.color="red";
        document.getElementById("third").value="you are not select course !!";
        document.getElementById("third").style.color="red";
        document.getElementById("fourth").value="you are not select course !!";
        document.getElementById("fourth").style.color="red";
    }
    else if (COURSES=="sc1" && USER_AMOUNT>="1" && gst==10) 
    {
        document.getElementById("first").value="you are not select course !!";
        document.getElementById("first").style.color="red";
        document.getElementById("second").value="you are not select course !!";
        document.getElementById("second").style.color="red";
        document.getElementById("third").value="you are not select course !!";
        document.getElementById("third").style.color="red";
        document.getElementById("fourth").value="you are not select course !!";
        document.getElementById("fourth").style.color="red";
    }
    else if (COURSES=="sc1" && USER_AMOUNT>="1" && gst==15) 
    {
        document.getElementById("first").value="you are not select course !!";
        document.getElementById("first").style.color="red";
        document.getElementById("second").value="you are not select course !!";
        document.getElementById("second").style.color="red";
        document.getElementById("third").value="you are not select course !!";
        document.getElementById("third").style.color="red";
        document.getElementById("fourth").value="you are not select course !!";
        document.getElementById("fourth").style.color="red";
    }
    else if (COURSES=="sc1" && USER_AMOUNT>="1" && gst==20) 
    {
        document.getElementById("first").value="you are not select course !!";
        document.getElementById("first").style.color="red";
        document.getElementById("second").value="you are not select course !!";
        document.getElementById("second").style.color="red";
        document.getElementById("third").value="you are not select course !!";
        document.getElementById("third").style.color="red";
        document.getElementById("fourth").value="you are not select course !!";
        document.getElementById("fourth").style.color="red";
    }
    else if (COURSES=="java" && USER_AMOUNT=="" && gst==5 && DATE=="" && UNAME=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="java" && USER_AMOUNT=="" && gst==10 && DATE=="" && UNAME=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="java" && USER_AMOUNT=="" && gst==15 && DATE=="" && UNAME=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="java" && USER_AMOUNT=="" && gst==20 && DATE=="" && UNAME=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="python" && USER_AMOUNT=="" && gst==5 && DATE=="" && UNAME=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="python" && USER_AMOUNT=="" && gst==10 && DATE=="" && UNAME=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="python" && USER_AMOUNT=="" && gst==15 && DATE=="" && UNAME=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="python" && USER_AMOUNT=="" && gst==20 && DATE=="" && UNAME=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="c/c++" && USER_AMOUNT=="" && gst==5 && DATE=="" && UNAME=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="c/c++" && USER_AMOUNT=="" && gst==10 && DATE=="" && UNAME=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="c/c++" && USER_AMOUNT=="" && gst==15 && DATE=="" && UNAME=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="c/c++" && USER_AMOUNT=="" && gst==20 && DATE=="" && UNAME=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="java" && gst==5 && USER_AMOUNT>="1" && UNAME=="" && DATE=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="java" && gst==10 && USER_AMOUNT>="1" && UNAME=="" && DATE=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="java" && gst==15 && USER_AMOUNT>="1" && UNAME=="" && DATE=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="java" && gst==20 && USER_AMOUNT>="1" && UNAME=="" && DATE=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="python" && gst==5 && USER_AMOUNT>="1" && UNAME=="" && DATE=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="python" && gst==10 && USER_AMOUNT>="1" && UNAME=="" && DATE=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="python" && gst==15 && USER_AMOUNT>="1" && UNAME=="" && DATE=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="python" && gst==20 && USER_AMOUNT>="1" && UNAME=="" && DATE=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="c/c++" && gst==5 && USER_AMOUNT>="1" && UNAME=="" && DATE=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="c/c++" && gst==10 && USER_AMOUNT>="1" && UNAME=="" && DATE=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="c/c++" && gst==15 && USER_AMOUNT>="1" && UNAME=="" && DATE=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="c/c++" && gst==20 && USER_AMOUNT>="1" && UNAME=="" && DATE=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
}

function ONCHANGE_CHECK_COURSES()
{
    var COURSES = document.getElementById("cource").value;
    var DATE = document.getElementById("date_id").value;
    var UNAME = document.getElementById("uname").value;
    var USER_AMOUNT = document.getElementById("input1").value;
    var GST = document.getElementById("gst").value;


    if (COURSES=="sc1") 
    {
        document.getElementById("input1").value="";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
        document.getElementById("error_show_msg").innerText="Plz select course !!";
    }
    else if (COURSES=="java") 
    {
        document.getElementById("input1").value="";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";   
    }
    else if (COURSES=="python") 
    {
        document.getElementById("input1").value="";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="c/c++") 
    {
        document.getElementById("input1").value="";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    if (DATE>="1" && UNAME>="1" && COURSES=="java") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else if (DATE>="1" && UNAME>="1" && COURSES=="python") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else if (DATE>="1" && UNAME>="1" && COURSES=="c/c++") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    if(COURSES=="java" && DATE=="" && UNAME=="" && USER_AMOUNT=="" && GST=="sc") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if(COURSES=="python" && DATE=="" && UNAME=="" && USER_AMOUNT=="" && GST=="sc") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if(COURSES=="c/c++" && DATE=="" && UNAME=="" && USER_AMOUNT=="" && GST=="sc") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="java" && UNAME>="1" && USER_AMOUNT=="" && DATE=="" && GST=="sc") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="python" && UNAME>="1" && USER_AMOUNT=="" && DATE=="" && GST=="sc") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="c/c++" && UNAME>="1" && USER_AMOUNT=="" && DATE=="" && GST=="sc") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
}

function ONCHANGE_DATE()
{
    var GST = document.getElementById("gst").value;
    var DATE = document.getElementById("date_id").value;
    var UNAME = document.getElementById("uname").value;
    var COURSES = document.getElementById("cource").value;
    var USER_AMOUNT = document.getElementById("input1").value;
    var gst =  parseInt(document.getElementById("gst").value);
    if (DATE=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (DATE>="1" && UNAME=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
    }
    else if (gst==5 && DATE>="1" && UNAME>="1" && COURSES=="java") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else if (gst==10 && DATE>="1" && UNAME>="1" && COURSES=="java") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else if (gst==15 && DATE>="1" && UNAME>="1" && COURSES=="java") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else if (gst==20 && DATE>="1" && UNAME>="1" && COURSES=="java") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else if (gst==5 && DATE>="1" && UNAME>="1" && COURSES=="python") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else if (gst==10 && DATE>="1" && UNAME>="1" && COURSES=="python") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else if (gst==15 && DATE>="1" && UNAME>="1" && COURSES=="python") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else if (gst==20 && DATE>="1" && UNAME>="1" && COURSES=="python") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else if (gst==5 && DATE>="1" && UNAME>="1" && COURSES=="c/c++") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else if (gst==10 && DATE>="1" && UNAME>="1" && COURSES=="c/c++") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else if (gst==15 && DATE>="1" && UNAME>="1" && COURSES=="c/c++") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else if (gst==20 && DATE>="1" && UNAME>="1" && COURSES=="c/c++") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else
    {
        document.getElementById("error_show_msg").innerText="";
        document.getElementById("error_show_msg").innerText="Plz Select Course !!";
    }
    if (COURSES=="java" && USER_AMOUNT>="1" && gst==5 && UNAME>="1" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="java" && USER_AMOUNT>="1" && gst==10 && UNAME>="1" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="java" && USER_AMOUNT>="1" && gst==15 && UNAME>="1" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="java" && USER_AMOUNT>="1" && gst==20 && UNAME>="1" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="python" && USER_AMOUNT>="1" && gst==5 && UNAME>="1" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="python" && USER_AMOUNT>="1" && gst==10 && UNAME>="1" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="python" && USER_AMOUNT>="1" && gst==15 && UNAME>="1" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="python" && USER_AMOUNT>="1" && gst==20 && UNAME>="1" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="c/c++" && USER_AMOUNT>="1" && gst==5 && UNAME>="1" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="c/c++" && USER_AMOUNT>="1" && gst==10 && UNAME>="1" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="c/c++" && USER_AMOUNT>="1" && gst==15 && UNAME>="1" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="c/c++" && USER_AMOUNT>="1" && gst==20 && UNAME>="1" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }

    if (COURSES=="java" && DATE>="1" && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else if (COURSES=="python" && DATE>="1" && UNAME>="1")
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else if (COURSES=="c/c++" && DATE>="1" && UNAME>="1")
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    if(COURSES=="java" && DATE>="1" && UNAME>="1" && USER_AMOUNT>="1" && GST=="sc") 
    {
        document.getElementById("error_show_msg").innerText="plz select gst options !!";
    }
    else if(COURSES=="python" && DATE>="1" && UNAME>="1" && USER_AMOUNT>="1" && GST=="sc") 
    {
        document.getElementById("error_show_msg").innerText="plz select gst options !!";
    }
    else if(COURSES=="c/c++" && DATE>="1" && UNAME>="1" && USER_AMOUNT>="1" && GST=="sc") 
    {
        document.getElementById("error_show_msg").innerText="plz select gst options !!";
    }
    else if (gst==5 && COURSES=="sc1" && USER_AMOUNT=="" && UNAME=="" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (gst==10 && COURSES=="sc1" && USER_AMOUNT=="" && UNAME=="" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (gst==15 && COURSES=="sc1" && USER_AMOUNT=="" && UNAME=="" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (gst==20 && COURSES=="sc1" && USER_AMOUNT=="" && UNAME=="" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="java" && gst==5 && UNAME=="" && USER_AMOUNT=="" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="java" && gst==10 && UNAME=="" && USER_AMOUNT=="" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="java" && gst==15 && UNAME=="" && USER_AMOUNT=="" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="java" && gst==20 && UNAME=="" && USER_AMOUNT=="" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="python" && gst==5 && UNAME=="" && USER_AMOUNT=="" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="python" && gst==10 && UNAME=="" && USER_AMOUNT=="" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="python" && gst==15 && UNAME=="" && USER_AMOUNT=="" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="python" && gst==20 && UNAME=="" && USER_AMOUNT=="" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="c/c++" && gst==5 && UNAME=="" && USER_AMOUNT=="" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="c/c++" && gst==10 && UNAME=="" && USER_AMOUNT=="" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="c/c++" && gst==15 && UNAME=="" && USER_AMOUNT=="" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="c/c++" && gst==20 && UNAME=="" && USER_AMOUNT=="" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (UNAME>="1" && USER_AMOUNT>='1' && gst==5 && COURSES=="java" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (UNAME>="1" && USER_AMOUNT>='1' && gst==10 && COURSES=="java" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (UNAME>="1" && USER_AMOUNT>='1' && gst==15 && COURSES=="java" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (UNAME>="1" && USER_AMOUNT>='1' && gst==20 && COURSES=="java" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (UNAME>="1" && USER_AMOUNT>='1' && gst==5 && COURSES=="python" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (UNAME>="1" && USER_AMOUNT>='1' && gst==10 && COURSES=="python" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (UNAME>="1" && USER_AMOUNT>='1' && gst==15 && COURSES=="python" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (UNAME>="1" && USER_AMOUNT>='1' && gst==20 && COURSES=="python" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (UNAME>="1" && USER_AMOUNT>='1' && gst==5 && COURSES=="c/c++" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (UNAME>="1" && USER_AMOUNT>='1' && gst==10 && COURSES=="c/c++" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (UNAME>="1" && USER_AMOUNT>='1' && gst==15 && COURSES=="c/c++" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (UNAME>="1" && USER_AMOUNT>='1' && gst==20 && COURSES=="c/c++" && DATE>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (UNAME>="1" && DATE>="1" && COURSES=="java" && gst==5 && USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (UNAME>="1" && DATE>="1" && COURSES=="java" && gst==10 && USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (UNAME>="1" && DATE>="1" && COURSES=="java" && gst==15 && USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (UNAME>="1" && DATE>="1" && COURSES=="java" && gst==20 && USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (UNAME>="1" && DATE>="1" && COURSES=="python" && gst==5 && USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (UNAME>="1" && DATE>="1" && COURSES=="python" && gst==10 && USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (UNAME>="1" && DATE>="1" && COURSES=="python" && gst==15 && USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (UNAME>="1" && DATE>="1" && COURSES=="python" && gst==20 && USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (UNAME>="1" && DATE>="1" && COURSES=="c/c++" && gst==5 && USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (UNAME>="1" && DATE>="1" && COURSES=="c/c++" && gst==10 && USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (UNAME>="1" && DATE>="1" && COURSES=="c/c++" && gst==15 && USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (UNAME>="1" && DATE>="1" && COURSES=="c/c++" && gst==20 && USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
}

function ONKEYUP_STUDENT_NAME()
{
    var gst =  parseInt(document.getElementById("gst").value);
    var UNAME = document.getElementById("uname").value;
    var DATE = document.getElementById("date_id").value;
    var COURSES = document.getElementById("cource").value;
    var USER_AMOUNT = document.getElementById("input1").value;
    var GST = document.getElementById("gst").value;
    if (UNAME=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
    }
    else if (UNAME>="1" && DATE=="") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (UNAME>="1" && DATE>="1" && COURSES=="java") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";    
    }
    else if (UNAME>="1" && DATE>="1" && COURSES=="python") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";    
    }
    else if (UNAME>="1" && DATE>="1" && COURSES=="c/c++") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";    
    }
    else
    {
        document.getElementById("error_show_msg").innerText="";
        document.getElementById("error_show_msg").innerText="Plz Select Course !!";
    }
    if (COURSES=="java" && USER_AMOUNT>="1" && gst==5 && DATE>="1" && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="java" && USER_AMOUNT>="1" && gst==10 && DATE>="1" && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="java" && USER_AMOUNT>="1" && gst==15 && DATE>="1" && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="java" && USER_AMOUNT>="1" && gst==20 && DATE>="1" && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="python" && USER_AMOUNT>="1" && gst==5 && DATE>="1" && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="python" && USER_AMOUNT>="1" && gst==10 && DATE>="1" && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="python" && USER_AMOUNT>="1" && gst==15 && DATE>="1" && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="python" && USER_AMOUNT>="1" && gst==20 && DATE>="1" && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="c/c++" && USER_AMOUNT>="1" && gst==5 && DATE>="1" && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="c/c++" && USER_AMOUNT>="1" && gst==10 && DATE>="1" && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="c/c++" && USER_AMOUNT>="1" && gst==15 && DATE>="1" && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    else if (COURSES=="c/c++" && USER_AMOUNT>="1" && gst==20 && DATE>="1" && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="";
    }
    if (COURSES=="java" && DATE>="1" && USER_AMOUNT>="1" && GST=="sc" && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="plz select gst options !!";
    }
    else if (COURSES=="python" && DATE>="1" && USER_AMOUNT>="1" && GST=="sc" && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="plz select gst options !!";
    }
    else if (COURSES=="c/c++" && DATE>="1" && USER_AMOUNT>="1" && GST=="sc" && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="plz select gst options !!";
    }
    else if (COURSES=="java" && DATE=="" && USER_AMOUNT=="" && gst==5 && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="java" && DATE=="" && USER_AMOUNT=="" && gst==10 && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="java" && DATE=="" && USER_AMOUNT=="" && gst==15 && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="java" && DATE=="" && USER_AMOUNT=="" && gst==20 && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="python" && DATE=="" && USER_AMOUNT=="" && gst==5 && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="python" && DATE=="" && USER_AMOUNT=="" && gst==10 && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="python" && DATE=="" && USER_AMOUNT=="" && gst==15 && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="python" && DATE=="" && USER_AMOUNT=="" && gst==20 && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="c/c++" && DATE=="" && USER_AMOUNT=="" && gst==5 && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="c/c++" && DATE=="" && USER_AMOUNT=="" && gst==10 && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="c/c++" && DATE=="" && USER_AMOUNT=="" && gst==15 && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
    else if (COURSES=="c/c++" && DATE=="" && USER_AMOUNT=="" && gst==20 && UNAME>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
    }
}

function ONKEYUP_AMOUNT()
{
    var GST = document.getElementById("gst").value;
    var USER_AMOUNT = document.getElementById("input1").value;
    var AMOUNT_LENGTH = USER_AMOUNT.length;
    var DATE = document.getElementById("date_id").value;
    var UNAME = document.getElementById("uname").value;
    var COURSES = document.getElementById("cource").value;
    var gst =  parseInt(document.getElementById("gst").value);

    if(USER_AMOUNT.startsWith("0")) 
    {
        document.getElementById("input1").value="";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
        document.getElementById("gst").value="sc";
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    else if(USER_AMOUNT<="1") 
    {
        document.getElementById("gst").value="sc";
        document.getElementById("first").value="";
        document.getElementById("second").value="";
        document.getElementById("third").value="";
        document.getElementById("fourth").value="";
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    if (DATE>="1" && UNAME>="1" && COURSES=="java" && USER_AMOUNT>="1" && GST=="sc") 
    {
        document.getElementById("error_show_msg").innerText="plz select gst options !!";
    }
    if (DATE>="1" && UNAME>="1" && COURSES=="python" && USER_AMOUNT>="1" && GST=="sc") 
    {
        document.getElementById("error_show_msg").innerText="plz select gst options !!";
    }
    if (DATE>="1" && UNAME>="1" && COURSES=="c/c++" && USER_AMOUNT>="1" && GST=="sc") 
    {
        document.getElementById("error_show_msg").innerText="plz select gst options !!";
    }
    if (USER_AMOUNT=="") 
    {
        document.getElementById("error_show_msg").innerText="plz enter amount !!";
    }
    if (UNAME=="" && DATE=="" && COURSES=="sc1" && GST=="sc" && USER_AMOUNT>="1")  
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if(COURSES=="java" && DATE=="" && UNAME=="" && GST=="sc" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="python" && DATE=="" && UNAME=="" && GST=="sc" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (COURSES=="c/c++" && DATE=="" && UNAME=="" && GST=="sc" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    if (gst==5 && UNAME=="" && DATE=="" && COURSES=="sc1" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (gst==10 && UNAME=="" && DATE=="" && COURSES=="sc1" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";  
    }
    else if (gst==15 && UNAME=="" && DATE=="" && COURSES=="sc1" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";  
    }
    else if (gst==20 && UNAME=="" && DATE=="" && COURSES=="sc1" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (gst==5 && UNAME=="" && DATE=="" && COURSES=="java" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (gst==10 && UNAME=="" && DATE=="" && COURSES=="java" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (gst==15 && UNAME=="" && DATE=="" && COURSES=="java" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (gst==20 && UNAME=="" && DATE=="" && COURSES=="java" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (gst==5 && UNAME=="" && DATE=="" && COURSES=="python" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (gst==10 && UNAME=="" && DATE=="" && COURSES=="python" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (gst==15 && UNAME=="" && DATE=="" && COURSES=="python" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (gst==20 && UNAME=="" && DATE=="" && COURSES=="python" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (gst==5 && UNAME=="" && DATE=="" && COURSES=="c/c++" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (gst==10 && UNAME=="" && DATE=="" && COURSES=="c/c++" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (gst==15 && UNAME=="" && DATE=="" && COURSES=="c/c++" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    else if (gst==20 && UNAME=="" && DATE=="" && COURSES=="c/c++" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Date !!";
    }
    if (DATE>="1" && UNAME>="1" && GST=="sc" && COURSES>="sc1" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Select Course !!";
    }
    else if (DATE>="1" && UNAME=="" && COURSES=="sc1" && GST=="sc" && USER_AMOUNT>="1") 
    {
        document.getElementById("error_show_msg").innerText="Plz Fill Your Name !!";
    }
    if (USER_AMOUNT=="") 
    {
        document.getElementById("discount_btn").disabled=true; 
    }
    else
    {
        document.getElementById("discount_btn").disabled=false;
    }
}
function ONKEYPRESS_KEYCODE(event)
{
    var KEYCODE = event.which;
    // alert(KEYCODE);
    if((KEYCODE>=65 && KEYCODE<=90) || (KEYCODE>=97 && KEYCODE<=122) || (KEYCODE==32)) 
    {
        return true;    
    }
    else
    {
        event.preventDefault();
        return false;
    }
}

function ONKEYPRESS_KEYCODE_AMOUNT(event)
{
    var USER_AMOUNT = document.getElementById("input1").value;
    var KEYCODE = event.which;
    // alert(KEYCODE);

    if (USER_AMOUNT.startsWith("0")) 
    {
        document.getElementById("input1").value="";    
    }
    else if(KEYCODE>=48 && KEYCODE<=57) 
    {
        return true;    
    }
    else
    {
        event.preventDefault();
        return false;
    }
}

function ONCLICK_DISCOUNT_BTN()
{
    var AMOUNT_VALUE = document.getElementById("input1").value;
    var DISCOUNT_OFFER = (Math.random()*10).toFixed(2);

    var DISCOUNT_PRICE = (AMOUNT_VALUE*DISCOUNT_OFFER)/100;
    
    var PAY_FEE = AMOUNT_VALUE-DISCOUNT_OFFER;
    document.getElementById("discount_btn_offer").style.display="block";
    document.getElementById("gst").disabled=false;
    document.getElementById("first").disabled=false;
    document.getElementById("second").disabled=false;
    document.getElementById("third").disabled=false;
    document.getElementById("fourth").disabled=false;
    document.getElementById("t_p_d").innerText="Total Percentage Discount :- "+DISCOUNT_OFFER+"%";
    document.getElementById("d_price").innerText="Discount Price :- "+DISCOUNT_PRICE.toFixed(2);
    document.getElementById("ori_amount_id").innerText="Original Amount :- "+AMOUNT_VALUE;
    document.getElementById("pay_fee").innerText="Pay Fee :- "+PAY_FEE;
    document.getElementById("input1").value=PAY_FEE;
    document.getElementById("discount_btn").disabled=true;
}