const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minsElement = document.getElementById('mins');
const secondsElement = document.getElementById('seconds');
 
 
 
 
 const newYears ='1 Jan 2022';
 //console.log(newYears);


 function regresiva (){
     const newYearsDate = new Date(newYears);
     const currentDate = new Date();

     const totalSeconds = (newYearsDate-currentDate)/1000;
     const days = Math.floor(totalSeconds/3600/24);
     const hours = Math.floor(totalSeconds/3600)%24;
     const mins = Math.floor(totalSeconds/60)%60;
     const seconds = Math.floor(totalSeconds)%60;
     /*
     console.log(totalSeconds,"second");
     console.log(days,"days");
     console.log(hours,"hours");
     console.log(mins,"mins");
     console.log(seconds,"seconds");
     console.log(newYearsDate-currentDate,"diff");
     console.log(totalSeconds);
     */

     daysElement.innerHTML = days;
     hoursElement.innerHTML =hours
     minsElement.innerHTML = mins;
     secondsElement.innerHTML =seconds;
 }
 regresiva();
 setInterval(regresiva,1000);
