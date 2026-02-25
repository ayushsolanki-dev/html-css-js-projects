var UNAME_1 = false;
var MOBILE_1 = false;
var RECHARGE_1 = false;
var TOTAL_AMOUNT_GST = false;

function ONKEYPRESS_MOBILE(event)
{
    var KEYCODE = event.which
    if (KEYCODE>=48 && KEYCODE<=57) 
    {
        return true;    
    }
    else
    {
        return false;
    }
}

function ONKEYPRESS_CUSTOMER_KEYCODE(event)
{
    var KEYCODE_NAME = event.which;
    if ((KEYCODE_NAME>=65 && KEYCODE_NAME<=90)||(KEYCODE_NAME>=97 && KEYCODE_NAME<=122) || (KEYCODE_NAME==32)) 
    {
        return true;    
    }
    else
    {
        return false;
    }
}


function ONKEYUP_MOBILE()
{
    var MOBILE_NUMBER = document.getElementById("mobile_id").value;
    var MOBILE_LENGTH = MOBILE_NUMBER.length;
    if (MOBILE_NUMBER=="") 
    {
        document.getElementById("mobile_show_msg").innerText="Plz Fill Mobile Number !!";
        document.getElementById("mobile_show_msg").style.color="red";
        MOBILE_1=false;
    }
    else
    {
        if (MOBILE_LENGTH==10)
        {
            document.getElementById("mobile_show_msg").innerText="✔ Valid Mobile Number !!";
            document.getElementById("mobile_show_msg").style.color="green";
            MOBILE_1=true;    
        }
        else 
        {
            document.getElementById("mobile_show_msg").innerText="✘ InValid Mobile Number !!";
            document.getElementById("mobile_show_msg").style.color="red";
            MOBILE_1=false;    
        }
    }
    CHECK_BTN();
}

function ONCHANGE_RECHARGE_PLAN()
{
    var OPER = parseInt(document.getElementById("op").value);
    if (OPER=="299") 
    {
        var GST_CALCULATE_299 = (OPER*18)/100;
        var ADD_GST_AMOUNT_299 = OPER+GST_CALCULATE_299;
        document.getElementById("gst_id").value=Math.floor(ADD_GST_AMOUNT_299);
        RECHARGE_1=true;
    }
    else if (OPER==799) 
    {
        var GST_CALCULATE_799 = (OPER*18)/100;
        var ADD_GST_AMOUNT_799 = OPER+GST_CALCULATE_799;
        document.getElementById("gst_id").value=Math.floor(ADD_GST_AMOUNT_799);
        RECHARGE_1=true;
    }
    else if (OPER==629) 
    {
        var GST_CALCULATE_629 = (OPER*18)/100;
        var ADD_GST_AMOUNT_629 = OPER+GST_CALCULATE_629;
        document.getElementById("gst_id").value=Math.floor(ADD_GST_AMOUNT_629);
        RECHARGE_1=true;
    }
    else if(OPER==899)
    {
        var GST_CALCULATE_899 = (OPER*18)/100;
        var ADD_GST_AMOUNT_899 = OPER+GST_CALCULATE_899;
        document.getElementById("gst_id").value=Math.floor(ADD_GST_AMOUNT_899);
        RECHARGE_1=true;
    }
    else if (OPER==1) 
    {
        RECHARGE_1=false;
        document.getElementById("gst_id").value="";  
    }
    CHECK_BTN();
}

function ONKEYUP_UNAME()
{
    var UNAME = document.getElementById("uname_id").value;
    if (UNAME=="") 
    {
        UNAME_1=false;    
    }
    else
    {
        UNAME_1=true;
        document.getElementById("uname_id").style.textTransform="capitalize";
    }
    CHECK_BTN();
}

function CHECK_BTN()
{
    var PAY_BTN = (UNAME_1 && MOBILE_1 && RECHARGE_1)
    if (PAY_BTN==true) 
    {
        document.getElementById("pay_btn").disabled=false;  
        document.getElementById("pay_btn").style.cursor="pointer";  
    }
    else
    {
        document.getElementById("pay_btn").disabled=true;
        document.getElementById("pay_btn").style.cursor="not-allowed";
        document.getElementById("pay_btn").classList.add("add_class_pay_btn");
    }
}

function ONCLICK_PAY_MODE_BTN()
{
    document.getElementById("one_box").style.display="block";

    var MOBILE_NUMBER = document.getElementById("mobile_id").value;
    document.getElementById("span_mobile_id").innerText="Mobile No :- "+MOBILE_NUMBER;
    document.getElementById("span_sim_id").innerText="SIM Name :- Jio";

    var GST_VALUE = document.getElementById("gst_id").value;
    document.getElementById("span_amount_id").innerText="Total Amount :- "+GST_VALUE;
    document.getElementById("op").disabled=true;
    document.getElementById("mobile_id").readOnly=true;
    document.getElementById("uname_id").readOnly=true;
    document.getElementById("gst_id").readOnly=true;
    document.getElementById("pay_btn").disabled=true;
    document.getElementById("pay_btn").style.cursor="not-allowed";
    document.getElementById("pay_btn").classList.add("add_class_pay_btn");
    document.getElementById("pay_btn_original").style.cursor="not-allowed";
    document.getElementById("pay_btn_original").classList.add("add_class_pay_btn_original");
}

