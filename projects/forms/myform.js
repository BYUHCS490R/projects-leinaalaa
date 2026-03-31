document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const formData = {
            fname: document.getElementById('fname').value.trim(),
            email: document.getElementById('email').value.trim(),
            password: document.getElementById('password').value.trim(),
            dob: document.getElementById('dob').value,
            gender: document.querySelector('input[name="gender"]:checked')?.value || '',
            hobbies: Array.from(document.querySelectorAll('input[name="hobbies"]:checked')).map(cb => cb.value),
            country: document.getElementById('country').value,
            comments: document.getElementById('comments').value.trim()
        };

        console.log(formData);

        if (!formData.fname || !formData.email || !formData.password) {
            alert('Please fill in your name, email and password');
            return;
        }

        if (formData.password.length < 6) {
            alert('Password must be at least 6 characters long');
            return;
        }

        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'response.json');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                const messageDiv = document.createElement('div');
                messageDiv.textContent = response.message;
                messageDiv.style.marginTop = '20px';
                messageDiv.style.color = 'green';
                form.parentNode.appendChild(messageDiv);

                form.querySelectorAll('input, select, textarea, button').forEach(el => el.disabled = true);
            }
        };
        xhr.send();
    });
});