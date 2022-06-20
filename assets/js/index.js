const validar = () => {
    const solicitarNum = prompt("Ingrese un numero entre 1 y 20.");
    if (solicitarNum < 1 || solicitarNum > 20) {
        alert(`El número ${solicitarNum} esta fuera del rango, ingrese un numero entre 1 y 20.`);
        return validar();
    } else {
        return solicitarNum;
    }

}
const num = parseInt(validar());
for (let i = 1; i <= num; i++) {
    let res = 1;
    for (let j = 1; j <= i; j++) {
        res = res * j;
    }
    console.log(`Factorial de ${i} es: ${res}`);
}

for (let i = 1; i <= num; i++) {
    console.log(i + " x " + num + " = " + num * i);
}

solicitarNum()