function sendOTP() {
   const email = document.getElementById('email');
   const otpverify = document.getElementsByClassName('otpverify')[0];

   let otp_val = Math.floor(Math.random() * 10000);

   let emailbody = `<h2>Your OTP is </h2>${otp_val}`;
   Email.send({
   SecureToken : "77edf938-a797-40da-a0a4-124e2a243a43",
   To : email.value,
   From : "chandanareddy3005@gmail.com",
   Subject : "Email OTP using JavaScript",
   Body : emailbody,
}).then(

   message => {
       if (message === "OK") {
           alert("OTP sent to your email " + email.value);

           otpverify.style.display = "flex";
           const otp_inp = document.getElementById('otp_inp');
           const otp_btn = document.getElementById('otp-btn');

           otp_btn.addEventListener('click', () => {
               if (otp_inp.value == otp_val) {
                   alert("Email address verified -successful login...");
               }
               else {
                   alert("Invalid OTP");
               }
           })
       }
   }
).catch(error => {
    console.error("Error sending OTP:", error);
    alert("Failed to send OTP. Please try again later.");
});
}
