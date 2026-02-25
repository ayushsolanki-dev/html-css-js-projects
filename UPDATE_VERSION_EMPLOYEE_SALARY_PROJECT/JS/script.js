function CHECK_YEAR_NUM(event)
{
    var YEAR = document.getElementById("year_id").value;
    var KEYCODE = event.which;
    if (YEAR.startsWith(0)) 
    {
        document.getElementById("year_id").value="";    
    }
    else if (KEYCODE>=48 && KEYCODE<=57) 
    {
        return true;    
    }
    else
    {
        event.preventDefault();
        return false;
    }
}

function CHECK_EPDS_NUM(event)
{
    var EPDS = document.getElementById("epds").value;
    var KEYCODE = event.which;
    if (EPDS.startsWith(0)) 
    {
        document.getElementById("epds").value="";    
    }
    else if (KEYCODE>=48 && KEYCODE<=57) 
    {
        return true;    
    }
    else
    {
        event.preventDefault();
        return false;
    }
}

function CHECK_EPD_NUM(event)
{
    var EPD = document.getElementById("epd").value;
    var KEYCODE = event.which;
    if (EPD.startsWith(0)) 
    {
        document.getElementById("epd").value="";    
    }
    else if (KEYCODE>=48 && KEYCODE<=57) 
    {
        return true;    
    }
    else
    {
        event.preventDefault();
        return false;
    }
}

