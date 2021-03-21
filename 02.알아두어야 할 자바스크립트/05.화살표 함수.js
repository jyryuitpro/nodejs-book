const add2 = (x, y) => {
    return x + y;
};

const add3 = (x, y) => (x + y);

const not2 = x => !x;

const obj = (x, y) => ({x, y});

button.addEventListener('click', function () {
    console.log(this.textContent);
});

button.addEventListener('click', (e) => {
    console.log(e.target.textContent);
});