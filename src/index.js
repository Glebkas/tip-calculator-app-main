//selectors

//main selectors
const body = document.querySelector(".root");
const main = body.querySelector(".main");
const tipCalc = main.querySelector(".tip-calculator");
const billRslt = main.querySelector(".bill-result");

//form selectors
const form = main.querySelector(".form");
const formBill = form.querySelector(".form__bill");
const amountInput = formBill.querySelector(".form__input_type_bill");
const formTipBtns = form.querySelector(".form__tip-btns");
const formBtn = form.querySelector(".form__button");
const cstmPrcnt = form.querySelector(".form__input_type_custom");
const nmbrOfPplInput = form.querySelector(".form__input_type_number-of-people");
const formLabelEror = form.querySelector(".form__label-error");

//result selectors
const tipPrPrsRslt = billRslt.querySelector(".tip-per-prs__amount");
const totalPrPrsRslt = billRslt.querySelector(".total-per-prs__amount");

//error selctor
const error = form.querySelector(".form__label-error");

//reset selctor
const rstBtn = billRslt.querySelector(".bill-result__reset");

//functions

function tipCalchandler(event) {
  event.preventDefault();
}

const addError = () => error.classList.add("form__label-error_on");
const removeError = () => error.classList.remove("form__label-error_on");

function tipDefult() {
  totalPrPrsRslt.textContent = "$0.0";
  tipPrPrsRslt.textContent = "$0.0";
}

function reset() {
  totalPrPrsRslt.textContent = "$" + "0.0";
  tipPrPrsRslt.textContent = "$" + "0.0";
  amountInput.value = null;
  nmbrOfPplInput.value = null;
}

function btnHandler(e) {
  if (nmbrOfPplInput.value <= 0) {
    addError();
    tipDefult();
  } else if (
    e.target !== e.currentTarget &&
    e.target.classList.contains("form__button")
  ) {
    let clickedBtn = e.target;
    tipClc(clickedBtn);
  }
  e.stopPropagation();
}

function tipClc(btn) {
  removeError();
  let prcntValue = btn.value;
  let billAmount = amountInput.value;
  let prsNmbr = nmbrOfPplInput.value;
  let result = (billAmount * prcntValue) / prsNmbr;
  let resultFixed = result.toFixed(2);
  tipPrPrsRslt.textContent = "$" + resultFixed;
  let resultTtl = billAmount / prsNmbr + result;
  let resultTtlFixed = resultTtl.toFixed(2);
  totalPrPrsRslt.textContent = "$" + resultTtlFixed;
}

function cstmHandler(e) {
  if (cstmPrcnt.value > 0 || nmbrOfPplInput.value <= 0) {
    let cstmPrcntVal = cstmPrcnt.value;
    let cstmPrcntValFix = cstmPrcntVal / 100;
    cstmTipClc(cstmPrcntValFix);
  }
}

function cstmTipClc(btn) {
    removeError();
    let prcntValue = btn;
    let billAmount = amountInput.value;
    let prsNmbr = nmbrOfPplInput.value;
    let result = (billAmount * prcntValue) / prsNmbr;
    let resultFixed = result.toFixed(2);
    tipPrPrsRslt.textContent = "$" + resultFixed;
    let resultTtl = billAmount / prsNmbr + result;
    let resultTtlFixed = resultTtl.toFixed(2);
    totalPrPrsRslt.textContent = "$" + resultTtlFixed;
  }

//event listenr

formTipBtns.addEventListener("click", btnHandler, false);
rstBtn.addEventListener("click", reset, false);
cstmPrcnt.addEventListener("input", cstmHandler, false);

