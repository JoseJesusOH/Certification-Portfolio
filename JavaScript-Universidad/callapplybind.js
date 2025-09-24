/*

const person = {
    name: "José",
    greet: function(greeting) {
        console.log(`${greeting}, soy ${this.name}`);
    }
};

// Crear una nueva función con this ligado a person
const greetJosé = person.greet.bind(person);

greetJosé("Hola"); // Output: "Hola, soy José"

const person2 = {
    name: "Ana"
};

function sayHello(greeting, punctuation) {
    console.log(`${greeting}, soy ${this.name}${punctuation}`);
}

sayHello.call(person2, "Hola", "!"); 

sayHello.apply(person2, ["Hola", "!"]); 


const user = { name: "Carlos" };

function greet(message, emoji) {
  console.log(`${message}, ${this.name} ${emoji}`);
}

// bind → crea función nueva
const boundGreet = greet.bind(user, "Hola");
boundGreet("👋"); // Hola, Carlos 👋

// call → ejecuta inmediatamente
greet.call(user, "Hola", "👋"); // Hola, Carlos 👋

// apply → ejecuta inmediatamente con array
greet.apply(user, ["Hola", "👋"]); // Hola, Carlos 👋
*/

/*
const person1 = { name: "Ana" };
const person2 = { name: "Luis" };

function introduce() {
    console.log(`Hola, soy ${this.name}`);
}

introduce.call(person1); // Hola, soy Ana
introduce.call(person2); // Hola, soy Luis
introduce(); // Hola, soy undefined (en strict mode) o window.name si no estás en strict mode
const introduceAna = introduce.bind(person1);
const introduceLuis = introduce.bind(person2);

introduceAna(); // Hola, soy Ana
introduceLuis(); // Hola, soy Luis
*/

const person1 = { name: "Ana" };
const person2 = { name: "Luis" };

function introduce(greeting, punctuation) {
    console.log(`${greeting}, soy ${this.name}${punctuation}`);
}

// Usando apply
introduce.apply(person1, ["Hola", "!"]); // Hola, soy Ana!
introduce.apply(person2, ["Buenas tardes", "🙂"]); // Buenas tardes, soy Luis 🙂


const promedios = [9.5, 10.2, 8.7, 10.8];

// Math.max no acepta arrays, pero con apply sí:
const mejorPromedio = Math.max.apply(null, promedios);
console.log('El mejor promedio es', mejorPromedio); // 10.8