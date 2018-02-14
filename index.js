var customerName = "bob";

customerName = function upperCaseCustomerName () {
    return customerName.toUpperCase();
}

function setBestCustomer () {
  bestCustomer = "not bob";
}

function overwriteBestCustomer () {
  bestCustomer = "not steven"
}

const leastFavoriteCustomer = "some value"

function changeLeastFavoriteCustomer () {
  leastFavoriteCustomer = "some other value"
}
