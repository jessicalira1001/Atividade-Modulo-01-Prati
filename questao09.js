let codigoProduto = 11;

switch (codigoProduto) {
    case 1:
        console.log("Sul")
        break;

    case 2:
        console.log("Norte")
        break;

    case 3:
        console.log("Leste")
        break;

    case 4:
        console.log("Oeste")
        break;

    case 5:
        console.log("Nordeste")
        break;

    case 6:
        console.log("Nordeste")
        break;

    case 7:
        console.log("Sudeste")
        break;

    case 8:
        console.log("Sudeste")
        break;

    case 9:
        console.log("Sudeste")
        break;

    case (codigoProduto>= 10 && codigoProduto<= 20):
        console.log("Centro-oeste")
        break;

    case (codigoProduto>= 25 && codigoProduto<= 50):
        console.log("Nordeste")
        break;

    default:
        console.log("Produto importado")
}


