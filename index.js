//#region Abstract Classes: Kingdom, Phylum, SubPhylum, SuperClass, MainClass and Animal

class Kingdom {
    #name
    constructor(name) {
        if (this.constructor === Kingdom) {
            throw new Error('This is an abstract class. You are forbidden to call it directly')
        } else {
            this.#name = name
        }
    }

    getKingdom() {
        return this.#name
    }

    updateKingdom(newName) {
        this.#name = newName
        return true
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

    getPhylum() {
        return this.#name
    }

    updatePhylum(newName) {
        this.#name = newName;
        return true
    }
}

class SubPhylum extends Phylum {
    #name

    constructor(kingdomName, phylumName, name) {
        super(kingdomName, phylumName)
        if (this.constructor === SubPhylum) {
            throw new Error('This is an abstract class. You are forbidden to call it directly')
        } else {
            this.#name = name
        }
    }

    getSubPhylum() {
        return this.#name
    }

    updateSubPhylum(newName) {
        this.#name = newName
        return true
    }

}

class SuperClass extends SubPhylum {
    #name

    constructor(kingdomName, phylumName, subPhylumName, name) {
        super(kingdomName, phylumName, subPhylumName)
        if (this.constructor === SuperClass) {
            throw new Error('This is an abstract class. You are forbidden to call it directly')
        } else {
            this.#name = name
        }
    }

    getSuperClass() {
        return (this.#name)
    }

    updateSuperClass(newName) {
        this.#name = newName
        return true
    }

}

class MainClass extends SuperClass {
    #name
    #description

    constructor(kingdomName, phylumName, subPhylumName, superClassName, name, description) {
        super(kingdomName, phylumName, subPhylumName, superClassName)
        if (this.constructor === MainClass) {
            throw new Error('This is an abstract class. You are forbidden to call it directly')
        } else {
            this.#name = name
            this.#description = description
        }
    }

    updateMainClass(newName) {
        this.#name = newName
        return true
    }

    updateMainClassDescription(newDescription) {
        this.#description = newDescription
        return true
    }

    getMainClass() {
        return this.#name
    }

    getMainClassDescription() {
        return this.#description
    }
}

class Animal extends MainClass {
    #name
    #collectiveName
    #scientificName
    #description

    constructor(kingdomName, phylumName, subPhylumName, superClassName, mainClassName, mainClassDescription, name, collectiveName, scientificName, description) {
        super(kingdomName, phylumName, subPhylumName, superClassName, mainClassName, mainClassDescription)
        if (this.constructor === MainClass) {
            throw new Error('This is an abstract class. You are forbidden to call it directly')
        } else {
            this.#name = name
            this.#collectiveName = collectiveName
            this.#scientificName = scientificName
            this.#description = description
        }
    }

    getAnimalDescription() {
        return (this.#description)
    }

    getAnimalName() {
        return this.#name
    }

    getAnimalCollectiveName() {
        return this.#collectiveName
    }

    getAnimalScientificName() {
        return this.#scientificName
    }

    updateAnimalScientificName(newScientificName) {
        this.#scientificName = newScientificName
        return true
    }

    updateAnimalName(newName) {
        this.#name = newName
        return true
    }

    updateAnimalCollectiveName(newCollective) {
        this.#collectiveName = newCollective
        return true
    }

    updateAnimalDescription(newDescription) {
        this.#description = newDescription
        return true
    }

    canFly() {
        throw new Error('This cannot be implemented')
    }

    warmBlooded() {
        throw new Error('This cannot be implemented')
    }

    hasBackbone() {
        throw new Error('This cannot be implemented')
    }

    laysEggs() {
        throw new Error('This cannot be implemented')
    }

    canSwim() {
        throw new Error('This cannot be implemented')
    }
}

//#endregion Abstract Classes end


class Moth extends Animal {
    #personalName
    #gender
    #age

