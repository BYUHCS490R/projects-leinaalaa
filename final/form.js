document.getElementById("myform").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("fname").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        service: document.getElementById("service").value,
        details: document.getElementById("details").value
    };

    console.log(formData);

    if (!formData.name || !formData.email || !formData.phone || !formData.service) {
        alert("Please fill in all required fields.");
        return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "response.json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            const messageDiv = document.createElement("div");
            messageDiv.textContent = response.message;
            messageDiv.style.marginTop = "20px";
            messageDiv.style.color = "green";
            document.getElementById("message").innerHTML = "";
            document.getElementById("message").appendChild(messageDiv);
            document.getElementById("myform").reset();
        }
    };
    xhr.send();
});