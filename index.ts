enum Fruit {
    apple = 'apple',
    banana = 'banana',
    pear = 'pear'
}

function main(name: Fruit) {
    switch (name) {
        case Fruit.apple:
            console.log('I like apple')
            break
        case Fruit.banana:
            console.log('Banana is good')
            break
        case Fruit.pear:
            console.log('This is a pear')
            break
        default:
            break
    }
}

main(Fruit.apple)
