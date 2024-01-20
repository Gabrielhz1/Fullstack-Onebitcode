let opcoes = ""
function Areatriangulo(base,altura) {
    return alert("A área do triangulo é " + (base * altura  / 2) );
}

function AreaRetangulo(base,altura) {
    return alert("A área do retângulo é: " + (base * altura));
}

function AreaQuadrado(lado) {
    return alert("A área do quadrado é: " + (lado ** 2))
}

function AreaTrapezio(baseMaior,baseMenor,altura){
    return alert("A área do trapézio é:" + (baseMaior + baseMenor)  * altura / 2)
}

function AreaCirculo(pi,raio) {
    return alert("A área do círculo é:" + (pi*raio**2))
} 

do{
    opcoes = prompt("Calculadora Geométrica\n1.área do triângulo:\n2.área do retângulo:\n3.área do quadrado: \n4.área do trapézio:\n5.área do círculo:")

    switch(opcoes){
        case "1":
            const baseTriangulo = prompt("Qual o valor da base do triangulo?")
            const alturaTriangulo = prompt("Qual o valor da altura do triangulo?")
                Areatriangulo(parseFloat(baseTriangulo), parseFloat(alturaTriangulo))
                break;
        case "2":
            const baseRetangulo = prompt("Qual o valor da base do retângulo?")
            const alturaRetangulo = prompt("Qual o valor da altura do retângulo?")
             AreaRetangulo(parseFloat(baseRetangulo), parseFloat( alturaRetangulo))
            break;
        case "3":
            const areaQuadrado = prompt("Qual o valor do lado do quadrado?")
            AreaQuadrado(parseFloat(areaQuadrado))
            break;
        case "4":
            const bMaior =  prompt("Qual o valor da base maior?")
            const bMenor =  prompt("Qual o valor da base menor?")
            const AlturaTrapezio = prompt("Qual o valor da altura do trapézio?")
            AreaTrapezio(parseFloat(bMaior),parseFloat(bMenor),parseFloat(AlturaTrapezio))
            break;
        case "5":
            const valorPi =  prompt("Qual o valor do pi?")
            const valorRaio =  prompt("Qual o valor do raio?")
            AreaCirculo(parseFloat(valorPi),parseFloat(valorRaio))
        break
            


           
    }
}while( opcoes!=="6")