function CHECK_ECD_NUM(event)
{
    var ECD = document.getElementById("ecd").value;
    var KEYCODE = event.which;
    if (ECD.startsWith(0)) 
    {
        document.getElementById("ecd").value="";   
    }
    else if (KEYCODE>=48 && KEYCODE<=57) 
    {
        return true;    
    }
    else
    {
        event.preventDefault();
        return false;
    }
}
function CHECK_ONKEYPRESS_KEYCODE(event)
{
    var ADD_SALARY_AMOUNT = event.which;
    if (ADD_SALARY_AMOUNT>=48 && ADD_SALARY_AMOUNT<=57) 
    {
        return true;    
    }
    else
    {
        return false;
    }
}
function ONKEYUP_YEAR()
{
    var YEAR = document.getElementById("year_id").value;
    var YEAR_LENGTH = YEAR.length;
    var OPER = document.getElementById("op").value;

    var YEAR = YEAR.slice(0,4);
    document.getElementById("year_id").value=YEAR;
    if (YEAR=="") 
    {
        document.getElementById("op").value="sc";
        document.getElementById("op").disabled=true;
        document.getElementById("op").style.border="";  
    }
    else if(YEAR.startsWith(0)) 
    {
        document.getElementById("year_id").value="";
        document.getElementById("op").value="sc";
        document.getElementById("op").style.border="";
        document.getElementById("op").disabled=true;
        document.getElementById("tdim").value="";
        document.getElementById("tdim").style.border="";
        document.getElementById("tdim").disabled=true;
        document.getElementById("epds").value="";
        document.getElementById("epds").style.border="";
        document.getElementById("epds").disabled=true;
        document.getElementById("epd").value="";
        document.getElementById("epd").style.border="";
        document.getElementById("epd").disabled=true;
        document.getElementById("epd").value="";
        document.getElementById("epd").style.border="";
        document.getElementById("epd").disabled=true;
        document.getElementById("ead").value="";
        document.getElementById("ead").style.border="";
        document.getElementById("ead").disabled=true;
        document.getElementById("cl_no").checked=false;
        document.getElementById("cl_no").disabled=true;
        document.getElementById("cl_yes").checked=false;
        document.getElementById("cl_yes").disabled=true;
        document.getElementById("es").value="";
        document.getElementById("es").style.border="";
        document.getElementById("es").disabled=true;
        document.getElementById("cl_box").style.display="none";

        document.getElementById("hr_id").value="";
        document.getElementById("travel_id").value="";
        document.getElementById("sd_id").value="";
        document.getElementById("mb_id").value="";
        document.getElementById("food_id").value="";
        document.getElementById("hr_show_msg").innerText="";    
        document.getElementById("travel_show_msg").innerText="";
        document.getElementById("sd_show_msg").innerText="";   
        document.getElementById("mb_show_msg").innerText="";  
        document.getElementById("food_show_msg").innerText="";
        document.getElementById("asa_id").value="";
        document.getElementById("final_ets_id").value="";
        document.getElementById("add_to_salary_box").style.display="none";
    }
    else if(YEAR_LENGTH==4) 
    {
        document.getElementById("op").disabled=false;
        document.getElementById("op").style.border="3px solid green";
        document.getElementById("year_id").style.border="3px solid green";
    }
    else if(YEAR_LENGTH<=4)
    {
        document.getElementById("op").value="sc";
        document.getElementById("op").disabled=true;
        document.getElementById("op").style.border="";
        document.getElementById("tdim").value="";
        document.getElementById("tdim").style.border="";
        document.getElementById("tdim").disabled=true;
        document.getElementById("epds").value="";
        document.getElementById("epds").style.border="";
        document.getElementById("epds").disabled=true;
        document.getElementById("epd").value="";
        document.getElementById("epd").style.border="";
        document.getElementById("epd").disabled=true;
        document.getElementById("ead").value="";
        document.getElementById("ead").style.border="";
        document.getElementById("ead").disabled=true;
        document.getElementById("cl_yes").checked=false;
        document.getElementById("cl_no").checked=false;
        document.getElementById("cl_yes").disabled=true;
        document.getElementById("cl_no").disabled=true;
        document.getElementById("es").value="";
        document.getElementById("es").style.border="";
        document.getElementById("es").disabled=true;
        document.getElementById("leap_year_msg").innerText="";
        document.getElementById("epds_show_msg").innerText="";
        document.getElementById("cl_box").style.display="none";
        document.getElementById("year_id").style.border="";

        document.getElementById("hr_id").value="";
        document.getElementById("travel_id").value="";
        document.getElementById("sd_id").value="";
        document.getElementById("mb_id").value="";
        document.getElementById("food_id").value="";
        document.getElementById("hr_show_msg").innerText="";    
        document.getElementById("travel_show_msg").innerText="";
        document.getElementById("sd_show_msg").innerText="";   
        document.getElementById("mb_show_msg").innerText="";  
        document.getElementById("food_show_msg").innerText="";
        document.getElementById("asa_id").value="";
        document.getElementById("final_ets_id").value="";
        document.getElementById("add_to_salary_box").style.display="none";
    }
}

