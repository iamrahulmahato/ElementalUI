const tempload = () => {
    let temp = document.querySelector('#temp');
    temp.innerHTML = '&#xf2cb'
    temp.style.color = 'white';

    setTimeout( () => {
        temp.innerHTML = '&#xf2ca'
        temp.style.color = 'rgb(255, 222, 38)';
    } ,1000);
    
    setTimeout( () => {
        temp.innerHTML = '&#xf2c9'
        temp.style.color = 'orange';
    } ,2000);
    
    setTimeout( () => {
        temp.innerHTML = '&#xf2c8'
        temp.style.color ='rgb(241, 98, 46)';
    } ,3000);
    
    setTimeout( () => {
        temp.innerHTML = '&#xf2c7'
        temp.style.color = 'red';
    } ,4000);
}

tempload();
setInterval(tempload , 5000);







// setTimeout( () => {
//     temp.innerHTML = '&#xf2ca'
// } ,1000);



// &#xf2c8;


