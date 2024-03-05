let name = localStorage.getItem('name');
let password = localStorage.getItem('password');

if (name === null || password === null) {
    alert('No account found');
} else {
    document.getElementById('name').textContent = name;
}
document.getElementById('approval').addEventListener('click', function () {
    let StudentName = document.getElementById('studentName')
    let studentNameError = document.getElementById('name2')
    let grade = document.getElementById('class')
    let gradeError = document.getElementById('grade')
    let centreName = document.getElementById('centreName')
    let centreNameError = document.getElementById('centreNameError')
    let password = document.getElementById('password')
    let pattern = document.getElementById('pattern')

    localStorage.setItem('CandidateName', StudentName.value);
    localStorage.setItem('centreName', centreName.value);
    localStorage.setItem('password', password.value);
    
    if (StudentName.value.length < 5) {
        studentNameError.textContent = 'Enter your full name'
    }else{
        studentNameError.textContent = ''
    }
    if (grade.value.length == '') {
        gradeError.textContent = 'Input field cannot be empty'
    }else{
        gradeError.textContent = ''
    }
    if (centreName.value.length < 6) {
        centreNameError.textContent = 'Input field cannot be empty'
    }
    if (password.value.length < 8) {
        pattern.textContent = 'Password must be up to 8 characters'
    }else{
        centreNameError.textContent = ''
        $('form')[0].reset();
        alert('Student has been successfully registered for the competition')
        alert('Move to the quiz page. Click ok to start')
        window.location.href = 'quizLogin.html'
    }
})


// Function to handle login attempt
// function login() {
//     let studentName = document.getElementById('studentName').value;
//     let centreName = document.getElementById('centreName').value;
//     let storedStudentName = localStorage.getItem('CandidateName');
//     let storedCentreName = localStorage.getItem('centreName');

//     if (studentName.length < 5 || centreName.length < 6) {
//         alert('Please fill in all fields.');
//         return;
//     }

//     if (studentName !== storedStudentName || centreName !== storedCentreName) {
//         alert('Invalid credentials. Please try again.');
//         return;
//     }

//     alert('Login Successful');
//     window.location.href = 'quizHomePage.html';
// }

// Event listener for login button
// document.getElementById('approval').addEventListener('click', function () {
//     login();
// });

// // Event listener for registration form submission
// document.getElementById('registerForm').addEventListener('submit', function (event) {
//     event.preventDefault(); // Prevent form submission
//     let studentName = document.getElementById('studentName').value;
//     let grade = document.getElementById('class').value;
//     let dateOfBirth = document.getElementById('date').value;
//     let centreName = document.getElementById('centreName').value;

//     if (studentName.length < 5 || grade === '' || dateOfBirth === '' || centreName.length < 6) {
//         alert('Please fill in all fields.');
//         return;
//     }

//     // Store user details in local storage
//     localStorage.setItem('CandidateName', studentName);
//     localStorage.setItem('Grade', grade);
//     localStorage.setItem('DateOfBirth', dateOfBirth);
//     localStorage.setItem('CentreName', centreName);

//     alert('Student has been successfully registered for the competition.');
//     alert('Move to the quiz page. Click ok to start.');
//     window.location.href = 'quizLogin.html';
// });
