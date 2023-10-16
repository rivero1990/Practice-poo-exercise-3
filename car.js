class Car {
    #make = "def marca";
    #model = "def modelo";

    getMake() {
        return this.#make;
    }

    setMake(make) {
        this.#make = make;
    }

    getModel() {
        return this.#model;
    }

    setModel(model) {
        this.#model = model;
    }
}

module.exports = Car;


