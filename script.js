document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  var firstName = document.getElementById("firstName").value.trim();
  var lastName = document.getElementById("lastName").value.trim();
  var age = document.getElementById("age").value.trim();
  var employmentStatus = document.querySelector('input[name="employmentStatus"]:checked');
  var password = document.getElementById("password").value;
  var repeatPassword = document.getElementById("repeatPassword").value;
  var email = document.getElementById("email").value.trim();

  if (firstName.length > 50 || lastName.length > 50) {
    alert("ტექსტი აღემატება 50 სიმბოლოს.");
    return;
  }

  if (password !== repeatPassword) {
    alert("პაროლი არასწორია! თავიდან სცადეთ.");
    return;
  }
  console.log("First Name: " + firstName);
  console.log("Last Name: " + lastName);
  console.log("Age: " + age);
  console.log("Employment Status: " + employmentStatus);
  console.log("Email: " + email);
  document.getElementById("myForm").reset();
});
