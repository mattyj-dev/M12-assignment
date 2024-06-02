// Practice with JavaScript OOP Concepts

// Within the provided script, create the following applications. Remember to
// comment out every application once you’ve finished with that step.

// STEP 1 Create two classes, one called Cat and another called Dog. Both
// classes should be created using constructor syntax. The Cat class should
// be created using a named declaration and the Dog class should be created
// using an anonymous declaration.

// // Named declaration for Cat class
// class Cat {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     // Method to make the cat meow
//     meow() {
//       console.log(`${this.name} says: Meow!`);
//     }
//   }
  
//   // Anonymous declaration for Dog class
//   const Dog = class {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     // Method to make the dog bark
//     bark() {
//       console.log(`${this.name} says: Woof!`);
//     }
//   };
  

// STEP 2 Create a new instance of the Cat class. Directly underneath, create
// a new instance of the Dog class.

// // Named declaration for Cat class
// class Cat {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     // Method to make the cat meow
//     meow() {
//       console.log(`${this.name} says: Meow!`);
//     }
//   }
  
//   // Anonymous declaration for Dog class
//   const Dog = class {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
  
//     // Method to make the dog bark
//     bark() {
//       console.log(`${this.name} says: Woof!`);
//     }
//   };
  
//   // Create a new instance of the Cat class
//   const fluffy = new Cat("Fluffy", 3);
//   console.log(fluffy); // Output: Cat { name: 'Fluffy', age: 3 }
  
//   // Create a new instance of the Dog class
//   const buddy = new Dog("Buddy", 5);
//   console.log(buddy); // Output: Dog { name: 'Buddy', age: 5 }
  

// STEP 3 Create a new class using constructor syntax called Animal. Create a
// method within the Animal class that when called, displays the message “The
// Animal has been created” in the console window.

// // Animal class using constructor syntax
// class Animal {
//     constructor() {
//       // Constructor
//     }
  
//     // Method to display a message when the animal is created
//     create() {
//       console.log("The Animal has been created");
//     }
//   }
  
//   // Create an instance of the Animal class
//   const animal = new Animal();
  
//   // Call the create method to display the message
//   animal.create(); // Output: The Animal has been created
  

// STEP 4 Now, replicate the above code but this time so that the class
// accepts an argument and that value is what is displayed in the console
// window. The message should be passed into the constructor at the moment
// that the Animal class is instantiated.

// // Animal class using constructor syntax
// class Animal {
//     constructor(message) {
//       this.message = message;
//     }
  
//     // Method to display the message when the animal is created
//     create() {
//       console.log(this.message);
//     }
//   }
  
//   // Create an instance of the Animal class with a message
//   const animal = new Animal("The Animal has been created");
  
//   // Call the create method to display the message
//   animal.create(); // Output: The Animal has been created
  

// STEP 5 Start over and now create a new class using constructor syntax
// called Animal. Define five properties within your class including
// properties type, breed, color, height, and length. These properties will
// be set within the object so you’ll need to pass in arguments into the
// function’s constructor, set the properties, and then pass in the actual
// values during the object’s instantiation.

// // Animal class using constructor syntax
// class Animal {
//     constructor(type, breed, color, height, length) {
//       this.type = type;
//       this.breed = breed;
//       this.color = color;
//       this.height = height;
//       this.length = length;
//     }
//   }
  
//   // Create an instance of the Animal class with specific properties
//   const myPet = new Animal("Dog", "Labrador Retriever", "Golden", "24 inches", "36 inches");
  
//   // Access and display the properties of the created Animal instance
//   console.log("Type:", myPet.type);
//   console.log("Breed:", myPet.breed);
//   console.log("Color:", myPet.color);
//   console.log("Height:", myPet.height);
//   console.log("Length:", myPet.length);
  

// STEP 6 Use a for-in loop to loop through and display all of the properties
// in the Animal class. You should see a total of 5 properties displayed in a
// list within the console window.

// // Animal class using constructor syntax
// class Animal {
//     constructor(type, breed, color, height, length) {
//       this.type = type;
//       this.breed = breed;
//       this.color = color;
//       this.height = height;
//       this.length = length;
//     }
//   }
  
