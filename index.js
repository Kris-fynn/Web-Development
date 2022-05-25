function loginn(){
    var logmail=sessionStorage.getItem('umail');
    var lopw=sessionStorage.getItem('pass1') ;
    var maibox=document.getElementById('umail').value;
    var passbox=document.getElementById('pass1').value;
    var location = '';
    if(maibox != logmail ){
        alert("Wrong Email") ;
this.location.href = location;
    }
    else if(passbox != lopw){
      alert("Wrong Password");
    }else{
        alert("Welcome " +sessionStorage.getItem('fname'));
        window.open("./assets/home.html");
    }