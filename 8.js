function addNewMessage() {
  let parentRef = document.querySelector("#parent");

  let inputRef = document.querySelector("#id1");
  let newMessage = inputRef.value;

  // Basic Validation
  if (newMessage == "") {
    // alert("Empty message not allowed");
    inputRef.classList.add("border-danger");
    return;
  } else {
    inputRef.classList.remove("border-danger");
  }

  let existingValue = parentRef.innerHTML;
  let newElement = `<div class="border-0 border-bottom mb-2">
                        <h1>
                            ${newMessage}
                        </h1>
                        <h1 class="me-4">
                            <span style="cursor: pointer" onclick="likeMe(this)">&#128077;</span>
                            <span>1</span>
                            <span style="cursor: pointer" onclick="dislikeMe(this)" class="ms-4"
                            >&#128078;</span
                            >
                            <span>1</span>

                            <span style="cursor: pointer" class="ms-4" onclick="angryWithMe(this)">&#128545;</span>
                            <span>1</span>

                            <span style="cursor: pointer" class="ms-4" onclick="deleteMessage(this)">&#128465;</span>
                        </h1>
                    </div>`;

  let updatedValue = newElement + existingValue;

  parentRef.innerHTML = updatedValue;
  inputRef.value = "";
}

function likeMe(p1) {
  let likeRef = p1.nextElementSibling;

  let existingValue = likeRef.innerHTML;
  let newValue = parseInt(existingValue) + 1;

  likeRef.innerHTML = newValue;
}

function dislikeMe(p1) {
  console.log(p1);
  let likeRef = p1.nextElementSibling;

  let existingValue = likeRef.innerHTML;
  let newValue = parseInt(existingValue) + 1;

  likeRef.innerHTML = newValue;
}

function angryWithMe(p1) {
  let likeRef = p1.nextElementSibling;

  let existingValue = likeRef.innerHTML;
  let newValue = parseInt(existingValue) + 1;

  likeRef.innerHTML = newValue;
}

function deleteMessage(p1) {
  console.log(p1);
  p1.parentElement.parentElement.remove();
}
