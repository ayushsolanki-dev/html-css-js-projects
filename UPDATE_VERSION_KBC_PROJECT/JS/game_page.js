// --------------------------------------------------------------------------------------------------------------------------------------
var QUESTIONS = [
    {
        Q: "What is JavaScript?",
        OPTIONS: [
            "a) JavaScript is a scripting language used to make the website interactive",
            "b) JavaScript is an assembly language used to make the website interactive",
            "c) JavaScript is a compiled language used to make the website interactive",
            "d) None of the mentioned"
        ],
        ANSWER: 0
    },
    {
        Q: "Which of the following is correct about JavaScripts?",
        OPTIONS: [
            "a) JavaScript is an Object-Based language",
            "b) JavaScript is Assembly-language",
            "c) JavaScript is an Object-Oriented language",
            "d) JavaScript is a High-level language"
        ],
        ANSWER: 0
    },
    {
        Q: "Among the given statements,which statement defines closures in JavaScript?",
        OPTIONS: [
            "a) JavaScript is a function that is enclosed with references to its inner function scope",
            "b) JavaScript is a function that is enclosed with references to its lexical environment",
            "c) JavaScript is a function that is enclosed with the object to its inner function scope",
            "d) None of the mentioned"
        ],
        ANSWER:1
    },
    {
        Q: "Arrays in JavaScript are defined by which of the following statements?",
        OPTIONS: [
            "a) It is an ordered list of values",
            "b) It is an ordered list of objects",
            "c) It is an ordered list of string",
            "d) It is an ordered list of function"
        ],
        ANSWER:0
    },
    {
        Q: "Which of the following is not javascript data types?",
        OPTIONS: [
            "a) Null type",
            "b) Undefined type",
            "c) Number type",
            "d) All of the mentioned"
        ],
        ANSWER:3
    },
    {
        Q: "Which of the following scoping type does JavaScript use?",
        OPTIONS: [
            "a) Sequential",
            "b) Segmental",
            "c) Lexical",
            "d) Literal"
        ],
        ANSWER:2
    },
    {
        Q: "What is the basic difference between JavaScript and Java?",
        OPTIONS: [
            "a) Functions are considered as fields",
            "b) Functions are values, and there is no hard distinction between methods and fields",
            "c) Variables are specific",
            "d) There is no difference"
        ],
        ANSWER:1
    },
    {
        Q: "Why JavaScript Engine is needed?",
        OPTIONS: [
            "a) Both Compiling & Interpreting the JavaScript",
            "b) Parsing the javascript",
            "c) Interpreting the JavaScript",
            "d) Compiling the JavaScript"
        ],
        ANSWER:2
    },
    {
        Q: "Why event handlers is needed in JS?",
        OPTIONS: [
            "a) Allows JavaScript code to alter the behaviour of windows",
            "b) Adds innerHTML page to the code",
            "c) Change the server location",
            "d) Performs handling of exceptions and occurrences"
        ],
        ANSWER:0
    },
    {
        Q: "Which of the following is not a framework?",
        OPTIONS: [
            "a) JavaScript .NET",
            "b) JavaScript",
            "c) Cocoa JS",
            "d) jQuery"
        ],
        ANSWER:1
    },
    {
        Q: "Which of the following is not an error in JavaScript?",
        OPTIONS: [
            "a) Missing of Bracket",
            "b) Division by zero",
            "c) Syntax error",
            "d) Missing of semicolons"
        ],
        ANSWER:1
    },
    {
        Q: "What is HTML?",
        OPTIONS: [
            "a) HTML describes the structure of a webpage",
            "b) HTML is the standard markup language mainly used to create web pages",
            "c) HTML consists of a set of elements that helps the browser how to view the content",
            "d) All of the mentioned"
        ],
        ANSWER:3
    },
    {
        Q: "Who is the father of HTML?",
        OPTIONS: [
            "a) Rasmus Lerdorf",
            "b) Tim Berners-Lee",
            "c) Brendan Eich",
            "d) Sergey Brin"
        ],
        ANSWER:1
    },
    {
        Q: "HTML stands for __________",
        OPTIONS: [
            "a) HyperText Markup Language",
            "b) HyperText Machine Language",
            "c) HyperText Marking Language",
            "d) HighText Marking Language"
        ],
        ANSWER:0
    },
    {
        Q: "What is the correct syntax of doctype in HTML5?",
        OPTIONS: [
            "a) </doctype html>",
            "b) <doctype html>",
            "c) <doctype html!>",
            "d) <!doctype html>"
        ],
        ANSWER:3
    },
];
// --------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------
var CURRENT_QUESTION_INDEX;

