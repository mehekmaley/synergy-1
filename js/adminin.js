firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      
      var user = firebase.auth().currentUser;
      var email_id = user.email;
      
     
      
    
      if(user != null){
  
        
        document.getElementById("user").innerHTML = email_id;
  
      }
  
    } else {
      // No user is signed in.
  
     
      document.getElementById("login_div").style.display = "block";
  
    }
  });
