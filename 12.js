function addNewQueries() {
  let parentRef = document.querySelector("#parent");

  let subRef = document.querySelector("#subject");
  let emailRef = document.querySelector("#email");
  let queryRef = document.querySelector("#query");

  let existingValue = parentRef.innerHTML;
  let newValue = `<div>
                    <h1>Subject: ${subRef.value}</h1>
                    <h6>Email: ${emailRef.value}</h6>
                    <p>
                        QUERIES: ${queryRef.value}!
                    </p>
                </div>`;

  // AJAX CALL

  parentRef.innerHTML = newValue + existingValue;
}
