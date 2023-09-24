// function setSenderTabIndexes() {
//   document.getElementById("date").tabIndex = 1;
//   document.getElementById("mobileNo").tabIndex = 3;
//   document.getElementById("subject").tabIndex = 5;
//   document.getElementById("senderemailid").tabIndex = 9;
//   document.getElementById("message").tabIndex = 7;
//   // Add more elements as needed
// }

// // Function to set tabindex for receiver elements
// function setReceiverTabIndexes() {
//   document.getElementById("receivedAirwayBill").tabIndex = 2;
//   document.getElementById("receivedDate").tabIndex = 4;
//   document.getElementById("receivedMobileNo").tabIndex = 6;
//   document.getElementById("receivedSubject").tabIndex = 8;
//   document.getElementById("receivedWeight").tabIndex = 10;
//   document.getElementById("receivedMessage").tabIndex = 12;
//   document.getElementById("receiveremailid").tabIndex = 14;
//   document.getElementById("receivedAmount").tabIndex = 15;
// }

// // Call the functions to set tab indexes
// setSenderTabIndexes();
// setReceiverTabIndexes();

// let date = document.getElementById("date").value;
// let mobilenumber = document.getElementById("mobileNo").value;
// let subject = document.getElementById("subject").value;

const scriptURL = "https://script.google.com/macros/s/AKfycbwHyuG6A8Xv7QTdQCWoGLUU9DlGyELGTf_2xTrvEZD-6GXhLX33Wy2LUU4Io94s8NLx/exec";
const form = document.forms["google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch((error) => console.error("Error!", error.message));
});



generateBarcodeBtn.addEventListener('click', () => {
  displayBarcode();
});
function displayBarcode() {
  const airwayBillNo = document.getElementById('receivedAirwayBill').value;
  JsBarcode(document.getElementById('receivedbarcodecontainer'), airwayBillNo, {
      format: "CODE128",
      width: 2,
      height: 60,
  });
}