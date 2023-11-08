const check = (value) => {
  // let item=document.querySelector("")
  setTimeout(() => {
    switch (value) {
      case "visa":
        visa();
        break;
      case "mastercard":
        mastercard();
        break;
      case "americanexpress":
        americanexpress();
        break;
      case "rupay":
        rupay();
        break;
    }
  }, 200);
};

let visa_card = document.getElementById("visa");
let mastercard_card = document.getElementById("master_card");
let americanexpress_card = document.getElementById("americanexpress");
let rupay_card = document.getElementById("rupay");
let disp = document.getElementsByClassName("choice");
let card_visa=document.getElementById("card_visa")
let card_mastercard=document.getElementById("card_mastercard")
let card_american=document.getElementById("card_american")
let card_rupay=document.getElementById("card_rupay")

const visa = () => {
  visa_card.style.display = "flex";
  visa_card.style.flexDirection = "column";
  visa_card.style.justifyContent = "space-around";
  mastercard_card.style.display = "none";
  americanexpress_card.style.display = "none";
  rupay_card.style.display = "none";
  visa_card.style.zIndex = "1";
  mastercard_card.style.zIndex = "0";
  americanexpress_card.style.zIndex = "0";
  rupay_card.style.zIndex = "0";
};
const mastercard = () => {
  mastercard_card.style.display = "flex";
  mastercard_card.style.flexDirection = "column";
  visa_card.style.display = "none";
  americanexpress_card.style.display = "none";
  rupay_card.style.display = "none";
  visa_card.style.zIndex = "0";
  mastercard_card.style.zIndex = "1";
  americanexpress_card.style.zIndex = "0";
  rupay_card.style.zIndex = "0";
};
const americanexpress = () => {
  americanexpress_card.style.display = "flex";
  americanexpress_card.style.flexDirection = "column";
  visa_card.style.display = "none";
  mastercard_card.style.display = "none";
  rupay_card.style.display = "none";
  visa_card.style.zIndex = "0";
  mastercard_card.style.zIndex = "0";
  americanexpress_card.style.zIndex = "1";
  rupay_card.style.zIndex = "0";
};
const rupay = () => {
  rupay_card.style.display = "flex";
  rupay_card.style.flexDirection = "column";
  rupay_card.style.justifyContent = "space-around";
  visa_card.style.display = "none";
  americanexpress_card.style.display = "none";
  mastercard_card.style.display = "none";
  visa_card.style.zIndex = "0";
  mastercard_card.style.zIndex = "0";
  americanexpress_card.style.zIndex = "0";
  rupay_card.style.zIndex = "1";
};
let bottom_visa = document.getElementById("bottom-visa");
let bottom_mastercard = document.getElementById("bottom-mastercard");
let bottom_americanexpress = document.getElementById("bottom-americanexpress");
let bottom_rupay = document.getElementById("bottom-rupay");
let color_val = document.getElementById("color_value");
let reset_val = document.getElementById("reset");

const cls = () => {
  bottom_visa.style.backgroundImage =
  "linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25)), url(map_bg_visa.png)";
  bottom_mastercard.style.backgroundImage =
  "linear-gradient(135deg, #45484d 0%, #000000 100%)";
  bottom_americanexpress.style.backgroundColor = " rgb(181, 228, 255)";
  bottom_rupay.style.backgroundImage =
  " linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(bg-img-rupay.jpg)";
  color_val.value = "#000000";
  reset_val.style.borderColor = "#000000";
};
const select_changed = () => {
  let choice = document.getElementById("select").value;
  // alert(choice);
  switch (choice) {
    case "visa":
      generated_visa();
      break;

    case "mastercard":
      generated_mastercard();
      break;
    case "americanexpress":
      generated_americanexpress();
      break;
    case "rupay":
      generated_rupay();
      break;
  }
};

const generated_visa = () => {
  bottom_visa.style.display = "flex";
  bottom_visa.style.flexDirection = "column";
  bottom_visa.style.justifyContent = "space-around";
  // bottom_visa.style.display = "none";
  bottom_mastercard.style.display = "none";
  bottom_americanexpress.style.display = "none";
  bottom_rupay.style.display = "none";

  bottom_visa.style.zIndex = "1";
  bottom_americanexpress.style.zIndex = "0";
  bottom_mastercard.style.zIndex = "0";
  bottom_rupay.style.zIndex = "0";
};

