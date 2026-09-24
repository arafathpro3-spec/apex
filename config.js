// Config Firebase pour synchroniser Apex CRM entre plusieurs appareils (téléphone + ordinateur).
//
// Comment obtenir ces valeurs (gratuit, 5 minutes) :
// 1. Va sur https://console.firebase.google.com et crée un projet (gratuit).
// 2. Dans le projet : "Créer une application Web" (icône </>), donne-lui un nom, pas besoin d'hébergement Firebase.
// 3. Copie les valeurs affichées ("firebaseConfig") ci-dessous.
// 4. Dans le projet, va dans "Firestore Database" > "Créer une base de données" > démarre en "mode test"
//    (donne un accès ouvert temporaire — à restreindre plus tard avec des règles de sécurité).
// 5. Sauvegarde ce fichier et réuploade-le avec les autres sur ton hébergeur.
//
// Tant que ce fichier n'est pas rempli, l'application fonctionne uniquement en local (comme avant),
// sans erreur — le point en haut à droite du logo reste gris.

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN2Z5vBmHIQ6bv_vItRr4SoqqcuAa4cu0",
  authDomain: "apexcrm-d42f4.firebaseapp.com",
  databaseURL: "https://apexcrm-d42f4-default-rtdb.firebaseio.com",
  projectId: "apexcrm-d42f4",
  storageBucket: "apexcrm-d42f4.firebasestorage.app",
  messagingSenderId: "173561404683",
  appId: "1:173561404683:web:9d5cbe86e10fd03890d60e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);