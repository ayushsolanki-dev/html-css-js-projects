
var UNAME_1 = false;
var AGE_1 = false;
var EMAIL_1 = false;
var PASS_1 = false;
var MOBILE_1 = false;
var DOB_1 = false;
var TOB_1 = false;
var CAPTCHA_1 = false;
var GENDER_1 = false;
var HOBBY_1 = false;

function f()
{

    var d = new Date();
    document.getElementById("show_timer").innerText=d.toLocaleTimeString("en-us");
    setInterval(function()
    {
        var d = new Date(); 
        document.getElementById("show_timer").innerText=d.toLocaleTimeString("en-us");
    },1000);

    var currentHours = d.getHours();
    if (currentHours>=4 && currentHours<12) 
    {
        document.getElementById("sun_img").src="/IMAGES/sun.jpg";
        document.getElementById("good_msg").innerText="Good Mornning";
        document.getElementById("good_msg").style.color="Yellow";  
    }
    else if (currentHours>=12 && currentHours<16) 
    {
        document.getElementById("sun_img").src="/IMAGES/afternoon_img.avif";
        document.getElementById("good_msg").innerText="Good Afternoon";
        document.getElementById("good_msg").style.color="#FFD700";
    }
    else if (currentHours>=16 && currentHours<19)
    {
        document.getElementById("sun_img").src="/IMAGES/good_evenning.webp";
        document.getElementById("good_msg").innerText="Good Evening";
        document.getElementById("good_msg").style.color="orange";
    }
    else
    {
        document.getElementById("sun_img").src="/IMAGES/good_night.jpg";
        document.getElementById("good_msg").innerText="Good Night";
        document.getElementById("good_msg").style.color="gray";
    }
    GENERATE_CAPTCHA();
}

function form_validation()
{
    var Main_Result = false;
    var RESULT = true;
    var UNAME = document.getElementById("uname_id").value;
    if (UNAME=="") 
    {
        document.getElementById("uname_show_msg").innerText="Plz Fill Name !!";
        document.getElementById("uname_id").style.border="3px solid red";
        RESULT=false; 
    }
    var AGE = document.getElementById("age_id").value;
    if (AGE=="") 
    {
        document.getElementById("age_show_msg").innerText="Plz Fill Age !!";
        document.getElementById("age_id").style.border="3px solid red";
        RESULT=false;
    }
    var EMAIL = document.getElementById("email_id").value;
    if (EMAIL=="") 
    {
        document.getElementById("email_show_msg").innerText="Plz Fill Email ID !!";
        document.getElementById("email_id").style.border="3px solid red";
        RESULT=false;
    }
    var PASS = document.getElementById("pass_id").value;
    if (PASS=="") 
    {
        document.getElementById("pass_show_msg").innerText="Plz Fill Password !!";
        document.getElementById("pass_id").style.border="3px solid red";
        RESULT=false;    
    }
    var MOBILE = document.getElementById("mobile_id").value;
    if (MOBILE=="") 
    {
        document.getElementById("mobile_show_msg").innerText="Plz Fill Mobile No !!";
        document.getElementById("mobile_id").style.border="3px solid red";
        RESULT=false;    
    }
    var DOB = document.getElementById("dob_id").value;
    if (DOB=="") 
    {
        document.getElementById("dob_show_msg").innerText="Plz Fill DOB !!";
        document.getElementById("dob_id").style.border="3px solid red";
        RESULT=false;    
    }
    var TOB = document.getElementById("tob_id").value;
    if (TOB=="") 
    {
        document.getElementById("tob_show_msg").innerText="Plz Fill TOB !!";
        document.getElementById("tob_id").style.border="3px solid red";
        RESULT=false;    
    }
    var CAPTCHA = document.getElementById("captcha_id").value;
    if (CAPTCHA=="") 
    {
        document.getElementById("captcha_show_msg").innerText="Plz Fill Captcha !!";
        document.getElementById("captcha_id").style.border="3px solid red";
        RESULT=false;    
    }

    var gender_result = false;
    var count_radio_button = document.getElementsByName("gender").length;
    var GENDER = document.getElementsByName("gender");
    for (var i = 0; i < count_radio_button; i++) 
    {
        if (GENDER[i].checked == true) 
        {
            gender_result = true;
            document.getElementById("gender_show_msg").innerText = "";
        }
    }
    if (gender_result == false) 
    {
        document.getElementById("gender_show_msg").innerText = "Plz Select Gender !!";
    }

    var hobby_result = false;
    var checkboxcount = 0;
    var count_check_box = document.getElementsByName("hobby").length;
    var HOBBY = document.getElementsByName("hobby");
    for (var i = 0; i < count_check_box; i++) 
    {
        if (HOBBY[i].checked == true) 
        {
            checkboxcount++;
        }
    }
    if (checkboxcount == 0) 
    {
        document.getElementById("hobby_show_msg").innerText = "Plz Select Options";
    }
    else if (checkboxcount == 1) 
    {
        document.getElementById("hobby_show_msg").innerText = "Plz Select At Least 2 Options !!";
    }
    else
    {
        hobby_result = true;
        document.getElementById("hobby_show_msg").innerText = "";
    }
    
    if (RESULT == false || gender_result == false || hobby_result == false)
    {
        Main_Result = false;
    }
    else
    {
        Main_Result = true;
    }
    return Main_Result;
}

