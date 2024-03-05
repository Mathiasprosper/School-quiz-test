document.getElementById('approval').addEventListener('click', function () {
    let studentName = document.getElementById('studentName').value;
    let studentNameError = document.getElementById('name2')
    let password = document.getElementById('password').value;

    let centreName = document.getElementById('centreName').value;
    let centreNameError = document.getElementById('centreNameError')
    let pattern = document.getElementById('pattern');

    if (studentName.length < 5) {
        studentNameError.textContent = 'Enter your full name';
        return;
    } else {
        studentNameError.textContent = '';
    }

    if (centreName.length < 6) {
        centreNameError.textContent = 'Input field cannot be empty';
        return;
    }

    if (password.length < 8) {
        pattern.textContent = 'Password must be 8 characters';
    } else {
        centreNameError.textContent = '';
        $('form')[0].reset();
    }

    let storedStudentName = localStorage.getItem('CandidateName');
    let storedCentreName = localStorage.getItem('centreName');
    let storedPassword = localStorage.getItem('password')

    if (studentName !== storedStudentName || centreName !== storedCentreName || password !== storedPassword) { // password should compare with storedPassword
        alert('Student account does not exist');
        return;
    }

    alert('Login Successful');
    window.location.href = 'quizHomePage.html';
});