function CHECK_MONTHS()
{
    var OPER = document.getElementById("op").value;
    var YEAR = document.getElementById("year_id").value;
    if (OPER=="jan" || OPER=="mar" || OPER=="may" || OPER=="jul" || OPER=="aug" || OPER=="oct" || OPER=="dec") 
    {
        document.getElementById("tdim").disabled=false;
        document.getElementById("tdim").value="31";
        document.getElementById("tdim").style.border="3px solid green";
        document.getElementById("leap_year_msg").innerText="";
        document.getElementById("epds").disabled=false;
        document.getElementById("epds").style.border="3px solid green";

    }
    else if (OPER=="apr" || OPER=="jun" || OPER=="sep" || OPER=="nov") 
    {
        document.getElementById("tdim").disabled=false;
        document.getElementById("tdim").value="30";
        document.getElementById("tdim").style.border="3px solid green";
        document.getElementById("leap_year_msg").innerText="";
        document.getElementById("epds").disabled=false;
        document.getElementById("epds").style.border="3px solid green";
    }
    else
    {
        if ((YEAR%4==0 && YEAR%100!=0) || YEAR%400==0) 
        {
            document.getElementById("tdim").disabled=false;
            document.getElementById("tdim").value="29";
            document.getElementById("tdim").style.border="3px solid green";
            document.getElementById("leap_year_msg").innerText="This is Leap Year !!";
            document.getElementById("leap_year_msg").style.color="green";
            document.getElementById("epds").disabled=false;
            document.getElementById("epds").style.border="3px solid green";
            document.getElementById("epds_show_msg").innerText="";
        }
        else
        {
            document.getElementById("tdim").disabled=false;
            document.getElementById("tdim").value="28";
            document.getElementById("tdim").style.border="3px solid green";
            document.getElementById("leap_year_msg").innerText="";
            document.getElementById("epds").disabled=false;
            document.getElementById("epds").style.border="3px solid green";
            document.getElementById("epds_show_msg").innerText="";
        }
    }
    if (OPER=="sc") 
    {
        document.getElementById("epds_show_msg").innerText="";
        document.getElementById("leap_year_msg").innerText="";
        document.getElementById("tdim").value="";
        document.getElementById("tdim").style.border="";
        document.getElementById("tdim").disabled=true;
        document.getElementById("epds").value="";
        document.getElementById("epds").style.border="";
        document.getElementById("epds").disabled=true;
        document.getElementById("epd").value="";
        document.getElementById("epd").style.border="";
        document.getElementById("epd").disabled=true;
        document.getElementById("ead").value="";
        document.getElementById("ead").style.border="";
        document.getElementById("ead").disabled=true;
        document.getElementById("cl_yes").checked=false;
        document.getElementById("cl_no").checked=false;
        document.getElementById("cl_yes").disabled=true;
        document.getElementById("cl_no").disabled=true;
        document.getElementById("es").value="";
        document.getElementById("es").style.border="";
        document.getElementById("es").disabled=true;
        document.getElementById("cl_box").style.display="none";

        document.getElementById("hr_id").value="";
        document.getElementById("travel_id").value="";
        document.getElementById("sd_id").value="";
        document.getElementById("mb_id").value="";
        document.getElementById("food_id").value="";
        document.getElementById("hr_show_msg").innerText="";    
        document.getElementById("travel_show_msg").innerText="";
        document.getElementById("sd_show_msg").innerText="";   
        document.getElementById("mb_show_msg").innerText="";  
        document.getElementById("food_show_msg").innerText="";
        document.getElementById("asa_id").value="";
        document.getElementById("final_ets_id").value="";
        document.getElementById("add_to_salary_box").style.display="none";
    }
    else if (OPER=="jan" || OPER=="apr" || OPER=="mar" || OPER=="may" || OPER=="jun" || OPER=="jul" || OPER=="aug" || OPER=="sep" || OPER=="oct" || OPER=="nov" || OPER=="dec") 
    {
        document.getElementById("epds_show_msg").innerText="";
        document.getElementById("leap_year_msg").innerText="";
        document.getElementById("epds").value="";
        document.getElementById("epd").value="";
        document.getElementById("epd").style.border="";
        document.getElementById("epd").disabled=true;
        document.getElementById("ead").value="";
        document.getElementById("ead").style.border="";
        document.getElementById("ead").disabled=true;
        document.getElementById("cl_no").checked=false;
        document.getElementById("cl_no").disabled=true;
        document.getElementById("cl_yes").checked=false;
        document.getElementById("cl_yes").disabled=true;
        document.getElementById("es").value="";
        document.getElementById("es").style.border="";
        document.getElementById("es").disabled=true;
        document.getElementById("cl_box").style.display="none";

        document.getElementById("hr_id").value="";
        document.getElementById("travel_id").value="";
        document.getElementById("sd_id").value="";
        document.getElementById("mb_id").value="";
        document.getElementById("food_id").value="";
        document.getElementById("hr_show_msg").innerText="";    
        document.getElementById("travel_show_msg").innerText="";
        document.getElementById("sd_show_msg").innerText="";   
        document.getElementById("mb_show_msg").innerText="";  
        document.getElementById("food_show_msg").innerText="";
        document.getElementById("asa_id").value="";
        document.getElementById("final_ets_id").value="";
        document.getElementById("add_to_salary_box").style.display="none";
    }
    else if (OPER=="feb") 
    {
        document.getElementById("epds").value="";
        document.getElementById("epd").value="";
        document.getElementById("epd").style.border="";
        document.getElementById("epd").disabled=true;
        document.getElementById("ead").value="";
        document.getElementById("ead").style.border="";
        document.getElementById("ead").disabled=true;
        document.getElementById("cl_no").checked=false;
        document.getElementById("cl_no").disabled=true;
        document.getElementById("cl_yes").checked=false;
        document.getElementById("cl_yes").disabled=true;
        document.getElementById("es").value="";
        document.getElementById("es").style.border="";
        document.getElementById("es").disabled=true;
        document.getElementById("cl_box").style.display="none";

        document.getElementById("hr_id").value="";
        document.getElementById("travel_id").value="";
        document.getElementById("sd_id").value="";
        document.getElementById("mb_id").value="";
        document.getElementById("food_id").value="";
        document.getElementById("hr_show_msg").innerText="";    
        document.getElementById("travel_show_msg").innerText="";
        document.getElementById("sd_show_msg").innerText="";   
        document.getElementById("mb_show_msg").innerText="";  
        document.getElementById("food_show_msg").innerText="";
        document.getElementById("asa_id").value="";
        document.getElementById("final_ets_id").value="";
        document.getElementById("add_to_salary_box").style.display="none";
    }
}

