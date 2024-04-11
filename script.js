// JavaScript
document.addEventListener("DOMContentLoaded", function () {
  var personName; // This will hold the entered name
  var submitButton = document.getElementById("submitButton");

  var gifts = ["اداة تحضير شاهي", "سلة منوعة", "سبحة"];
  personName = document.getElementById("nameInput").value;

  // Function to be called when input is used
  function handleButtonClick() {
    // Get the value of the input
    personName = document.getElementById("nameInput").value;
    var message;
    // Do something with the input value
    if (personName === "عمر") {
      message = "!!" + "عيديتك هي، " + gifts[0];
    } else if (personName === "محمد") {
      message = "!!" + "عيديتك هي، " + gifts[2];
    } else if (personName === "عبدالله") {
      message = "!!" + "عيديتك هي، " + gifts[2];
    } else if (personName === "عروب") {
      message = "!!" + "عيديتك هي، " + gifts[1];
    } else {
      message = "لا يوجد عيدية";
    }

    document.getElementById("giftMessage").textContent = message;
  }
  submitButton.addEventListener("click", handleButtonClick);
});
