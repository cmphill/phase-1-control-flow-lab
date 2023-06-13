function scuberGreetingForFeet(someValue){
  let message;
  if (someValue <= 400) {
    message = "This one is on me!"
  }
  else if (someValue <= 2000) {
    message = "That will be twenty bucks."
  }
  else if (someValue <= 2500) {
    message = 'I will gladly take your thirty bucks.'
  }
  else {
    message = "No can do."
  }
  return message;
}

function ternaryCheckCity(city) {
  const checkCity = city === "NYC" ? "Ok, sounds good." : "No go."
  return checkCity;
}

function switchOnCharmFromTip(tip){
  let response;
  switch (tip) {
    case 'generous': 
  response = 'Thank you so much.'
    break;
    case 'not as generous':
    response = 'Thank you.'
    break;
    default:
      response = 'Bye.'
      break;
  }
  return response;
  
  // Write your code here!
}