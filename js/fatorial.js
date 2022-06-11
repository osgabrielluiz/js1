let bot = document.getElementById('bt')
bot.addEventListener('click', fat)

function fat(){
    
    let rr = document.getElementById('result')

    let num = document.getElementById('n1').value
    let x = num

    let resu= document.createElement('p')

    if(num > 0){
       
    for(i=1;i<num;i++){
        x=x*i
    }


    resu.innerHTML = `O fatorial de ${num} é ${x}.`        

    }

    else if (num == 0){

       resu.innerHTML = `O fatorial de 0 é 1.`

    }
 
    else{
       
    
       resu.innerHTML = `Não existe fatorial de numero negativo`

    }
  
    rr.appendChild(resu)


}
