import Vue from 'vue'
import Firebase from 'firebase'
import VueFire from 'vuefire'

Vue.use(VueFire);

const config = {
  apiKey: "AIzaSyDqHUU6-z_oKzKKhhuv6cRKutPSSQ_SZvo",
  authDomain: "adressbook-693f1.firebaseapp.com",
  databaseURL: "https://adressbook-693f1.firebaseio.com"
}

const FireBaseApp = Firebase.initializeApp(config);
const FireDB = FireBaseApp.database();
const firebase = function() {
  return {
    contacts: FireDB.ref('contacts')
  }
}
const isConnected = FireDB.ref('.info/connected');

// const db = [{
//   key: 'f0a9ccaee18a',
//   name: 'Tobias Cefalu',
//   email: 'tobias@gmail.com',
//   phone: '9278908738',
//   address: '239, North Lane, Street 11, New York',
//   fbHandle: ''
// }, {
//   key: '1047fb1e4cac',
//   name: 'Josh Julien',
//   email: 'josh@ecorp.com',
//   phone: '9117394928',
//   address: 'Apartment 20, Folk Street, Riverdale'
// }, {
//   key: '204af9a2309e',
//   name: 'Hugo Haverland',
//   email: 'hugo@yahoo.ca',
//   phone: '9618291928',
//   address: '90, Homermill, Off Street 97, Toronto'
// }];

export {
  firebase,
  isConnected
}
