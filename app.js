const month=document.querySelector('.month');
const day=document.querySelector('.day');
const date=document.querySelector('.date');
const year=document.querySelector('.year');

let currentdate=new Date();
var months=['january','february','march','april','may','june','july','august','september','october','nobember','december'];
var days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

month.innerHTML=months[currentdate.getMonth()];
day.innerHTML=days[currentdate.getDay()];
date.innerHTML=currentdate.getDate();
year.innerHTML=currentdate.getFullYear()