const generated_mastercard = () => {
  bottom_mastercard.style.display = "flex";
  bottom_mastercard.style.flexDirection = "column";

  bottom_visa.style.display = "none";
  // bottom_mastercard.style.display = "none";
  bottom_americanexpress.style.display = "none";
  bottom_rupay.style.display = "none";

  bottom_visa.style.zIndex = "0";
  bottom_americanexpress.style.zIndex = "1";
  bottom_mastercard.style.zIndex = "0";
  bottom_rupay.style.zIndex = "0";
};
const generated_americanexpress = () => {
  bottom_americanexpress.style.display = "flex";
  bottom_americanexpress.style.flexDirection = "column";

  bottom_visa.style.display = "none";
  bottom_mastercard.style.display = "none";
  // bottom_americanexpress.style.display = "none";
  bottom_rupay.style.display = "none";

  bottom_visa.style.zIndex = "0";
  bottom_americanexpress.style.zIndex = "0";
  bottom_mastercard.style.zIndex = "1";
  bottom_rupay.style.zIndex = "0";
};
const generated_rupay = () => {
  bottom_rupay.style.display = "flex";
  bottom_rupay.style.flexDirection = "column";

  bottom_visa.style.display = "none";
  bottom_americanexpress.style.display = "none";
  bottom_mastercard.style.display = "none";
  //  bottom_rupay.style.display = "none";

  bottom_visa.style.zIndex = "0";
  bottom_americanexpress.style.zIndex = "0";
  bottom_mastercard.style.zIndex = "0";
  bottom_rupay.style.zIndex = "1";
};
const color_changed = () => {
  let choice = document.getElementById("select").value;
  switch (choice) {
    case "visa":
      bottom_visa.style.backgroundImage = "none";
      bottom_visa.style.backgroundColor = color_val.value;
      reset_val.style.borderColor = color_val.value;
      break;
    case "mastercard":
      bottom_mastercard.style.backgroundImage = "none";
      bottom_mastercard.style.backgroundColor = color_val.value;
      reset_val.style.borderColor = color_val.value;
      break;
    case "americanexpress":
      bottom_americanexpress.style.backgroundImage = "none";
      bottom_americanexpress.style.backgroundColor = color_val.value;
      reset_val.style.borderColor = color_val.value;
      break;
    case "rupay":
      bottom_rupay.style.backgroundImage = "none";
      bottom_rupay.style.backgroundColor = color_val.value;
      reset_val.style.borderColor = color_val.value;
      break;
  }
};

let entered_number = document.getElementById("enter_number");
let entered_name = document.getElementById("enter_name");
let entered_date = document.getElementById("enter_date");
let entered_year = document.getElementById("enter_year");
const change_visa = () => {
  let span_num = document.getElementById("chg_num");
  let span_name = document.getElementById("chg_name");
  let span_date = document.getElementById("chg_date");
  let span_year = document.getElementById("chg_year");

  span_num.innerText = entered_number.value;
  span_name.innerText = entered_name.value;
  span_name.style.fontSize = "1.5rem";
  span_date.innerText = entered_date.value;
  span_year.innerText = entered_year.value;
};

const change_mastercard = () => {
  let span_num = document.getElementById("chga_num");
  let span_name = document.getElementById("chga_name");
  let span_date = document.getElementById("chga_date");
  let span_year = document.getElementById("chga_year");
  span_num.innerText = entered_number.value;
  span_name.innerText = entered_name.value;
  span_name.style.fontSize = "1.5rem";
  span_date.innerText = entered_date.value;
  span_year.innerText = entered_year.value;
};
const change_american = () => {
  let span_num = document.getElementById("cha_num");
  let span_name = document.getElementById("cha_name");
  let span_date = document.getElementById("cha_date");
  let span_year = document.getElementById("cha_year");
  span_num.innerText = entered_number.value;
  span_name.innerText = entered_name.value;
  span_name.style.fontSize = "1.5rem";
  span_date.innerText = entered_date.value;
  span_year.innerText = entered_year.value;
};
const change_rupay = () => {
  let span_num = document.getElementById("chan_num");
  let span_name = document.getElementById("chan_name");
  let span_date = document.getElementById("chan_date");
  let span_year = document.getElementById("chan_year");
  span_num.innerText = entered_number.value;
  span_name.innerText = entered_name.value;
  span_name.style.fontSize = "1.5rem";
  span_date.innerText = entered_date.value;
  span_year.innerText = entered_year.value;
};
