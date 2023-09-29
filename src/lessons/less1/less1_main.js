//1. string => "", '', ``
//2. number => number, NaN, Infinity
//3. undefined => undefined
//4. null => null
//5. boolean => true, false

//6. symbol => Symbol
//7. bigint => BigInt
// Примитивы

//8. object => object, array, function
//Обьекты:
// - составной (комбинированый) тип данных
// - ссылочный тип данных

const user = {name: "Bob"}
const user2 = user
user2.name = "Alex"
console.log(user.name) // "Alex"

const arr = [1, 2, 3, 4] // #13
// arr.push(5) // мутирует Б изменяет обьект
// console.log(arr)
const newArr = (arr.concat(5)) // #14 иммутабельный метод, создает новый массив
console.log(arr === newArr) // #13 === #14? -> false

const users = [
    {
        id: 1,
        name: "Bob",
        isStudent: true,
    },
    {
        id: 2,
        name: "Alex",
        isStudent: true,
    },
    {
        id: 3,
        name: "Ann",
        isStudent: true,
    },
    {
        id: 4,
        name: "Dany",
        isStudent: true,
    },
]

const newUser = {
    id: 5,
    name: "Farid",
    isStudent: true,
}

//CRUD

//Create
const copyUsers = [...users, newUser] // Поверхностное копирование массива с добавлением нового елемента

//Read
// Update
//id #2
const updatedUser = copyUsers.map(u => u.id === 2 ? {...u, isStudent: false} : u)
//delete
//id #4
const deletedUser = updatedUser.filter(u => u.id !== 4) // true

const superUser = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "Ing": "81.1496"
        }
    },
    "phone": "1-770-736-8031 ×56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
}

const superUserCopy = {...superUser, company: {...superUser.company, catchPhrase: "bruhlidisch"}}