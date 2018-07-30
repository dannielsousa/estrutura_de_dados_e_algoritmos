let averangeTemp = [];
averangeTemp[0] = 31.9;
averangeTemp[1] = 35.3;
averangeTemp[2] = 42.4;
averangeTemp[3] = 52;
averangeTemp[4] = 60.8;

/*

//Criando E Inicializando Arrays

let daysOfWeek = new Array();
let daysOfWeek = new Array(7);
let daysOfWeek = new Array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado');
console.log(daysOfWeek);
let daysOfWeek = []; melhor maneira

*/
let daysOfWeek = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];

//para saber o tamanho
console.log('Para saber o tamanho - .length');
console.log(daysOfWeek.length);

//Acessando elementos e iterando com um array
console.log('Acessando elementos e iterando com um array');
for (let i of daysOfWeek) {
    console.log(i);
}

//Sequencia de fibonacci com 20 itens
console.log('Sequencia de fibonacci');
let fibonacci = [];
fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++) {
    fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
}

for (let i=1; i < fibonacci.length; i++) {
    console.log(fibonacci[i]);
}

//Acrescentando elementos
console.log('Acrescentando elementos');
let numbers = [0,1,2,3,4,5,6,7,8,9];
console.log(numbers);
numbers[numbers.length] = 10;
console.log(numbers);
numbers.push(11);
console.log(numbers);
numbers.push(12,13);
console.log(numbers);

//Inserindo um elmento na prmieira posição
console.log('Inserindo um elmento na prmieira posição');

for(let i = numbers.length; i >= 0; i--) {
    numbers[i] = numbers[i-1];
}
numbers[0] = -1;
console.log(numbers);

//Usando o método unshift
console.log('Usando o método unshift');
numbers.unshift(-2);
console.log(numbers);
numbers.unshift(-4, -3);
console.log(numbers);

//Removendo elementos no final do array
console.log('Removendo elementos no final do array');
numbers.pop();
console.log(numbers);

//Removendo um elemento da primeira posição
console.log('Removendo um elemento da primeira posição');
for (let i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i+1];
}
console.log(numbers);

//Usando o metodo shift
console.log('Usando o metodo shift');
numbers.shift();
console.log(numbers);

//Acrescentando e removendo elementos de uma posição especifica
console.log('Acrescentando e removendo elementos de uma posição especifica');
numbers.splice(5,3);
console.log(numbers);

//para adicionar elementos a partir da posição 3 usando splice, o primeiro elemento é o indice, o segundo elemento é a quandiade de itens que queremos
//deletar, como não vamos deletar, e sim incluir, passamos o 0. Em seguida, passamos os valores que queremos incluir.
console.log('splice');
numbers.splice(5,0,3,4,5);
console.log(numbers);

//Arrays Bidimensionais e multidimensionais

/* 
let averangeTempDay = [];

averangeTempDay[0] = [70,72,80,85,77,75];
averangeTempDay[1] = [81,79,75,75,73,72];

console.log(averangeTempDay[0][2]);

//o mesmo codigo pode ser escrito
*/

let averangeTempDay = [];
averangeTempDay[0] = [];
averangeTempDay[0][0] = 72;
averangeTempDay[0][1] = 73;
averangeTempDay[0][2] = 70;
averangeTempDay[0][3] = 79;
averangeTempDay[0][4] = 79;
averangeTempDay[0][5] = 81;

averangeTempDay[1] = [];
averangeTempDay[1][0] = 70;
averangeTempDay[1][1] = 72;
averangeTempDay[1][2] = 81;
averangeTempDay[1][3] = 75;
averangeTempDay[1][4] = 74;
averangeTempDay[1][5] = 80;


//iterando pelos elementos de arraysbidimensionais
console.log('iterando pelos elementos de arraysbidimensionais')
function verificarDias(arr) {
    for (i = 0; i < arr.length; i++) {
        for (z = 0; z < arr[i].length; z++) {
            console.log(arr[i][z]);
        }
    }
}

verificarDias(averangeTempDay);

//Arrays multidimensionais
var matrix3x3x3 = [];
for (i = 0; i < 3; i++) {
    matrix3x3x3[i] = [];
    for (j = 0; j < 3; j++) {
        matrix3x3x3[i][j] = [];
        for (z = 0; z < 3; z++) {
            matrix3x3x3[i][j][z] = i+j+z;
        }
    }
}

//para exibir
console.log('Arrays multidimensionais');
for (i = 0; i < matrix3x3x3.length; i++) {
    for (j = 0; j < matrix3x3x3[i].length; j++) {
        for (z = 0; z < matrix3x3x3[j].length; z++) {
            console.log(matrix3x3x3[i][j][z]);
        }
    }
}

