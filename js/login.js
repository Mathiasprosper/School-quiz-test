document.getElementById('approval').addEventListener('click', function () {
    let name = document.getElementById('name');
    let password = document.getElementById('password');
    let name2 = document.getElementById('name2');
    let pattern = document.getElementById('pattern');

    if (name.value.length <= 5) {
        name2.textContent = 'Incomplete name';
        return;
    }

    if (password.value.length < 8) {
        pattern.textContent = 'Password must be up to 8 characters';
        return;
    }

    let storedPassword = localStorage.getItem('password');
    let storedName = localStorage.getItem('name')

    if (name == storedName) {
        alert('Login successful');
    }
    if (password == storedPassword) {
        alert('Login successful');
    }

    if (password.value !== storedPassword) {
        alert('Account does not exist');
    } else if(name.value !== storedName){
        alert('Account does not exist');
    }
    else {
        console.log('Name: ' + localStorage.getItem('name'));
        console.log('Password: ' + localStorage.getItem('password'));
        window.location.href = 'studentRegistration.html'
        $('form')[0].reset();
    }
});