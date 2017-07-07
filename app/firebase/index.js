import firebase from 'firebase';


try {
  var config = {
      apiKey: "AIzaSyB0MEIjpwcFNFRMpJcCwgVdden0e0GPPj0",
      authDomain: "some-todo-app.firebaseapp.com",
      databaseURL: "https://some-todo-app.firebaseio.com",
      projectId: "some-todo-app",
      storageBucket: "some-todo-app.appspot.com",
      messagingSenderId: "646445906279"
    };

    firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
