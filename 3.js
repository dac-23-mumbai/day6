function likeMe(p1) {
  // let likeRef = document.querySelector("#id1");
  let likeRef = p1.nextElementSibling;

  let existingValue = likeRef.innerHTML;
  let newValue = parseInt(existingValue) + 1;

  likeRef.innerHTML = newValue;
}

function dislikeMe(p1) {
  console.log(p1);
  // let likeRef = document.querySelector("#id1");
  let likeRef = p1.nextElementSibling;

  let existingValue = likeRef.innerHTML;
  let newValue = parseInt(existingValue) + 1;

  likeRef.innerHTML = newValue;
}
