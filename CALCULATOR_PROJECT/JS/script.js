function calci()
{
    var data = document.getElementById("result").value;
    var RESULT = eval(data);
    document.getElementById("result").value=RESULT;
}

function clear_display()
{
    document.getElementById("result").value = "";
}
function on_fn()
{
    var data = document.getElementById("btn_on").value;
    if(data == "on")
    {
        var buttons = document.getElementsByTagName("input");
        for(var i=0;i<buttons.length;i++)
        {
                buttons[i].disabled = false;
        }
    }
}
function off_fn()
{
    var data = document.getElementById("btn_off").value;
    if(data == "off")
    {
        var buttonss = document.getElementsByTagName("input");
        for(var i=0;i<buttonss.length;i++)
        {
            buttonss[i].disabled=true;
        }
    }
    document.getElementById("result").value = "";
}
function delete_one_by_one()
{
    var DELETE = document.getElementById("result").value;
    document.getElementById("result").value=DELETE.slice(0,-1);
}