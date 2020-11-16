import { firebase, firebaseui } from 'firebaseui-angular';

export const firebaseUiAuthConfig: firebaseui.auth.Config = {
  signInFlow: 'popup',
  signInOptions: [
    {
      requireDisplayName: false,
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
    },
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  tosUrl:
    'https://www.privacypolicies.com/live/f4986350-ea02-440b-b8aa-67cfe82b8b5b',
  privacyPolicyUrl:
    'https://www.privacypolicies.com/live/0c9a1901-9a9d-45ce-aeb0-548a53445fb8',
  credentialHelper: firebaseui.auth.CredentialHelper.ACCOUNT_CHOOSER_COM,
};