function ONCLICK_PLAY_GAME_BTN() 
{
    SHUFFLE_ARRAY(QUESTIONS);
    CURRENT_QUESTION_INDEX = 0;
    SHOW_QUESTIONS(CURRENT_QUESTION_INDEX);
    TIMER(CURRENT_QUESTION_INDEX);
    TIMER_AUDIO_MUSIC();
    //// QUESTIONS.sort(() => Math.random() - 0.5);
    var PLAY_BTN = document.getElementById("play_btn_id");
    PLAY_BTN.disabled=true;
    PLAY_BTN.style.cursor="not-allowed";
    PLAY_BTN.classList.add("PLAY_BTN");
    var QUIT_BTN = document.getElementById("quit_btn_id");
    QUIT_BTN.disabled=false;
    QUIT_BTN.style.cursor="pointer";
    var REVERSE_BTN = document.getElementById("reverse_btn_id");
    REVERSE_BTN.disabled=false;
    REVERSE_BTN.style.cursor="pointer";
    REVERSE_BTN.style.opacity="1";
    var AUDIENCE_POLL_BTN = document.getElementById("audience_poll_btn_id");
    AUDIENCE_POLL_BTN.disabled=false;
    AUDIENCE_POLL_BTN.style.cursor="pointer";
    AUDIENCE_POLL_BTN.style.opacity="1";
    var FIFTY_FIFTY_BTN = document.getElementById("fifty_fifty_btn_id");
    FIFTY_FIFTY_BTN.disabled=false;
    FIFTY_FIFTY_BTN.style.cursor="pointer";
    FIFTY_FIFTY_BTN.style.opacity="1";
}
// --------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------
var STOP_TIMER;

