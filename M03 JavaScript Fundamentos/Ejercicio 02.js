/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*2️⃣ EJERCICIO 02 2️⃣*/

function devolverString(string) {
    return string
}
devolverString('str')
    // ⛔️ "X" e "Y" son números.

function suma(x, y) {
    return (x + y)
}
suma(5, 4)

function resta(x, y) {
    // Retorna el resultado de la resta.
    // Tu código:
    return (x - y)
}
resta(5, 4)

function divide(x, y) {
    // Retorna el resultado de su división.
    // Tu código:
    return (x / y)
}
divide(10, 2)

function multiplica(x, y) {
    // Retorna el resultado de su multiplicación.
    // Tu código:
    return (x * y)
}
multiplica(4, 2)

function obtenerResto(x, y) {
    // Obten el resto de la división de "x" entre "y".
    // Tu código:
    return (x % y)
}
obtenerResto(25, 6)

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
    devolverString,
    suma,
    resta,
    divide,
    multiplica,
    obtenerResto,
};