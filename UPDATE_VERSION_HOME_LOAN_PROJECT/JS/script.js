var LOAN_1 = false;
var RATE_1 = false
var TENURE_1 = false;
function ONCLICK_CALCULATE_EMI()
{
    document.getElementById("box").style.display="block";
    document.getElementById("summary_box").style.display = "block";
    var LOAN = parseFloat(document.getElementById("loan_amount_id").value.replace(/,/g, ""));
    var RATE = parseFloat(document.getElementById("anu_inte_rate_id").value);
    var TENURE = parseFloat(document.getElementById("tenure_id").value);
    var YEARS = Math.floor(TENURE);
    var FRACTION = TENURE - YEARS;
    var MONTHS = (YEARS*12)+Math.round(FRACTION*10);
    var MONTHLY_RATE = RATE/(12*100);
    var EMI = (LOAN*MONTHLY_RATE*Math.pow(1+MONTHLY_RATE,MONTHS))/(Math.pow(1+MONTHLY_RATE,MONTHS)-1);

    var TOTAL_PAYMENT = EMI*MONTHS;
    var TOTAL_INTEREST = TOTAL_PAYMENT-LOAN;

    var TABLED = "<table border=1 cellspacing=0 id='one_table'>";
    TABLED = TABLED + `<th>Month</th>`
    TABLED = TABLED + `<th>EMI (₹)</th>`
    TABLED = TABLED + `<th>principal (₹)</th>`
    TABLED = TABLED + `<th>Interest (₹)</th>`
    TABLED = TABLED + `<th>Balance (₹)</th>`;

    var NEW_BALANCE = LOAN;
    for(var i=1; i<=MONTHS; i++)
    {
        var INTEREST = NEW_BALANCE*MONTHLY_RATE;
        var PRINCIPAL = EMI-INTEREST;
        NEW_BALANCE = NEW_BALANCE - PRINCIPAL
        TABLED += `<tr><td>${i}</td>
                   <td>${Math.round(EMI).toLocaleString("en-in")}</td>
                   <td>${Math.round(PRINCIPAL).toLocaleString("en-in")}</td>
                   <td>${Math.round(INTEREST).toLocaleString("en-in")}</td>
                   <td>${Math.abs(Math.round(NEW_BALANCE)).toLocaleString("en-in")}</td>
        </tr>`;
    }
    document.getElementById("summary_box").innerHTML = TABLED;
    document.getElementById("OPA").innerText="Original principal Amount: ₹"+LOAN.toLocaleString("en-in");
    document.getElementById("R").innerText="Annual Interest Rate: "+RATE+"%";
    document.getElementById("TM").innerText="Total Months: "+MONTHS;
    document.getElementById("ME").innerText="Monthly EMI Amount: ₹"+Math.round(EMI).toLocaleString("en-in");
    document.getElementById("TI").innerText="Total Interest Amount: ₹"+Math.round(TOTAL_INTEREST).toLocaleString("en-in");
    document.getElementById("TP").innerText="Total Amount Payable: ₹"+Math.round(TOTAL_PAYMENT).toLocaleString("en-in");
    document.getElementById("print_btn").style.display="block";
    document.getElementById("box").scrollIntoView({behavior: "smooth"});
}

