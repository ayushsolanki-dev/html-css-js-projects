function ONCLICK_DATE_BTN() 
{
    var BIRTH_DATE_VALUE = document.getElementById("dob_id").value;
    var BIRTH_DATE = new Date(BIRTH_DATE_VALUE);
    var TODAY_DATE = new Date();

    var YEAR = TODAY_DATE.getFullYear() - BIRTH_DATE.getFullYear();
    var MONTH = TODAY_DATE.getMonth() - BIRTH_DATE.getMonth();
    var DAY = TODAY_DATE.getDate() - BIRTH_DATE.getDate();

    if (DAY<0)
    {
        MONTH--;
        DAY=DAY+30;
    }
    if (MONTH<0) 
    {
        YEAR--;
        MONTH=MONTH+12;
    }
    document.getElementById("box_two").style.display="block";
    document.getElementById("total_year").innerText="Total Years :- "+YEAR;
    document.getElementById("total_month").innerText="Total Months :- "+MONTH;
    document.getElementById("total_day").innerText="Total Days :- "+DAY;
}