var STOP_TIMER;
class A
{
    DEMO()
    {
        var USER_INPUT = document.getElementById("word_id").value;
        var TEXT = "mnbvcxzasdfghjklpoiuytrewqMNBVCXZASDFGHJKLPOIUYTREWQ";

        var TEXT_LENGTH = TEXT.length;
        var WORDS = "";
        for(var i=0; i<USER_INPUT; i++)
        {
            WORDS += TEXT.charAt(Math.floor(Math.random() * TEXT_LENGTH));
        }
        document.getElementById("left_textarea_id").value=WORDS;
    }
}

function f()
{
    document.getElementById("start_btn").style.backgroundColor="grey";
}

function ONCLICK_START_BTN() 
{
    var USER_INPUT =document.getElementById("word_id").value.trim();
    var TEXTAREA = document.getElementById("left_textarea_id").value.trim();

    if (USER_INPUT>="1") 
    {
        var OBJ = new A();
        OBJ.DEMO();
        document.getElementById("left_textarea_id").style.color="gray";
        document.getElementById("timer_box").style.display="block";
    }
    if ((USER_INPUT=="" || USER_INPUT=="Plz Enter Number !!") && (TEXTAREA=="" || TEXTAREA=="plz Enter Number So, I Can Show Words !!")) 
    {
        document.getElementById("left_textarea_id").value="plz Enter Number So, I Can Show Words !!";
        document.getElementById("left_textarea_id").style.color="red";
        document.getElementById("word_id").value="Plz Enter Number !!";
        document.getElementById("word_id").style.color="red";
        document.getElementById("timer_box").style.display="none";
    }
    var SECOND=0;
    var MINUTE=0;
    var HOUR=0;
    document.getElementById("hour_id").innerText="00";
    document.getElementById("dot_one").innerText=":";
    document.getElementById("minute_id").innerText="00";
    document.getElementById("dot_two").innerText=":";
    document.getElementById("second_id").innerText="00";
    STOP_TIMER = setInterval(function()
    {
        SECOND++;
        if (SECOND<10) 
        {
            document.getElementById("second_id").innerText="0"+SECOND;
        }
        else
        {
            document.getElementById("second_id").innerText=SECOND;
        }
        if (SECOND==60) 
        {
            SECOND=0;
            MINUTE++;
            if (MINUTE==60) 
            {
                MINUTE=0;
                HOUR++;  
            }
            if (MINUTE<10) 
            {
                document.getElementById("minute_id").innerText="0"+MINUTE;
            }
            else
            {
                document.getElementById("minute_id").innerText=MINUTE;
            }
            if(HOUR<10) 
            {
                document.getElementById("hour_id").innerText="0"+HOUR;
            } 
            else
            {
                document.getElementById("hour_id").innerText=HOUR;
            }
            document.getElementById("second_id").innerText="00";
        }
    },1000);
}

function ONKEYUP_WORDS()
{
    var TEXTAREA = document.getElementById("left_textarea_id").value.trim();
    var USER_INPUT = document.getElementById("word_id").value.trim();
    var LENGTH_USER_INPUT = parseInt(USER_INPUT.length);
    if (USER_INPUT>="1" && TEXTAREA>="1") 
    {
        document.getElementById("left_textarea_id").value="";
        document.getElementById("word_id").value="";
        document.getElementById("word_id").style.color="black";
        document.getElementById("start_btn").disabled=true;
        document.getElementById("start_btn").style.backgroundColor="grey";
    }
    else if (USER_INPUT>="1") 
    {
        document.getElementById("start_btn").disabled=false;    
        document.getElementById("start_btn").style.backgroundColor="blue";    
    }
    else if (USER_INPUT.startsWith(0))
    {
        document.getElementById("word_id").value="";
        document.getElementById("left_textarea_id").value="";
        document.getElementById("timer_box").style.display="none";
        document.getElementById("start_btn").disabled=true;
        document.getElementById("start_btn").style.backgroundColor="grey";
    }
    else if (USER_INPUT=="") 
    {
        document.getElementById("word_id").value="";
        document.getElementById("left_textarea_id").value="";
        document.getElementById("word_id").style.color="black";
        document.getElementById("start_btn").disabled=true;
        document.getElementById("start_btn").style.backgroundColor="grey";
    }
    if (LENGTH_USER_INPUT<=1)
    {
        document.getElementById("timer_box").style.display="none";
    }
    else if (LENGTH_USER_INPUT<=2) 
    {
        document.getElementById("timer_box").style.display="none";
    }
    else if (LENGTH_USER_INPUT<=3) 
    {
        document.getElementById("timer_box").style.display="none";
    }
    else if (LENGTH_USER_INPUT<=4) 
    {
        document.getElementById("timer_box").style.display="none";
    }
    else if (LENGTH_USER_INPUT<=5) 
    {
        document.getElementById("timer_box").style.display="none";
    }
    else if (LENGTH_USER_INPUT<=6) 
    {
        document.getElementById("timer_box").style.display="none";
    }
    else if (LENGTH_USER_INPUT<=7) 
    {
        document.getElementById("timer_box").style.display="none";
    }
    else if (LENGTH_USER_INPUT<=8) 
    {
        document.getElementById("timer_box").style.display="none";
    }
    else if (LENGTH_USER_INPUT<=9)
    {
        document.getElementById("timer_box").style.display="none";
    }
    else if (LENGTH_USER_INPUT<=10) 
    {
        document.getElementById("timer_box").style.display="none";
    }
}

