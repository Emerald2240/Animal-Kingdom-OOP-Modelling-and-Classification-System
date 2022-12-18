# Animal Kingdom Modelling and Classification System

***

## Explanation
This code is an object oriented representation of Animal kingdom. The system's aim is to make classifications of animals easier through the numerous properties and attributes within.

## Code Structure
The code is structured in a manner of inherited classes, from Kingdom to the Animal itself.

* Kingdom (Animalia)
* Phylum (Chordata, Arthropoda...)
* Sub Phylum(Vertebrata...)
* Super Class(Arthropoda, Pisces...)
* Class (Amphibia, Aves, Mammalia, Reptilia)
* Animal (Moth, Salmon, Frog, Tortoise, Falcon, House Cat)

Animal inherits from Class, Class inherits from Super Class, Super Class inherits from Sub Phylum, Sub Phylum inherits from Phylum, Phylum inherits from kingdom.

All other classes asides Animal have very basic methods and properties like: name, description, getName, getDescription, updateName and updateDescription.

The Animal class holds the most specific methods and properties: name, collectiveName, scientificName, description with their corresponding get and update methods. 

The Animal class also has abstract methods that will be used and overriden by the daughter class Animal: canFly, warmBlooded, hasBackbone, laysEggs, canSwim. From this the specific animal and its features can be accurately modelled(Moth, Tortoise...)

## Applications Of OOP Principles(P.I.E.A)

### Polymorphism
The ability of a specific animal to have different attributes like being able to fly, blood temperature, laying eggs, having backbone and so on.

For example: A turtle is cold blooded and can swim whilst a cat is warm blooded and cannot swim. Both are accurately modelled but inherit from the same animal class.

### Inheritance
The core classes that all come together to form the animal class is done through inheritance. Cat inherits from Mammalia, Mammalia inherits from Tetrapoda, Tetrapoda inherits from Vertebrata and so on.

### Encapsulation
All core properties and attributes of each class are hidden and cannot be accessed outside. Instead methods are created that can be used to access the desired values in a safe, controlled manner.

### Abstraction
The base classes Kingdom, Phylum, Super Class and so on, cannot be called on their own. They have no meaning when on their own and so are best when combined with others.  For that reason, it is impossible to call these classes on their own

## Usage and Conclusion
The code can be used very easily by simply creating instances of the animals which were specified(Moth, Salmon, Frog, Tortoise, Falcon and House Cats).

Each of these animal classes already have what they need and only need to be supplied personalName, Gender and Age.

These animal classes already have all the features that apply to them as species and information about them can be read through the methods within.