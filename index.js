// ============================================================================== Locating address in Google Map
const addressBtnElement = document.getElementById("address")

addressBtnElement.addEventListener("click", function(){
    var actualAddress = addressBtnElement.getAttribute('data-address')
    var googleMap = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(actualAddress);
    window.open(googleMap, '_blank')
});


//=============================================================================== Emailing to the email address
const emailLinkElement = document.getElementById("email_link")
const emailSectionElement = document.getElementById("email_section")
const emailPromptElement = document.getElementById('email_prompt')
const btnCloseElement = document.getElementById("btn-close")
const emailFormElement = document.getElementById("email_form");


// email link function
emailLinkElement.addEventListener("click", function(){
    console.log(emailSectionElement)
    emailSectionElement.classList.remove('d-none')
});

// modal close clicking outer side of email section
emailSectionElement.addEventListener("click", function(){
    emailSectionElement.classList.remove('d-block')
    emailSectionElement.classList.add('d-none')
});

emailPromptElement.addEventListener("click", function(e) {
    e.stopPropagation();
});

// close btn
btnCloseElement.addEventListener("click", function(){
    emailSectionElement.classList.remove('d-block');
    emailSectionElement.classList.add('d-none')
});


// redirecting to email propmt of google gmail
emailFormElement.addEventListener("submit", function(e){
    e.preventDefault();
    var emailAddress = emailLinkElement.getAttribute('data-email')
    const subject = document.getElementById("subject").value;
    const body = document.getElementById("email_body").value;
    var gmail = "https://mail.google.com/mail/?view=cm&fs=1&to="+encodeURIComponent(emailAddress) + "&su=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
    window.open(gmail,'_blank');
    document.getElementById("subject").value = '';
    document.getElementById("email_body").value = '';
    emailSectionElement.classList.remove('d-block')
    emailSectionElement.classList.add('d-none')
});