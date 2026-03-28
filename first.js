const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const Boy = document.getElementById('Boy');
    const Girl = document.getElementById('Girl');

    const name1 = Boy.value.toLowerCase().trim();
    const name2 = Girl.value.toLowerCase().trim();

    let result;

    // ❤️ Special condition
    if (
        (name1 === "anas" && name2 === "nagma") ||
        (name1 === "nagma" && name2 === "anas")
    ) {
        result = 100;
    } else {
        const l1 = name1.length;
        const l2 = name2.length;
        result = Math.pow(l1 + l2, 3) % 101;
    }

    document.querySelector('h2').textContent = `Result: ${result}%`;
    form.reset();
});