import { createDynamicClass } from '../dynamicClassFactory';

describe('Dynamic Class Creation', () => {
    // Définissez une variable d'environnement pour le nom de la classe
    process.env.CLASS_NAME = 'Person';

    it('should create a class dynamically with the specified name', () => {
        const DynamicClass = createDynamicClass(process.env.CLASS_NAME || '');

        // Vérifiez que la classe a bien été créée
        expect(DynamicClass).toBeDefined();
        expect(DynamicClass.name).toBe('Person');

        // Créez une instance et vérifiez son type
        const instance = new DynamicClass();
        expect(instance instanceof DynamicClass).toBe(true);
    });

    it('should allow setting and getting properties dynamically', () => {
      const DynamicClass = createDynamicClass(process.env.CLASS_NAME || '');
        const person = new DynamicClass();


        // Ajoutez des propriétés dynamiquement
        (person as any).name = 'Alice';
        (person as any).age = 30;

        // Vérifiez les propriétés
        expect((person as any).name).toBe('Alice');
        expect((person as any).age).toBe(30);
    });

    it('should allow adding a method dynamically to an instance', () => {
      const DynamicClass = createDynamicClass(process.env.CLASS_NAME || '');
      const person = new DynamicClass();

      // Ajout d'une méthode à l'instance
      (person as any).sayHello = function () {
          return `Hello from ${this.constructor.name}`;
      };

      // Vérification que la méthode fonctionne
      expect((person as any).sayHello()).toBe('Hello from Person');
  });

  it('should allow adding a method dynamically to the prototype', () => {
    const DynamicClass = createDynamicClass(process.env.CLASS_NAME || '');

    // Ajout d'une méthode au prototype de la classe dynamique
    (DynamicClass.prototype as any).greet = function () {
        return `Greetings from ${this.constructor.name}`;
    };

    const instance1 = new DynamicClass();

    // Vérification que toutes les instances peuvent appeler la méthode
    expect((instance1 as any).greet()).toBe('Greetings from Person');
});

});
