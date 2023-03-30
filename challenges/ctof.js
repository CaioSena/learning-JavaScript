/*      
        Fórmulas de conversão °C to °F
        C = (F - 32) * 5/9 
        F = C * 9/5 + 32
*/    

function trasnformDegree (degree) {
    const celsiusExists = degree.toUpperCase().includes('C')
    const fahrenheitExists = degree.toUpperCase().includes('F')

    if (celsiusExists && fahrenheitExists) {
        throw new Error('Grau nãp identificado')
    }

    let updateDegree = Number(degree.toUpperCase().replace("F", ""))
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C'

    if(celsiusExists) {
        updateDegree = Number(degree.toUpperCase().replace("C", ""))
        formula = fahrenheit => celsius * 9/5 +32
        degreeSign = 'F'
    }

    return formula(updateDegree) + degreeSign
}

try {
    console.log(trasnformDegree('50F'))
    console.log(trasnformDegree('10C'))
    trasnformDegree('50v')
} catch (error) {
    console.log(error.message)
}