const containerDiv = document.querySelector('.containerDiv');
const seats = document.querySelectorAll('.rowDiv .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');




let ticketPrice = +200;

// Save selected movie index and price
function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}

// update total and count
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.rowDiv .seat.selected');

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  //copy selected seats into arr
  // map through array
  //return new array of indexes

  const selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

// get data from localstorage and populate ui
function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }
  
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

populateUI();
// Movie select event
movieSelect.addEventListener('change', (e) => {
  ticketPrice = + e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});

// Seat click event
containerDiv.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');
    updateSelectedCount();
  }
});


// localStorage.setItem("movieName", '');
function addToCart(){
let data1=localStorage.getItem("selectedSeats");
let data2=JSON.parse(data1)
if(data2 != null){
  document.getElementById("userError").innerHTML=`<i class="fa fa-sign-in pe-2" aria-hidden="true"></i>Please Login First<i class="fa fa-smile-o ps-2" aria-hidden="true"></i>`;
  // document.getElementById("userError").innerHTML="";
}
// console.log( data2.length);
let name1=localStorage.getItem('userData');
let name2=JSON.parse(name1);
console.log(name2.name);
// console.log()
// document.getElementById("userError").innerHTML="";
document.getElementById("userName").innerHTML=`User Name: ${name2.name}`;
document.getElementById("totalSeat").innerHTML=`Number of Seats: ${data2.length}`;
document.getElementById("seatPrice").innerHTML=`Price of Seat: <i class="fa fa-inr ps-1" aria-hidden="true"></i>200 `;
document.getElementById("totalPrice").innerHTML=`Total Price: <i class="fa fa-inr ps-1" aria-hidden="true"></i>200 X ${data2.length}=<i class="fa fa-inr ps-1" aria-hidden="true"></i>${200*data2.length}`;
document.getElementById("userError").innerHTML= "";
localStorage.clear();
}


function closeBtn(){
  window.location.href="./index.html"
}