function ONFOCUS_NAME()
{
    var UNAME = document.getElementById("uname_id").value;
    if (UNAME=="") 
    {
        document.getElementById("uname_show_msg").innerText="Plz Fill Name !!";
        document.getElementById("uname_id").style.border="3px solid red";
    }
}

function ONFOCUS_AGE()
{
    var AGE = document.getElementById("age_id").value;
    if (AGE=="") 
    {
        document.getElementById("age_show_msg").innerText="Plz Fill Age !!";
        document.getElementById("age_id").style.border="3px solid red";
    }
}

function ONFOCUS_EMAIL()
{
    var EMAIL = document.getElementById("email_id").value;
    if (EMAIL=="") 
    {
        document.getElementById("email_show_msg").innerText="Plz Fill Email ID !!";
        document.getElementById("email_id").style.border="3px solid red";
    }
}

function ONFOCUS_PASS()
{
    var PASS = document.getElementById("pass_id").value;
    if (PASS=="") 
    {
        document.getElementById("pass_show_msg").innerText="Plz Fill Password !!";
        document.getElementById("pass_id").style.border="3px solid red";
    }
}

function ONFOCUS_MOBILE()
{
    var MOBILE = document.getElementById("mobile_id").value;
    if (MOBILE=="") 
    {
        document.getElementById("mobile_show_msg").innerText="Plz Fill Mobile No !!";
        document.getElementById("mobile_id").style.border="3px solid red";
    }
}

function ONFOCUS_DOB()
{
    var DOB = document.getElementById("dob_id").value;
    if (DOB=="") 
    {
        document.getElementById("dob_show_msg").innerText="Plz Fill DOB !!";
        document.getElementById("dob_id").style.border="3px solid red";
    }
}

function ONFOCUS_TOB()
{
    var TOB = document.getElementById("tob_id").value;
    if (TOB=="") 
    {
        document.getElementById("tob_show_msg").innerText="Plz Fill TOB !!";
        document.getElementById("tob_id").style.border="3px solid red";
    }
}

function ONFOCUS_CAPTCHA()
{
    var CAPTCHA = document.getElementById("captcha_id").value;
    if (CAPTCHA=="") 
    {
        document.getElementById("captcha_show_msg").innerText="Plz Fill Captcha !!";
        document.getElementById("captcha_id").style.border="3px solid red";
    }
}

function ONCHANGE_GENDER()
{
    var GENDER = document.getElementById("gender_id").value;
    if (GENDER=="") 
    {
        document.getElementById("gender_show_msg").innerText = "Plz Select Gender !!";
        GENDER_1=false;
    }
    else
    {
        document.getElementById("gender_show_msg").innerText = "";
        GENDER_1=true;
    }
    SUBMIT();
}

