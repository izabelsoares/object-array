const eu = {
    nome: "Izabel",
    idade: 15,
    interesses: ["anime", "tecnologia", "viagem"]
}
console.log(eu)

eu.cachorros=["Max", "Rex"]
console.log(eu)

delete eu.interesses
console.log(eu)

let cadastro = [
    {
        name: "Izabel",
        age: 16,
        cellnumber: 1234-5678,
        friends: ["A", "B", "C", "D"]
    },
]
console.log(cadastro[0].friends[3])