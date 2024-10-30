const calculatetemp = () => {
    const numberTemp = document.getElementById('temp').value;      //taking refrence 

    const tempSelected = document.getElementById('temp_diff');    //taking refrence

    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const CelsiousToFahrenheit = (cel) =>{
        let fahrenheit = Math.round((cel * 9/5) + 32);
        return fahrenheit;
    }

    const FahrenheitToCelsious = (fehr) =>{
        let celsious = Math.round((fehr - 32) * 5/9);
        return celsious;
    }
    
    
    let result;

    if( valueTemp == 'cel')
    {
        result = CelsiousToFahrenheit(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result} °Fahrenheit`;
    }
    else
    {
        result = FahrenheitToCelsious(numberTemp);
        document.getElementById('resultContainer').innerHTML = `${result}°Celsius`;
    }
}