// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyAhnxmrt2j194687yjmawyTCYe5fU0HGOA",
    authDomain: "smart-pizza-1d507.firebaseapp.com",
    databaseURL: "https://smart-pizza-1d507.firebaseio.com",
    projectId: "smart-pizza-1d507",
    storageBucket: "smart-pizza-1d507.appspot.com",
    messagingSenderId: "259804953979",
    appId: "1:259804953979:web:29e64d9b4017a2bd6951de",
    measurementId: "G-G7PG5Q29SK",
  },
  mapbox: {
    accessToken:
      "pk.eyJ1IjoicGExLWthbHlhbi1zIiwiYSI6ImNrNXk3NGRycDA4NHgza3AzOXh5bzNvZ3cifQ.rmogNiV8aHqs3ishdVpvSw",
    //accessToken: 'pa1-kalyan-s.ck61plp03037l2oqrn4k52p24-2abc9'
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
