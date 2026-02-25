$(document).ready(function()
{
    $("#op").change(function()
    {
        var OPER = $("#op").val();
        if (OPER=="10") 
        {
            $("#ten_box").fadeIn();
            $("#ten_box").css("display","block");
            $("#box_12").css("display","none");
            $("#box_11").css("display","none");
        }
        else if(OPER=="11")
        {
            $("#box_11").fadeIn();
            $("#ten_box").css("display","none");
            $("#box_11").css("display","block");
            $("#box_12").css("display","none");
        }
        else if (OPER=="12") 
        {
            $("#box_12").fadeIn();
            $("#box_12").css("display","block");
            $("#box_11").css("display","none");
            $("#ten_box").css("display","none");
        }
        else
        {
            $("#box_11").css("display","none");
            $("#box_12").css("display","none");
            $("#ten_box").css("display","none");
        }
    });
});