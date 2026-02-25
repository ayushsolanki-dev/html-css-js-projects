var UNAME_1 = false;
var EMAIL_1 = false;
var PASS_1 = false;
var CITY_1 = false;
var GENDER_1 = false;
var HOBBY_1 = false;
var CURRENT_EDIT_ROW = null;
var COUNT=0;

// FORM VALIDATION CODE START
function FORM_VALIDATION()
{
    var MAIN_RESULT = false;
    var RESULT = true;
    var UANME = document.getElementById("uname_id").value;
    if (UANME=="") 
    {
        document.getElementById("uname_show_msg").innerText="Plz Fill Name !!";
        document.getElementById("uname_show_msg").style.color="red";
        document.getElementById("uname_id").style.border="3px solid red";
        RESULT=false;
    }
    var EMAIL = document.getElementById("email_id").value;
    if (EMAIL=="") 
    {
        document.getElementById("email_show_msg").innerText="Plz Fill Email ID !!";
        document.getElementById("email_show_msg").style.color="red";
        document.getElementById("email_id").style.border="3px solid red";
        RESULT=false;       
    }
    var PASS = document.getElementById("pass_id").value;
    if (PASS=="") 
    {
        document.getElementById("pass_show_msg").innerText="Plz Fill Password !!";
        document.getElementById("pass_show_msg").style.color="red";
        document.getElementById("pass_id").style.border="3px solid red";
        RESULT=false;        
    }
    var CITY = document.getElementById("op").value;
    if (CITY=="" || CITY=="sc") 
    {
        RESULT=false;    
    }
    var GENDER_RESULT = false;
    var GENDER_BTN = document.getElementsByClassName("gender");
    for(var i=0; i<GENDER_BTN.length; i++)
    {
        if (GENDER_BTN[i].checked==true) 
        {
            GENDER_RESULT=true;    
        }
    }
    if (GENDER_RESULT==false) 
    {
        GENDER_RESULT=false;    
    }
    var COUNT=0;
    var HOBBY_RESULT = false;
    var HOBBY_BTN = document.getElementsByClassName("check_btn");
    for(var i=0; i<HOBBY_BTN.length; i++)
    {
        if (HOBBY_BTN[i].checked==true) 
        {
            COUNT++;
        }
    }
    if (COUNT==1) 
    {
        HOBBY_RESULT=true;    
    }
    else
    {
        HOBBY_RESULT=false;
    }

    if (GENDER_RESULT=true && HOBBY_RESULT==true && RESULT==true) 
    {
        MAIN_RESULT=true;    
    }
    else
    {
        MAIN_RESULT=false;
    }
    return MAIN_RESULT;
}

// FORM VALIDATION CODE END

// ONFOCUS_UNAME() IS USED FOR VALIDATION FUNCTION START
function ONFOCUS_UNAME()
{
    var UNAME = document.getElementById("uname_id").value;
    if (UNAME=="") 
    {
        document.getElementById("uname_show_msg").innerText="Plz Fill Name !!";
        document.getElementById("uname_show_msg").style.color="red";
        document.getElementById("uname_id").style.border="3px solid red";
    }
}
// ONFOCUS_UNAME() IS USED FOR VALIDATION FUNCTION END 

// ONFOCUS_EMAIL() IS USED FOR VALIDATION FUNCTION START
function ONFOCUS_EMAIL()
{
    var EMAIL = document.getElementById("email_id").value;
    if (EMAIL=="") 
    {
        document.getElementById("email_show_msg").innerText="Plz Fill Email ID !!";
        document.getElementById("email_show_msg").style.color="red";
        document.getElementById("email_id").style.border="3px solid red";   
    }
}
// ONFOCUS_EMAIL() IS USED FOR VALIDATION FUNCTION END