function ONCHANGE_HOBBY()
{
    var checkboxcount = 0;
    var count_check_box = document.getElementsByName("hobby").length;
    var HOBBY = document.getElementsByName("hobby");
    for(var i=0; i<count_check_box; i++)
    {
        if (HOBBY[i].checked==true) 
        {
            checkboxcount++;    
        }
    }
    if (checkboxcount==1) 
    {
        document.getElementById("hobby_show_msg").innerText = "Plz Select At Least 2 Options !!";
        HOBBY_1=false;
    }
    else
    {
        document.getElementById("hobby_show_msg").innerText = "";
        HOBBY_1=true;
    }
    SUBMIT();
}

function SHOW_PASS()
{
    document.getElementById("pass_id").type="text";
    document.getElementById("slash_eye").style.display="none";
    document.getElementById("normal_eye").style.display="inline-block";
}
function HIDE_PASS()
{
    document.getElementById("pass_id").type="password";
    document.getElementById("slash_eye").style.display="inline-block"
    document.getElementById("normal_eye").style.display="none";
}

function ONKEYUP_UNAME()
{
    var UNAME = document.getElementById("uname_id").value;
    if (UNAME=="") 
    {
        document.getElementById("uname_show_msg").innerText="Plz Fill Name !!";
        document.getElementById("uname_id").style.border="3px solid red";
        UNAME_1=false;
    }
    else
    {
        document.getElementById("uname_show_msg").innerText="";
        document.getElementById("uname_id").style.border="3px solid green";
        document.getElementById("uname_id").style.textTransform="capitalize";
        UNAME_1=true;
    }
    SUBMIT();
}

function ONKEYUP_AGE()
{
    var AGE = document.getElementById("age_id").value;
    var AGE_LENGTH = AGE.length;
    if (AGE=="") 
    {
        document.getElementById("age_show_msg").innerText="Plz Fill Age !!";
        document.getElementById("age_id").style.border="3px solid red";
        AGE_1=false;
    }
    else if (AGE_LENGTH>3) 
    {
        document.getElementById("age_id").value="";      
    }
    else if (AGE==0) 
    {
        document.getElementById("age_id").value="";
    }
    else
    {
        document.getElementById("age_show_msg").innerText="";
        document.getElementById("age_id").style.border="3px solid green"
        AGE_1=true;
    }
    SUBMIT();
}

function ONKEYUP_EMAIL()
{
    var EMAIL = document.getElementById("email_id").value;
    var PATTERN = /[a-zA-Z]{2,}[0-9]{1,}[@]{1}[A-Za-z]{3,}[.]{1}[a-zA-Z]{2,}/;
    if (EMAIL=="") 
    {
        document.getElementById("email_show_msg").innerText="Plz Fill Email ID !!";  
    }
    else if(PATTERN.test(EMAIL)) 
    {
        document.getElementById("email_show_msg").innerText="Correct Email ID";
        document.getElementById("email_show_msg").style.color="yellowgreen";
        document.getElementById("email_id").style.border="3px solid green";
        EMAIL_1=true;
    }
    else
    {
        document.getElementById("email_show_msg").innerText="InCorrect Email ID";
        document.getElementById("email_show_msg").style.color="red";
        document.getElementById("email_id").style.border="3px solid red";
        EMAIL_1=false;  
    }
    SUBMIT();
}