//   // Create an instance of the Animal class with specific properties
//   const myPet = new Animal("Dog", "Labrador Retriever", "Golden", "24 inches", "36 inches");
  
//   // Loop through and display all properties of the Animal class
//   for (let property in myPet) {
//     console.log(property + ':', myPet[property]);
//   }
  

// STEP 7 Now, create a public method called speak. Within the speak method
// you will use a conditional to check the type of Animal being created. If
// it’s a dog, return “The <color> dog is barking!” If it’s a cat return “The
// <color> cat is meowing!” instead. Call that method after the Animal class
// has been instantiated.

// // Animal class using constructor syntax
// class Animal {
//     constructor(type, breed, color, height, length) {
//       this.type = type;
//       this.breed = breed;
//       this.color = color;
//       this.height = height;
//       this.length = length;
//     }
  
//     // Public method speak to display the animal's sound
//     speak() {
//       if (this.type === "Dog") {
//         return `The ${this.color} dog is barking!`;
//       } else if (this.type === "Cat") {
//         return `The ${this.color} cat is meowing!`;
//       } else {
//         return "Unknown animal type";
//       }
//     }
//   }
  
//   // Create an instance of the Animal class with specific properties
//   const myDog = new Animal("Dog", "Labrador Retriever", "Golden", "24 inches", "36 inches");
//   const myCat = new Animal("Cat", "Siamese", "White", "12 inches", "18 inches");
  
//   // Call the speak method for the created Animal instances
//   console.log(myDog.speak()); // Output: The Golden dog is barking!
//   console.log(myCat.speak()); // Output: The White cat is meowing!
  

// STEP 8 Now, convert all of your properties to private properties. Then,
// create a private method called checkType(). In this method you will check
// to see what the type is. If it’s dog, return dog, otherwise, return cat.
// Then, create a privileged method called speak that returns the value of
// the checkType() method. The console window should now display “The <animal
// type> has made a noise!”

// // Animal class using constructor syntax with private properties and methods
// class Animal {
//     #type;
//     #breed;
//     #color;
//     #height;
//     #length;
  
//     constructor(type, breed, color, height, length) {
//       this.#type = type;
//       this.#breed = breed;
//       this.#color = color;
//       this.#height = height;
//       this.#length = length;
//     }
  
//     // Private method to check the animal type
//     #checkType() {
//       if (this.#type === "Dog") {
//         return "dog";
//       } else {
//         return "cat";
//       }
//     }
  
//     // Privileged method speak to display the animal's sound
//     speak() {
//       const animalType = this.#checkType();
//       return `The ${animalType} has made a noise!`;
//     }
//   }
  
//   // Create an instance of the Animal class with specific properties
//   const myDog = new Animal("Dog", "Labrador Retriever", "Golden", "24 inches", "36 inches");
//   const myCat = new Animal("Cat", "Siamese", "White", "12 inches", "18 inches");
  
//   // Call the speak method for the created Animal instances
//   console.log(myDog.speak()); // Output: The dog has made a noise!
//   console.log(myCat.speak()); // Output: The cat has made a noise!
  

// STEP 9 Create your own String method called findWords that inherits from
// the native String Object. This method should find all instances of a
// specific word within a provided paragraph of text. It should then alert
// out to the user the number of time that word was found in the paragraph.
// Remember, you’ll need to add your method to the String object’s prototype.

// // Adding custom method findWords to String object's prototype
// String.prototype.findWords = function(word) {
//     // Regular expression to find all instances of the word in the paragraph
//     const regex = new RegExp('\\b' + word + '\\b', 'gi');
//     const matches = this.match(regex);
  
//     // Alert the user about the number of times the word was found
//     if (matches) {
//       alert(`The word "${word}" was found ${matches.length} times in the paragraph.`);
//     } else {
//       alert(`The word "${word}" was not found in the paragraph.`);
//     }
//   };
  
//   // Example paragraph of text
//   const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  
//   // Call the custom method findWords on the paragraph
//   paragraph.findWords("dolor"); // This should alert: "The word "dolor" was found 2 times in the paragraph."
  