// ONFOCUS_PASS() IS USED FOR VALIDATION FUNCTION START
function ONFOCUS_PASS()
{
    var PASS=document.getElementById("pass_id").value;
    if (PASS=="") 
    {
        document.getElementById("pass_show_msg").innerText="Plz Fill Password !!";
        document.getElementById("pass_show_msg").style.color="red";
        document.getElementById("pass_id").style.border="3px solid red";        
    }
    document.getElementById("password_validation").style.display="block";
}
// ONFOCUS_PASS() IS USED FOR VALIDATION FUNCTION END

// THIS FUNCTION IS USED EYE IN PASSWORD START
function TOGGLE_PASSWORD() 
{
    var passInput = document.getElementById("pass_id");
    var eyeIcon = document.getElementById("toggle_eye");
    
    if (passInput.type=="password") 
    {
        passInput.type = "text";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    } 
    else 
    {
        passInput.type="password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
}
// THIS FUNCTION IS USED EYE IN PASSWORD END

// THIS FUNCTION NAME ONKEYUP_UNAME IS USED FOR VALIDATION AND CHECK SUBMIT ENABLE OR DISABLE
// ONKEYUP FUNCTION START
function ONKEYUP_UNAME()
{
    var UNAME = document.getElementById("uname_id").value;
    if (UNAME=="") 
    {
        document.getElementById("uname_show_msg").innerText="Plz Fill Name !!";
        document.getElementById("uname_show_msg").style.color="red";
        document.getElementById("uname_id").style.border="3px solid red";
        UNAME_1=false;
    }
    else
    {
        document.getElementById("uname_show_msg").innerText="";
        document.getElementById("uname_show_msg").style.color="green";
        document.getElementById("uname_id").style.border="3px solid green";
        UNAME_1=true;   
    }
    CHECK_BTN();
}
// ONKEYUP FUNCTION END 


// THIS FUNCTION NAME ONKEYUP_EMAIL IS USED FOR VALIDAION AND ALSO USED REGULAR EXPRESSION
// AND ALSO USED SUBMIT ENABLE AND DISABE
// ONKEYUP_EMAIL() FUNCTION START
function ONKEYUP_EMAIL()
{
    var EMAIL = document.getElementById("email_id").value;
    var PATTERN = /[A-Za-z]{2,}[0-9]{1,}[@]{1}[a-zA-Z]{3,}[.]{1}[a-zA-Z]{2,}/;
    if (EMAIL=="") 
    {
        document.getElementById("email_show_msg").innerText="Plz Fill Email ID !!";
        document.getElementById("email_show_msg").style.color="red";
        document.getElementById("email_id").style.border="3px solid red";
        EMAIL_1=false; 
    }
    else if (PATTERN.test(EMAIL)) 
    {
        document.getElementById("email_show_msg").innerText="✔ Correct Email ID !!";
        document.getElementById("email_show_msg").style.color="yellowgreen";
        document.getElementById("email_id").style.border="3px solid green";
        EMAIL_1=true;
    }
    else
    {
        document.getElementById("email_show_msg").innerText="✖ InCorrect Email ID !!";
        document.getElementById("email_show_msg").style.color="red";
        document.getElementById("email_id").style.border="3px solid red";
        EMAIL_1=false;
    }
    CHECK_BTN();
}
// ONKEYUP_EMAIL() FUNCTION END


// THIS FUNCTION NAME ONKEYUP_PASS() IS USED FOR VALIDATION AND ALSO USED IN THIS PROGRAM REGULAR EXPRESSION
// ONKEYUP_PASS FUNCTION START
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
        document.getElementById("pass_show_msg").style.color="red";
        document.getElementById("pass_id").style.border="3px solid red";
    }
    else
    {
        document.getElementById("pass_show_msg").innerText="";
        document.getElementById("pass_show_msg").style.color="red";
        document.getElementById("pass_id").style.border="3px solid red";
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
        document.getElementById("upper_char").style.color="yellowgreen";
    }
    else
    {
        document.getElementById("upper_char").style.color="red";
    }
    if (LOWER_CHAR.test(PASS)) 
    {
        document.getElementById("lower_char").style.color="yellowgreen"
    }
    else
    {
        document.getElementById("lower_char").style.color="red"
    }
    if (NUMBER_DIGIT.test(PASS)) 
    {
        document.getElementById("number_digit").style.color="yellowgreen"
    }
    else
    {
        document.getElementById("number_digit").style.color="red";
    }
    if (SPECIAL_CHAR.test(PASS)) 
    {
        document.getElementById("special_char").style.color="yellowgreen";   
    }
    else
    {
        document.getElementById("special_char").style.color="red";
    }
    if (SIX_CHAR.test(PASS) && UPPER_CHAR.test(PASS) && LOWER_CHAR.test(PASS) && NUMBER_DIGIT.test(PASS) && SPECIAL_CHAR.test(PASS)) 
    {
        document.getElementById("p_v").style.color="yellowgreen";
        document.getElementById("password_validation").style.border="2px solid yellowgreen";
        document.getElementById("pass_id").style.border="3px solid green";
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
        document.getElementById("p_v").style.color="red";
        document.getElementById("password_validation").style.border="2px solid red";
        PASS_1=false;
    }
    if (!UPPER_CHAR.test(PASS)) 
    {
        document.getElementById("pass_show_msg").innerText="At Least 1 Upper Char";
    }
    else if (!LOWER_CHAR.test(PASS))
    {
        document.getElementById("pass_show_msg").innerText="At Least 1 Lower Char";
    }
    else if (!NUMBER_DIGIT.test(PASS)) 
    {
        document.getElementById("pass_show_msg").innerText="At Least 1 Number Digit";    
    }
    else if (!SPECIAL_CHAR.test(PASS)) 
    {
        document.getElementById("pass_show_msg").innerText="At Least 1 Special Char";    
    }
    else if (!SIX_CHAR.test(PASS)) 
    {
        document.getElementById("pass_show_msg").innerText="Minimum 6 Charracter";    
    }
    if (PASS=="") 
    {
        document.getElementById("pass_show_msg").innerText="Plz Fill Password !!";
        document.getElementById("pass_show_msg").style.color="red";
        document.getElementById("pass_id").style.border="3px solid red";
    }
    CHECK_BTN();
}
// ONKEYUP_PASS FUNCTION END

