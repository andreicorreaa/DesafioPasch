// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  maxInstallment: 3,  // a quantidade de vezes máxima que a dividas pode ser parceladas
  interestType: 1,    // tipo de juros ( 1 - simples, 2- composto )
  interestValue: 0.2, // valor do juros em porcentagem
  commission: 10      // Porcentagem de comissão da Paschoalotto sobre a divida          
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
