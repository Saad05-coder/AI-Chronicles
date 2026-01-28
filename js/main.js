document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            
            event.preventDefault();

            const nameInput = document.getElementById("fullName");
            const emailInput = document.getElementById("email");
            
            const nameValue = nameInput.value.trim();
            const emailValue = emailInput.value.trim();

            // 2. CHECK IF EMPTY
            if (nameValue === "" || emailValue === "") {
                // Show Error
                alert("❌ ACCESS DENIED\nSystem Error: Credentials Missing.\nPlease input User Name and Email.");
            }
            else {
                // Show Success
                alert("✅ ACCESS GRANTED\nWelcome, " + nameValue);
                
                // 3. MANUALLY GO TO NEXT PAGE
                window.location.href = "2.html";
            }
        });
    }
});