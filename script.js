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
    {
        name: "Carlos",
        age: 19,
        cellnumber: 5678-1234,
        friends: ["E", "F", "G", "H"]
    },
    {
        name: "João",
        age: 21,
        cellnumber: 8765-4321,
        friends: ["I", "J", "K", "L"],
    },
    {
        name: "Maria",
        age: 17,
        cellnumber: 4321-8765,
        friends: ["M", "N", "O", "P"],
    },
    {
        name: "Julia",
        age: 15,
        cellnumber: 1526-3748,
        friends: ["Q", "R", "S", "T", "U"]
    }
]
console.log(cadastro[0].friends[2])
console.log(cadastro[1].friends[1])
console.log(cadastro[2].friends[0])
console.log(cadastro[3].friends[3])
console.log(cadastro[4].friends[4])