var PAY_MODE_BTN_1 = false;
function ONCHANGE_PAY_MODE()
{
    var PAY_MODE_BTN = document.getElementById("op1").value;
    if (PAY_MODE_BTN=="sc") 
    {
        PAY_MODE_BTN_1=false;
    }
    else if (PAY_MODE_BTN=="cash") 
    {
        PAY_MODE_BTN_1=true;
    }
    else if (PAY_MODE_BTN=="upi") 
    {
        PAY_MODE_BTN_1=true;
    }
    else if (PAY_MODE_BTN=="c_card") 
    {
        PAY_MODE_BTN_1=true;    
    }
    else if (PAY_MODE_BTN=="d_card") 
    {
        PAY_MODE_BTN_1=true;    
    }
    else if (PAY_MODE_BTN=="netbanking") 
    {
        PAY_MODE_BTN_1=true;    
    }
    CHECK_PAY_MODE();
}

function CHECK_PAY_MODE()
{
    var ORIGINAL_PAYMENT = (PAY_MODE_BTN_1);
    if (ORIGINAL_PAYMENT==true) 
    {
        document.getElementById("pay_btn_original").disabled=false;
        document.getElementById("pay_btn_original").style.cursor="pointer";    
    }
    else
    {
        document.getElementById("pay_btn_original").disabled=true;
        document.getElementById("pay_btn_original").style.cursor="not-allowed";
        document.getElementById("pay_btn_original").classList.add("add_class_pay_btn_original");
    }
}

function ORIGINAL_PAYMENT()
{
    document.getElementById("op1").disabled=true;
    document.getElementById("pay_btn_original").disabled=true;
    document.getElementById("pay_btn_original").style.cursor="not-allowed";
    document.getElementById("op1").style.border="3px solid gray";
    document.getElementById("pay_btn_original").classList.add("add_class_pay_btn_original");
    var PAY_MODE_BTN = document.getElementById("op1").value;
    var UNAME = document.getElementById("uname_id").value;
    var MOBILE_NUMBER = document.getElementById("mobile_id").value;
    var OPER = parseInt(document.getElementById("op").value);
    var GST_VALUE = document.getElementById("gst_id").value;
    var DATE = new Date();
    var FORMATE_DATE = DATE.toLocaleDateString("en-IN");
    var TIME = new Date();
    var FORMATE_TIME = TIME.toLocaleTimeString("en-IN");

    var EXPIRY_DATE = new Date();
    EXPIRY_DATE.setDate(EXPIRY_DATE.getDate() + 28);
    var EXPIRY_FORMATTED_DATE = EXPIRY_DATE.toLocaleDateString("en-IN");

    var EXPIRY_DATE_84 = new Date();
    EXPIRY_DATE_84.setDate(EXPIRY_DATE_84.getDate() + 84);
    var EXPIRY_FORMATTED_DATE_84 = EXPIRY_DATE_84.toLocaleDateString("en-IN");

    var EXPIRY_DATE_56 = new Date();
    EXPIRY_DATE_56.setDate(EXPIRY_DATE_56.getDate() + 56);
    var EXPIRY_FORMATTED_DATE_56 = EXPIRY_DATE_56.toLocaleDateString("en-IN");

    var EXPIRY_DATE_90 = new Date();
    EXPIRY_DATE_90.setDate(EXPIRY_DATE_90.getDate() + 90);
    var EXPIRY_FORMATTED_DATE_90 = EXPIRY_DATE_90.toLocaleDateString("en-IN");

    if (PAY_MODE_BTN=="cash") 
    {
        Swal.fire({
        title: "🎉 Congratulations!",
        text: "Your recharge was successful.",
        icon: "success",
        }).then((result) =>
        {
            if (result.isConfirmed)
            {
                document.getElementById("two_box").style.display="block";
                document.getElementById("r_s_id").innerText="Recharge Successful!!";
                document.getElementById("c_n_id").innerText="Customer Name:- "+UNAME;
                document.getElementById("c_n_id").style.textTransform="capitalize";
                document.getElementById("m_n_id").innerText="Mobile No:- "+MOBILE_NUMBER;
                if (OPER==299) 
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹299--28 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML = "Benefit:- 1GB Per Day 28GB(4G/5G),Unlimited<br>Voice,100 SMS/Day & Subscription to<br>jio Apps";
                    document.getElementById("validity_id").innerText="Validity:- 28 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").style.display="none";
                    document.getElementById("trans_id").style.display="none";
                    document.getElementById("p_m_id").innerText="Payment Mode:- Cash Payment";
                }
                else if (OPER==799)
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹799--84 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML="Benefit: 1.5GB Per Day 126GB(4G/5G),Unlimited<br>Voice,100 SMS/Day & Subscription to jio Apps<br>and Free 50GB jioAICloud Storage.";
                    document.getElementById("validity_id").innerText="Validity:- 84 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE_84;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").style.display="none";
                    document.getElementById("trans_id").style.display="none";
                    document.getElementById("p_m_id").innerText="Payment Mode:- Cash Payment";
                }
                else if (OPER==629) 
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹629--56 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML="Benefit: Unlimited 5G + 2GB/Day 122GB(4G/5G),<br>Unlimited Voice,100 SMS/Day & Subscription to<br>jio Apps and Free 50GB jioAICloud Storage.";
                    document.getElementById("validity_id").innerText="Validity:- 56 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE_56;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").style.display="none";
                    document.getElementById("trans_id").style.display="none";
                    document.getElementById("p_m_id").innerText="Payment Mode:- Cash Payment";
                }
                else if(OPER==899)
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹899--90 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML="Benefit: Unlimited 5G + 2GB/Day + 20GB Extra<br>190GB(4G/5G),Unlimited Voice,100 SMS/Day &<br>Subscription to jio Apps and Free 50GB<br>jioAICloud Storage.";
                    document.getElementById("validity_id").innerText="Validity:- 90 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE_90;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").style.display="none";
                    document.getElementById("trans_id").style.display="none";
                    document.getElementById("p_m_id").innerText="Payment Mode:- Cash Payment";
                }
            }
        });
    }
    else if (PAY_MODE_BTN=="upi") 
    {
        document.getElementById("upi_box").style.display="block";
        document.getElementById("span_example_one").innerText="For Example:- 9965478909@ybl";  
        document.getElementById("span_example_two").innerText="For Example:- abc.xyz@oksbi";  
        document.getElementById("span_example_three").innerText="For Example:- Abc_213@bank";
        document.getElementById("upi_payment_btn").style.cursor="not-allowed"; 
        document.getElementById("upi_payment_btn").classList.add("add_upi_btn"); 
    }
    else if (PAY_MODE_BTN=="c_card") 
    {
        document.getElementById("credit_card_box").style.display="block";
        document.getElementById("span_example_1").innerText="For Example:- 4539 1488 0343 6467";  
        document.getElementById("span_example_2").innerText="For Example:- 5404 3672 9834 6211";  
        document.getElementById("span_example_3").innerText="For Example:- 6521 1234 5678 9012";
        document.getElementById("credit_payment_btn").style.cursor="not-allowed"; 
        document.getElementById("credit_payment_btn").classList.add("add_class_credit");
    }
    else if (PAY_MODE_BTN=="d_card") 
    {
        document.getElementById("debit_card_box").style.display="block";
        document.getElementById("span_example_d1").innerText="For Example:- 5312 3456 7890 1234";  
        document.getElementById("span_example_d2").innerText="For Example:- 4213 5678 9012 3456";  
        document.getElementById("span_example_d3").innerText="For Example:- 6076 1234 5678 9012";
        document.getElementById("debit_payment_btn").style.cursor="not-allowed"; 
        document.getElementById("debit_payment_btn").classList.add("add_class_debit");  
    }
    else
    {
        document.getElementById("netbanking_box").style.display="block";
        document.getElementById("netbanking_payment_btn").disabled=true;    
        document.getElementById("netbanking_payment_btn").style.cursor="not-allowed";
        document.getElementById("netbanking_payment_btn").classList.add("add_class_netbanking");
    }
}

