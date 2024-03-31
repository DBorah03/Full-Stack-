let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let user = this.elements[0]; // Here, this.emelemts = form.elements . We can write any one of them and it will work.
  let pass = this.elements[1]; // Here, this.emelemts = form.elements . We can write any one of them and it will work.

  console.log(user.value);
  console.log(pass.value);

  alert(`Dear ${user.value}. Your password is set to ${pass.value}`);
});
