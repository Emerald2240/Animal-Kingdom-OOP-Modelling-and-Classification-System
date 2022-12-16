class Kingdom {
    #name
    constructor(name) {
        if (this.constructor === Kingdom) {
            throw new Error('This is an abstract class. You are forbidden to call it directly')
        } else {
            this.#name = name
        }
    }

    getName() {
        console.log(this.#name)
    }
}

class Phylum extends Kingdom {
    #name
    constructor(kingdomName, name) {
        super(kingdomName)
        if (this.constructor === Phylum) {
            throw new Error('This is an abstract class. You are forbidden to call it directly')
        } else {
            this.#name = name
        }
    }

    getName() {
        console.log(this.#name)
    }

    updateName(newName) {
        this.#name = newName;
    }
}

class SubPhylum extends Phylum {
    #name
    #description

    constructor(kingdomName, phylumName, name, description) {
        super(kingdomName, phylumName)
        this.#name = name
        this.#description = description
    }

    getName() {
        console.log(this.#name)
    }
    getDescription() {
        console.log(this.#description)
    }
    updateName(newName) {
        this.#name = newName
    }
    updateDescription(newDescription) {
        this.#description = newDescription
    }
}

class SuperClass extends SubPhylum {
    #name
    #description

    constructor(kingdomName, phylumName, subPhylumName, subPhylumDescription, name, description) {
        super(kingdomName, phylumName, subPhylumName, subPhylumDescription)
        this.#name = name
        this.#description = description
    }

    getName() {
        console.log(this.#name)
    }
    getDescription() {
        console.log(this.#description)
    }
    updateName(newName) {
        this.#name = newName
    }
    updateDescription(newDescription) {
        this.#description = newDescription
    }
}

class MainClass extends SuperClass {
    #name
    #description
    #warmBlooded
    #canFly
    #laysEggs
    #canSwim

    constructor(kingdomName, phylumName, subPhylumName, subPhylumDescription, superClassName, superClassDescription, name, description, warmBlooded, canFly, laysEggs, canSwim) {

        super(kingdomName, phylumName, subPhylumName, subPhylumDescription, superClassName, superClassDescription)

        this.#name = name
        this.#description = description
        this.#warmBlooded = warmBlooded
        this.#canFly = canFly
        this.#laysEggs = laysEggs
        this.#canSwim = canSwim
    }
}

class Animal extends MainClass {
    #name
    #collectionName
    #description

    constructor(kingdomName, phylumName, subPhylumName, subPhylumDescription, superClassName, superClassDescription, mainClassName, mainClassDescription, warmBlooded, canFly, laysEggs, canSwim, name, collectionName, description) {

        super(kingdomName, phylumName, subPhylumName, subPhylumDescription, superClassName, superClassDescription, mainClassName, mainClassDescription, warmBlooded, canFly, laysEggs, canSwim)

        this.#name = name
        this.#collectionName = name
        this.#description = description
    }

    getDescription(){
        console.log(this.#description)
    }
}

var blackMamba = new Animal('animalia', 'chordata', 'vertebrata', 'These animals have bones covering their head and brains', 'tetrapoda', 'Has very advanced bone structure', 'reptilia', 'reptiles with scaly skin and cold blooded', false, false, true, true, 'Black Mamba', 'quiver', 'Very powerful venom. Has black spot on its mouth.')
console.log(blackMamba);
blackMamba.getDescription()