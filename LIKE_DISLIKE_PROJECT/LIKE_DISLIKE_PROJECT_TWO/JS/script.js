var count = 0;
function check_btn1()
{
    count++;
    document.getElementById("msg").innerText=count;
}
function check_btn2()
{
    if(count<=0)
    {
        document.getElementById("msg").innerText="0";
    }
    else
    {
        count--;
        document.getElementById("msg").innerText=count;
    }
}