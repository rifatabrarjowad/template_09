const plas = document.getElementById('plas');
plas.addEventListener('click', function () {
    const one = document.getElementById('one').value;
    const oneN = parseFloat(one)
    const oneA = oneN + 1;
    console.log(oneA);
    document.getElementById('one').value = oneA;


    // .........
    const onee = document.getElementById('sub').innerText;

    const oneeN = parseFloat(onee)
    console.log(oneeN);
    const oneeA = oneeN + 1219;
    console.log(oneeA);
    document.getElementById('sub').innerText = oneeA;
    document.getElementById('sub2').innerText = oneeA;

})
const mainus = document.getElementById('mainus');
mainus.addEventListener('click', function () {
    const one = document.getElementById('one').value;
    const oneN = parseFloat(one)
    const oneA = oneN - 1;
    console.log(oneA);
    document.getElementById('one').value = oneA;
})

const pos = document.getElementById('pos');
pos.addEventListener('click', function () {
    const one = document.getElementById('two').value;
    const oneN = parseFloat(one)
    const oneA = oneN + 1;
    console.log(oneA);
    document.getElementById('two').value = oneA;
})

const neg = document.getElementById('neg');
neg.addEventListener('click', function () {
    const one = document.getElementById('two').value;
    const oneN = parseFloat(one)
    const oneA = oneN - 1;
    console.log(oneA);
    document.getElementById('two').value = oneA;
})




// x cut
const loginBtn = document.getElementById('x1');
loginBtn.addEventListener('click', function () {
    const loginArea = document.getElementById("cart1");
    loginArea.style.display = "none";

    document.getElementById('sub').innerText = 0;
    document.getElementById('sub2').innerText = 0;


})
const dtf = document.getElementById('x2');
dtf.addEventListener('click', function () {
    const loginArea = document.getElementById("cart2");
    loginArea.style.display = "none";

    document.getElementById('sub').innerText = 0;
    document.getElementById('sub2').innerText = 0;

})