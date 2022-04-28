 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase, ref, set, push, onChildAdded, query  } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDKdK4_z8MPN5q3jHCsnDg_PILW8McwdjM",
    authDomain: "thirtydaysboard.firebaseapp.com",
    projectId: "thirtydaysboard",
    storageBucket: "thirtydaysboard.appspot.com",
    messagingSenderId: "346232856745",
    appId: "1:346232856745:web:449a260d1a2d498e0309b8"
};

 // Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

const dbRef = ref(database ,"board/")

function writeUserData(subBoard, cont) {
    set(ref(database, 'board/' + Date.now()), {
        content: cont
    });
}
function q(qry){
    return document.querySelector(qry)
}
onChildAdded(query(dbRef), (snapshot) => {
    console.log("child added");
    console.log(snapshot.val()); // Logs newly added child
    q('.sibotak').innerHTML += snapshot.val()
});