function ONKEYUP_UPI_ID()
{
    var UPI_INPUT_VALUE = document.getElementById("upi_id_input").value;
    var UPI_REGEX = /^[a-zA-Z0-9._]{2,100}[@]{1}[a-zA-Z]{3,100}$/;
    if (UPI_INPUT_VALUE=="") 
    {
        document.getElementById("upi_show_msg").innerText="Plz Enter VALID UPI ID !!";   
        document.getElementById("upi_show_msg").style.color="red";
        document.getElementById("upi_payment_btn").disabled=true;
        document.getElementById("upi_payment_btn").style.cursor="not-allowed"; 
        document.getElementById("upi_payment_btn").classList.add("add_upi_btn");
    }
    else if (UPI_REGEX.test(UPI_INPUT_VALUE)) 
    {
        document.getElementById("upi_show_msg").innerText="Valid UPI ID !!"; 
        document.getElementById("upi_show_msg").style.color="green";
        document.getElementById("upi_id_input").style.border="2px solid green";
        document.getElementById("upi_payment_btn").disabled=false;
        document.getElementById("upi_payment_btn").style.cursor="pointer";
        document.getElementById("upi_payment_btn").classList.remove("add_upi_btn");
    }
    else
    {
        document.getElementById("upi_show_msg").innerText="InValid UPI ID Format !!"; 
        document.getElementById("upi_show_msg").style.color="red";
        document.getElementById("upi_id_input").style.border="";
        document.getElementById("upi_payment_btn").disabled=true;
        document.getElementById("upi_payment_btn").style.cursor="not-allowed";
        document.getElementById("upi_payment_btn").classList.add("add_upi_btn");
    }
}