function ONKEYUP_PASS()
{
    var PASS = document.getElementById("pass_id").value;
    var SIX_CHAR = new RegExp('(?=.{6,})')
    var UPPER_CHAR = new RegExp('(?=.*[A-Z])');
    var LOWER_CHAR = new RegExp('(?=.*[a-z])');
    var NUMBER_DIGIT = new RegExp('(?=.*[0-9])');
    var SPECIAL_CHAR = new RegExp('(?=.*[!@#$%^&*])');
    if (PASS=="") 
    {
        document.getElementById("pass_show_msg").innerText="Plz Fill Password !!";
        document.getElementById("pass_id").style.border="3px solid red";
    }
    else
    {
        document.getElementById("pass_show_msg").innerText="";
        document.getElementById("pass_id").style.border="3px solid green";
    }
    if (SIX_CHAR.test(PASS)) 
    {
        document.getElementById("six_digit").style.color="yellowgreen";    
    }
    else
    {
        document.getElementById("six_digit").style.color="red";
    }
    if (UPPER_CHAR.test(PASS)) 
    {
        document.getElementById("one_upper").style.color="yellowgreen";
    }
    else
    {
        document.getElementById("one_upper").style.color="red";
    }
    if (LOWER_CHAR.test(PASS)) 
    {
        document.getElementById("one_lower").style.color="yellowgreen";
    }
    else
    {
        document.getElementById("one_lower").style.color="red";
    }
    if (NUMBER_DIGIT.test(PASS)) 
    {
        document.getElementById("one_number").style.color="yellowgreen";
    }
    else
    {
        document.getElementById("one_number").style.color="red";
    }
    if (SPECIAL_CHAR.test(PASS)) 
    {
        document.getElementById("one_special_char").style.color="yellowgreen";    
    }
    else
    {
        document.getElementById("one_special_char").style.color="red";
    }
    
    if (SIX_CHAR.test(PASS) && UPPER_CHAR.test(PASS) && LOWER_CHAR.test(PASS)&& NUMBER_DIGIT.test(PASS) && SPECIAL_CHAR.test(PASS)) 
    {
        document.getElementById("pass_id").style.border="3px solid green";
        document.getElementById("password_validation_box").style.border="1px solid green";
        document.getElementById("pv_text").style.color="yellowgreen";
        PASS_1=true;

        var PASS = document.getElementById("pass_id").value;
        var PASS_LENGTH = PASS.length;
        if (PASS_LENGTH==6) 
        {
            document.getElementById("pass_show_msg").innerText="WEAK";    
            document.getElementById("pass_show_msg").style.color="red";    
        }
        else if (PASS_LENGTH<=8) 
        {
            document.getElementById("pass_show_msg").innerText="GOOD";    
            document.getElementById("pass_show_msg").style.color="blue";
        }
        else
        {
            document.getElementById("pass_show_msg").innerText="STRONG";    
            document.getElementById("pass_show_msg").style.color="yellowgreen";
        }
    }
    else
    {
        document.getElementById("pass_id").style.border="3px solid red";
        document.getElementById("password_validation_box").style.border="1px solid red";
        document.getElementById("pv_text").style.color="red";
        PASS_1=false;
    }
    if (PASS=="") 
    {
        document.getElementById("pass_show_msg").innerText="Plz Fill Password !!";
        document.getElementById("pass_id").style.border="3px solid red";
        document.getElementById("pass_show_msg").style.color="red";
    }
    else if(!UPPER_CHAR.test(PASS)) 
    {
        document.getElementById("pass_show_msg").innerText="At Least 1 Upper Char !!";
    }
    else if (!LOWER_CHAR.test(PASS)) 
    {
        document.getElementById("pass_show_msg").innerText="At least 1 Lower Char !!";   
    }
    else if (!NUMBER_DIGIT.test(PASS)) 
    {
        document.getElementById("pass_show_msg").innerText="At least 1 Number Digit !!";
    }
    else if (!SPECIAL_CHAR.test(PASS)) 
    {
        document.getElementById("pass_show_msg").innerText="At least 1 Special Char !!";
    }
    else if (!SIX_CHAR.test(PASS)) 
    {
        document.getElementById("pass_show_msg").innerText="At least 6 Character !!";
    }
    SUBMIT();
}

function ONKEYUP_MOBILE()
{
    var MOBILE = document.getElementById("mobile_id").value;
    var MOBILE_LENGTH = MOBILE.length;
    if (MOBILE=="") 
    {
        document.getElementById("mobile_show_msg").innerText="Plz Fill Mobile No !!";
        document.getElementById("mobile_id").style.border="3px solid red";    
    }
    else if (MOBILE_LENGTH==10) 
    {
        document.getElementById("mobile_show_msg").innerText="";
        document.getElementById("mobile_id").style.border="3px solid green";
        MOBILE_1=true;
    }
    else if (MOBILE_LENGTH<=10) 
    {
        document.getElementById("mobile_show_msg").innerText="InValid Mobile No !!";
        document.getElementById("mobile_id").style.border="3px solid red";
        MOBILE_1=false;
    }
    SUBMIT();
}

