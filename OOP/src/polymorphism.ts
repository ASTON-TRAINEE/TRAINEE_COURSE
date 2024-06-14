 // одно действие - несколько реализаций

class Animal {
    run() {
        console.log('просто бегаю как и все животные')
    }
}

class Dog extends Animal {
    run(): void {
        console.log('бегаю и гавкаю')
    }
}

new Dog().run()

class Cat extends Animal {
    run() {
        console.log('бегаю и мяукаю')
    }
}

new Cat().run()