// ------------------------------------------------------------------------------------------
function ONCHANGE_CITY()
{
    var CITY = document.getElementById("op").value;
    if (CITY=="" || CITY=="sc") 
    {
        CITY_1=false;    
    }
    else
    {
        CITY_1=true;
    }
    CHECK_BTN();
}
// -------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
function ONCHANGE_GENDER_BTN()
{
    var GENDER_BTN = document.getElementsByClassName("gender");
    for(var i=0; i<GENDER_BTN.length; i++)
    {
        if (GENDER_BTN[i].checked==true) 
        {
            GENDER_1=true;
        }
    }
    if (GENDER_1==false) 
    {
        GENDER_1=false;    
    }
    CHECK_BTN();
}
// -------------------------------------------------------------------------------------------
function HOBBY_BTN()
{
    var COUNT=0;
    var HOBBY_BTN = document.getElementsByClassName("check_btn");
    for(var i=0; i<HOBBY_BTN.length; i++)
    {
        if (HOBBY_BTN[i].checked==true) 
        {
            COUNT++;
        }
    }
    if (COUNT==1) 
    {
        HOBBY_1=true;  
    }
    else
    {
        HOBBY_1=false;
    }
    CHECK_BTN();
}
// ------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------
// THIS FUNCTION NAME CHECK_BTN() IS USED FOR SUBMIT BTN ENABLE OR DISABLE
// CHECK_BTN() FUNCTION START
function CHECK_BTN()
{
    var BTN = document.getElementById("sub");
    var SUBMIT = (UNAME_1 && EMAIL_1 && PASS_1 && CITY_1 && GENDER_1 && HOBBY_1)
    if (SUBMIT==true) 
    {
        document.getElementById("sub").disabled=false;
        BTN.style.backgroundColor="yellowgreen";
        BTN.style.color="#fff";
        BTN.style.cursor="pointer";
    }
    else
    {
        document.getElementById("sub").disabled=true;
        BTN.style.backgroundColor="grey";
        BTN.style.color="black";
        BTN.style.cursor="";
    }
}
// CHECK_BTN() FUNCTION END

