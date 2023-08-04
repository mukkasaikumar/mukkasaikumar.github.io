// add class navbarDark on navbar scroll
let text = 'Hai, I am Sai Kumar Mukka\u{1F91D}'; 
let i = 0;
let speed = 100; 
let typewriterSound = document.getElementById("typewriter_sound");

function typeWriter() {
  if (i < text.length) {
    document.getElementById("hero_title").innerHTML += text.charAt(i);
    typewriterSound.play();
    i++;
    setTimeout(typeWriter, speed);
  } else {
    document.getElementById("hero_desc").style.opacity = "1";
  }
}
typeWriter();

const header = document.querySelector('.navbar');
console.log(header)
window.onscroll = function() {
    const top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}
// collapse navbar after click on small devices
const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')

navLinks.forEach((l) => {
    l.addEventListener('click', () => { new bootstrap.Collapse(menuToggle).toggle() })
})
function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_rxkka5v";
  const templateID = "template_75eozys";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!")

    })
    .catch(err=>console.log(err));

}
