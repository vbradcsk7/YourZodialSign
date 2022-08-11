document.getElementById("myButton").onclick = function(){
    var mynombre = document.getElementById("myText").value;
    var eldia = document.getElementById("dia").value;
    var elmes = document.getElementById("mes").value;



    console.log("hola",mynombre, "Su día de nacimiento es el",eldia, "en el mes ",elmes);
    


    if(eldia<=31&&elmes<=12){
        if((eldia>=21&&elmes==3)||(eldia<=20&&elmes==4)){            
           alert("Ud. es aries")
        }
    
        if((eldia>=24&&elmes==9)||(eldia<=23&&elmes==10)){
           alert("Ud. es libra")
        }
        if((eldia>=21&&elmes==4)||(eldia<=21&&elmes==5)){
           alert("Ud. es Tauro")
        }
        if((eldia>=24&&elmes==10)||(eldia<=22&&elmes==11)){
           alert("Ud. es Escorpio")
        }
        if((eldia>=22&&elmes==5)||(eldia<=21&&elmes==6)){
           alert("Ud. es Géminis")
        }
        if((eldia>=23&&elmes==11)||(eldia<=21&&elmes==12)){
           alert("Ud. es Sagitario")
        }
        if((eldia>=21&&elmes==6)||(eldia<=23&&elmes==7)){
           alert("Ud. es cancer")
        }
    
        if((eldia>=22&&elmes==12)||(eldia<=20&&elmes==1)){
           alert("Ud. es Capricornio")
        }
    
        if((eldia>=24&&elmes==7)||(eldia<=23&&elmes==8)){
           alert("Ud. es Leo")
        }
    
        if((eldia>=21&&elmes==1)||(eldia<=19&&elmes==2)){
           alert("Ud. es Acuario")
        }
        if((eldia>=24&&elmes==8)||(eldia<=23&&elmes==9)){
           alert("Ud. es Virgo")
        }
    
        if((eldia>=20&&elmes==2)||(eldia<=20&&elmes==3)){
           alert("Ud. es Piscis")
        }
    
    }else{
       alert("digite algo valido...")
    }

    

    
}

