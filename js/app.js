window.onload = () => {
        console.log('hello');
  //  wow js start
    new WOW().init();
    
    //wow js end
    
    btn = document.querySelectorAll('.item');

       for(let a =0; a<btn.length; a++){
        btn[a].addEventListener('click', function () { 
           let thisClass= this.lastElementChild.classList;
           let thisicon= this.firstElementChild.lastElementChild.classList;
            for(let x= 0; x<btn.length; x++){
                let checkclass = btn[x].lastElementChild.classList;
                let checkicon = btn[x].firstElementChild.lastElementChild.classList;
                if(checkclass.value == "list active" && thisClass.value !== "list active"){
                   checkclass.remove('active');
                }
                if(checkicon.value == "btn rotate" && thisicon.value !== "btn rotate"){
                   checkicon.remove('rotate');
                }
            }
            
            
            thisClass.toggle('active');
           thisicon.toggle('rotate');
            

       });
       }
        
}