$(document).ready(function()
{

    $("#year_id").keypress(function(e)
    {
        var KEYCODE = e.which;
        // alert(KEYCODE);
        // var YEAR_VAL1 = $("#year_id").val();
        if (KEYCODE>=48 && KEYCODE<=57) 
        {
            return true;    
        }
        else
        {
            return false;
        }
    });

    $("#epds").keypress(function(a)
    {
        var KEYCODE1 = a.which;
        if (KEYCODE1>=48 && KEYCODE1<=57) 
        {
            return true;    
        }
        else
        {
            return false;
        }
    });

    $("#epd").keypress(function(d)
    {
        var KEYCODE2 = d.which;
        if (KEYCODE2>=48 && KEYCODE2<=57) 
        {
            return true;    
        }
        else
        {
            return false;
        }
    });

    $("#ecd").keypress(function(w)
    {
        var KEYCODE3 = w.which;
        if(KEYCODE3>=48 && KEYCODE3<=57) 
        {
            return true;    
        }
        else
        {
            return false;
        }
    });
    
    $("#op").change(function(ascii)
    {
        var OPER = $("#op").val();
        var YEAR = $("#year_id").val();

        if  (OPER=="jan" || OPER=="mar" ||  OPER=="jul" || OPER=="may" || OPER=="aug" || OPER=="oct" || OPER=="dec")
        {
            $("#tdim").val("31");
            $("#leap_year_msg").text("");
        }
        else if (OPER=="apr" || OPER=="jun" || OPER=="sep" || OPER=="nov")
        {
            $("#tdim").val("30");
            $("#leap_year_msg").text("");
        }
        else if(OPER=="sc")
        {
            $("#tdim").val("");
            $("#leap_year_msg").text("");
        }
        else
        {
            if((YEAR % 4 == 0 && YEAR % 100 != 0) || YEAR % 400 == 0)
            {
                $("#tdim").val("29");
                    $("#leap_year_msg").text("This is a Leap Year !!").css("color","green");
            }
            else
            {
                $("#tdim").val("28");
            }
        }
        if (OPER=="jan" || OPER=="feb" || OPER=="mar" || OPER=="apr" || OPER=="may" || OPER=="jun" || OPER=="jul" || OPER=="aug" || OPER=="sep" || OPER=="oct" || OPER=="nov" || OPER=="dec" || OPER=="sc") 
        {
            $("#epds").val("");
            $("#epd").val("");    
            $("#ead").val("");
            $("#es").val("");
            $("#ecd").val("");
            $("#etpd").val("");
            $("#etad").val("");
            $("#cl_no").prop("checked",false);
            $("#cl_yes").prop("checked",false);
            $("#cl_box").hide("");
            $("#epds_msg").text("");
        }
    });
    
    $("#epd").keyup(function()
    {
        var E_P_D = parseInt($("#epd").val());
        var T_D_I_M = parseInt($("#tdim").val());
        if (E_P_D <= T_D_I_M) 
        {
            var TDIM = parseInt($("#tdim").val());
            var EPDS = parseInt($("#epds").val());
            var EPD = parseInt($("#epd").val());
            var EAD = TDIM - EPD;
            $("#ead").val(EAD);    
        }
        else
        {
            // alert("Invalid Number !!");
            $("#epd").val("");
            $("#ead").val("");
            $("#cl_no").prop("checked",false);
            $("#es").val("");
            $("#ecd").val("");
            $("#etpd").val("");
            $("#etad").val("");
            $("#cl_yes").prop("checked",false);
            $("#cl_box").hide("");
        }
    });


    $("#cl_yes").click(function()
    {
        $("#cl_box").show();
        $("#es").val("");
        $("#etpd").val("");
        $("#etad").val("");
        $("#es").val("");
        $("#ecd").val("");
    });
    $("#cl_no").click(function()
    {
        $("#cl_box").hide();
    });

    $("#ecd").keyup(function()
    {
        var E_A_D = parseInt($("#ead").val());
        var E_C_D = parseInt($("#ecd").val());
        if (E_C_D==0) 
        {
            $("#ecd").val("");
        }
        else if(E_C_D=="")
        {
            $("#etpd").val("");
            $("#etad").val("");
            $("#es").val();
        }
        else if (E_C_D<=E_A_D) 
        {
            var EPD = parseInt($("#epd").val());
            var ECD = parseInt($("#ecd").val());
            var ETPD = EPD+ECD;
            $("#etpd").val(ETPD);

            var TDIM = parseInt($("#tdim").val());
            var ETPD = parseInt($("#etpd").val());
            var ETAD = TDIM-ETPD;
            $("#etad").val(ETAD);

            var EPDS = parseInt($("#epds").val());
            var ETPD = parseInt($("#etpd").val());
            var ES = ETPD*EPDS;
            $("#es").val(ES);
        }
        else
        {
            $("#etpd").val("");
            $("#etad").val("");
            $("#es").val("");
            $("#ecd").val("");
        }
    });

    $("#cl_no").click(function()
    {
        var EPDS = parseInt($("#epds").val());
        var EPD = parseInt($("#epd").val());
        var ES = EPDS*EPD;
        $("#es").val(ES);
    });

    $("#year_id").keyup(function()
    {
        var YEAR_VAL = $("#year_id").val();
        var YEAR_LENGTH = YEAR_VAL.length;

        // YEAR_VAL = YEAR_VAL.substring(0, 4);
        // $("#year_id").val(YEAR_VAL);
        YEAR_VAL = YEAR_VAL.slice(0,4);
        $("#year_id").val(YEAR_VAL);

        if (YEAR_VAL=="")
        {
            $("#op").val("sc");
            $("#tdim").val("");
            $("#leap_year_msg").text("");
            $("#op").val("sc");
            $("#tdim").val("");
            $("#leap_year_msg").text("");
            $("#epds").val("");
            $("#epd").val("");
            $("#ead").val("");
            $("#cl_no").prop("checked",false);
            $("#es").val("");
            $("#ecd").val("");
            $("#etpd").val("");
            $("#etad").val("");
            $("#cl_yes").prop("checked",false);
            $("input").css("border","1px solid black");
            $("#op").css("border","1px solid black");
            $("#cl_box").hide("");
            $("#epds_msg").text("");

            // enabled disabled logic

            $("#op").prop("disabled",true);
            $("#tdim").prop("disabled",true);
            $("#epds").prop("disabled",true);
            $("#epd").prop("disabled",true);
            $("#cl_yes").prop("disabled",true);
            $("#cl_no").prop("disabled",true);
            $("#ecd").prop("disabled",true);
            $("#etpd").prop("disabled",true);
            $("#etad").prop("disabled",true);
        }
        else if (YEAR_VAL=="0") 
        {
            $("#year_id").val("");    
        }
        else if(YEAR_LENGTH==4)
        {
            $("input").css("border","3px solid black");
            $("#op").css("border","3px solid black");
            $("#op").prop("disabled",false);
            $("#tdim").prop("disabled",false);
            $("#epds").prop("disabled",false);
            $("#epd").prop("disabled",false);
            $("#cl_yes").prop("disabled",false);
            $("#cl_no").prop("disabled",false);
            $("#ecd").prop("disabled",false);
            $("#etpd").prop("disabled",false);
            $("#etad").prop("disabled",false);
        }
        else if (YEAR_LENGTH<=4) 
        {
            $("#op").val("sc");
            $("#tdim").val("");
            $("#leap_year_msg").text("");
            $("#epds").val("");
            $("#epd").val("");
            $("#ead").val("");
            $("#cl_no").prop("checked",false);
            $("#es").val("");
            $("#ecd").val("");
            $("#etpd").val("");
            $("#etad").val("");
            $("#cl_yes").prop("checked",false);
            $("input").css("border","1px solid black");
            $("#op").css("border","1px solid black");
            $("#cl_box").hide("");
            $("#epds_msg").text("");

            // enabled disabled logic

            $("#op").prop("disabled",true);
            $("#tdim").prop("disabled",true);
            $("#epds").prop("disabled",true);
            $("#epd").prop("disabled",true);
            $("#cl_yes").prop("disabled",true);
            $("#cl_no").prop("disabled",true);
            $("#ecd").prop("disabled",true);
            $("#etpd").prop("disabled",true);
            $("#etad").prop("disabled",true);
        }
    });

    $("#epds").focus(function()
    {
        var EMP_SALARY = $("#epds").val();
        if (EMP_SALARY=="") 
        {
            $("#epds_msg").text("At Least 3 Value !!").css("color","red");   
        }
    });

    $("#epds").keyup(function()
    {
        var EMP_SALARY = $("#epds").val();
        var EMP_SALARY_LENGTH = EMP_SALARY.length
        if (EMP_SALARY=="") 
        {
            $("#epds_msg").text("At Least 3 Value !!").css("color","red");
        }
        else if (EMP_SALARY=="0") 
        {
            $("#epds_msg").text("Start At 0 Not Allowed !!");
            $("#epds").val("");
        }
        else
        {
            $("#epds_msg").text("");
        }
        if(EMP_SALARY_LENGTH<=3) 
        {
            $("#epd").val("");
            $("#ead").val("");
            $("#cl_yes").prop("checked",false);
            $("#cl_no").prop("checked",false);
            $("#es").val("");
            $("#ecd").val("");
            $("#etpd").val("");
            $("#etad").val("");
            $("#cl_box").hide("");       
        }
        else if (EMP_SALARY_LENGTH<=4) 
        {
            $("#epd").val("");
            $("#ead").val("");
            $("#cl_yes").prop("checked",false);
            $("#cl_no").prop("checked",false);
            $("#es").val("");
            $("#ecd").val("");
            $("#etpd").val("");
            $("#etad").val("");
            $("#cl_box").hide("");
        }
        else if (EMP_SALARY_LENGTH<=5) 
        {
            $("#epd").val("");
            $("#ead").val("");
            $("#cl_yes").prop("checked",false);
            $("#cl_no").prop("checked",false);
            $("#es").val("");
            $("#ecd").val("");
            $("#etpd").val("");
            $("#etad").val("");
            $("#cl_box").hide("");    
        }
        else if (EMP_SALARY_LENGTH<=6) 
        {
            $("#epd").val("");
            $("#ead").val("");
            $("#cl_yes").prop("checked",false);
            $("#cl_no").prop("checked",false);
            $("#es").val("");
            $("#ecd").val("");
            $("#etpd").val("");
            $("#etad").val("");
            $("#cl_box").hide("");    
        }
        else if (EMP_SALARY_LENGTH<=7) 
        {
            $("#epd").val("");
            $("#ead").val("");
            $("#cl_yes").prop("checked",false);
            $("#cl_no").prop("checked",false);
            $("#es").val("");
            $("#ecd").val("");
            $("#etpd").val("");
            $("#etad").val("");
            $("#cl_box").hide("");    
        }
        else if (EMP_SALARY_LENGTH<=8) 
        {
            $("#epd").val("");
            $("#ead").val("");
            $("#cl_yes").prop("checked",false);
            $("#cl_no").prop("checked",false);
            $("#es").val("");
            $("#ecd").val("");
            $("#etpd").val("");
            $("#etad").val("");
            $("#cl_box").hide("");    
        }
        else if (EMP_SALARY_LENGTH<=9) 
        {
            $("#epd").val("");
            $("#ead").val("");
            $("#cl_yes").prop("checked",false);
            $("#cl_no").prop("checked",false);
            $("#es").val("");
            $("#ecd").val("");
            $("#etpd").val("");
            $("#etad").val("");
            $("#cl_box").hide("");    
        }
        else if (EMP_SALARY_LENGTH<=10) 
        {
            $("#epd").val("");
            $("#ead").val("");
            $("#cl_yes").prop("checked",false);
            $("#cl_no").prop("checked",false);
            $("#es").val("");
            $("#ecd").val("");
            $("#etpd").val("");
            $("#etad").val("");
            $("#cl_box").hide("");    
        }
    });
});