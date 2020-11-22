console.log('Hello world')
a = 1
b = 2
console.log(a+b)


if (a>3){
    console.log('Mayor')
} else {
    console.log('Menor')
}


let i;
for (i = 0; i < 8; i++) { 
  console.log(i)

}


console.log(`My varaibles are ${a} - ${b}`);




function myFunction(a, b) {
  return a * b;             
}

const x = myFunction(4, 3); 

console.log(x)



const person = {
    name: 'Dani',
    age: 27,
    city: 'Medellin'
}

console.log(person.name)

person.name = 'Caro'
console.log(person.name)

person['company'] = 'Truora'

console.log(person)
