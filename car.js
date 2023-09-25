class Car {
    
    #make = "make por def";
    #model = "model por def";

    setMake(make) {
        this.#make = make;
    }

    getMake() {
        return this.#make;
    }

    setModel(model) {
        this.#model = model;
    }

    getModel() {
        return this.#model;
    }
}

module.exports = Car;