    constructor(personalName, gender, age) {
        super(
            'Animalia',
            'Arthropoda',
            'Hexapoda',
            'Holometabola',
            'Insecta',
            'They are the largest group within the arthropod phylum. Insects have a chitinous exoskeleton, a three-part body (head, thorax and abdomen), three pairs of jointed legs, compound eyes and one pair of antennae',
            'Moth',
            'Eclipse',
            'Gynnidomorpha Alisman',
            'Moths are a paraphyletic group of insects that includes all members of the order Lepidoptera that are not butterflies, with moths making up the vast majority of the order. There are thought to be approximately 160,000 species of moth,[1] many of which have yet to be described. Most species of moth are nocturnal, but there are also crepuscular and diurnal species'
        )


        this.#personalName = personalName
        this.#gender = gender
        this.#age = age
    }

    getName() {
        return this.#personalName
    }

    getAge() {
        return this.#age
    }

    getGender() {
        return this.#gender
    }

    getFullDescription() {
        let fullDescription = `${this.getName()} is a ${this.getAge()} year old ${this.getGender()} ${this.getAnimalName()}.\nA ${this.getAnimalName()} is a member of Kingdom ${this.getKingdom()}, Phylum ${this.getPhylum()}, Sub Phylum ${this.getSubPhylum()}, Super Class ${this.getSuperClass()} and Class ${this.getMainClass()}.\n${this.getAnimalDescription()}. ${this.getMainClassDescription()}. The scientific name for ${this.getAnimalName()} is ${this.getAnimalScientificName()} and collectively they are known as an ${this.getAnimalCollectiveName()} of ${this.getAnimalName()}s.`
        return fullDescription
    }

    updateGender(newGender) {
        console.log('We dont do woke culture stuff here. Gender should not be changed.')
        return false
    }
    updateName(newName) {
        this.#personalName = newName
        return true
    }

    updateAge(newAge) {
        this.#age = newAge
        return true
    }

    //Overriden Methods
    canFly() {
        return true
    }

    warmBlooded() {
        return true
    }

    hasBackbone() {
        return false
    }

    canLayEggs() {
        return true
    }

    canSwim() {
        return false
    }


}

class Salmon extends Animal {
    #personalName
    #age
    #gender

    constructor(personalName, age, gender) {
        super(
            'Animalia',
            'Chordata',
            'Vertebrata',
            'Pisces',
            'Actinopterygil',
            'Actinopterygii members of which are known as ray-finned fishes, is a class of bony fish. They comprise over 50% of living vertebrate species',
            'Salmon',
            'Run',
            'Salmon Salar',
            'Salmon are important food fish and are intensively farmed in many parts of the world,[4] with Norway being the worlds largest producer of farmed salmon'
        )


        this.#personalName = personalName
        this.#gender = gender
        this.#age = age
    }

    getName() {
        return this.#personalName
    }

    getAge() {
        return this.#age
    }

    getFullDescription() {
        let fullDescription = `${this.getName()} is a ${this.getAge()} year old ${this.getGender()} ${this.getAnimalName()}.\nA ${this.getAnimalName()} is a member of Kingdom ${this.getKingdom()}, Phylum ${this.getPhylum()}, Sub Phylum ${this.getSubPhylum()}, Super Class ${this.getSuperClass()} and Class ${this.getMainClass()}.\n${this.getAnimalDescription()}. ${this.getMainClassDescription()}. The scientific name for ${this.getAnimalName()} is ${this.getAnimalScientificName()} and collectively they are known as a ${this.getAnimalCollectiveName()} of ${this.getAnimalName()}s.`
        return fullDescription
    }

    updateName(newName) {
        this.#personalName = newName
        return true
    }

    getGender() {
        return this.#gender
    }

    updateGender(newGender) {
        console.log('We dont do woke culture stuff here. Gender should not be changed.')
        return false
    }

    updateAge(newAge) {
        this.#age = newAge
        return true
    }

    canFly() {
        return false
    }

    warmBlooded() {
        return false
    }

    hasBackbone() {
        return true
    }

    canLayEggs() {
        return true
    }

    canSwim() {
        return true
    }


}

class Frog extends Animal {
    #personalName
    #age
    #gender