function TIMER(CURRENT_QUESTION_INDEX) 
{
    document.getElementById("timer").innerText="45";
    document.getElementById("timer").style.color="cyan";
    clearInterval(STOP_TIMER);

    STOP_TIMER = setInterval(function () 
    {
        var TIMER_LEFT = parseInt(document.getElementById("timer").innerText);
        TIMER_LEFT--;
        if (TIMER_LEFT < 10)
        {
            document.getElementById("timer").innerText="0"+TIMER_LEFT;
            document.getElementById("timer").style.color="red";
        }
        else
        {
            document.getElementById("timer").innerText=TIMER_LEFT;
            document.getElementById("timer").style.color="cyan";
        }

        if (TIMER_LEFT==0)
        {
            clearInterval(STOP_TIMER);
            if (CURRENT_QUESTION_INDEX>0)
            {
                Swal.fire({
                    title: "Time's Up !!",
                    text: "You Didn't Answer the Question !!",
                    icon: "question",
                    customClass: {
                        popup: "my-unique-popup",
                        confirmButton: "my-unique-confirm-button"
                    }
                    }).then(() => {
                    setTimeout(function ()
                    {
                        window.location.href="congratulations_reward_page.html";
                    }, 80);
                });
            }
            else
            {
                window.location.href="try_again_page.html";
            }
        }
    }, 1000);
}
// --------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------
function SHUFFLE_ARRAY(ARRAY) 
{
    for (var i=0; i<ARRAY.length; i++) 
    {
        var j = Math.floor(Math.random()*ARRAY.length);
        var temp = ARRAY[i];
        ARRAY[i] = ARRAY[j];
        ARRAY[j] = temp;
    }
}
// --------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------
function SHOW_QUESTIONS(INDEX)
{
    var QUESTIONS_OBJ = QUESTIONS[INDEX];
    document.getElementById("q_box").textContent=QUESTIONS_OBJ.Q;

    var ALL_BTN_OPTIONS = document.getElementsByClassName("option_button");
    document.getElementById("options_box").style.display="block";

    if (QUESTIONS_OBJ.Q == "What is JavaScript?") 
    {
        document.getElementById("q_box").classList.add("q0");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].textContent = QUESTIONS_OBJ.OPTIONS[i];
            ALL_BTN_OPTIONS[i].style.cursor="pointer";
            ALL_BTN_OPTIONS[i].disabled=false;
            ALL_BTN_OPTIONS[i].classList.add("op0");
            ALL_BTN_OPTIONS[i].classList.remove("correct");
        }
    }
    else
    {
        document.getElementById("q_box").classList.remove("q0");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].classList.remove("op0");
        }
    }

    if (QUESTIONS_OBJ.Q == "Which of the following is correct about JavaScripts?") 
    {
        document.getElementById("q_box").classList.add("q1");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].textContent = QUESTIONS_OBJ.OPTIONS[i];
            ALL_BTN_OPTIONS[i].style.cursor="pointer";
            ALL_BTN_OPTIONS[i].disabled=false;
            ALL_BTN_OPTIONS[i].classList.add("op1");
            ALL_BTN_OPTIONS[i].classList.remove("correct");
        }
    }
    else
    {
        document.getElementById("q_box").classList.remove("q1");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].classList.remove("op1");
        }
    }

    if (QUESTIONS_OBJ.Q == "Among the given statements,which statement defines closures in JavaScript?") 
    {
        document.getElementById("q_box").classList.add("q2");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].textContent = QUESTIONS_OBJ.OPTIONS[i];
            ALL_BTN_OPTIONS[i].style.cursor="pointer";
            ALL_BTN_OPTIONS[i].disabled=false;
            ALL_BTN_OPTIONS[i].classList.add("op2");
            ALL_BTN_OPTIONS[i].classList.remove("correct");
        }
    }
    else
    {
        document.getElementById("q_box").classList.remove("q2");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].classList.remove("op2");
        }
    }

    if (QUESTIONS_OBJ.Q == "Arrays in JavaScript are defined by which of the following statements?") 
    {
        document.getElementById("q_box").classList.add("q3");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].textContent = QUESTIONS_OBJ.OPTIONS[i];
            ALL_BTN_OPTIONS[i].style.cursor="pointer";
            ALL_BTN_OPTIONS[i].disabled=false;
            ALL_BTN_OPTIONS[i].classList.add("op3");
            ALL_BTN_OPTIONS[i].classList.remove("correct");
        }
    }
    else
    {
        document.getElementById("q_box").classList.remove("q3");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].classList.remove("op3");
        }
    }

    if (QUESTIONS_OBJ.Q == "Which of the following is not javascript data types?") 
    {
        document.getElementById("q_box").classList.add("q4");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].textContent = QUESTIONS_OBJ.OPTIONS[i];
            ALL_BTN_OPTIONS[i].style.cursor="pointer";
            ALL_BTN_OPTIONS[i].disabled=false;
            ALL_BTN_OPTIONS[i].classList.add("op4");
            ALL_BTN_OPTIONS[i].classList.remove("correct");
        }
    }
    else
    {
        document.getElementById("q_box").classList.remove("q4");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].classList.remove("op4");
        }
    }

    if (QUESTIONS_OBJ.Q == "Which of the following scoping type does JavaScript use?") 
    {
        document.getElementById("q_box").classList.add("q5");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].textContent = QUESTIONS_OBJ.OPTIONS[i];
            ALL_BTN_OPTIONS[i].style.cursor="pointer";
            ALL_BTN_OPTIONS[i].disabled=false;
            ALL_BTN_OPTIONS[i].classList.add("op5");
            ALL_BTN_OPTIONS[i].classList.remove("correct");
        }
    }
    else
    {
        document.getElementById("q_box").classList.remove("q5");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].classList.remove("op5");
        }
    }

    if (QUESTIONS_OBJ.Q == "What is the basic difference between JavaScript and Java?") 
    {
        document.getElementById("q_box").classList.add("q6");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].textContent = QUESTIONS_OBJ.OPTIONS[i];
            ALL_BTN_OPTIONS[i].style.cursor="pointer";
            ALL_BTN_OPTIONS[i].disabled=false;
            ALL_BTN_OPTIONS[i].classList.add("op6");
            ALL_BTN_OPTIONS[i].classList.remove("correct");
        }
    }
    else
    {
        document.getElementById("q_box").classList.remove("q6");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].classList.remove("op6");
        }
    }

    if (QUESTIONS_OBJ.Q == "Why JavaScript Engine is needed?") 
    {
        document.getElementById("q_box").classList.add("q7");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].textContent = QUESTIONS_OBJ.OPTIONS[i];
            ALL_BTN_OPTIONS[i].style.cursor="pointer";
            ALL_BTN_OPTIONS[i].disabled=false;
            ALL_BTN_OPTIONS[i].classList.add("op7");
            ALL_BTN_OPTIONS[i].classList.remove("correct");
        }
    }
    else
    {
        document.getElementById("q_box").classList.remove("q7");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].classList.remove("op7");
        }
    }

    if (QUESTIONS_OBJ.Q == "Why event handlers is needed in JS?") 
    {
        document.getElementById("q_box").classList.add("q8");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].textContent = QUESTIONS_OBJ.OPTIONS[i];
            ALL_BTN_OPTIONS[i].style.cursor="pointer";
            ALL_BTN_OPTIONS[i].disabled=false;
            ALL_BTN_OPTIONS[i].classList.add("op8");
            ALL_BTN_OPTIONS[i].classList.remove("correct");
        }
    }
    else
    {
        document.getElementById("q_box").classList.remove("q8");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].classList.remove("op8");
        }
    }

    if (QUESTIONS_OBJ.Q == "Which of the following is not a framework?") 
    {
        document.getElementById("q_box").classList.add("q9");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].textContent = QUESTIONS_OBJ.OPTIONS[i];
            ALL_BTN_OPTIONS[i].style.cursor="pointer";
            ALL_BTN_OPTIONS[i].disabled=false;
            ALL_BTN_OPTIONS[i].classList.add("op9");
            ALL_BTN_OPTIONS[i].classList.remove("correct");
        }
    }
    else
    {
        document.getElementById("q_box").classList.remove("q9");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].classList.remove("op9");
        }
    }

    if (QUESTIONS_OBJ.Q == "Which of the following is not an error in JavaScript?") 
    {
        document.getElementById("q_box").classList.add("q10");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].textContent = QUESTIONS_OBJ.OPTIONS[i];
            ALL_BTN_OPTIONS[i].style.cursor="pointer";
            ALL_BTN_OPTIONS[i].disabled=false;
            ALL_BTN_OPTIONS[i].classList.add("op10");
            ALL_BTN_OPTIONS[i].classList.remove("correct");
        }
    }
    else
    {
        document.getElementById("q_box").classList.remove("q10");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].classList.remove("op10");
        }
    }

    if (QUESTIONS_OBJ.Q == "What is HTML?") 
    {
        document.getElementById("q_box").classList.add("q11");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].textContent = QUESTIONS_OBJ.OPTIONS[i];
            ALL_BTN_OPTIONS[i].style.cursor="pointer";
            ALL_BTN_OPTIONS[i].disabled=false;
            ALL_BTN_OPTIONS[i].classList.add("op11");
            ALL_BTN_OPTIONS[i].classList.remove("correct");
        }
    }
    else
    {
        document.getElementById("q_box").classList.remove("q11");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].classList.remove("op11");
        }
    }

    if (QUESTIONS_OBJ.Q == "Who is the father of HTML?") 
    {
        document.getElementById("q_box").classList.add("q12");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].textContent = QUESTIONS_OBJ.OPTIONS[i];
            ALL_BTN_OPTIONS[i].style.cursor="pointer";
            ALL_BTN_OPTIONS[i].disabled=false;
            ALL_BTN_OPTIONS[i].classList.add("op12");
            ALL_BTN_OPTIONS[i].classList.remove("correct");
        }
    }
    else
    {
        document.getElementById("q_box").classList.remove("q12");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].classList.remove("op12");
        }
    }

    if (QUESTIONS_OBJ.Q == "HTML stands for __________") 
    {
        document.getElementById("q_box").classList.add("q13");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].textContent = QUESTIONS_OBJ.OPTIONS[i];
            ALL_BTN_OPTIONS[i].style.cursor="pointer";
            ALL_BTN_OPTIONS[i].disabled=false;
            ALL_BTN_OPTIONS[i].classList.add("op13");
            ALL_BTN_OPTIONS[i].classList.remove("correct");
        }
    }
    else
    {
        document.getElementById("q_box").classList.remove("q13");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].classList.remove("op13");
        }
    }

    if (QUESTIONS_OBJ.Q == "What is the correct syntax of doctype in HTML5?") 
    {
        document.getElementById("q_box").classList.add("q14");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].textContent = QUESTIONS_OBJ.OPTIONS[i];
            ALL_BTN_OPTIONS[i].style.cursor="pointer";
            ALL_BTN_OPTIONS[i].disabled=false;
            ALL_BTN_OPTIONS[i].classList.add("op14");
            ALL_BTN_OPTIONS[i].classList.remove("correct");
        }
    }
    else
    {
        document.getElementById("q_box").classList.remove("q14");
        for (var i = 0; i < ALL_BTN_OPTIONS.length; i++) 
        {
            ALL_BTN_OPTIONS[i].classList.remove("op14");
        }
    }
    
    document.getElementById("one_hr_line").style.display="block";
    document.getElementById("timer").style.display="block";
    document.getElementById("second_hr_line").style.display="block";
}
// --------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------
function ONLOAD_EVENT()
{
    var RUPEES_BTN = document.getElementsByClassName("rupees_class");
    for(var i=0; i<RUPEES_BTN.length; i++)
    {
        var num = parseInt(RUPEES_BTN[i].textContent);
        RUPEES_BTN[i].textContent = num.toLocaleString("en-in");
    }
}
// ------------------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------------------
function NEXT_QUESTIONS()
{
    TIMER_AUDIO_MUSIC();
    CURRENT_QUESTION_INDEX++;
    if (CURRENT_QUESTION_INDEX < QUESTIONS.length) 
    {
        SHOW_QUESTIONS(CURRENT_QUESTION_INDEX);
        TIMER(CURRENT_QUESTION_INDEX);
    }
    else
    {
        alert("All Questions Complited !!!");
    }
    var NEXT_BTN = document.getElementById("next_btn_id");
    NEXT_BTN.disabled=true;
    NEXT_BTN.style.cursor="not-allowed";
    NEXT_BTN.classList.add("next_btn1");
    var OPTIONS_BUTTON = document.getElementsByClassName("option_button");
    for (var i=0; i<OPTIONS_BUTTON.length; i++)
    {
        OPTIONS_BUTTON[i].style.opacity="1";
        OPTIONS_BUTTON[i].classList.remove("fifty_fifty_btn_disable");
    }
}
// ------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------
const PRIZES = [10000,20000,30000,40000,50000,60000,70000,80000,90000,1000000,70000000];
function CHECK_ANSWER(SELECT_INDEX)
{
    var TIMER_AUDIO = document.getElementById("timer_audio_id");
    var RIGHT_AUDIO = document.getElementById("right_audio_id");
    var WRONG_AUDIO = document.getElementById("wrong_audio_id");
    var CORRECT_ANSWER_INDEX = QUESTIONS[CURRENT_QUESTION_INDEX].ANSWER;
    var OPTIONS_BUTTON = document.getElementsByClassName("option_button");
    var NEXT_BTN = document.getElementById("next_btn_id");
    clearInterval(STOP_TIMER);

    for (var i = 0; i < OPTIONS_BUTTON.length; i++) 
    {
        OPTIONS_BUTTON[i].disabled=true;
        OPTIONS_BUTTON[i].style.cursor="not-allowed";
        OPTIONS_BUTTON[i].classList.add("all_btn_not_allowed");

        if (i == CORRECT_ANSWER_INDEX)
        {
            OPTIONS_BUTTON[i].classList.add("correct");
        }
        if (i == SELECT_INDEX && i != CORRECT_ANSWER_INDEX)
        {
            OPTIONS_BUTTON[i].classList.add("wrong");
            if (CURRENT_QUESTION_INDEX==0) 
            {
                sessionStorage.setItem("first_question_incorrect", "Tough start! Better luck next time.");    
            }
            setTimeout(function()
            {
                SWEETALERT();
            },500);
        }
    }
    TIMER_AUDIO.pause();
    TIMER_AUDIO.currentTime = 0;
    if (SELECT_INDEX==CORRECT_ANSWER_INDEX)
    {
        RIGHT_AUDIO.currentTime = 0;
        RIGHT_AUDIO.play();    
    }
    else
    {
        WRONG_AUDIO.currentTime = 0;
        WRONG_AUDIO.play();
    }

    if (SELECT_INDEX == CORRECT_ANSWER_INDEX) 
    {
        clearInterval(STOP_TIMER);
        if (CURRENT_QUESTION_INDEX<10) 
        {
            NEXT_BTN.disabled=false;
            NEXT_BTN.style.cursor="pointer";
            sessionStorage.setItem("wonAmount", PRIZES[CURRENT_QUESTION_INDEX]); 
        }
        else if (CURRENT_QUESTION_INDEX==10) 
        {
            sessionStorage.setItem("wonAmount", PRIZES[CURRENT_QUESTION_INDEX]);
            Swal.fire({
                title: "🎉 ₹7 Crore Winner! 🎉",
                text: "🏆 CONGRATULATIONS! 🏆",
                text: "You've won the grand prize of ₹7,00,00,000 !!!",
                icon:"success",
                footer: "🏆 Thank you for playing! Enjoy your winnings! 💰",
                customClass:
                {
                    popup: 'royal-twilight',
                    footer: 'royal-twilight-footer',
                    confirmButton: 'royal-twilight-confirm'
                },
                }).then((RESULT) => {
                if (RESULT.isConfirmed) 
                {
                    setTimeout(function ()
                    {
                        window.location.href="congratulations_reward_page.html";
                    },95);  
                }
            });    
        }
    } 
    else 
    {
        NEXT_BTN.disabled = true;
        NEXT_BTN.style.cursor="not-allowed";
        NEXT_BTN.classList.add("next_btn"); 
    }
    HIGHLITED_RUPEES_BTN(CURRENT_QUESTION_INDEX,SELECT_INDEX,CORRECT_ANSWER_INDEX);
}
// ------------------------------------------------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------------------------------------------------
function HIGHLITED_RUPEES_BTN(CURRENT_QUESTION_INDEX,SELECT_INDEX,CORRECT_ANSWER_INDEX)
{
    if (CURRENT_QUESTION_INDEX == 0 && SELECT_INDEX == CORRECT_ANSWER_INDEX)
    {
        document.getElementsByClassName("rupees_class")[10].style.backgroundColor = "green";
        document.getElementsByClassName("rupees_class")[10].style.color = "#fff";
        document.getElementsByClassName("rupees_class")[10].style.border="3px solid yellowgreen";
    }
    else if(CURRENT_QUESTION_INDEX == 1 && SELECT_INDEX == CORRECT_ANSWER_INDEX)
    {
        document.getElementsByClassName("rupees_class")[9].style.backgroundColor="green";
        document.getElementsByClassName("rupees_class")[9].style.color="#fff";
        document.getElementsByClassName("rupees_class")[9].style.border="3px solid yellowgreen";
    }
    else if(CURRENT_QUESTION_INDEX == 2 && SELECT_INDEX == CORRECT_ANSWER_INDEX)
    {
        document.getElementsByClassName("rupees_class")[8].style.backgroundColor="green";
        document.getElementsByClassName("rupees_class")[8].style.color="#fff";
        document.getElementsByClassName("rupees_class")[8].style.border="3px solid yellowgreen";
    }
    else if(CURRENT_QUESTION_INDEX == 3 && SELECT_INDEX == CORRECT_ANSWER_INDEX)
    {
        document.getElementsByClassName("rupees_class")[7].style.backgroundColor="green";
        document.getElementsByClassName("rupees_class")[7].style.color="#fff";
        document.getElementsByClassName("rupees_class")[7].style.border="3px solid yellowgreen";
    }
    else if(CURRENT_QUESTION_INDEX == 4 && SELECT_INDEX == CORRECT_ANSWER_INDEX)
    {
        document.getElementsByClassName("rupees_class")[6].style.backgroundColor="green";
        document.getElementsByClassName("rupees_class")[6].style.color="#fff";
        document.getElementsByClassName("rupees_class")[6].style.border="3px solid yellowgreen";
    }
    else if(CURRENT_QUESTION_INDEX == 5 && SELECT_INDEX == CORRECT_ANSWER_INDEX)
    {
        document.getElementsByClassName("rupees_class")[5].style.backgroundColor="green";
        document.getElementsByClassName("rupees_class")[5].style.color="#fff";
        document.getElementsByClassName("rupees_class")[5].style.border="3px solid yellowgreen";
    }
    else if(CURRENT_QUESTION_INDEX == 6 && SELECT_INDEX == CORRECT_ANSWER_INDEX)
    {
        document.getElementsByClassName("rupees_class")[4].style.backgroundColor="green";
        document.getElementsByClassName("rupees_class")[4].style.color="#fff";
        document.getElementsByClassName("rupees_class")[4].style.border="3px solid yellowgreen";
    }
    else if(CURRENT_QUESTION_INDEX == 7 && SELECT_INDEX == CORRECT_ANSWER_INDEX)
    {
        document.getElementsByClassName("rupees_class")[3].style.backgroundColor="green";
        document.getElementsByClassName("rupees_class")[3].style.color="#fff";
        document.getElementsByClassName("rupees_class")[3].style.border="3px solid yellowgreen";
    }
    else if(CURRENT_QUESTION_INDEX == 8 && SELECT_INDEX == CORRECT_ANSWER_INDEX)
    {
        document.getElementsByClassName("rupees_class")[2].style.backgroundColor="green";
        document.getElementsByClassName("rupees_class")[2].style.color="#fff";
        document.getElementsByClassName("rupees_class")[2].style.border="3px solid yellowgreen";
    }
    else if(CURRENT_QUESTION_INDEX == 9 && SELECT_INDEX == CORRECT_ANSWER_INDEX)
    {
        document.getElementsByClassName("rupees_class")[1].style.backgroundColor="green";
        document.getElementsByClassName("rupees_class")[1].style.color="#fff";
        document.getElementsByClassName("rupees_class")[1].style.border="3px solid yellowgreen";
    }
    else if(CURRENT_QUESTION_INDEX == 10 && SELECT_INDEX == CORRECT_ANSWER_INDEX)
    {
        document.getElementsByClassName("rupees_class")[0].style.backgroundColor="green";
        document.getElementsByClassName("rupees_class")[0].style.color="#fff";
        document.getElementsByClassName("rupees_class")[0].style.border="3px solid yellowgreen";
    }
}
// --------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------
function SWEETALERT()
{
    Swal.fire({
        icon: "error",
        title: "INCORRECT ANSWER !!!",
        text: "TRY AGAIN OR CHOOSE CAREFULLY.",
        footer: "BETTER LUCK NEXT TIME !!!",
        customClass:
        {
            popup: 'incorrect-popup',
            confirmButton: 'incorrect-confirm-btn'
        }
    }).then((RESULT) => {
        if (RESULT.isConfirmed) 
        {
            setTimeout(function()
            {
                window.location.href="congratulations_reward_page.html";
            },100);
        }
    });
}
// --------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------
function ONCLICK_QUIT_GAME_BTN()
{
    Swal.fire({
        title: "❗ Quit Quiz?",
        text: "Are you sure you want to quit?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes !!",
        cancelButtonText: "No !!",
        customClass: 
        {
        popup: 'quit-popup',
        confirmButton: 'quit-confirm-btn',
        cancelButton: 'quit-cancel-btn'
    },
    }).then((result) => {
        if (result.isConfirmed)
        {
            setTimeout(function () 
            {
                window.location.href="congratulations_reward_page.html";
            }, 100);
        }
    });
}
// --------------------------------------------------------------------------------------------------------------------------------------

