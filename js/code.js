$(".openIcon").click(function(){
   $(".open").css("left","0")
})

$(".close").click(function(){
   $(".open").css("left","-270px")
})

$(".details h3").click(function(){
   $(this).next().slideToggle()
   $(".details div").not($(this).next()).slideUp()
})

const targetDate = new Date("2024-12-25T00:00:00");

const countdown = document.querySelector('.countdown');
const daysEl = countdown.querySelector('.days');
const hoursEl = countdown.querySelector('.hours');
const minutesEl = countdown.querySelector('.minutes');
const secondsEl = countdown.querySelector('.seconds');

const getTimeRemaining = () => {
  const today = new Date();
  const difference = targetDate.getTime() - today.getTime();

  
  const oneDay = 1000 * 60 * 60 * 24;
  const days = Math.floor(difference / oneDay);
  const hours = Math.floor((difference % oneDay) / (1000 * 60 * 60));
  const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((difference % (1000 * 60)) / 1000);

  
  daysEl.textContent = days.toString().padStart(2, '0');
  hoursEl.textContent = hours.toString().padStart(2, '0');
  minutesEl.textContent = minutes.toString().padStart(2, '0');
  secondsEl.textContent = seconds.toString().padStart(2, '0');
}

getTimeRemaining();

const interval = setInterval(getTimeRemaining, 1000);


const stopCountdown = () => {
  clearInterval(interval);
  countdown.textContent = "Time's Up!";
}

if (targetDate < new Date()) {
  stopCountdown();
}

$("textarea").keyup(function(){
   let textLenght = $(this).val().length;
   $("#num").text(
      100 - textLenght  <= 0 ? "your available character finished" : 100 - textLenght
   )
   
})
