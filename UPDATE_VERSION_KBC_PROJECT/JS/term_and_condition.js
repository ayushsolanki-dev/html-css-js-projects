function ONCHANGE_CHECK_BOX()
{
    var CHECKBOX = document.getElementById("check_box");
    if (CHECKBOX.checked==true) 
    {
        document.getElementById("btn_one").disabled=false;
        document.getElementById("btn_one").style.cursor="pointer";  
    }
    else
    {
        document.getElementById("btn_one").disabled=true;
        document.getElementById("btn_one").style.cursor="not-allowed";
    }
}

function GOTO_PAGE_GAME_PAGE()
{
    window.location.href="http://127.0.0.1:5501/game_page.html";
}

function GOTO_PAGE_FORM_PAGE()
{
   window.location.href="http://127.0.0.1:5501/form.html";
}

window.addEventListener("pageshow", () => 
{
    document.getElementById("check_box").checked=false;
});