function ONCLICK_UPI_ID()
{
    document.getElementById("upi_payment_btn").disabled=true;
    document.getElementById("upi_payment_btn").style.cursor="not-allowed";
    document.getElementById("upi_payment_btn").classList.add("add_upi_btn");
    var PAY_MODE_BTN = document.getElementById("op1").value;
    var UNAME = document.getElementById("uname_id").value;
    var MOBILE_NUMBER = document.getElementById("mobile_id").value;
    var OPER = parseInt(document.getElementById("op").value);
    var GST_VALUE = document.getElementById("gst_id").value;
    var DATE = new Date();
    var FORMATE_DATE = DATE.toLocaleDateString("en-IN");
    var TIME = new Date();
    var FORMATE_TIME = TIME.toLocaleTimeString("en-IN");

    var EXPIRY_DATE = new Date();
    EXPIRY_DATE.setDate(EXPIRY_DATE.getDate() + 28);
    var EXPIRY_FORMATTED_DATE = EXPIRY_DATE.toLocaleDateString("en-IN");

    var EXPIRY_DATE_84 = new Date();
    EXPIRY_DATE_84.setDate(EXPIRY_DATE_84.getDate() + 84);
    var EXPIRY_FORMATTED_DATE_84 = EXPIRY_DATE_84.toLocaleDateString("en-IN");

    var EXPIRY_DATE_56 = new Date();
    EXPIRY_DATE_56.setDate(EXPIRY_DATE_56.getDate() + 56);
    var EXPIRY_FORMATTED_DATE_56 = EXPIRY_DATE_56.toLocaleDateString("en-IN");

    var EXPIRY_DATE_90 = new Date();
    EXPIRY_DATE_90.setDate(EXPIRY_DATE_90.getDate() + 90);
    var EXPIRY_FORMATTED_DATE_90 = EXPIRY_DATE_90.toLocaleDateString("en-IN");

    var UPI_INPUT_VALUE = document.getElementById("upi_id_input").value;
    document.getElementById("upi_box").style.display="none";

    var TRANSACTION = "T25092";
    var TRANSACTION_ID="";
    for (var i=0; i<16; i++)
    {
        TRANSACTION_ID=TRANSACTION_ID+Math.floor(Math.random()*10);
    }
    var TRANSACTION_ID_ORIGINAL = TRANSACTION+TRANSACTION_ID;

    if (PAY_MODE_BTN=="upi") 
    {
        Swal.fire({
        title: "🎉 Congratulations!",
        text: "Your recharge was successful.",
        icon: "success",
        }).then((result) =>
        {
            if (result.isConfirmed)
            {
                document.getElementById("two_box").style.display="block";
                document.getElementById("r_s_id").innerText="Recharge Successful!!";
                document.getElementById("c_n_id").innerText="Customer Name:- "+UNAME;
                document.getElementById("c_n_id").style.textTransform="capitalize";
                document.getElementById("m_n_id").innerText="Mobile No:- "+MOBILE_NUMBER;
                if(OPER==299)
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹299--28 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML="Benefit: 1.5GB Per Day 126GB(4G/5G),Unlimited<br>Voice,100 SMS/Day & Subscription to jio Apps<br>and Free 50GB jioAICloud Storage.";
                    document.getElementById("validity_id").innerText="Validity:- 28 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").innerText="UPI ID:- "+UPI_INPUT_VALUE;
                    document.getElementById("trans_id").innerText="Transaction ID:- "+TRANSACTION_ID_ORIGINAL;
                    document.getElementById("p_m_id").innerText="Payment Mode:- UPI Payment";
                }
                else if (OPER==799) 
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹799--84 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML="Benefit: 1.5GB Per Day 126GB(4G/5G),Unlimited<br>Voice,100 SMS/Day & Subscription to jio Apps<br>and Free 50GB jioAICloud Storage.";
                    document.getElementById("validity_id").innerText="Validity:- 84 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE_84;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").innerText="UPI ID:- "+UPI_INPUT_VALUE;
                    document.getElementById("trans_id").innerText="Transaction ID:- "+TRANSACTION_ID_ORIGINAL;
                    document.getElementById("p_m_id").innerText="Payment Mode:- UPI Payment";     
                }
                else if (OPER==629) 
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹629--56 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML="Benefit: Unlimited 5G + 2GB/Day 122GB(4G/5G),<br>Unlimited Voice,100 SMS/Day & Subscription to<br>jio Apps and Free 50GB jioAICloud Storage.";
                    document.getElementById("validity_id").innerText="Validity:- 56 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE_56;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").innerText="UPI ID:- "+UPI_INPUT_VALUE;
                    document.getElementById("trans_id").innerText="Transaction ID:- "+TRANSACTION_ID_ORIGINAL;
                    document.getElementById("p_m_id").innerText="Payment Mode:- UPI Payment";
                }
                else if (OPER==899) 
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹899--90 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML="Benefit: Unlimited 5G + 2GB/Day + 20GB Extra<br>190GB(4G/5G),Unlimited Voice,100 SMS/Day &<br>Subscription to jio Apps and Free 50GB<br>jioAICloud Storage.";
                    document.getElementById("validity_id").innerText="Validity:- 90 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE_90;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").innerText="UPI ID:- "+UPI_INPUT_VALUE;
                    document.getElementById("trans_id").innerText="Transaction ID:- "+TRANSACTION_ID_ORIGINAL;
                    document.getElementById("p_m_id").innerText="Payment Mode:- UPI Payment";
                }
            }
        })       
    }
}

function ONKEYPRESS_KEYCODE_CREDIT(event)
{
    var CREDIT_KEYCODE = event.which;
    if (CREDIT_KEYCODE>=48 && CREDIT_KEYCODE<=57) 
    {
        return true;    
    }
    else
    {
        return false;
    }
}

function ONKEYUP_CREDIT_CARD_LENGTH()
{
    var CREDIT_CARD = document.getElementById("credit_id").value;
    var CREDIT_CARD_LENGTH = CREDIT_CARD.length;
    if (CREDIT_CARD=="") 
    {
        document.getElementById("credit_show_msg").innerText="Plz Enter Credit Card Number !!"; 
        document.getElementById("credit_show_msg").style.color="red";
        document.getElementById("credit_payment_btn").disabled=true;
        document.getElementById("credit_payment_btn").style.cursor="not-allowed"; 
        document.getElementById("credit_payment_btn").classList.add("add_class_credit");
    }
    else
    {
        if (CREDIT_CARD_LENGTH=="16") 
        {
            document.getElementById("credit_show_msg").innerText="Valid Credit Card Number !!";
            document.getElementById("credit_show_msg").style.color="green";
            document.getElementById("credit_id").style.border="2px solid green";
            document.getElementById("credit_payment_btn").disabled=false;
            document.getElementById("credit_payment_btn").style.cursor="pointer";
            document.getElementById("credit_payment_btn").classList.remove("add_class_credit");
        }
        else
        {
            document.getElementById("credit_show_msg").innerText="InValid Credit Card Number !!";
            document.getElementById("credit_show_msg").style.color="red";
            document.getElementById("credit_id").style.border="";
            document.getElementById("credit_payment_btn").disabled=true;
            document.getElementById("credit_payment_btn").style.cursor="not-allowed"; 
            document.getElementById("credit_payment_btn").classList.add("add_class_credit");
        }
    }
}

