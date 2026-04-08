document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("fname").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const service = document.getElementById("service").value;

    if (!name || !email || !phone || !service) {
        alert("Please fill in all fields.");
        return;
    }

    document.getElementById("message").innerHTML = "Request submitted successfully!";
    document.getElementById("myform").reset();
});