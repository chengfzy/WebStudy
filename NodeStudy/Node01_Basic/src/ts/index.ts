import greet from './greet'

function getFirstWorld (msg: string) {
  console.log(msg.split(' ')[0])
}

getFirstWorld('Hello World!')

interface UserItem {
  name: string
  age?: number
  enjoyFoods: string[]
  friendList?: UserItem[]
}

// interface Admin extends UserItem {
//   permissionLevel: number
// }

interface Admin extends Omit<UserItem, 'enjoyFoods' | 'friendList'> {
  permissionLevel: number
}

const petter: UserItem = {
  name: 'Petter',
  enjoyFoods: ['rice', 'noodle', 'pizza']
}

console.log(petter)

const greeting = greet('Petter')
console.log(greeting)

const greetings = greet(['Petter', 'Tom', 'Jimmy'])
console.log(greetings)
