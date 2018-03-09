import * as firebase from 'firebase';

const prodConfig = {
  apiKey: "AIzaSyD5ZP0bTbPmT0Rf7CgfyTjVF_XhTpkh4X4",
  authDomain: "jobqueue-bdcc1.firebaseapp.com",
  databaseURL: "https://jobqueue-bdcc1.firebaseio.com",
  projectId: "jobqueue-bdcc1",
  storageBucket: "jobqueue-bdcc1.appspot.com",
  messagingSenderId: "1078652869551"
};

const devConfig = {
  apiKey: "AIzaSyBeUWgRHd3_ii_mKg6dsNkddQcb12H24S4",
  authDomain: "projectportal-b447c.firebaseapp.com",
  databaseURL: "https://projectportal-b447c.firebaseio.com",
  projectId: "projectportal-b447c",
  storageBucket: "projectportal-b447c.appspot.com",
  messagingSenderId: "170521496611"
};

const config = process.env.NODE_ENV === 'production'
  ? prodConfig
  : devConfig;

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
  db,
  auth,
};