function VALIDATION()
{
    var LOAN = document.getElementById("loan_amount_id").value;

    var REMOVE_COMMAS = LOAN.replace(/,/g, "");
    var RATE = document.getElementById("anu_inte_rate_id").value;
    var TENURE = document.getElementById("tenure_id").value;
    if (LOAN=="") 
    {
        LOAN_1=false;
        document.getElementById("loan_amount_id").value="";
        document.getElementById("box").style.display="none";
        document.getElementById("summary_box").style.display="none";
        document.getElementById("print_btn").style.display="none";
        document.getElementById("sub").style.cursor="not-allowed";
        return;
    }
    var RUPEES = parseInt(REMOVE_COMMAS);
    if (!RUPEES)
    {
        document.getElementById("loan_amount_id").value = "";
        LOAN_1 = false;
        document.getElementById("loan_amount_id").value="";
        document.getElementById("anu_inte_rate_id").value="";
        document.getElementById("tenure_id").value="";
        RATE_1=false;
        TENURE_1=false;
        document.getElementById("box").style.display="none";
        document.getElementById("summary_box").style.display="none";
        document.getElementById("print_btn").style.display="none";
    } 
    else
    {
        document.getElementById("loan_amount_id").value = RUPEES.toLocaleString("en-in");
        LOAN_1 = true;
        document.getElementById("sub").style.cursor="pointer";
    }
    if (RATE=="") 
    {
        RATE_1=false;
        document.getElementById("box").style.display="none";
        document.getElementById("summary_box").style.display="none";
        document.getElementById("print_btn").style.display="none";
        document.getElementById("sub").style.cursor="not-allowed";
    }
    else
    {
        RATE_1=true;
        document.getElementById("sub").style.cursor="pointer";
    }
    if (TENURE=="") 
    {
        TENURE_1=false;
        document.getElementById("box").style.display="none";
        document.getElementById("summary_box").style.display="none";
        document.getElementById("print_btn").style.display="none";
        document.getElementById("sub").style.cursor="not-allowed";
    }
    else
    {
        TENURE_1=true;
        document.getElementById("sub").style.cursor="pointer";
    }

    if (LOAN.startsWith("0")) 
    {
        document.getElementById("loan_amount_id").value="";
        document.getElementById("anu_inte_rate_id").value="";
        document.getElementById("tenure_id").value="";
        LOAN_1=false;
        RATE_1=false;
        TENURE_1=false;
        document.getElementById("box").style.display="none";
        document.getElementById("summary_box").style.display="none";
        document.getElementById("print_btn").style.display="none"; 
    }
    CHECK_BTN();
}

function CHECK_BTN()
{
    var BTN = (LOAN_1 && RATE_1 && TENURE_1)
    if (BTN==true) 
    {
        document.getElementById("sub").disabled=false;   
    }
    else
    {
        document.getElementById("sub").disabled=true;
    }
}

function KEYCODE_LOGIC(event)
{
    var KEYCODE = event.which;
    // alert(KEYCODE);
    if ((KEYCODE>=48 && KEYCODE<=57) || (KEYCODE==46)) 
    {
        return true;  
    }
    else
    {
        return false;
    }
}

function PRINT_RECEIPT_BTN()
{
    window.print();
}

function F()
{
    var TENURE_RAW = document.getElementById("tenure_id").value;
    if (TENURE_RAW.startsWith("0")) 
    {
        document.getElementById("tenure_id").value="";
        TENURE_1=false;    
    }
}


function ONFOCUS_MSG_SHOW(field)
{
    var LOAN_AMOUNT = document.getElementById("loan_amount_id").value;
    if (LOAN_AMOUNT=="" && field=="amount") 
    {
        document.getElementById("amount_show_msg").innerText="Plz Enter Loan Amount !!";
        document.getElementById("amount_show_msg").style.color="red";
        $("#amount_show_msg").fadeOut(5000);   
    }
    var RATE = document.getElementById("anu_inte_rate_id").value;
    if (RATE=="" && field=="rate") 
    {
        document.getElementById("rate_show_msg").innerText="Plz Enter Rate Of Interest !!";    
        document.getElementById("rate_show_msg").style.color="red";
        $("#rate_show_msg").fadeOut(5000); 
    }
    var TENURE = document.getElementById("tenure_id").value;
    if (TENURE=="" && field=="tenure") 
    {
        document.getElementById("tenure_show_msg").innerText="Plz Enter Years !!";    
        document.getElementById("tenure_show_msg").style.color="red";
        $("#tenure_show_msg").fadeOut(5000);    
    }
}