function ONFOCUS_EPDS()
{
    var EPDS = document.getElementById("epds").value;
    if (EPDS=="") 
    {
        document.getElementById("epds_show_msg").innerText="AT LEAST ENTER 3 DIGIT !!";
        document.getElementById("epds_show_msg").style.color="red";
    }
}

function ONKEYUP_EPDS()
{
    var EPDS = document.getElementById("epds").value;
    var EPDS_LENGTH = EPDS.length;

    if(EPDS=="") 
    {
        document.getElementById("epds_show_msg").innerText="AT LEAST ENTER 3 DIGIT !!";
        document.getElementById("epds_show_msg").style.color="red";
        document.getElementById("epd").value="";
        document.getElementById("epd").style.border="";
        document.getElementById("epd").disabled=true;
        document.getElementById("ead").value="";
        document.getElementById("ead").style.border=""; 
        document.getElementById("ead").disabled=true;
        document.getElementById("cl_no").checked=false;
        document.getElementById("cl_no").disabled=true;
        document.getElementById("cl_yes").checked=false;
        document.getElementById("cl_yes").disabled=true;
        document.getElementById("es").value="";
        document.getElementById("es").style.border="";
        document.getElementById("es").disabled=true;
        document.getElementById("cl_box").style.display="none";
    }
    else if(EPDS.startsWith(0)) 
    {
        document.getElementById("epds_show_msg").innerText="AT LEAST ENTER 3 DIGIT !!";
        document.getElementById("epds").value="";
        document.getElementById("epd").value="";
        document.getElementById("epd").style.border="";
        document.getElementById("epd").disabled=true;
        document.getElementById("ead").value="";
        document.getElementById("ead").style.border="";
        document.getElementById("ead").disabled=true;
        document.getElementById("cl_no").checked=false;
        document.getElementById("cl_yes").checked=false;
        document.getElementById("cl_no").disabled=true;
        document.getElementById("cl_yes").disabled=true;

        document.getElementById("hr_id").value="";
        document.getElementById("travel_id").value="";
        document.getElementById("sd_id").value="";
        document.getElementById("mb_id").value="";
        document.getElementById("food_id").value="";
        document.getElementById("hr_show_msg").innerText="";    
        document.getElementById("travel_show_msg").innerText="";
        document.getElementById("sd_show_msg").innerText="";   
        document.getElementById("mb_show_msg").innerText="";  
        document.getElementById("food_show_msg").innerText="";
        document.getElementById("asa_id").value="";
        document.getElementById("final_ets_id").value="";
        document.getElementById("add_to_salary_box").style.display="none";
    }
    else
    {
        if (EPDS_LENGTH<=2) 
        {
            document.getElementById("epds_show_msg").innerText="AT LEAST ENTER 3 DIGIT !!";
            document.getElementById("epds_show_msg").style.color="red";
            document.getElementById("epd").disabled=true;
            document.getElementById("epd").style.border="";
            document.getElementById("epd").value="";
            document.getElementById("ead").value="";
            document.getElementById("ead").style.border="";
            document.getElementById("ead").disabled=true;
            document.getElementById("cl_no").disabled=true;
            document.getElementById("es").value="";
            document.getElementById("es").disabled=true;
            document.getElementById("es").style.border="";
            document.getElementById("cl_yes").disabled=true;
            document.getElementById("cl_yes").checked=false;
            document.getElementById("ecd").value="";
            document.getElementById("ecd").style.border="";
            document.getElementById("ecd").disabled=true;
            document.getElementById("cl_box").style.display="none";

            document.getElementById("hr_id").value="";
            document.getElementById("travel_id").value="";
            document.getElementById("sd_id").value="";
            document.getElementById("mb_id").value="";
            document.getElementById("food_id").value="";
            document.getElementById("hr_show_msg").innerText="";    
            document.getElementById("travel_show_msg").innerText="";
            document.getElementById("sd_show_msg").innerText="";   
            document.getElementById("mb_show_msg").innerText="";  
            document.getElementById("food_show_msg").innerText="";
            document.getElementById("asa_id").value="";
            document.getElementById("final_ets_id").value="";
            document.getElementById("add_to_salary_box").style.display="none";
        }
        else
        {
            document.getElementById("epds_show_msg").innerText="";
            document.getElementById("epd").disabled=false;
            document.getElementById("epd").style.border="3px solid green";
        }
    }
    if (EPDS_LENGTH<=4) 
    {
        document.getElementById("cl_no").checked=false; 
        document.getElementById("es").value="";
        document.getElementById("es").style.border="";
        document.getElementById("es").disabled=true;
        document.getElementById("cl_yes").checked=false;
        document.getElementById("cl_box").style.display="none";
        document.getElementById("hr_id").value="";
        document.getElementById("travel_id").value="";
        document.getElementById("sd_id").value="";
        document.getElementById("mb_id").value="";
        document.getElementById("food_id").value="";
        document.getElementById("hr_show_msg").innerText="";    
        document.getElementById("travel_show_msg").innerText="";
        document.getElementById("sd_show_msg").innerText="";   
        document.getElementById("mb_show_msg").innerText="";  
        document.getElementById("food_show_msg").innerText="";
        document.getElementById("asa_id").value="";
        document.getElementById("final_ets_id").value="";
        document.getElementById("add_to_salary_box").style.display="none";
    }
    else
    {
        document.getElementById("cl_no").checked=false;    
        document.getElementById("es").value="";
        document.getElementById("es").style.border="";
        document.getElementById("es").disabled=true;
        document.getElementById("cl_yes").checked=false;
        document.getElementById("cl_box").style.display="none";
        document.getElementById("hr_id").value="";
        document.getElementById("travel_id").value="";
        document.getElementById("sd_id").value="";
        document.getElementById("mb_id").value="";
        document.getElementById("food_id").value="";
        document.getElementById("hr_show_msg").innerText="";    
        document.getElementById("travel_show_msg").innerText="";
        document.getElementById("sd_show_msg").innerText="";   
        document.getElementById("mb_show_msg").innerText="";  
        document.getElementById("food_show_msg").innerText="";
        document.getElementById("asa_id").value="";
        document.getElementById("final_ets_id").value="";
        document.getElementById("add_to_salary_box").style.display="none";
    }
}

