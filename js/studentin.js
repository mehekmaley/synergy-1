firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
  
      
      
      var email_id = firebase.auth().currentUser.displayName;
     
      
    
      if(user != null){
  
        
        document.getElementById("user").innerHTML = email_id;
  
      }
  
    } else {
      // No user is signed in.
  
     
      window.location.href = 'studentlogin.html';
  
    }
  });