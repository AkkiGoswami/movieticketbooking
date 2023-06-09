document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Validate form fields
    var nameInput = document.getElementById('userName');
    var emailInput = document.getElementById('userEmail');
    var passwordInput = document.getElementById('userPassword');
    var confirmPasswordInput = document.getElementById('userConfirmPassword');

    if (passwordInput.value.trim() === '') {
      alert('Please enter a password.');
      passwordInput.focus();
      return;
    }

    if (confirmPasswordInput.value.trim() === '') {
      alert('Please confirm your password.');
      confirmPasswordInput.focus();
      return;
    }

    if (passwordInput.value !== confirmPasswordInput.value) {
      alert('Passwords do not match. Please try again.');
      confirmPasswordInput.value = '';
      passwordInput.value = ''; 
      passwordInput.focus();
      return;
    }

    // Save user data to local storage
    var userData = {
      name: nameInput.value,
      email: emailInput.value,
      password: passwordInput.value,
      status:"Active"
    };



    
    localStorage.setItem('userData', JSON.stringify(userData));
   
    let signBtn=document.getElementById("signBtn");
    let logBtn=document.getElementById("logBtn");
    signBtn.style.display="none";
    logBtn.style.display="block" ;
   
    if(userData !== null){
      console.log(userData);
    let signBtnClose=document.getElementById("signBtnClose");
    signBtnClose.style.data-bs-dismiss;
    location.reload(true);
    }
  });






  window.onload = () =>{
    let userData = JSON.parse(localStorage.getItem("userData"));
    if(userData.status == "Active"){
      document.getElementById("signBtn").style.display = "none";
      document.getElementById("logBtn").style.display = "block";
    }
  }

  function logOutBtns(){
    let userLogout = JSON.parse(localStorage.getItem("userData"));
    userLogout.status = "disconnect";

    localStorage.setItem("userData",JSON.stringify(userLogout));
    location.reload(true);
  }

  // owl carousel

  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:1500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})