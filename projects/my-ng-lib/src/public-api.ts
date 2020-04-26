/*
 * Public API Surface of my-ng-lib
 */

// REMARQUE : les _exports.ts mentionnés ci-dessous,
//            comportent juste des regroupements d'exports par répertoire.
//            (Bien sûr, cette façon de faire, n'a rien d'obligatoire).



// Export juste ci-dessous, uniquement si l'on souhaite dans le code client
//  (typiquement celui de App...)
// utiliser directement le nom des classes(ou interfaces) définies dans
// './lib/components' et qu'on y a exportés.
// Car en effet, pour la partie composant pure, pas besoin car on fait plus bas un :
//  export * from './lib/general.module';
export * from './lib/components/_exports';



// Export de (ou interfaces) définies dans './lib/modeles'.
export * from './lib/modeles/_exports';


// Export de (ou interfaces) définies dans './lib/services'.
// Export que de classes(ou interfaces) de type Typescript,
// et NON de services Angular(pour ces derniers, ce sera dans le ngModule de notre lib).
export * from './lib/services/_exports';



// Export de notre ngModule (celui de la lib), (à importer dans le module client (par ex. AppModule)).
// Comme tout ngModule, il permet notamment l'export de :
//  Composants Angular de notre lib
//  Services Angular de notre lib (aucun ici)
//  ...
export * from './lib/general.module';