/* Referências para métodos de array em javascript

concat = junta vários arrays e devolve uma cópia dos arrays concatenados
every = Itera em todos os elemetos do array, verificando uma condição desejada (função) até que false seja devolvido
filter = Cria um array com todos os elementos avaliados com true pela função especificada
forEach = Executa uma função específica em cada elemento do array
join = Reúne todos os elementos do array em uma string
indexOf = Pesquisa o array em busca de elementos específicos e devolve a sua posição
lastIndexOf = Devolve a posição do último item do array que corresponda aos critérios de pesquisa
map = Cria um ovo array a partir de uma função que contém os critérios/condições e devolve os elementos do array que correspondam aos critérios
reverse = Inverte o array, de modoo que os últimos itens serão os primeiros e vice-versa
slice = Devolve um novo array a partir do índice especificado
some = Itera emtodos os elementos do array, verificando uma condição desejada (função) até que true seja devolvido
sort = Organiza o array em ordem alfabética ou de acordo com a função fornecida
toString = Devolve o array na forma de uma string
valueOf = É semelhante ao método toString e devolve o array na forma de uma string
*/

// Juntando varios arrays
console.log('Juntando varios arrays');
let zero = 0;
let positieNumbers = [1,2,3];
let negativeNumbers = [-3,-2,-1];
let numbersConcat = negativeNumbers.concat(zero, positieNumbers);
console.log(numbersConcat);

//Funções de Iteração

function isEven(x) {
    console.log(x);
    return (x % 2 == 0);
}

let numbersIteration = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

console.log('Iterando com o método every');
console.log(numbersIteration.every(isEven));

// Iterando com o método some
console.log('Iterando com o método some');
console.log(numbersIteration.some(isEven));

//Iterando com forEach
console.log('Iterando com forEach');
numbersIteration.forEach(function(x) {
    console.log(x % 2 == 0);
})

// Usando map
console.log('Usando map');
let myMap = numbersIteration.map(isEven);
console.log(myMap);

// Usando filter
console.log('Usando filter');
let evenNumbers = numbersIteration.filter(isEven);
console.log(evenNumbers);

// Usando o método reduce
console.log('Usando o método reduce');
numbersIteration.reduce(function(previous, current, index) {
    console.log('current', current);
    return previous + current; 
});

/*

ECMAScript 6 e novas funcionalidades de array

@@iterator - Devolve um objeto iterador que contem os pares chave/valor do array. Pode ser chamado de modo síncrono para recuperar a chave/valor dos elementos do array.
copyWithin - Copia uma sequencia de valores do array para a posição de m índice de início.
entries - Devolve @@iterator que contém pares chave/valor
includes - devolve true caso um elemento seja encontrado no array e false cao contrário. Foi adicionado na ES7.
find - busca um elemento no array, dada uma condição desejada (função de callback) e devolve o elemento caso ele seja enconrado
findIndex - Busca um elemento no array, dada uma condição desejada (função de callback) e devolve o índice do elemento caso ele seja encontrado.
fill - Preenche o array com um valor estático.
from - Cria um ovo array a partir de um array existente.
keys - Devolve @@iterator que contém as chaves do array.
of - Cria um novo array a partir dos argmentos passados para o método.
values - Devolve @@iterator, que ontem os valores do array.

*/

//Iterando com forEach e funções de seta
console.log('Iterando com forEach e funções de seta');

numbersIteration.forEach(function (x) {
    console.log(x % 2 == 0);
});

numbersIteration.forEach( x => { console.log(x % 2 == 0)});

//Iterando com o laço for..of
console.log('Iterando com o laço for..of');
for(let n of numbersIteration) {
    console.log((n % 2 === 0) ? 'even' : 'odd');
}

//Usando o novo iterador da ES6 (@@iterator)
console.log('Usando o novo iterador da ES6 (@@iterator)');
//A classe array também tem uma propriedade chamada @@iterator, introduzida na ES6. Para usá-la, é necessário acessar a propriedade Symbol.iterator do array assim.
let iterator = numbersIteration[Symbol.iterator]();
console.log(iterator);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
/*
Então podemos chamar individualmente o método next do iterador para obter o próximo valor do array. 
Quando fizermos a iteração no array e não houver mais valores para iterar, o códig de iterador.next() devolvera undefined.
*/

//Métodos etries, keys e values de array.
console.log('Método etries.');
//Esse metodo devolve @@iterator que contém pres chave/valor.
let aEntryes = numbersIteration.entries();

console.log(aEntryes.next().value);
console.log(aEntryes.next().value);
console.log(aEntryes.next().value);

//Metodo keys
console.log('Método keys');
//Devolve @@iterator qe contém as chaves do array.
let akeys = numbersIteration.keys();
console.log(akeys.next());
console.log(akeys.next());
console.log(akeys.next());
console.log(akeys.next());
//Quando não houer mais valores para iterar,o código akeys.next() devolverá undefined para value e done como true.
//Se donetiver um valor igual a false, isso sifnifica que ainda há mais chaves no array para iterar.

//Métido values
console.log('Método values');
//O método values devolve o @@iterator que contem os valores do array.
let aValues = numbersIteration.values();
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());
console.log(aValues.next());

