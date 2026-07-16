function toggleMenu(){
document.getElementById("mobileMenu").classList.toggle("show");
}

let slideIndex=0;
const slides=document.querySelectorAll(".slide");
const dots=document.querySelectorAll(".dot");

function showSlides(){
slides.forEach(s=>s.classList.remove("active"));
dots.forEach(d=>d.classList.remove("active-dot"));
slideIndex++;
if(slideIndex>slides.length){slideIndex=1;}
slides[slideIndex-1].classList.add("active");
dots[slideIndex-1].classList.add("active-dot");
setTimeout(showSlides,3000); 
}
showSlides();

window.addEventListener("load",function(){

setTimeout(function(){

document.getElementById("loader").style.opacity="0";

setTimeout(function(){
document.getElementById("loader").style.display="none";
},800);

},2000);

});

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBB9-CB7dxioWNylyj2_fRwx4i1DWEiq_E",
  authDomain: "amd-creative-studios.firebaseapp.com",
  projectId: "amd-creative-studios",
  storageBucket: "amd-creative-studios.firebasestorage.app",
  messagingSenderId: "423562148184",
  appId: "1:423562148184:web:5b17845f083a32debf8d2d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const profile=document.getElementById("profileContainer");
const dropdown=document.getElementById("profileDropdown");

const guestMenu=document.getElementById("guestMenu");
const userMenu=document.getElementById("userMenu");

const userEmail=document.getElementById("userEmail");
const logoutBtn=document.getElementById("logoutBtn");

profile.addEventListener("click",()=>{

dropdown.style.display =
dropdown.style.display==="block"
?"none"
:"block";

});

document.addEventListener("click",(e)=>{

if(!profile.contains(e.target)){

dropdown.style.display="none";

}

});
onAuthStateChanged(auth,(user)=>{
console.log(user);
if(user){

guestMenu.style.display="none";

userMenu.style.display="block";

userEmail.innerHTML="📧<br>"+user.email;

}else{

guestMenu.style.display="block";

userMenu.style.display="none";

}

});

if(logoutBtn){
 logoutBtn.addEventListener("click", async ()=>{
   await signOut(auth);
   alert("Logged Out Successfully");
   location.reload();
 });
}

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createFirework(){
for(let i=0;i<120;i++){
particles.push({
x: canvas.width/2,
y: canvas.height/2,
vx: (Math.random()-0.5)*12,
vy: (Math.random()-0.5)*12,
life: 100
});
}
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);

particles.forEach((p,index)=>{
p.x += p.vx;
p.y += p.vy;
p.life--;

ctx.beginPath();
ctx.arc(p.x,p.y,3,0,Math.PI*2);
ctx.fillStyle=`hsl(${Math.random()*360},100%,60%)`;
ctx.fill();

if(p.life<=0){
particles.splice(index,1);
}
});

requestAnimationFrame(animate);
}

createFirework();
animate();

setTimeout(()=>{
canvas.style.display="none";
},6000);
