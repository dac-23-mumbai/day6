function likeMe() {
  let likeRef1 = document.querySelector("#id1");
  let existingValue = likeRef1.innerHTML;
  let newValue = parseInt(existingValue) + 1;
  likeRef1.innerHTML = newValue;
}

function dislikeMe() {
  let likeRef1 = document.querySelector("#id2");
  let existingValue = likeRef1.innerHTML;
  let newValue = parseInt(existingValue) + 1;
  likeRef1.innerHTML = newValue;
}
