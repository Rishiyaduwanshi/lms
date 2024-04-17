const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const branch = document.getElementById("branch").value;
    const rgNo = document.getElementById("rgNo").value;
    const semester = document.getElementById("semester").value;

    const user = {
        username: username,
        password: password,
        branch: branch,
        rgNo: rgNo,
        semester: semester
    };

    localStorage.setItem(user.username, JSON.stringify(user));
    alert("Sign Up Success")

    signupForm.reset();
});
