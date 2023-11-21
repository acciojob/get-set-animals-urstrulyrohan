class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  // You can add a specific constructor for Dog if needed
  // constructor(breed) {
  //   super("Dog");
  //   this._breed = breed;
  // }

  bark() {
    console.log("woof");
  }

  // You can override the makeSound method if you want a specific sound for dogs
  makeSound() {
    console.log("woof");
  }
}

class Cat extends Animal {
  // You can add a specific constructor for Cat if needed
  // constructor(color) {
  //   super("Cat");
  //   this._color = color;
  // }

  purr() {
    console.log("purr");
  }

  // You can override the makeSound method if you want a specific sound for cats
  makeSound() {
    console.log("purr");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