// --------------------------------------------------------------------------------------------------------------------------------------
function ONCLICK_REVERSE_BTN()
{
    SHUFFLE_ARRAY(QUESTIONS);
    SHOW_QUESTIONS(CURRENT_QUESTION_INDEX);
    TIMER(CURRENT_QUESTION_INDEX);
    var REVERSE_BTN = document.getElementById("reverse_btn_id");
    REVERSE_BTN.disabled=true;
    REVERSE_BTN.style.cursor="not-allowed";
    REVERSE_BTN.style.opacity="0.2";
    REVERSE_BTN.classList.add("reverse_btn");
}
// -------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------
function ONCLICK_FIFTY_FIFTY_BTN()
{
    var COUNTER=0;
    var OPTIONS_BUTTON = document.getElementsByClassName("option_button");
    var CORRECT_ANSWER_INDEX = QUESTIONS[CURRENT_QUESTION_INDEX].ANSWER;
    for (var i=0; i<OPTIONS_BUTTON.length; i++)
    {
        if (i==CORRECT_ANSWER_INDEX) 
        {
            continue;
        }
        else
        {
            OPTIONS_BUTTON[i].disabled=true;
            OPTIONS_BUTTON[i].style.opacity="0.4";
            OPTIONS_BUTTON[i].style.cursor="not-allowed";
            OPTIONS_BUTTON[i].classList.add("fifty_fifty_btn_disable");
            COUNTER++;
        }
        if (COUNTER==2)
        {
            break;
        }
    }
    var FIFTY_FIFTY_BTN = document.getElementById("fifty_fifty_btn_id");
    FIFTY_FIFTY_BTN.disabled=true;
    FIFTY_FIFTY_BTN.style.cursor="not-allowed";
    FIFTY_FIFTY_BTN.style.opacity="0.2";
    FIFTY_FIFTY_BTN.classList.add("fifty_fifty_btn_original");
}
// -------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------
function ONCLICK_AUDIENCE_POLL_BTN()
{
    var CORRECT_ANSWER_INDEX = QUESTIONS[CURRENT_QUESTION_INDEX].ANSWER;
    document.getElementById("audience_lifeline_btn").style.display = "block";

    var TOTAL = 100;
    var CORRECT_PERCENT = Math.floor(Math.random()*21)+50;
    var REMAINING = TOTAL-CORRECT_PERCENT;
    var OTHER_PERCENT = Math.floor(REMAINING/3);
    var LAST_PERCENT = REMAINING-2*OTHER_PERCENT;

    var PERCENTAGES = {
        0:OTHER_PERCENT,
        1:OTHER_PERCENT,
        2:OTHER_PERCENT,
        3:LAST_PERCENT
    };

    PERCENTAGES[CORRECT_ANSWER_INDEX]=CORRECT_PERCENT;

    document.getElementById("optionA").innerText=PERCENTAGES[0]+"%";
    document.getElementById("optionB").innerText=PERCENTAGES[1]+"%";
    document.getElementById("optionC").innerText=PERCENTAGES[2]+"%";
    document.getElementById("optionD").innerText=PERCENTAGES[3]+"%";

    var AUDIENCE_POLL_BTN = document.getElementById("audience_poll_btn_id");
    AUDIENCE_POLL_BTN.disabled=true;
    AUDIENCE_POLL_BTN.style.cursor="not-allowed";
    AUDIENCE_POLL_BTN.style.opacity="0.2";
    AUDIENCE_POLL_BTN.classList.add("audience_poll_original_btn");
}
// -------------------------------------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------------------------------
function ONCLICK_CLOSE_BTN()
{
    document.getElementById("audience_lifeline_btn").style.display="none";
}
// -------------------------------------------------------------------------------------------------------------------------------------

setTimeout(function ()
{
    document.getElementById("play_btn_id").disabled=false;
    document.getElementById("play_btn_id").style.cursor="pointer";
},5000);

// ---------------------------------------------------------------------------------------------------------------------------------------

function TIMER_AUDIO_MUSIC()
{
    var TIMER_AUDIO = document.getElementById("timer_audio_id");
    TIMER_AUDIO.currentTime=0;
    TIMER_AUDIO.play(); 
}