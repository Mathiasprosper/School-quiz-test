document.getElementById('approval').addEventListener('click', function () {
    let name = document.getElementById('name');
    let address = document.getElementById('address');
    let number = document.getElementById('number');
    let password = document.getElementById('password');

    let name2 = document.getElementById('name2');
    let location =  document.getElementById('location');
    let number2 = document.getElementById('number2');
    let pattern = document.getElementById('pattern');

    if (name.value.length <= 5) {
        name2.textContent = 'Incomplete name'
    }
    if (address.value.length < 5) {
        location.textContent = 'Incomplete Address'
    }
    if (number.value.length == '') {
        number2.textContent = 'Input field is empty'
    }
    if (password.value.length < 8) {
        pattern.textContent = 'Password must be up to 8 characters'
    }else{
        localStorage.setItem('name', name.value);
        localStorage.setItem('password', password.value);

        alert('Account created successfully')
        window.location.href = 'studentRegistration.html'

        $('form')[0].reset();   
    }
  
});