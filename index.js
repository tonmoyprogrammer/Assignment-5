
// heart item
document.querySelectorAll(".heart").forEach((heart) => {
  heart.addEventListener("click", () => { 
    
    let count = Number(document.getElementById("counted-heart").innerText);
    count +=1;
    document.getElementById("counted-heart").innerText = count;

  });
});


const allHeart = document.querySelectorAll(".heart");

allHeart.forEach((heart)=>
{
    heart.addEventListener("click",function()
{
    let count = Number(document.getElementById("counted-heart").innerText);
    count = count + 1;

    document.getElementById("counted-heart").innerText = count;
});
});



// Call button item
document.querySelectorAll(".call-button").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();


 
     
    let coin1 = Number(document.getElementById("coin").innerText);

    if (coin1 < 20) {
      alert("Your coin isn't enough for calling!");
      return;
    }
    const card = e.target.closest(".cart");
   
    const title = card.querySelector(".title").innerText;
    const number = card.querySelector(".emergencyNumber").innerText;
    alert(`Calling ${title} at ${number}`);
  
      coin1 -= 20;
    document.getElementById("coin").innerText = coin1;
  

    if (coin1 === 0) {
      alert("You have used up all your coins!");
    }
  });


});



















 const getTime1= document.getElementById("time");
const time1 = new Date();
const mainTime1 = time1.toLocaleTimeString();
getTime1.innerText = mainTime1;


const getTime2 = document.getElementById("time1");
const time2 = new Date();
const mainTime2 = time2.toLocaleTimeString();
getTime2.innerText = mainTime2;


const getTime3 = document.getElementById("time2");
const time3 = new Date();
const mainTime3 = time3.toLocaleTimeString();
getTime3.innerText = mainTime3;

const getTime4 = document.getElementById("time3");
const time4 = new Date();
const mainTime4 = time4.toLocaleTimeString();
getTime4.innerText = mainTime4;

const getTime5 = document.getElementById("time4");
const time5 = new Date();
const mainTime5 = time5.toLocaleTimeString();
getTime5.innerText = mainTime5;

const getTime6 = document.getElementById("time5");
const time6 = new Date();
const mainTime6 = time6.toLocaleTimeString();
getTime6.innerText = mainTime6;