// FUNCTION NAME ONCLICK_SUBMIT_BTN() IN THIS FUNCTION IS USED FOR SUBMIT THE THREE FIELD AND VALIDATION
// ONCLICK_SUBMIT_BTN() FUNCTION START
function ONCLICK_SUBMIT_BTN()
{
    var BTN = document.getElementById("sub");
    var UNAME = document.getElementById("uname_id").value;
    var EMAIL = document.getElementById("email_id").value;
    var PASS = document.getElementById("pass_id").value;
    var TABLE = document.getElementById("one");
    var CITY = document.getElementById("op").value;
    var GENDER_BTN = document.getElementsByClassName("gender");
    var HOBBY_BTN = document.getElementsByClassName("check_btn");

    if (UNAME>="1" && EMAIL>="1" && PASS>="1") 
    {
        Swal.fire({
        title: "Data is Successfully Inserted !!",
        icon: "success",
        });
        document.getElementById("to_do_list").style.display="block";
        document.getElementById("uname_id").value="";
        document.getElementById("email_id").value="";
        document.getElementById("pass_id").value="";
        document.getElementById("email_show_msg").innerText="";
        document.getElementById("email_show_msg").style.color="red";
        document.getElementById("pass_show_msg").innerText="";
        document.getElementById("pass_show_msg").style.color="red";
        document.getElementById("password_validation").style.border="2px solid red";
        document.getElementById("p_v").style.color="red";
        document.getElementById("six_digit").style.color="red";
        document.getElementById("upper_char").style.color="red";
        document.getElementById("lower_char").style.color="red";
        document.getElementById("number_digit").style.color="red";
        document.getElementById("special_char").style.color="red";
        document.getElementById("password_validation").style.display="none";
        document.getElementById("uname_id").style.border="0px";
        document.getElementById("email_id").style.border="0px";
        document.getElementById("pass_id").style.border="0px";
        BTN.disabled=true;
        BTN.style.backgroundColor="grey";
        BTN.style.color="black";
        BTN.style.cursor="";
        UNAME_1=false
        EMAIL_1=false
        PASS_1=false;
        var passInput = document.getElementById("pass_id");
        var eyeIcon = document.getElementById("toggle_eye");
        passInput.type = "password";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.add("fa-eye-slash");
    }
    if (CURRENT_EDIT_ROW!=null) 
    {
        Swal.fire({
        title: "Your Data is Successfully Updated !!",
        icon: "success",
        });
        document.getElementById("uname1"+CURRENT_EDIT_ROW).innerText=UNAME;
        document.getElementById("email1"+CURRENT_EDIT_ROW).innerText=EMAIL;
        document.getElementById("pass1"+CURRENT_EDIT_ROW).innerText=PASS;
        document.getElementById("city1"+CURRENT_EDIT_ROW).innerText=CITY;
        var SELECT_GENDER = "";
        for(var i=0; i<GENDER_BTN.length; i++)
        {
            if (GENDER_BTN[i].checked==true) 
            {
                SELECT_GENDER = GENDER_BTN[i].value;    
            }
        }
        document.getElementById("gender1"+CURRENT_EDIT_ROW).innerText=SELECT_GENDER;
        SELECT_HOBBY = "";
        for(var i=0; i<HOBBY_BTN.length; i++)
        {
            if (HOBBY_BTN[i].checked==true) 
            {
                SELECT_HOBBY = HOBBY_BTN[i].value;    
            }
        }
        document.getElementById("hobby1"+CURRENT_EDIT_ROW).innerText=SELECT_HOBBY;

        CURRENT_EDIT_ROW=null;

        document.getElementById("op").value="sc";
        for(var i=0; i<GENDER_BTN.length; i++)
        {
            GENDER_BTN[i].checked=false;
        }
        for(var i=0; i<HOBBY_BTN.length; i++)
        {
            HOBBY_BTN[i].checked=false;
        }
    }
    else
    {
        var SELECT_GENDER = "";
        for(var i=0; i<GENDER_BTN.length; i++)
        {
            if (GENDER_BTN[i].checked==true) 
            {
                SELECT_GENDER = GENDER_BTN[i].value;    
            }
        }
        var SELECT_HOBBY = "";
        for(var i=0; i<HOBBY_BTN.length; i++)
        {
            if (HOBBY_BTN[i].checked==true) 
            {
                SELECT_HOBBY = HOBBY_BTN[i].value;    
            }
        }

        var ROW = document.createElement("tr");
        ROW.id = COUNT;
        var DATA1 = document.createElement("td");
        var DATE2 = document.createElement("td");    
        var DATE3 = document.createElement("td");
        var DATE4 = document.createElement("td");
        var DATE5 = document.createElement("td");
        var DATE6 = document.createElement("td");
        var DATE7 = document.createElement("td");    
        var DATE8 = document.createElement("td");

        DATE7.innerHTML = `<button onclick="ONCLICK_EDIT(${COUNT})">Edit</button>`;    
        DATE8.innerHTML = `<button onclick="ONCICK_DELETE(${COUNT})">Delete</button>`;

        DATA1.id = "uname1" + COUNT;
        DATE2.id = "email1" + COUNT;
        DATE3.id = "pass1" + COUNT;
        DATE4.id = "city1" + COUNT;
        DATE5.id = "gender1" + COUNT;
        DATE6.id = "hobby1" + COUNT;
        DATE7.id = "edit1" + COUNT;
        DATE8.id = "delete1" + COUNT;

        DATA1.innerText = UNAME;
        DATE2.innerText = EMAIL;
        DATE3.innerText = PASS;
        DATE4.innerText = CITY;
        DATE5.innerText=SELECT_GENDER;
        DATE6.innerText=SELECT_HOBBY;

        ROW.appendChild(DATA1);
        ROW.appendChild(DATE2);
        ROW.appendChild(DATE3);
        ROW.appendChild(DATE4);
        ROW.appendChild(DATE5);
        ROW.appendChild(DATE6);
        ROW.appendChild(DATE7);
        ROW.appendChild(DATE8);
        TABLE.appendChild(ROW);
        COUNT++;
        document.getElementById("op").value="sc";

        for(var i=0; i<GENDER_BTN.length; i++)
        {
            GENDER_BTN[i].checked=false;
        }

        for(var i=0; i<HOBBY_BTN.length; i++)
        {
            HOBBY_BTN[i].checked=false;
        }
    }
}
// ONCLICK_SUBMIT_BTN() FUNCTION END

