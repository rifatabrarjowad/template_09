const plas = document.getElementById('plas');
plas.addEventListener('click', function () {
    const one = document.getElementById('one').value;
    const oneN = parseFloat(one)
    const oneA = oneN +1;
    console.log(`oneA ${oneA}`);
    document.getElementById('one').value = oneA;
    let add = document.getElementById('add').innerText;
    let adds =parseFloat(add);
    let addss = oneA * 1219;
    document.getElementById('add').innerText = addss;
    console.log(`adds ${adds}`)
    
const product2 = document.getElementById('product2').innerText;
const product2Float = parseFloat(product2);
console.log(`product2 =${product2} and addss =${addss}`)
const total = addss + product2Float;

document.getElementById('sub').innerText=total;
document.getElementById('sub2').innerText=total;
})
const mainus = document.getElementById('mainus');
mainus.addEventListener('click', function () {
    const one = document.getElementById('one').value;
    const oneN = parseFloat(one)
    const oneA = oneN - 1;
    console.log(oneA);
    document.getElementById('one').value = oneA;
    const delet = document.getElementById('add').innerText;
    let delets =parseFloat(delet);
    let final = delets -1219;
    document.getElementById('add').innerText = final;
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

