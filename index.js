"use strict";
var Fruit;
(function (Fruit) {
    Fruit["apple"] = "apple";
    Fruit["banana"] = "banana";
    Fruit["pear"] = "pear";
})(Fruit || (Fruit = {}));
function main(name) {
    switch (name) {
        case Fruit.apple:
            console.log('I like apple');
            break;
        case Fruit.banana:
            console.log('Banana is good');
            break;
        case Fruit.pear:
            console.log('This is a pear');
            break;
        default:
            break;
    }
}
main(Fruit.apple);
//# sourceMappingURL=index.js.map