function ONCLICK_CREDIT_CARD_PAYMENT()
{
    document.getElementById("credit_payment_btn").disabled=true;
    document.getElementById("credit_payment_btn").style.cursor="not-allowed";
    document.getElementById("credit_payment_btn").classList.add("add_class_credit");
    var PAY_MODE_BTN = document.getElementById("op1").value;
    var UNAME = document.getElementById("uname_id").value;
    var MOBILE_NUMBER = document.getElementById("mobile_id").value;
    var OPER = parseInt(document.getElementById("op").value);
    var GST_VALUE = document.getElementById("gst_id").value;
    var DATE = new Date();
    var FORMATE_DATE = DATE.toLocaleDateString("en-IN");
    var TIME = new Date();
    var FORMATE_TIME = TIME.toLocaleTimeString("en-IN");

    var EXPIRY_DATE = new Date();
    EXPIRY_DATE.setDate(EXPIRY_DATE.getDate() + 28);
    var EXPIRY_FORMATTED_DATE = EXPIRY_DATE.toLocaleDateString("en-IN");

    var EXPIRY_DATE_84 = new Date();
    EXPIRY_DATE_84.setDate(EXPIRY_DATE_84.getDate() + 84);
    var EXPIRY_FORMATTED_DATE_84 = EXPIRY_DATE_84.toLocaleDateString("en-IN");

    var EXPIRY_DATE_56 = new Date();
    EXPIRY_DATE_56.setDate(EXPIRY_DATE_56.getDate() + 56);
    var EXPIRY_FORMATTED_DATE_56 = EXPIRY_DATE_56.toLocaleDateString("en-IN");

    var EXPIRY_DATE_90 = new Date();
    EXPIRY_DATE_90.setDate(EXPIRY_DATE_90.getDate() + 90);
    var EXPIRY_FORMATTED_DATE_90 = EXPIRY_DATE_90.toLocaleDateString("en-IN");

    var CREDIT_INPUT_VALUE = document.getElementById("credit_id").value;
    document.getElementById("credit_card_box").style.display="none";

    var CREDIT_TRANSACTION = "TXN";
    var CREDIT_TRANSACTION_1="";
    for(var i=0; i<10; i++)
    {
        CREDIT_TRANSACTION_1 = CREDIT_TRANSACTION_1 + Math.floor(Math.random()*10);
    }
    var CREDIT_CARD_TRANSACTION = CREDIT_TRANSACTION+CREDIT_TRANSACTION_1;

    if (PAY_MODE_BTN=="c_card") 
    {
         Swal.fire({
        title: "🎉 Congratulations!",
        text: "Your recharge was successful.",
        icon: "success",
        }).then((result) =>
        {
            if (result.isConfirmed)
            {
                document.getElementById("two_box").style.display="block";
                document.getElementById("r_s_id").innerText="Recharge Successful!!";
                document.getElementById("c_n_id").innerText="Customer Name:- "+UNAME;
                document.getElementById("c_n_id").style.textTransform="capitalize";
                document.getElementById("m_n_id").innerText="Mobile No:- "+MOBILE_NUMBER;
                if (OPER==299) 
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹299--28 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML = "Benefit:- 1GB Per Day 28GB(4G/5G),Unlimited<br>Voice,100 SMS/Day & Subscription to<br>jio Apps";
                    document.getElementById("validity_id").innerText="Validity:- 28 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").innerText="Credit Card No:- "+CREDIT_INPUT_VALUE;
                    document.getElementById("trans_id").innerText="Transaction ID:- "+CREDIT_CARD_TRANSACTION;
                    document.getElementById("p_m_id").innerText="Payment Mode:- Credit Card Payment";
                }
                else if(OPER==799)
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹799--84 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML="Benefit: 1.5GB Per Day 126GB(4G/5G),Unlimited<br>Voice,100 SMS/Day & Subscription to jio Apps<br>and Free 50GB jioAICloud Storage.";
                    document.getElementById("validity_id").innerText="Validity:- 84 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE_84;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").innerText="Credit Card No:- "+CREDIT_INPUT_VALUE;
                    document.getElementById("trans_id").innerText="Transaction ID:- "+CREDIT_CARD_TRANSACTION;
                    document.getElementById("p_m_id").innerText="Payment Mode:- Credit Card Payment";
                }
                else if (OPER==629) 
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹629--56 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML="Benefit: Unlimited 5G + 2GB/Day 122GB(4G/5G),<br>Unlimited Voice,100 SMS/Day & Subscription to<br>jio Apps and Free 50GB jioAICloud Storage.";
                    document.getElementById("validity_id").innerText="Validity:- 56 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE_56;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").innerText="Credit Card No:- "+CREDIT_INPUT_VALUE;
                    document.getElementById("trans_id").innerText="Transaction ID:- "+CREDIT_CARD_TRANSACTION;
                    document.getElementById("p_m_id").innerText="Payment Mode:- Credit Card Payment";
                }
                else if (OPER==899)
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹899--90 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML="Benefit: Unlimited 5G + 2GB/Day + 20GB Extra<br>190GB(4G/5G),Unlimited Voice,100 SMS/Day &<br>Subscription to jio Apps and Free 50GB<br>jioAICloud Storage.";
                    document.getElementById("validity_id").innerText="Validity:- 90 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE_90;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").innerText="Credit Card No:- "+CREDIT_INPUT_VALUE;
                    document.getElementById("trans_id").innerText="Transaction ID:- "+CREDIT_CARD_TRANSACTION;
                    document.getElementById("p_m_id").innerText="Payment Mode:- Credit Card Payment";
                }
            }
        }); 
    }
}