    constructor(personalName, age, gender) {
        super(
            'Animalia',
            'Chordata',
            'Vertebrata',
            'Tetrapoda',
            'Amphibia',
            'Amphibians are four-limbed and ectothermic vertebrates of the class Amphibia. All living amphibians belong to the group Lissamphibia. They inhabit a wide variety of habitats, with most species living within terrestrial, fossorial, arboreal or freshwater aquatic ecosystems',
            'Frog',
            'Army',
            'Anura',
            'A frog is any member of a diverse and largely carnivorous group of short-bodied, tailless amphibians'
        )

        this.#personalName = personalName
        this.#gender = gender
        this.#age = age
    }

    getFullDescription() {
        let fullDescription = `${this.getName()} is a ${this.getAge()} year old ${this.getGender()} ${this.getAnimalName()}.\nA ${this.getAnimalName()} is a member of Kingdom ${this.getKingdom()}, Phylum ${this.getPhylum()}, Sub Phylum ${this.getSubPhylum()}, Super Class ${this.getSuperClass()} and Class ${this.getMainClass()}.\n${this.getAnimalDescription()}. ${this.getMainClassDescription()}. The scientific name for ${this.getAnimalName()} is ${this.getAnimalScientificName()} and collectively they are known as an ${this.getAnimalCollectiveName()} of ${this.getAnimalName()}s.`
        return fullDescription
    }

    getName() {
        return this.#personalName
    }

    getAge() {
        return this.#age
    }

    getGender() {
        return this.#gender
    }

    updateGender(newGender) {
        console.log('We dont do woke culture stuff here. Gender should not be changed.')
        return false
    }

    updateName(newName) {
        this.#personalName = newName
        return true
    }

    updateAge(newAge) {
        this.#age = newAge
        return true
    }

    //Overriden Methods
    canFly() {
        return false
    }

    warmBlooded() {
        return false
    }

    hasBackbone() {
        return true
    }

    canLayEggs() {
        return true
    }

    canSwim() {
        return true
    }


}

class Tortoise extends Animal {
    #personalName
    #age
    #gender

    constructor(personalName, age, gender) {
        super(
            'Animalia',
            'Chordata',
            'Vertebrata',
            'Tetrapoda',
            'Reptilia',
            'Class reptilia, also known as reptiles have scaly skin and often slitted eyes, though some have round eyes. They are cold blooded and lay eggs',
            'Tortoise',
            'Creep',
            'Tetsunidae',
            'Tortoises are very slow and can live as long as over a 100 years'
        )


        this.#personalName = personalName
        this.#age = age
        this.#gender = gender
    }

    getName() {
        return this.#personalName
    }

    getAge() {
        return this.#age
    }

    getFullDescription() {
        let fullDescription = `${this.getName()} is a ${this.getAge()} year old ${this.getGender()} ${this.getAnimalName()}.\nA ${this.getAnimalName()} is a member of Kingdom ${this.getKingdom()}, Phylum ${this.getPhylum()}, Sub Phylum ${this.getSubPhylum()}, Super Class ${this.getSuperClass()} and Class ${this.getMainClass()}.\n${this.getAnimalDescription()}. ${this.getMainClassDescription()}. The scientific name for ${this.getAnimalName()} is ${this.getAnimalScientificName()} and collectively they are known as a ${this.getAnimalCollectiveName()} of ${this.getAnimalName()}s.`
        return fullDescription
    }

    updateName(newName) {
        this.#personalName = newName
        return true
    }

    getGender() {
        return this.#gender
    }

    updateGender(newGender) {
        console.log('We dont do woke culture stuff here. Gender should not be changed.')
        return false
    }

    updateAge(newAge) {
        this.#age = newAge
        return true
    }

    canFly() {
        return false
    }

    warmBlooded() {
        return false
    }

    hasBackbone() {
        return true
    }

    canLayEggs() {
        return true
    }

    canSwim() {
        return false
    }


}

class Falcon extends Animal {
    #personalName
    #age
    #gender

