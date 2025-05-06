const maximum = 7;
let contacts = [];

function displayContacts() {
  document.getElementById("List").textContent = contacts.join(" ");
}

function contact() {
  const input = document.getElementById("n");
  const n = input.value.trim();
  if (n) {
    if (contacts.length === maximum) {
      contacts.shift();
    }
    contacts.push(n); 
    input.value = "";
    displayContacts();
  }
}

function Delete() {
  contacts.pop();
  displayContacts();
}
