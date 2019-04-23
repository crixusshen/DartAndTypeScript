import printGreeting from './hello'

const greet = async () => await printGreeting()

greet().then(e => console.log(e))

// 这句代码与上面2句等价，上面只是为了展示async和await同步特性
// printGreeting().then(e => console.log(e))