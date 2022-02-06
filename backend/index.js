// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-app.js";
import { getAuth ,GoogleAuthProvider, signInWithPopup, signOut } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-auth.js";
import { getFirestore, collection, doc, setDoc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.4.1/firebase-firestore.js"; 



var userData = {};


const firebaseConfig = {
  apiKey: "AIzaSyAI7lIVQQplmHfQp98Tie0q9XDLhbemF1M",
  authDomain: "hackviolet-bae66.firebaseapp.com",
  projectId: "hackviolet-bae66",
  storageBucket: "hackviolet-bae66.appspot.com",
  messagingSenderId: "145522342956",
  appId: "1:145522342956:web:8c5880501707a30181e589",
  measurementId: "G-D30297VZC1"
};

//
// Initialize Firebase, and the services we will use.
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider(app);
const db = getFirestore();




//
// Sign in and create new user data if it doesn't exit!
login.addEventListener('click',(e) => {
    signInPopUp();
});


signOutt.addEventListener('click',(e) => {
    signOutAccount();
});




function signInPopUp(){
    signInWithPopup(auth, provider)
    .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user.metadata.createdAt);
        console.log(user.metadata.lastLoginAt);
        if (Math.abs(parseInt(user.metadata.createdAt) - parseInt(user.metadata.lastLoginAt)) < 10) {
            
            (async () => {
                try {
    
                    let newData = {};
                    for (let i = 1; i <= 75; i++){
                        newData['notes' + i] = "";
                    }
                    
                    newData['questionsDone'] = '0'.repeat(75);
                    newData['email'] = user.email;
                    newData['leetcodeAccount'] = '';
                    newData['uid'] = user.uid;

                    userData = newData;

                    console.log(userData);
                    await setDoc(doc(db, "users", user.uid), newData);
    
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            })();
        }
        else {
            (async () => {
                const docRef = doc(db, "users", user.uid);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    console.log("Document data:", docSnap.data());
                    userData = docSnap;
                } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                }
            })();
        }
        // ...
    }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

        console.log(errorMessage);
    });
}




function signOutAccount(){
    signOut(auth).then(() => {
        // Sign-out successful.
        console.log("success!");
    }).catch((error)=> {
        // An error happened.
    });
}




function changeNotes(question, note, uid){
    (async () => {
        try {
            const docu = doc(db, "users", uid);
            let obj = {};
            obj[question] = note;
            await updateDoc(docu, obj);

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    })();
}






function changeQuestionsDone(uid, newQuestionsDone){
    (async () => {
        try {
            const docu = doc(db, "users", uid);
            let obj = {};
            obj["questionsDone"] = newQuestionsDone;
            await updateDoc(docu, obj);

        } catch (e) {
            console.error("Error adding document: ", e);
        }
    })();
}



function returnUserData(){
    return userData;
}




