// let inp = document.getElementsByClassName('input').value;
// let string;
// if(inp=="undefined")
// {
//     string = "";
// }
// else
// {

//     string = inp.innerText;
// }
let string='';
let buttons = document.querySelectorAll('.box');
Array.from(buttons).forEach((box) => {
    box.addEventListener('click', (e) => {
        console.log(e.target);
        if (e.target.innerHTML == "=") {
            let tempval= eval(string);
            if(!Number.isInteger(tempval))
            {
                tempval = tempval.toFixed(2);
            }
            // console.log(typeof(tempval));
            string = tempval.toString();
            document.querySelector('.input').value = string;
        }
        else if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('.input').value = string;
        }
        else if (e.target.innerHTML == 'C' && e.target.innerHTML != 'AC') {
            string = string.substring(0, string.length - 1);
            document.querySelector('.input').value = string;
        }
        else if(e.target.innerHTML == 'D/N' || e.target.innerHTML=='D'|| e.target.innerHTML=='N')
        {
            
        }
        else {
            string = string + e.target.innerHTML;
            document.querySelector('.input').value = string;
        }
        // console.log(string)
    })
})


let i=0;
let r = document.querySelector(':root');
function changeTheme()
{
    i++;
    let c = document.getElementById('daynnight');
    if(i%2 != 0)
    {
        r.style.setProperty('--cal_back','#fffffa');
        r.style.setProperty('--button1','#2b2b2a');
        r.style.setProperty('--button2','#0c120c');
        r.style.setProperty('--branding','#6b9ac4');
        r.style.setProperty('--bcolor','#383d3b');
        c.innerText = 'D';
    }
    else
    {
        r.style.setProperty('--cal_back','#312f2f');
        r.style.setProperty('--button1','#f1faee');
        r.style.setProperty('--button2','#cdedf0');
        r.style.setProperty('--branding','#a8dadc');
        r.style.setProperty('--bcolor','white');
        c.innerText = 'N';
    }
}


// function rgb()
// {
//     r.style.setProperty('--cal_back','red');
//     r.style.setProperty('--button1','green');
//     r.style.setProperty('--button2','blue');
//     r.style.setProperty('--branding','white');
//     r.style.setProperty('--bcolor','black');
//     c.innerText = 'RGB';
// }
// function normal()
// {
//     r.style.setProperty('--cal_back','#312f2f');
//     r.style.setProperty('--button1','#f1faee');
//     r.style.setProperty('--button2','#cdedf0');
//     r.style.setProperty('--branding','#a8dadc');
//     r.style.setProperty('--bcolor','white'); 
// }