document.getElementById('myform').addEventListener('submit', function(event) {
            event.preventDefault(); 
           // alert('Form submitted!');

           const fname = document.getElementById('fname').value;
           const email = document.getElementById('email').value;
           const password = document.getElementById('password').value;
           const state = document.getElementById('state').value;

            if (!fname || !email) {
                alert("You need a name and email.");
                return;
            }

            if (!password) {
                alert("You need a password.");
                return;
            }

            const formData = {
                name: fname,
                email: email,
                password: password,
                state: state
            };

            const xhr = new XMLHttpRequest();
            xhr.open('POST', 'submit.json', true); 
            xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    document.getElementById('message').innerHTML = response.message;
                    document.getElementById('myform').innerHTML = '';
                } else if (xhr.readyState === 4) {
                    alert('Error submitting form.');
                }
            };
            xhr.send(JSON.stringify(formData));
            console.log(formData);
        });