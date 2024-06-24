let form = document.getElementById("myForm");
form.addEventListener('submit', () => {
    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;
    age = parseInt(age);

    let myPromise = new Promise(function (resolve, reject) {
        if (age > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
        } else {
            reject(`Oh sorry, ${name}. You aren't old enough.`);
        }
    });

    myPromise.then(
        function (value) {
            alert(value);
        },
        function (error) {
            alert(error);
        }
    );

    // alert(`Age: ${age}, Name: ${name}`);
});
