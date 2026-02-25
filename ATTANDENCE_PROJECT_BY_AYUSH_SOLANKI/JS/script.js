var TIME_IN_DATE = null;
var TIME_OUT_DATE = null;


// START FUNCTION FOR CURRENT TIME
function page_load()
{
    var D = new Date();
    document.getElementById("timer").innerText=D.toLocaleTimeString("en-us");
    setInterval(function()
    {
        var D = new Date();
        document.getElementById("timer").innerText=D.toLocaleTimeString("en-us");
    },1000);
    setInterval(CHECK_TIME,1000);
    setInterval(CHECK_OUT_TIME,1000);
}
// END FUNCTION FOR CURRENT TIME

// there are three setInterval use in this program.

// 1-> for CHECK_TIME(); this function is used for enable time_in btn.
// 2-> for CHECK_OUT_TIME(); this function is used for enable time out btn.
// 3-> for CURRENT TIME; this function is used for current time.

// START FUNCTION FOR TIME IN AND ENABLE BTN 
function CHECK_TIME()
{
    var TODAY = new Date();
    // alert(TODAY);
    var HOURS = TODAY.getHours()%12 || 12;
    var MINUTE = TODAY.getMinutes();
    var SECOND = TODAY.getSeconds();
    var BTN1 = document.getElementById("time_in_btn");
    if (HOURS<10) 
    {
        HOURS = "0" + HOURS;
    } 
    else
    {
        HOURS = HOURS;
    }
    if(MINUTE<10)
    {
        MINUTE = "0" + MINUTE;
    }
    else
    {
        MINUTE = MINUTE;
    }
    if(SECOND<10)
    {
        SECOND = "0" + SECOND;
    }
    else 
    {
        SECOND = SECOND;
    }
    var CHECKTIME = HOURS+":"+MINUTE+":"+SECOND;
    // alert(CHECKTIME);
    if (CHECKTIME >= "1:36:00" && CHECKTIME <= "1:50:00") 
    {
        BTN1.disabled=false;
    }
    else 
    {
        BTN1.disabled=true;
    }
}
// END FUNCTION FOR TIME IN AND ENABLE BTN

// START FUNCTION FOR TIME IN AND ATTANDENCE SUBMIT
function ONCLICK_TIME_IN_BTN()
{
    var TIME_ID = document.getElementById("time_id").value;
    if (TIME_ID=="") 
    {
        alert("YOU ARE NOT ENTER TIME !!");
    }
    else if (TIME_ID>="1") 
    {
        TIME_IN_DATE = new Date();
        document.getElementById("summary_box").style.display="block";
        alert("YOUR ATTENDANCE SUBMIT !!!");
        var PARTS = TIME_ID.split(":");
        var HOURS = parseInt(PARTS[0]);
        var MINUTE = PARTS[1];
        var AMPM;
        if (HOURS>=12) 
        {
            AMPM = "PM"; 
        }
        else
        {
            AMPM = "AM";
        }
        HOURS = HOURS%12;
        if (HOURS === 0) 
        {
            HOURS = 12;
        }
        var FINAL_TIME = HOURS+":"+MINUTE+" "+AMPM;
        document.getElementById("checkin_time").innerText="TIME IN :- "+FINAL_TIME;
    }
}
// END FUNCTION FOR TIME IN AND ATTANDENCE SUBMIT


// START FUNCTION FOR TIME IN AND AM/PM LOGIC
function ONCHANGE_TIME_ID()
{
    var TIME_ID = document.getElementById("time_id").value;
    var PARTS = TIME_ID.split(":");
    var HOURS = parseInt(PARTS[0]);
    var MINUTE = PARTS[1];
    var AMPM;
    if (HOURS>=12) 
    {
        AMPM = "PM"; 
    }
    else
    {
        AMPM = "AM";
    }
    HOURS = HOURS%12;
    if (HOURS === 0) 
    {
        HOURS = 12;
    }
    var FINAL_TIME = HOURS+":"+MINUTE+" "+AMPM;
    alert("YOU HAVE SELECTED TIME IN: " + FINAL_TIME);
    alert("YOU HAVE 15 MINUTES TO MARK YOUR ATTANDENCE !!");
}
// END FUNCTION FOR TIME IN AND AM/PM LOGIC


// START FUNCTION FOR TIME OUT AND ENBALE TIME OUT BTN
function CHECK_OUT_TIME()
{
    var TODAY = new Date();
    // alert(TODAY);
    var HOURS = TODAY.getHours()%12 || 12;
    var MINUTE = TODAY.getMinutes();
    var SECOND = TODAY.getSeconds();
    var BTN1 = document.getElementById("time_in_btn");
    var BTN2 = document.getElementById("time_out_btn");
    if (HOURS<10) 
    {
        HOURS = "0" + HOURS;
    } 
    else
    {
        HOURS = HOURS;
    }
    if(MINUTE<10)
    {
        MINUTE = "0" + MINUTE;
    }
    else
    {
        MINUTE = MINUTE;
    }
    if(SECOND<10)
    {
        SECOND = "0" + SECOND;
    }
    else 
    {
        SECOND = SECOND;
    }
    var CHECKTIME = HOURS+":"+MINUTE+":"+SECOND;
    // alert(CHECKTIME);
    if (CHECKTIME >= "1:33:00" && CHECKTIME <= "1:59:00") 
    {
        BTN2.disabled=false;
    }
    else 
    {
        BTN2.disabled=true;
    }
}
// END FUNCTION FOR TIME OUT AND ENABLE TIME OUT BTN

// START FUNCTION FOR TIME OUT SUMMARY BOX
function ONCLICK_TIME_OUT_BTN()
{
    TIME_OUT_DATE = new Date();
    var FULL_HOURS = TIME_OUT_DATE.getHours();
    var MINUTE = TIME_OUT_DATE.getMinutes();
    var AMPM;
    if(FULL_HOURS>=12)
    {
        AMPM="PM";
    } 
    else 
    {
        AMPM="AM";
    }
    var HOURS = FULL_HOURS % 12;
    if (HOURS === 0)
    {
        HOURS = 12;
    }
    var MINUTE_1;
    if(MINUTE < 10)
    {
        MINUTE_1 = "0" + MINUTE;
    }
    else
    {
        MINUTE_1 = MINUTE;
    }
    
    var CHECKTIME1=HOURS+":"+MINUTE_1+" "+AMPM;
    alert("YOUR CHECKOUT TIME :- "+CHECKTIME1);
    document.getElementById("checkout_time").innerText="TIME OUT :- "+CHECKTIME1;
    var DIFF_MS = TIME_OUT_DATE - TIME_IN_DATE;

    var DIFF_HOURS = Math.floor(DIFF_MS / (1000 * 60 * 60));
    var DIFF_MINUTES = Math.floor((DIFF_MS % (1000 * 60 * 60)) / (1000 * 60));

    var TIME_SPENT = DIFF_HOURS + " hrs " + DIFF_MINUTES + " mins";
    alert("TOTAL TIME SPENT :- " + TIME_SPENT);
    document.getElementById("total_time_spend").innerText="TOTAL TIME SPENT :-" + TIME_SPENT;
}
// END FUNCTION FOR TIME OUT SUMMARY BOX