function ONCHANGE_DOB()
{
    var DOB = document.getElementById("dob_id").value;
    if (DOB=="") 
    {
        document.getElementById("dob_show_msg").innerText="Plz Fill DOB !!";
        document.getElementById("dob_id").style.border="3px solid red";
        DOB_1=false;
    }
    else
    { 
        document.getElementById("dob_show_msg").innerText="";
        document.getElementById("dob_id").style.border="3px solid green";
        DOB_1=true;
    }
    SUBMIT();
}

function ONCHANGE_TOB()
{
    var TOB = document.getElementById("tob_id").value;
    if (TOB=="") 
    {
        document.getElementById("tob_show_msg").innerText="Plz Fill TOB !!";
        document.getElementById("tob_id").style.border="3px solid red";
        TOB_1=false;   
    }
    else
    {
        document.getElementById("tob_show_msg").innerText="";
        document.getElementById("tob_id").style.border="3px solid green";
        TOB_1=true;
    }
    SUBMIT();
}

function ONKEYUP_CAPTCHA()
{
    var CAPTCHA = document.getElementById("captcha_id").value;
    var CHECK_CAPTCHA = document.getElementById("captcha_original").innerText;
    if (CAPTCHA=="") 
    {
        document.getElementById("captcha_show_msg").innerText="Plz Fill Captcha !!";
        document.getElementById("captcha_id").style.border="3px solid red";
        CAPTCHA_1=false;
    }
    else
    {
        document.getElementById("captcha_show_msg").innerText="";
        document.getElementById("captcha_id").style.border="3px solid red";
    }
    if (CAPTCHA!=CHECK_CAPTCHA) 
    {
        CAPTCHA_1=false;    
    }
    if (CAPTCHA==CHECK_CAPTCHA) 
    {
        CAPTCHA_1=true;
        document.getElementById("captcha_id").style.border="3px solid green";
    }
    SUBMIT();
}


function GENERATE_CAPTCHA()
{
    var CHAR = "QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuiopmnbvcxzasdfghjkl0321456987!@#$%&*?";
    var CAPTCHA = "";
    for(var i=0; i<4; i++)
    {
        CAPTCHA = CAPTCHA + CHAR.charAt(Math.floor(Math.random() * CHAR.length));
    }
    document.getElementById("captcha_original").innerText=CAPTCHA;
}

function ONKEYPRESS_UNAME(event)
{
    var KEYCODE = event.which;
    // alert(KEYCODE);
    if (KEYCODE>=65 && KEYCODE<=90 || KEYCODE>=97 && KEYCODE<=122 || KEYCODE==32) 
    {
        return true;    
    }
    else
    {
        event.preventDefault();
        return false;
    }
}

function ONKEYPRESS_AGE(event)
{
    var AGE = document.getElementById("age_id").value;
    var KEYCODE = event.which;
    // alert(KEYCODE);
    if (AGE.startsWith(0)) 
    {
        document.getElementById("age_id").value="";    
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

function ONKEYPRESS_EMAIL(event)
{
    var EMAIL = document.getElementById("email_id").value;
    var KEYCODE = event.which;

    if (KEYCODE==64) 
    {
        if (EMAIL.includes("@")) 
        {
            event.preventDefault();    
        }    
    }
    if (KEYCODE==46) 
    {
        if (EMAIL.includes(".")) 
        {
            event.preventDefault();    
        }    
    }
}

function ONKEYPRESS_MOBILE(event)
{
    var KEYCODE = event.which;
    // alert(KEYCODE);
    if (KEYCODE>=48 && KEYCODE<=57) 
    {
        return true;    
    }
    else
    {
        event.preventDefault();
        return false;
    }
}

function SUBMIT()
{
    var CHECK = (UNAME_1 && AGE_1 && EMAIL_1 && PASS_1 && MOBILE_1 && DOB_1 && TOB_1 && HOBBY_1 && GENDER_1 && CAPTCHA_1)
    if (CHECK==true) 
    {
        document.getElementById("sub").disabled = false;
        document.getElementById("sub").style.backgroundColor="yellow";
        document.getElementById("sub").style.cursor="pointer";
    }
    else
    {
        document.getElementById("sub").disabled = true;
        document.getElementById("sub").style.backgroundColor="grey";
        document.getElementById("sub").style.cursor="not-allowed";
    }
}