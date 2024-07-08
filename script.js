function prom() {
    let form = document.getElementById("myForm");
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form submission

        let age = parseInt(document.getElementById("age").value);
        let name = document.getElementById("name").value;
		

        return new Promise((resolve, reject) => {
            if (age > 18) {
                setTimeout(() => {
                    alert(`Welcome, ${name}. You can vote.`);
                    resolve();
                }, 4000);
            } else {
				setTimeout(() => {
                alert(`Oh sorry ${name}. You aren't old enough.`);
                reject();
				                }, 4000);	
            }
        });
    });
}

async function pro() {
    await prom();
}
pro();
