function incrementUsingDom() {
  let h1Ref = document.querySelector("#id1");
  let existingValue = h1Ref.innerHTML;
  let newValue = parseInt(existingValue) + 1;
  h1Ref.innerHTML = newValue;
}

// document.querySelector("#id1");
// $("#id1");

function incrementUsingjQUery() {
  let newValue = parseInt($("#id1").html()) + 1;
  $("#id1").html(newValue);
}
