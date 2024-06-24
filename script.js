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
                alert(`Oh sorry, ${name}. You aren't old enough.`);
                reject();
            }
        });
    });
}

async function pro() {
    await prom();
}
pro();
