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
