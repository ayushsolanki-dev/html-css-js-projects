function BACK_TO_WELCOME_PAGE()
{
    window.location.href="game_page.html";
    sessionStorage.clear();
}

window.onload = function () 
{
    var WON_AMOUNT = sessionStorage.getItem("wonAmount");
    var FIRST_QUESTION_INCORRECT = sessionStorage.getItem("first_question_incorrect");

    if (WON_AMOUNT) 
    {
        WON_AMOUNT = parseInt(WON_AMOUNT).toLocaleString("en-in");
        document.getElementById("won_price_text").innerText = "Congratulations! You won ₹";
        document.getElementById("amount_id").innerText = WON_AMOUNT;
        document.getElementById("congratulation_emogi_id_one").style.display = "block";
        document.getElementById("congratulation_emogi_id_two").style.display = "block";
        sessionStorage.removeItem("first_question_incorrect");
        document.getElementById("won_price_text").classList.remove("tough_start", "better_luck_next_time");
    } 
    else if (FIRST_QUESTION_INCORRECT) 
    {
        document.getElementById("won_price_text").innerText = FIRST_QUESTION_INCORRECT;
        document.getElementById("won_price_text").classList.add("tough_start");
        sessionStorage.removeItem("first_question_incorrect");
        document.getElementById("congratulation_emogi_id_one").style.display = "none";
        document.getElementById("congratulation_emogi_id_two").style.display = "none";
        document.getElementById("amount_id").innerText = "";
        document.getElementById("won_price_text").classList.remove("better_luck_next_time");
    } 
    else
    {
        document.getElementById("won_price_text").innerText = "No problem! Try again when you're ready.";
        document.getElementById("won_price_text").classList.add("better_luck_next_time");
        document.getElementById("congratulation_emogi_id_one").style.display = "none";
        document.getElementById("congratulation_emogi_id_two").style.display = "none";
        document.getElementById("amount_id").innerText = "";
        document.getElementById("won_price_text").classList.remove("tough_start");
    }
}