function ONKEYUP_DEBIT_CARD()
{
    var DEBIT_CARD = document.getElementById("debit_id").value;
    var DEBIT_CARD_LENGTH = DEBIT_CARD.length;
    if (DEBIT_CARD=="") 
    {
        document.getElementById("debit_show_msg").innerText="Plz Enter Debit Card Number !!"; 
        document.getElementById("debit_show_msg").style.color="red";
        document.getElementById("debit_payment_btn").disabled=true;
        document.getElementById("debit_payment_btn").style.cursor="not-allowed"; 
        document.getElementById("debit_payment_btn").classList.add("add_class_debit");
    }
    else
    {
        if (DEBIT_CARD_LENGTH=="16") 
        {
            document.getElementById("debit_show_msg").innerText="Valid Debit Card Number !!";
            document.getElementById("debit_show_msg").style.color="green";
            document.getElementById("debit_id").style.border="2px solid green";
            document.getElementById("debit_payment_btn").disabled=false;
            document.getElementById("debit_payment_btn").style.cursor="pointer";
            document.getElementById("debit_payment_btn").classList.remove("add_class_debit");
        }
        else
        {
            document.getElementById("debit_show_msg").innerText="InValid Debit Card Number !!";
            document.getElementById("debit_show_msg").style.color="red";
            document.getElementById("debit_id").style.border="";
            document.getElementById("debit_payment_btn").disabled=true;
            document.getElementById("debit_payment_btn").style.cursor="not-allowed"; 
            document.getElementById("debit_payment_btn").classList.add("add_class_debit");
        }
    }
}

function ONCLICK_DEBIT_CARD_PAYMENT()
{
    document.getElementById("debit_payment_btn").disabled=true;
    document.getElementById("debit_payment_btn").style.cursor="not-allowed";
    document.getElementById("debit_payment_btn").classList.add("add_class_debit");
    var PAY_MODE_BTN = document.getElementById("op1").value;
    var UNAME = document.getElementById("uname_id").value;
    var MOBILE_NUMBER = document.getElementById("mobile_id").value;
    var OPER = parseInt(document.getElementById("op").value);
    var GST_VALUE = document.getElementById("gst_id").value;
    var DATE = new Date();
    var FORMATE_DATE = DATE.toLocaleDateString("en-IN");
    var TIME = new Date();
    var FORMATE_TIME = TIME.toLocaleTimeString("en-IN");

    var EXPIRY_DATE = new Date();
    EXPIRY_DATE.setDate(EXPIRY_DATE.getDate() + 28);
    var EXPIRY_FORMATTED_DATE = EXPIRY_DATE.toLocaleDateString("en-IN");

    var EXPIRY_DATE_84 = new Date();
    EXPIRY_DATE_84.setDate(EXPIRY_DATE_84.getDate() + 84);
    var EXPIRY_FORMATTED_DATE_84 = EXPIRY_DATE_84.toLocaleDateString("en-IN");

    var EXPIRY_DATE_56 = new Date();
    EXPIRY_DATE_56.setDate(EXPIRY_DATE_56.getDate() + 56);
    var EXPIRY_FORMATTED_DATE_56 = EXPIRY_DATE_56.toLocaleDateString("en-IN");

    var EXPIRY_DATE_90 = new Date();
    EXPIRY_DATE_90.setDate(EXPIRY_DATE_90.getDate() + 90);
    var EXPIRY_FORMATTED_DATE_90 = EXPIRY_DATE_90.toLocaleDateString("en-IN");

    var DEBIT_INPUT_VALUE = document.getElementById("debit_id").value;
    document.getElementById("debit_card_box").style.display="none";

    var DEBIT_TRANSACTION = "TRX";
    var DEBIT_TRANSACTION_1 = ""; 
    for(var i=0; i<10; i++)
    {
        DEBIT_TRANSACTION_1 = DEBIT_TRANSACTION_1 + Math.floor(Math.random()*10);
    }
    var DEBIT_TRANSACTION_ID = DEBIT_TRANSACTION+DEBIT_TRANSACTION_1;

    if (PAY_MODE_BTN=="d_card") 
    {
        Swal.fire({
        title: "🎉 Congratulations!",
        text: "Your recharge was successful.",
        icon: "success",
        }).then((result) => {
            if (result.isConfirmed) 
            {
                document.getElementById("two_box").style.display="block";
                document.getElementById("r_s_id").innerText="Recharge Successful!!";
                document.getElementById("c_n_id").innerText="Customer Name:- "+UNAME;
                document.getElementById("c_n_id").style.textTransform="capitalize";
                document.getElementById("m_n_id").innerText="Mobile No:- "+MOBILE_NUMBER;
                if (OPER==299) 
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹299--28 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML = "Benefit:- 1GB Per Day 28GB(4G/5G),Unlimited<br>Voice,100 SMS/Day & Subscription to<br>jio Apps";
                    document.getElementById("validity_id").innerText="Validity:- 28 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").innerText="Debit Card No:- "+DEBIT_INPUT_VALUE;
                    document.getElementById("trans_id").innerText="Transaction ID:- "+DEBIT_TRANSACTION_ID;
                    document.getElementById("p_m_id").innerText="Payment Mode:- Debit Card Payment";
                }
                else if (OPER==799) 
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹799--84 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML="Benefit: 1.5GB Per Day 126GB(4G/5G),Unlimited<br>Voice,100 SMS/Day & Subscription to jio Apps<br>and Free 50GB jioAICloud Storage.";
                    document.getElementById("validity_id").innerText="Validity:- 84 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE_84;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").innerText="Debit Card No:- "+DEBIT_INPUT_VALUE;
                    document.getElementById("trans_id").innerText="Transaction ID:- "+DEBIT_TRANSACTION_ID;
                    document.getElementById("p_m_id").innerText="Payment Mode:- Debit Card Payment";
                }
                else if (OPER==629) 
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹629--56 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML="Benefit: Unlimited 5G + 2GB/Day 122GB(4G/5G),<br>Unlimited Voice,100 SMS/Day & Subscription to<br>jio Apps and Free 50GB jioAICloud Storage.";
                    document.getElementById("validity_id").innerText="Validity:- 56 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE_56;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").innerText="Debit Card No:- "+DEBIT_INPUT_VALUE;
                    document.getElementById("trans_id").innerText="Transaction ID:- "+DEBIT_TRANSACTION_ID;
                    document.getElementById("p_m_id").innerText="Payment Mode:- Debit Card Payment";
                }
                else if (OPER==899) 
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹899--90 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML="Benefit: Unlimited 5G + 2GB/Day + 20GB Extra<br>190GB(4G/5G),Unlimited Voice,100 SMS/Day &<br>Subscription to jio Apps and Free 50GB<br>jioAICloud Storage.";
                    document.getElementById("validity_id").innerText="Validity:- 90 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE_90;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").innerText="Debit Card No:- "+DEBIT_INPUT_VALUE;
                    document.getElementById("trans_id").innerText="Transaction ID:- "+DEBIT_TRANSACTION_ID;
                    document.getElementById("p_m_id").innerText="Payment Mode:- Debit Card Payment";
                }
            }
        });
    }
}