// THIS FUNCTION NAME ONCLICK_EDIT() IS USED FOR CURRENT ROW EDIT AND VALIDATION ALSO
// ONCLICK_EDIT() FUNCTION START
function ONCLICK_EDIT(R_ID)
{
    var GENDER_BTN = document.getElementsByClassName("gender");
    var HOBBY_BTN = document.getElementsByClassName("check_btn");
    Swal.fire({
        title: "Update Data",
        text: "Do You Want To Update Data !!",
        icon: "warning",
        reverseButtons: false,
        cancelButtonText: "No !!",
        confirmButtonText: "Yes !!",
        showCancelButton: true,
        customClass: {
            confirmButton: 'swal2-yes-button',
            cancelButton: 'swal2-no-button'
        },
    }).then((result) => {
    if (result.isConfirmed)
    {
        CURRENT_EDIT_ROW = R_ID;
        var UNAME = document.getElementById("uname1"+R_ID).innerText;
        var EMAIL = document.getElementById("email1"+R_ID).innerText;
        var PASS = document.getElementById("pass1"+R_ID).innerText;
        var CITY = document.getElementById("city1"+R_ID).innerText;
        var GENDER = document.getElementById("gender1" + R_ID).innerText;
        var HOBBY = document.getElementById("hobby1" + R_ID).innerText;

        document.getElementById("uname_id").value = UNAME;
        document.getElementById("email_id").value = EMAIL;
        document.getElementById("pass_id").value = PASS;
        document.getElementById("op").value=CITY;

        for (var i = 0; i < GENDER_BTN.length; i++) 
        {
            if (GENDER_BTN[i].value==GENDER) 
            {
                GENDER_BTN[i].checked=true;
            }
        }

        for(var i=0; i<HOBBY_BTN.length; i++)
        {
            if (HOBBY_BTN[i].value==HOBBY) 
            {
                HOBBY_BTN[i].checked=true;    
            }
        }


        document.getElementById("uname_id").style.border = "3px solid green";
        document.getElementById("email_id").style.border = "3px solid green";
        document.getElementById("pass_id").style.border = "3px solid green";
        document.getElementById("email_show_msg").innerText = "✔ Correct Email ID !!";
        document.getElementById("email_show_msg").style.color = "yellowgreen";

        document.getElementById("password_validation").style.display = "block";
        document.getElementById("password_validation").style.border = "2px solid yellowgreen";
        document.getElementById("p_v").style.color = "yellowgreen";
        document.getElementById("six_digit").style.color = "yellowgreen";
        document.getElementById("upper_char").style.color = "yellowgreen";
        document.getElementById("lower_char").style.color = "yellowgreen";
        document.getElementById("number_digit").style.color = "yellowgreen";
        document.getElementById("special_char").style.color = "yellowgreen";

        var PASS_LENGTH = PASS.length;
        if (PASS_LENGTH == 6)
        {
            document.getElementById("pass_show_msg").innerText = "WEAK";
            document.getElementById("pass_show_msg").style.color = "red";
        }
        else if(PASS_LENGTH <= 8)
        {
            document.getElementById("pass_show_msg").innerText = "GOOD";
            document.getElementById("pass_show_msg").style.color = "blue";    
        }
        else
        {
            document.getElementById("pass_show_msg").innerText = "STRONG";
            document.getElementById("pass_show_msg").style.color = "yellowgreen"; 
        }
        UNAME_1 = true;
        EMAIL_1 = true;
        PASS_1 = true;
        CITY_1=true;
        GENDER_1=true;
        HOBBY_1=true;
        CHECK_BTN();
        }
    });
}
// ONCLICK_EDIT() FUNCTION END


// THIS FUNCTION NAME ONCLICK_DELETE() IS USED FOR DELETING ROW YOU ARE GOING TO CLICK
// ONCLICK_DELETE() FUNCTION START
function ONCICK_DELETE(R_ID)
{
    var ROW = document.getElementById(R_ID);
    Swal.fire({
        title: "Delete Data",
        text: "Do You Want To Delete Data !!",
        icon: "warning",
        reverseButtons: false,
        cancelButtonText: "No !!",
        confirmButtonText: "Yes !!",
        showCancelButton: true,
        customClass: {
            confirmButton: 'swal2-yes-button',
            cancelButton: 'swal2-no-button'
        },
    }).then((result) => {
        if (result.isConfirmed) 
        {
            if (ROW) 
            {
                ROW.remove();
                Swal.fire({
                title: "Your Data is Successfully Deleted !!",
                icon: "success",
                });
            }
        }
    });
}
// ONCLICK_DELETE() FUNCTION END
