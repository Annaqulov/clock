 const h = document.querySelector('.h'), //soat strelkasiga boglanabmiz
     m = document.querySelector('.m'), //minut strelkasiga boglanabmiz
     s = document.querySelector('.s'), //sekund strelkasiga boglanabmiz
     hourNumber = document.querySelector('.hours'),
     minNumber = document.querySelector('.minutes');

 function clock() {
     let time = new Date(),
         hours = time.getHours() * 30,
         minutes = time.getMinutes() * 6,
         second = time.getSeconds() * 6;

     if (second == 0) {
         s.style = `transform:rotate(${second}deg);`
     } else {
         s.style = `transform:rotate(${second}deg);`
     }
     h.style = `transform:rotate(${hours}deg; `
     m.style = `transform:rotate(${minutes}deg; `

     minNumber.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()
     hourNumber.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()
     //   ssetTimeout(function, Millisekund) - Funksiyani bajarilishini ma'lum bir vaqtga kechiktiradi
     //   Rekursiya - bu o'zini chaqiradigan funksiya


     setTimeout(() => {
         clock()
     }, 1000);
 }  
 // function birinchi marotoba chaqirilishi kerak
 clock()

 const links = document.querySelectorAll('.tabsItem')
 const tabs = document.querySelectorAll('.tabsContentItem')

 for (let i = 0; i < links.length; i++) {
     const el = links[i];
     el.addEventListener('click', function (e) {

         e.preventDefault()
         for (let k = 0; k < links.length; k++) {

             links[k].classList.remove('active')
             tabs[k].classList.remove('active')
         }
         el.classList.add('active')
         tabs[i].classList.add('active')
     })
 }


 const   watchBtn = document.querySelector('.stopwatch__btn'),
 secondWatch = document.querySelector('.stopwatch__seconds'), 
 minutesWatch = document.querySelector('.stopwatch__minutes'),
 hoursWatch = document.querySelector('.stopwatch__hours'), 
 seconfInfo = document.querySelector('.tabsLink__span'); 
 
watchBtn.addEventListener('click', function () { 
if (this.innerHTML == 'start') { 
 this.innerHTML = 'stop';
 seconfInfo.classList.add('active');
 let i = 0;
 setTimeout(() => stopWatch(this, i), 1000)

} else if (this.innerHTML == 'stop') {
 seconfInfo.classList.remove('active');
 seconfInfo.classList.add('active_clear');
 this.innerHTML = 'clear';
} else {
 seconfInfo.classList.remove('active_clear');
 secondWatch.innerHTML = 0;
 minutesWatch.innerHTML = 0;
 hoursWatch.innerHTML = 0;
 this.innerHTML = 'start';
}
})
function stopWatch(el, i) { 
if (el.innerHTML == 'stop') {
 if (i == 60) { 
     i = 0;
     secondWatch.innerHTML = i 
     if (minutesWatch.innerHTML == 59) {
         minutesWatch.innerHTML = 0;
         hoursWatch.innerHTML++;
     } else {
         minutesWatch.innerHTML++

     }
 } else {
     i++ 
     secondWatch.innerHTML = i;
 }
 setTimeout(() => stopWatch(el, i), 1000);
} 
}
 
 
 