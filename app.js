const isVIP = true;

let ticketPrice = 1000;

ticketPrice = isVIP
  ? ticketPrice > 2000
    ? (ticketPrice = ticketPrice / 2)
    : 0
  : (ticketPrice += 1000);

console.log(ticketPrice);
