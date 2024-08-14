//your JS code here. If required.
document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting the traditional way

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    // Ensure inputs are not empty
    if (name === '' || age === '') {
        alert('Please fill out both fields.');
        return;
    }

    // Create a new promise
    new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age >= 18) {
                resolve();
            } else {
                reject();
            }
        }, 4000); // 4-second delay to simulate processing time
    })
    .then(() => {
        alert(`Welcome, ${name}. You can vote.`);
    })
    .catch(() => {
        alert(`Oh sorry ${name}. You aren't old enough.`);
    });
});
