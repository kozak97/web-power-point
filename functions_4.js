let button1 = document.querySelector('.button_three');
let button3 = document.querySelector('.button_one');
let m1 = document.querySelector('.variant_menu');
let m2 = document.querySelector('.variant_menu2');
let count_b = 0;
m2.style.display = "none";

button1.addEventListener('click', function() {
    if (count_b >= 1) {
        count_b = 1;
    } else {
        count_b++;
    }

    if (count_b === 1) {
        m1.style.display = "none";
        m2.style.display = "block";
    }

    console.log(count_b);
});

button3.addEventListener('click', function() {
    if (count_b <= 0) {
        count_b = 0;
    } else {
        count_b--;
    }

    if (count_b === 0) {
        m2.style.display = "none";
        m1.style.display = "block";
    }

    console.log(count_b);
});
