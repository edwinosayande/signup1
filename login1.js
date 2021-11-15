const firebaseConfig = {
    apiKey: "AIzaSyB8xSyhG2hh4WXqni7fgk42ftsoGzcVVRs",
    authDomain: "daprince-90bad.firebaseapp.com",
    projectId: "daprince-90bad",
    storageBucket: "daprince-90bad.appspot.com",
    messagingSenderId: "1065920153386",
    appId: "1:1065920153386:web:ed15ee0f31e817bd8ac053",
    measurementId: "G-CSYZ1FPCMT"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth.Auth.Persistence.LOCAL;




$('#sign').click(function() {
    let name = $('#name').val();
    let phone_number = $('#phone_number').val();
    let username = $('#username').val();
    let password = $('#password').val();
    

    if(name != "" && phone_number !="" && username != "" && password != ""){

        let result = firebase.auth().signInWithUsernameAndPassword(name, phone_number, username, password);

        result.catch(function(error) {
            let errorCode = error.code;
            let errorMessage = error.message;

            console.log(errorCode);
            console.log(errorMessage);

            window.alert('message: ' + errorMessage);
        })

    }else{
        window.alert('please fill out the field.')
    }
})