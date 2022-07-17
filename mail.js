const firebaseConfig = {
    apiKey: "AIzaSyAiutzYcIOALbeHH45Z9TnSyppheWxC_68",
    authDomain: "reservations-a0572.firebaseapp.com",
    databaseURL: "https://reservations-a0572-default-rtdb.firebaseio.com",
    projectId: "reservations-a0572",
    storageBucket: "reservations-a0572.appspot.com",
    messagingSenderId: "64586206975",
    appId: "1:64586206975:web:5bf44446208951698906ca"
  };

  firebase.initializeApp(firebaseConfig);

  var contactFormDB = firebase.database().ref("RESERVATIONS");

  document.getElementById("container").addEventListener("submit", submitForm);

  function submitForm(e) {
    e.preventDefault();

    var name     = getElementVal("name");
    var phone    = getElementVal("phone");
    var emailid  = getElementVal("email");
    var people   = getElementVal("f1");
    var date     = getElementVal("date");
    var time     = getElementVal("time");

    saveMessages(name,phone,emailid,people,date,time);

    // console.log(name,phone,emailid,people,date,time);

      //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("container").reset();
}

const saveMessages = (name,phone,emailid,people,date,time) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      phone: phone,
      emailid: emailid,
      people: people,
      date: date,
      time: time,
    });
  };

const getElementVal = (id) => {
    return document.getElementById(id).value;
  };