function ONCHANGE_SELECT_BANK()
{
    var SELECT_BANK = document.getElementById("s_bank").value;
    var GST_VALUE = document.getElementById("gst_id").value;
    if (SELECT_BANK=="sc_bank") 
    {
        document.getElementById("bank_show_msg").innerText="Plz Select Bank !!";
        document.getElementById("bank_show_msg").style.color="red";
        document.getElementById("s_bank").style.border="2px solid red";
        document.getElementById("netbanking_payment_btn").disabled=true;    
        document.getElementById("netbanking_payment_btn").style.cursor="not-allowed";
        document.getElementById("span_example_d_1").innerText="";
        document.getElementById("span_example_d_2").innerText="";
        document.getElementById("netbanking_payment_btn").classList.add("add_class_netbanking");
    }
    else if (SELECT_BANK=="sbi" || SELECT_BANK=="boi" || SELECT_BANK=="hdfc" || SELECT_BANK=="icici")
    {
        document.getElementById("bank_show_msg").innerText="";
        document.getElementById("s_bank").style.border="2px solid green";
        document.getElementById("netbanking_payment_btn").disabled=false;    
        document.getElementById("netbanking_payment_btn").style.cursor="pointer";
        document.getElementById("span_example_d_1").innerText="Selected Bank:- "+SELECT_BANK;
        document.getElementById("span_example_d_1").style.textTransform="uppercase";
        document.getElementById("span_example_d_2").innerText="Total Amount:- "+GST_VALUE;
        document.getElementById("netbanking_payment_btn").classList.remove("add_class_netbanking");
    }
    else if (SELECT_BANK=="axis" || SELECT_BANK=="idbi" || SELECT_BANK=="bob" || SELECT_BANK=="pnb") 
    {
        document.getElementById("bank_show_msg").innerText="";
        document.getElementById("s_bank").style.border="2px solid green";
        document.getElementById("netbanking_payment_btn").disabled=false;    
        document.getElementById("netbanking_payment_btn").style.cursor="pointer";
        document.getElementById("span_example_d_1").innerText="Selected Bank:- "+SELECT_BANK;
        document.getElementById("span_example_d_1").style.textTransform="uppercase";
        document.getElementById("span_example_d_2").innerText="Total Amount:- "+GST_VALUE;
        document.getElementById("netbanking_payment_btn").classList.remove("add_class_netbanking");
    }
}

function ONFOCUS_SELECT_BANK()
{
    var SELECT_BANK = document.getElementById("s_bank").value;
    if (SELECT_BANK=="sc_bank") 
    {
        document.getElementById("bank_show_msg").innerText="Plz Select Bank !!";
        document.getElementById("bank_show_msg").style.color="red";
        document.getElementById("s_bank").style.border="2px solid red"; 
    }
}

