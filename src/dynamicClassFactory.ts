// Fonction pour créer une classe dynamiquement
export function createDynamicClass(className: string) {
  if (!className) {
      throw new Error('Le nom de la classe doit être spécifié.');
  }

  // Utilisation d'une fonction constructeur pour créer une nouvelle classe avec le nom spécifié
  const DynamicClass = class {
      constructor() {
          console.log(`${className} instance created`);
      }
  };

  // Définissez le nom de la classe (nécessaire pour la lisibilité)
  Object.defineProperty(DynamicClass, 'name', { value: className });
  return DynamicClass;
}
