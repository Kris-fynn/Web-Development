function FuntionRegister(){
    var fname = document.getElementById('fname');
    var umail = document.getElementById('umail');
    var cnumber = document.getElementById('cnumber');
    var imgs = document.getElementById('imgs');
    var pass1 = document.getElementById('pass1');



    //validation
   
   
        sessionStorage.setItem('fname', fname.value);
        sessionStorage.setItem('umail',umail.value);
        sessionStorage.setItem('cnumber', cnumber.value);
        sessionStorage.setItem('imgs' , imgs.value);
        sessionStorage.setItem('pass1' , pass1.value);
        alert('Your account has been created');
        window.open("index.html");
    }



    const img = document.getElementById('imgs');
    img.addEventListener("change", function(){
    var readimgfile= new FileReader();
        readimgfile.onload= function(){
            sessionStorage.setItem('imgs', readimgfile.result);
            //alert(readimgfile.result);
        }
    readimgfile.readAsDataURL(this.files[0]);
});
