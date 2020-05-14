import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmGIo14fi1pg8ozsUvKJ5z9kaQ7QtRD6Y",
  authDomain: "planera-resan.firebaseapp.com",
  databaseURL: "https://planera-resan.firebaseio.com",
  projectId: "planera-resan",
  storageBucket: "planera-resan.appspot.com",
  messagingSenderId: "914390338399",
  appId: "1:914390338399:web:c2d8d5daba2d25d00d44ea"
};

firebase.initializeApp(firebaseConfig)


const messaging = firebase.messaging();

messaging.usePublicVapidKey("BLjSb5yieuU480eXfK-SUrWBSrptayFlZ-Pr6LNheACCETluaqSMiEkYfgcs7pznTyUmua-Ix-eDHVrJTRQKXWU"); // 1. Generate a new key pair

// Request Permission of Notifications
messaging.requestPermission().then(() => {
  console.log('Notification permission granted.');

  // Get Token
  messaging.getToken().then((token) => {
    console.log(token)
  })
}).catch((err) => {
  console.log('Unable to get permission to notify.', err);
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