    constructor(personalName, age, gender) {
        super(
            'Animalia',
            'Chordata',
            'Vertebrata',
            'Tetrapoda',
            'Aves',
            'The Aves belong to the phylum Chordata of the animal kingdom. It has about 9,000 species. Aves are adapted to fly. All the birds come in the class Aves',
            'Falcon',
            'Cauldron',
            'Falconiformes',
            'Falcons are birds of prey in the genus Falco, which includes about 40 species. Falcons are widely distributed on all continents of the world except Antarctica'
        )


        this.#personalName = personalName
        this.#age = age
        this.#gender = gender
    }

    getName() {
        return this.#personalName
    }

    getAge() {
        return this.#age
    }

    getGender() {
        return this.#gender
    }

    getFullDescription() {
        let fullDescription = `${this.getName()} is a ${this.getAge()} year old ${this.getGender()} ${this.getAnimalName()}.\nA ${this.getAnimalName()} is a member of Kingdom ${this.getKingdom()}, Phylum ${this.getPhylum()}, Sub Phylum ${this.getSubPhylum()}, Super Class ${this.getSuperClass()} and Class ${this.getMainClass()}.\n${this.getAnimalDescription()}. ${this.getMainClassDescription()}. The scientific name for ${this.getAnimalName()} is ${this.getAnimalScientificName()} and collectively they are known as a ${this.getAnimalCollectiveName()} of ${this.getAnimalName()}s.`
        return fullDescription
    }

    updateGender(newGender) {
        console.log('We dont do woke culture stuff here. Gender should not be changed.')
        return false
    }

    updateName(newName) {
        this.#personalName = newName
        return true
    }

    updateAge(newAge) {
        this.#age = newAge
        return true
    }

    canFly() {
        return true
    }

    warmBlooded() {
        return true
    }

    hasBackbone() {
        return true
    }

    canLayEggs() {
        return true
    }

    canSwim() {
        return false
    }


}

class HouseCat extends Animal {
    #personalName
    #age
    #gender

    static totalNumberOfTortoises
    constructor(personalName, age, gender) {
        super(
            'Animalia',
            'Chordata',
            'Vertebrata',
            'Tetrapoda',
            'Mammalia',
            'Mammalia are characterized by the presence of mammary glands which in females produce milk for feeding (nursing) their young, a neocortex (a region of the brain), fur or hair, and three middle ear bones',
            'House Cat',
            'Clowder',
            'Felis Silvestris Catus',
            'The cat (Felis catus) is a domestic species of small carnivorous mammal. It is the only domesticated species in the family Felidae and is commonly referred to as the domestic cat or house cat to distinguish it from the wild members of the family'
        )


        this.#personalName = personalName
        this.#age = age
        this.#gender = gender
    }

    getName() {
        return this.#personalName
    }

    getAge() {
        return this.#age
    }
    getFullDescription() {
        let fullDescription = `${this.getName()} is a ${this.getAge()} year old ${this.getGender()} ${this.getAnimalName()}.\nA ${this.getAnimalName()} is a member of Kingdom ${this.getKingdom()}, Phylum ${this.getPhylum()}, Sub Phylum ${this.getSubPhylum()}, Super Class ${this.getSuperClass()} and Class ${this.getMainClass()}.\n${this.getAnimalDescription()}. ${this.getMainClassDescription()}. The scientific name for ${this.getAnimalName()} is ${this.getAnimalScientificName()} and collectively they are known as a ${this.getAnimalCollectiveName()} of ${this.getAnimalName()}s.`
        return fullDescription
    }

    updateName(newName) {
        this.#personalName = newName
        return true
    }

    getGender() {
        return this.#gender
    }

    updateGender(newGender) {
        console.log('We dont do woke culture stuff here. Gender should not be changed.')
        return false
    }

    updateAge(newAge) {
        this.#age = newAge
        return true
    }

    canFly() {
        return false
    }

    warmBlooded() {
        return true
    }

    hasBackbone() {
        return true
    }

    canLayEggs() {
        return false
    }

    canSwim() {
        return false
    }


}





const julia = new HouseCat('Julia', 21, 'Female');
// console.log(julia.getPhylum())
// console.log(julia.getSuperClass())

// console.log(julia.getKingdom())
console.log('')
console.log(julia.getFullDescription())
