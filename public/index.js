var firebaseConfig = {
    apiKey: "AIzaSyBFvb9y1wpM2y7qcLs-_ajpddpHxueWXLI",
    authDomain: "authmail-ms.firebaseapp.com",
    databaseURL: "https://authmail-ms.firebaseio.com",
    projectId: "authmail-ms",
    storageBucket: "authmail-ms.appspot.com",
    messagingSenderId: "248164419815",
    appId: "1:248164419815:web:7f4b090bdae2ae7ec47a42",
    measurementId: "G-3Y46246VBV"
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();



loginGoogle=()=>{
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope('https://www.googleapis.com/auth/plus.login');

    firebase.auth().signInWithPopup(provider).then(function(result) {
        var token = result.credential.accessToken;
        var user = result.user;
        console.log(user); 

        document.getElementById('idmain').innerHTML = "<img width = 150 src = '" + user.photoURL + "'/>" + "<br>" +  user.displayName;
        
      }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;

        console.log(errorMessage);
      });
}

loginFacebook=()=>{
  var provider = new firebase.auth.FacebookAuthProvider();
  provider.addScope('user_birthday');

  firebase.auth().signInWithPopup(provider).then(function(result) {
    var token = result.credential.accessToken;
    var user = result.user;

    document.getElementById('idmain').innerHTML = "<img width = 150 src = '" + user.photoURL + "'/>" + "<br>" +  user.displayName;
    
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;

    console.log(errorMessage);

  });
}