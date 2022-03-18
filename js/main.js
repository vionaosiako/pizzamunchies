function deliveryLocation(){    
    let location = prompt("Enter delivery location");
    alert("Delivery fee is: ksh.300");
    alert("Your order will be delivered to your location: "+location);
}

class Pizza{
    constructor(customerName, pizzaSize, crustType, pizzaTopping, pizzaQuantity)
    {
        this.customerName = customerName;
        this.pizzaSize = pizzaSize;
        this.crustType = crustType;
        this.pizzaTopping = pizzaTopping;
        this.pizzaQuantity = pizzaQuantity;
    }
    // methods
    getPriceInSize() {
        if (this.pizzaSize === "Small") {
          return 200;
        }
        if (this.pizzaSize === "Medium") {
          return 400;
        }
        if (this.pizzaSize === "Large") {
          return 700;
        }
      }
    
      getCrustPrice() {
        if (this.crustType === "Crispy") {
          return 100;
        }
        if (this.crustType === "Staffed") {
          return 200;
        }
        if (this.crustType === "Gluten-free") {
          return 300;
        }
        if (this.crustType === "Thin-crust") {
          return 250;
        }
        if (this.crustType === "Thick-crust") {
          return 400;
        }
      }
    
      getPriceInToppings() {
        if (this.pizzaTopping === "Pepperoni") {
          return 100;
        }
        if (this.pizzaTopping === "Mushroom") {
          return 200;
        }
        if (this.pizzaTopping === "Barbeque") {
          return 300;
        }
        if (this.pizzaTopping === "Extra-Cheese") {
          return 400;
        }
        if (this.pizzaTopping === "Vegetable") {
          return 500;
        }
        if (this.pizzaTopping === "Pineapple") {
          return 600;
        }
        if (this.pizzaTopping === "Chicken") {
          return 700;
        }
        if (this.pizzaTopping === "Black-olive") {
          return 800;
        }
      }

      getTotalPrice() {
        return (
          (this.getPriceInSize() +
            this.getCrustPrice() +
            this.getPriceInToppings()) *
          this.pizzaQuantity
        );
      }
    
}//End of Pizza class

let submitBtn = document.getElementById("orderBtn");
submitBtn.addEventListener('click',function(){
    
    const pizza = new Pizza();
    pizza.name = document.getElementById("customerName").value;
    pizza.pizzaSize = document.getElementById("pizzaSize").value;
    pizza.crustType = document.getElementById("crustType").value;
    pizza.pizzaTopping = document.getElementById("pizzaTopping").value;
    pizza.pizzaQuantity = parseInt(document.getElementById("pizzaQuantity").value);
    
    let total = pizza.getTotalPrice();
    
    let check = checkIfEmpty(pizza);
    // document.getElementById("total").innerHTML =`The total price of ${pizza.pizzaQuantity} for ${
    //     pizza.name
    //   } is ${pizza.getTotalPrice()}`
    
    if(check){
      document.getElementById("nameOfUser").innerHTML = pizza.name;
      document.getElementById("yourPizzaSize").innerHTML = pizza.pizzaSize;
      document.getElementById("pizzaSizePrice").innerHTML = pizza.getPriceInSize();
      document.getElementById("yourPizzaCrust").innerHTML = pizza.crustType;
      document.getElementById("pizzaCrustPrice").innerHTML = pizza.getCrustPrice();
      document.getElementById("yourPizzaTopping").innerHTML = pizza.pizzaTopping;
      document.getElementById("pizzaToppingPrice").innerHTML = pizza.getPriceInToppings();
      document.getElementById("yourPizzaQuantity").innerHTML = pizza.pizzaQuantity;
      document.getElementById("total").innerHTML = total;
      $("#makeOrder").hide();
      $("#yourOrder").show();
    }
    document.getElementById("makeOrderForm").reset();
        
})

function checkIfEmpty(object){
    
  if(object.name.trim() == ""){
    alert("Fill in your name please");
    return false;
  }else

  if(isNaN(object.pizzaQuantity)){
    alert("Enter quantity needed");
    return false;
  }else{
   
  return true;
  }
}

let submitContactUsBtn = document.getElementById("submitContactUs");
submitContactUsBtn.addEventListener('click',function(){
  alert("Thank you for contactin us");
  document.getElementById("contactUsForm").reset();
})



