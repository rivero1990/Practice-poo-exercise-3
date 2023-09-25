class Person {
    
    #name = "name por def";
    #age = 0;

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setAge(age) {
        this.#age = age;
    }

    getAge() {
        return this.#age;
    }
}

module.exports = Person;