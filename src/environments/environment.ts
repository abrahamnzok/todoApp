// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyAUqoocwzMddI69Ar_u0hobBWom8htVpcY',
    authDomain: 'todoapp-11d1b.firebaseapp.com',
    databaseURL: 'https://todoapp-11d1b.firebaseio.com',
    projectId: 'todoapp-11d1b',
    storageBucket: 'todoapp-11d1b.appspot.com',
    messagingSenderId: '275178686707'
  }
};