function ONKEYUP_EPD()
{
    var TDIM = parseInt(document.getElementById("tdim").value);
    var EPD = parseInt(document.getElementById("epd").value);
    var EPD1 = document.getElementById("epd").value;
    var EPD1_LENGTH = EPD1.length;
    if (EPD == 0) 
    {
        document.getElementById("epd").value="";
        document.getElementById("ead").disabled=true;
        document.getElementById("ead").style.border="";
        document.getElementById("ead").value="";
    }
    else if(EPD<=TDIM) 
    {
        var EAD = TDIM-EPD;
        document.getElementById("ead").disabled=false;
        document.getElementById("ead").value=EAD;
        document.getElementById("ead").style.border="3px solid green";
        document.getElementById("cl_no").disabled=false;
        document.getElementById("cl_yes").disabled=false;
    }
    else
    {
        document.getElementById("epd").value="";
        document.getElementById("ead").value="";
        document.getElementById("ead").disabled=true;
        document.getElementById("ead").style.border="";
    }
    if (EPD1=="") 
    {
        document.getElementById("ead").value="";
        document.getElementById("ead").style.border="";
        document.getElementById("ead").disabled=true;
        document.getElementById("cl_no").disabled=true;
        document.getElementById("cl_no").checked=false;
        document.getElementById("cl_yes").disabled=true;
        document.getElementById("cl_yes").checked=false;
        document.getElementById("es").value="";
        document.getElementById("es").style.border="";
        document.getElementById("es").disabled=true;
        document.getElementById("cl_box").style.display="none";

        document.getElementById("hr_id").value="";
        document.getElementById("travel_id").value="";
        document.getElementById("sd_id").value="";
        document.getElementById("mb_id").value="";
        document.getElementById("food_id").value="";
        document.getElementById("hr_show_msg").innerText="";    
        document.getElementById("travel_show_msg").innerText="";
        document.getElementById("sd_show_msg").innerText="";   
        document.getElementById("mb_show_msg").innerText="";  
        document.getElementById("food_show_msg").innerText="";
        document.getElementById("asa_id").value="";
        document.getElementById("final_ets_id").value="";
        document.getElementById("add_to_salary_box").style.display="none";
    }
    else if (EPD1_LENGTH<=2) 
    {
        document.getElementById("cl_no").checked=false;
        document.getElementById("es").value="";
        document.getElementById("es").style.border="";
        document.getElementById("es").disabled=true;
        document.getElementById("cl_yes").checked=false;
        document.getElementById("cl_box").style.display="none";

        document.getElementById("hr_id").value="";
        document.getElementById("travel_id").value="";
        document.getElementById("sd_id").value="";
        document.getElementById("mb_id").value="";
        document.getElementById("food_id").value="";
        document.getElementById("hr_show_msg").innerText="";    
        document.getElementById("travel_show_msg").innerText="";
        document.getElementById("sd_show_msg").innerText="";   
        document.getElementById("mb_show_msg").innerText="";  
        document.getElementById("food_show_msg").innerText="";
        document.getElementById("asa_id").value="";
        document.getElementById("final_ets_id").value="";
        document.getElementById("add_to_salary_box").style.display="none";
    }
}
function CHECK_CL_YES()
{
    document.getElementById("cl_box").style.display="block";
    document.getElementById("es").value="";
    document.getElementById("es").disabled=true;
    document.getElementById("es").style.border="";
    document.getElementById("ecd").value="";
    document.getElementById("ecd").disabled=false;
    document.getElementById("ecd").style.border="3px solid green";
    document.getElementById("etpd").value="";
    document.getElementById("etpd").disabled=true;
    document.getElementById("etpd").style.border="";
    document.getElementById("etad").value="";
    document.getElementById("etad").disabled=true;
    document.getElementById("etad").style.border="";

    document.getElementById("hr_id").value="";
    document.getElementById("travel_id").value="";
    document.getElementById("sd_id").value="";
    document.getElementById("mb_id").value="";
    document.getElementById("food_id").value="";
    document.getElementById("hr_show_msg").innerText="";    
    document.getElementById("travel_show_msg").innerText="";
    document.getElementById("sd_show_msg").innerText="";   
    document.getElementById("mb_show_msg").innerText="";  
    document.getElementById("food_show_msg").innerText="";
    document.getElementById("asa_id").value="";
    document.getElementById("final_ets_id").value="";
    document.getElementById("add_to_salary_box").style.display="none";
}

