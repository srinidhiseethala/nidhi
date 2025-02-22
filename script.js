let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll =  () => {
    sections.forEach(sec => {
        let top = window. scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href *=' + id +' ]').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// function sendMail(){
//     let params={
//         name : document.getElementById("name").value,
//         email : document.getElementById("email").value,
//         subject : document.getElementById("subject").value,
//         message : document.getElementById("message").value,
//     }
//     emailjs.send("service_4m79m9c","template_d6xd11u",params).then(alert("Email sent Successfully!!"))
// }




function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    if (!params.name || !params.email || !params.subject || !params.message) {
        alert("Please fill in all fields.");
        return;
    }

    emailjs.send("service_4m79m9c", "template_d6xd11u", params)
        .then(response => {
            alert("Email sent successfully!");
            console.log("Email sent:", response);
            document.querySelector("form").reset();
        })
        .catch(error => {
            alert("Failed to send email.");
            console.error("Error sending email:", error);
        });
}

