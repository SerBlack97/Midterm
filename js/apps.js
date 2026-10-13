function getPrice(){

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value;
    const output = document.getElementById("result");

    if (name ==="" || age ===""){
        result.textContent = "Enter name and age.";
        return;
    }

    let price;
        if (age < 0) {
            return "Invalid age";
        } else if (age <= 4) {
            price = 0;      
        } else if (age <= 12) {
            price = 10;      
        } else if (age <= 64) {
            price = 20;      
        } else {
            price = 12;      
        }

   if (price === 0) {
    result.textContent = `${name}, your ticket is Free!`;
  } else {
    result.textContent = `${name}, your ticket price is $${price}.`;
  }
}
