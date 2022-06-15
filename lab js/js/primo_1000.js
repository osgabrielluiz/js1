let resultado = document.getElementById('resultado')

var num, j, primo, div;

for (num = 2, j = 1000; num<j; num++)
{
    primo = true;
    for (div=2 ; div < num; div++)
    {
        if (num % div == 0)
        {
            primo = false;
            break;
        }
    }
    if(primo == true)
    {
     
        let para = document.createElement('p')
        
        para.innerHTML = num
        
        resultado.appendChild(para)
    }
}
