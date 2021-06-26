const plas = document.getElementById('plas');
plas.addEventListener('click', function () {
    const one = document.getElementById('one').value;
    const oneN = parseFloat(one)
    const oneA = oneN + 1;
    console.log(oneA);
    document.getElementById('one').value = oneA;
})