function ONCLICK_SUBMIT_BTN()
{
    // var PER_SECOND = document.getElementById("per_second").innerText;
    // var TOTAL_WORD = document.getElementById("total_word").innerText;
    var CORRECT = parseInt(document.getElementById("correct_id").value)||0;
    var INCORRECT = parseInt(document.getElementById("incorrect_id").value)||0;
    var TOTAL_CHAR = CORRECT+INCORRECT;
    document.getElementById("total_word").innerText="YOU ENTER TOTAL WORD :- "+TOTAL_CHAR;
    clearInterval(STOP_TIMER);
    var HOURS = parseInt(document.getElementById("hour_id").innerText) || 0;
    var MINUTES = parseInt(document.getElementById("minute_id").innerText) || 0;
    var SECONDS = parseInt(document.getElementById("second_id").innerText) || 0;
    var TOTAL_T_MIN = HOURS * 60 + MINUTES + (SECONDS / 60);
    if (TOTAL_T_MIN === 0) 
    {
        TOTAL_T_MIN = 1;
    }
    var WPM = Math.round((TOTAL_CHAR / 5) / TOTAL_T_MIN);
    document.getElementById("per_second").innerText="YOUR TYPING SPEED :- "+WPM+" "+"WPM";
}

function ONKEYUP_RIGHT_TEXTAREA()
{
    var TEXTAREA = document.getElementById("left_textarea_id").value.trim();
    var RIGHT_DIV_BOX = document.getElementById("right_textarea_id");
    var USER_LIMIT = parseInt(document.getElementById("word_id").value.trim());
    var INPUT = RIGHT_DIV_BOX.innerText;
    var COLOR = "";
    var CORRECT = 0;
    var INCORRECT = 0;
    if (INPUT.length > USER_LIMIT) 
    {
        INPUT = INPUT.substring(0,USER_LIMIT);
    }
    for (var i=0;i<INPUT.length; i++) 
    {
        if (INPUT[i]===TEXTAREA[i]) 
        {
            COLOR += `<span style="color: green;">${INPUT[i]}</span>`;
            CORRECT++;
            document.getElementById("correct_id").value=CORRECT;
            document.getElementById("submit").disabled=false;
            document.getElementById("submit").style.backgroundColor="blue";
            AUDIO_MUSIC();
        }
        else
        {
            COLOR += `<span style="color: red;">${INPUT[i]}</span>`;
            INCORRECT++;
            document.getElementById("incorrect_id").value=INCORRECT;
            document.getElementById("submit").disabled=false;
            document.getElementById("submit").style.backgroundColor="blue";
            AUDIO_MUSIC();
        }
    }
    if (INPUT.length=="")
    {
        document.getElementById("correct_id").value="";
        document.getElementById("incorrect_id").value="";
        document.getElementById("total_word").innerText="";
    }
    if (INPUT=="") 
    {
        document.getElementById("submit").disabled=true;
        document.getElementById("submit").style.backgroundColor="grey";
        document.getElementById("incorrect_id").value="";
        document.getElementById("correct_id").value="";
        document.getElementById("total_word").innerText="";
    }
    RIGHT_DIV_BOX.innerHTML = COLOR;
    placeCaretAtEnd(RIGHT_DIV_BOX);
}

function placeCaretAtEnd(el) 
{
    el.focus();
    if (window.getSelection && document.createRange) 
        {
        var range = document.createRange();
        range.selectNodeContents(el);
        range.collapse(false);
        var sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    }
}


function AUDIO_MUSIC()
{
    var AUDIO_KEYBOARD = document.getElementById("audio_id");
    AUDIO_KEYBOARD.currentTime = 0;
    AUDIO_KEYBOARD.play();
}