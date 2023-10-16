const COLOR_PERSON = '\x1b[31m%s\x1b[0m'; 

class Person {
    #name = "def nombre";
    #age = 0;

    getAge() {
        return this.#age;
    }

    setAge(age) {
        this.#age = age;
    }

    getName() {
        return this.#name;
    }

    setName(name) {
        this.#name = name;
    }

    speak(msj) {
        console.log(COLOR_PERSON, msj);
    }

    interactsWithCar(car) {
        this.speak(this.getName() + " ages 2 years");
        this.speak(this.getName() + " buys a " + car.getMake() + " " + car.getModel());
        car.setMake("Sold");
        car.setModel("Sold");
        this.ages();
    }

    ages() {
        const newAge = this.getAge() + 2;
        this.setAge(newAge);
}

}

module.exports = Person;





