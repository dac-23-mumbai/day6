function makeRed() {
  let h1Ref = document.querySelector("h1");
  h1Ref.style.color = "white";
  h1Ref.style.backgroundColor = "green";
  h1Ref.style.padding = "12px";
}

function makeRedUsingJQuery() {
  $("h1")
    .css("background", "blue")
    .css("color", "white")
    .css("padding", "16px");
}