function ONCLICK_NETBANKING_PAYMENT()
{
    document.getElementById("netbanking_payment_btn").disabled=true;
    document.getElementById("netbanking_payment_btn").style.cursor="not-allowed";
    document.getElementById("netbanking_payment_btn").classList.add("add_class_netbanking");
    var PAY_MODE_BTN = document.getElementById("op1").value;
    var UNAME = document.getElementById("uname_id").value;
    var MOBILE_NUMBER = document.getElementById("mobile_id").value;
    var OPER = parseInt(document.getElementById("op").value);
    var GST_VALUE = document.getElementById("gst_id").value;
    var DATE = new Date();
    var FORMATE_DATE = DATE.toLocaleDateString("en-IN");
    var TIME = new Date();
    var FORMATE_TIME = TIME.toLocaleTimeString("en-IN");

    var EXPIRY_DATE = new Date();
    EXPIRY_DATE.setDate(EXPIRY_DATE.getDate() + 28);
    var EXPIRY_FORMATTED_DATE = EXPIRY_DATE.toLocaleDateString("en-IN");

    var EXPIRY_DATE_84 = new Date();
    EXPIRY_DATE_84.setDate(EXPIRY_DATE_84.getDate() + 84);
    var EXPIRY_FORMATTED_DATE_84 = EXPIRY_DATE_84.toLocaleDateString("en-IN");

    var EXPIRY_DATE_56 = new Date();
    EXPIRY_DATE_56.setDate(EXPIRY_DATE_56.getDate() + 56);
    var EXPIRY_FORMATTED_DATE_56 = EXPIRY_DATE_56.toLocaleDateString("en-IN");

    var EXPIRY_DATE_90 = new Date();
    EXPIRY_DATE_90.setDate(EXPIRY_DATE_90.getDate() + 90);
    var EXPIRY_FORMATTED_DATE_90 = EXPIRY_DATE_90.toLocaleDateString("en-IN");

    var SELECT_BANK_NAME = document.getElementById("s_bank").value;
    var UPPERCASE_BANK_NAME = SELECT_BANK_NAME.toUpperCase();
    document.getElementById("netbanking_box").style.display="none";

    var NETBANKING = "UTR";
    var NETBANKING_TRANSACTION = "";
    for(var i=0; i<16; i++)
    {
        NETBANKING_TRANSACTION = NETBANKING_TRANSACTION + Math.floor(Math.random()*10);
    }
    var NETBANKING_TRANSACTION_ID = NETBANKING + NETBANKING_TRANSACTION;
    
    if (PAY_MODE_BTN=="netbanking") 
    {
        Swal.fire({
        title: "🎉 Congratulations!",
        text: "Your recharge was successful.",
        icon: "success",
        }).then((result) => {
            if (result.isConfirmed) 
            {
                document.getElementById("two_box").style.display="block";
                document.getElementById("r_s_id").innerText="Recharge Successful!!";
                document.getElementById("c_n_id").innerText="Customer Name:- "+UNAME;
                document.getElementById("c_n_id").style.textTransform="capitalize";
                document.getElementById("m_n_id").innerText="Mobile No:- "+MOBILE_NUMBER;
                if (OPER==299) 
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹299--28 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML = "Benefit:- 1GB Per Day 28GB(4G/5G),Unlimited<br>Voice,100 SMS/Day & Subscription to<br>jio Apps";
                    document.getElementById("validity_id").innerText="Validity:- 28 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").innerText="Bank Name:- "+UPPERCASE_BANK_NAME;
                    document.getElementById("trans_id").innerText="Transaction ID:- "+UPPERCASE_BANK_NAME+NETBANKING_TRANSACTION_ID;
                    document.getElementById("p_m_id").innerText="Payment Mode:- NetBanking Payment";       
                }
                else if (OPER==799) 
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹799--84 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML="Benefit: 1.5GB Per Day 126GB(4G/5G),Unlimited<br>Voice,100 SMS/Day & Subscription to jio Apps<br>and Free 50GB jioAICloud Storage.";
                    document.getElementById("validity_id").innerText="Validity:- 84 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE_84;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").innerText="Bank Name:- "+UPPERCASE_BANK_NAME;
                    document.getElementById("trans_id").innerText="Transaction ID:- "+UPPERCASE_BANK_NAME+NETBANKING_TRANSACTION_ID;
                    document.getElementById("p_m_id").innerText="Payment Mode:- NetBanking Payment"; 
                }
                else if (OPER==629) 
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹629--56 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML="Benefit: Unlimited 5G + 2GB/Day 122GB(4G/5G),<br>Unlimited Voice,100 SMS/Day & Subscription to<br>jio Apps and Free 50GB jioAICloud Storage.";
                    document.getElementById("validity_id").innerText="Validity:- 56 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE_56;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").innerText="Bank Name:- "+UPPERCASE_BANK_NAME;
                    document.getElementById("trans_id").innerText="Transaction ID:- "+UPPERCASE_BANK_NAME+NETBANKING_TRANSACTION_ID;
                    document.getElementById("p_m_id").innerText="Payment Mode:- NetBanking Payment";
                }
                else if (OPER==899)
                {
                    document.getElementById("rpn_id").innerText="Recharge Plan Name:- ₹899--90 Days";
                    document.getElementById("ta_id").innerText="Total Amount Pay:- "+GST_VALUE;
                    document.getElementById("Benefit_id").innerHTML="Benefit: Unlimited 5G + 2GB/Day + 20GB Extra<br>190GB(4G/5G),Unlimited Voice,100 SMS/Day &<br>Subscription to jio Apps and Free 50GB<br>jioAICloud Storage.";
                    document.getElementById("validity_id").innerText="Validity:- 90 Days";
                    document.getElementById("r_d_id").innerText="Recharge Date:- "+FORMATE_DATE;
                    document.getElementById("r_t_id").innerText="Recharge Time:- "+FORMATE_TIME;
                    document.getElementById("e_d_id").innerText="Expiry Date:- "+EXPIRY_FORMATTED_DATE_90;
                    document.getElementById("e_t_id").innerText="Expiry Time:- "+FORMATE_TIME;
                    document.getElementById("upi_id_span").innerText="Bank Name:- "+UPPERCASE_BANK_NAME;
                    document.getElementById("trans_id").innerText="Transaction ID:- "+UPPERCASE_BANK_NAME+NETBANKING_TRANSACTION_ID;
                    document.getElementById("p_m_id").innerText="Payment Mode:- NetBanking Payment";
                }
            }
        });
    }
}