function CHECK_CL_NO()
{
    var EPD = parseInt(document.getElementById("epd").value);
    var EPDS = parseInt(document.getElementById("epds").value);

    var ES = EPD*EPDS;
    document.getElementById("es").value=ES;
    document.getElementById("es").disabled=false;
    document.getElementById("es").style.border="3px solid green";
    document.getElementById("cl_box").style.display="none";
    document.getElementById("add_to_salary_box").style.display="block";
    document.getElementById("hr_id").value="";
    document.getElementById("travel_id").value="";
    document.getElementById("sd_id").value="";
    document.getElementById("mb_id").value="";
    document.getElementById("food_id").value="";
    document.getElementById("hr_show_msg").innerText="";    
    document.getElementById("travel_show_msg").innerText="";
    document.getElementById("sd_show_msg").innerText="";   
    document.getElementById("mb_show_msg").innerText="";  
    document.getElementById("food_show_msg").innerText="";
    document.getElementById("asa_id").value="";
    document.getElementById("final_ets_id").value="";
}

function ONKEYUP_ECD()
{
    var ECD = parseInt(document.getElementById("ecd").value);
    var EAD = parseInt(document.getElementById("ead").value);
    var ETPD = parseInt(document.getElementById("etpd").value);
    var ETAD = parseInt(document.getElementById("etad").value);
    var EPD = parseInt(document.getElementById("epd").value);
    var EPDS = parseInt(document.getElementById("epds").value);

    if (ECD=="") 
    {
        document.getElementById("ecd").value="";
        document.getElementById("ecd").value="";
        document.getElementById("etpd").value="";
        document.getElementById("etpd").style.border="";
        document.getElementById("etpd").disabled=true;
        document.getElementById("etad").value="";
        document.getElementById("etad").disabled=true;
        document.getElementById("etad").style.border="";
        document.getElementById("es").value="";
        document.getElementById("es").disabled=true;
        document.getElementById("es").style.border="";
    }
    else if(ECD<=EAD) 
    {
        var ETPD = ECD+EPD;
        document.getElementById("etpd").value=ETPD;
        document.getElementById("etpd").disabled=false;
        document.getElementById("etpd").style.border="3px solid green";

        var ETAD = EAD-ECD;
        document.getElementById("etad").value=ETAD;
        document.getElementById("etad").disabled=false;
        document.getElementById("etad").style.border="3px solid green";

        var ES = EPDS*ETPD;
        document.getElementById("es").value=ES;
        document.getElementById("es").disabled=false;
        document.getElementById("es").style.border="3px solid green";
        document.getElementById("add_to_salary_box").style.display="block";
    }
    else
    {
        document.getElementById("ecd").value="";
        document.getElementById("etpd").value="";
        document.getElementById("etpd").style.border="";
        document.getElementById("etpd").disabled=true;
        document.getElementById("etad").value="";
        document.getElementById("etad").disabled=true;
        document.getElementById("etad").style.border="";
        document.getElementById("es").value="";
        document.getElementById("es").disabled=true;
        document.getElementById("es").style.border="";
        document.getElementById("hr_id").value="";
        document.getElementById("travel_id").value="";
        document.getElementById("sd_id").value="";
        document.getElementById("mb_id").value="";
        document.getElementById("food_id").value="";
        document.getElementById("hr_show_msg").innerText="";    
        document.getElementById("travel_show_msg").innerText="";
        document.getElementById("sd_show_msg").innerText="";   
        document.getElementById("mb_show_msg").innerText="";  
        document.getElementById("food_show_msg").innerText="";
        document.getElementById("asa_id").value="";
        document.getElementById("final_ets_id").value="";
        document.getElementById("add_to_salary_box").style.display="none";
    }
    if (ECD.startsWith(0)) 
    {
        document.getElementById("ecd").value="";
        document.getElementById("etpd").value="";
        document.getElementById("etpd").style.border="";
        document.getElementById("etpd").disabled=true;
        document.getElementById("etad").value="";
        document.getElementById("etad").disabled=true;
        document.getElementById("etad").style.border="";
        document.getElementById("es").value="";
        document.getElementById("es").disabled=true;
        document.getElementById("es").style.border="";
    }
}
function ONKEYUP_ADDITION_SALARY()
{
    var H_R = parseFloat(document.getElementById("hr_id").value)||0;
    var TRAVEL = parseFloat(document.getElementById("travel_id").value)||0;
    var S_D = parseFloat(document.getElementById("sd_id").value)||0;
    var M_B = parseFloat(document.getElementById("mb_id").value)||0;
    var FOOD = parseFloat(document.getElementById("food_id").value)||0;
    var ES = parseFloat(document.getElementById("es").value)||0;
    if (H_R=="") 
    {
        document.getElementById("hr_show_msg").innerText="";
    }
    else
    {
        var HR_SHOW_MSG = (ES*H_R)/100;
        document.getElementById("hr_show_msg").innerText=HR_SHOW_MSG;   
    }
    if (TRAVEL=="") 
    {
        document.getElementById("travel_show_msg").innerText="";
    }
    else
    {
        var TRAVEL_SHOW_MSG = (ES*TRAVEL)/100;
        document.getElementById("travel_show_msg").innerText=TRAVEL_SHOW_MSG;
    }
    if (S_D=="") 
    {
        document.getElementById("sd_show_msg").innerText="";   
    }
    else
    {
        var S_D_SHOW_MSG = (ES*S_D)/100;
        document.getElementById("sd_show_msg").innerText=S_D_SHOW_MSG;
    }
    if (M_B=="") 
    {
        document.getElementById("mb_show_msg").innerText="";
    }
    else
    {
        var M_B_SHOW_MSG = (ES*M_B)/100;
        document.getElementById("mb_show_msg").innerText=M_B_SHOW_MSG;
    }
    if (FOOD=="") 
    {
        document.getElementById("food_show_msg").innerText="";
    }
    else
    {
        var FOOD_SHOW_MSG = (ES*FOOD)/100;
        document.getElementById("food_show_msg").innerText=FOOD_SHOW_MSG;
    }
    if (FOOD=="" || TRAVEL=="" || M_B=="" || H_R=="" || S_D=="") 
    {
        document.getElementById("asa_id").value="";
        document.getElementById("final_ets_id").value="";
    }
    else
    {
        var ADD_SALARY_AMOUNT = HR_SHOW_MSG+TRAVEL_SHOW_MSG+S_D_SHOW_MSG+M_B_SHOW_MSG+FOOD_SHOW_MSG;
        document.getElementById("asa_id").value=ADD_SALARY_AMOUNT.toFixed(2);

        var FINAL_ETS = ES+ADD_SALARY_AMOUNT;
        document.getElementById("final_ets_id").value=FINAL_ETS.toFixed(2);
    }

    var START_WITH_ZERO = document.getElementsByClassName("zero_not_allowed");
    for(var i=0; i<START_WITH_ZERO.length; i++)
    {
        if (START_WITH_ZERO[i].value.startsWith("0")) 
        {
            START_WITH_ZERO[i].value="";    
        }
    }
}