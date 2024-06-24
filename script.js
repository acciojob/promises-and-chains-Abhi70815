let form = document.getElementById("myForm");
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    let age = parseInt(document.getElementById("age").value);
    let name = document.getElementById("name").value;

    let myPromise = new Promise((resolve, reject) => {
        if (age > 18) {
            setTimeout(() => {
                resolve(`Welcome, ${name}. You can vote.`);
            }, 4000);
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

});
