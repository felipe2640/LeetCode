function digitSum(n) {
    const digitos = Array.from(String(n), Number)
    const soma = digitos.reduce((a, b) => a + b)
    const produto = digitos.reduce((a, b) => a * b)
    return produto - soma
}

console.log(digitSum(456))