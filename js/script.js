

function validateForm(inputan){   
    var inputan = document.forms["kalkulator"]["inputan"].value;
    var outputan = document.getElementById("outputan");
    var cara = document.getElementById("cara"); 
    if (inputan == "") {
        alert("input tidak boleh kosong");
    }else{
        if (labelInputan.textContent == "Celcius (°C) :"){
            celciusToFahrenheit(inputan,outputan,cara);
        }else{
            fahrenheitToCelcius(inputan,outputan,cara);
        }
    }
    return false;
}

function celciusToFahrenheit(inputan,outputan,cara){
    var hasil = inputan * (9/5) + 32;
    outputan.innerText = hasil + "\u00b0F";
    cara.innerText = "(" + inputan + "\u00b0C * 9/5) + 32 = " + hasil; 
    return false;
}
function fahrenheitToCelcius(inputan,outputan,cara){
    var hasil = 5/9 * (inputan - 32);
    outputan.innerText = hasil + "\u00b0C";
    cara.innerText = "5/9 * (" + inputan + "\u00b0F - 32) = " + hasil; 
    return false;
}

function resetAll(){
    outputan.innerText = "";
    cara.innerText = "";
}

function reverse(){
    var labelInputan = document.getElementById("labelInputan");
    var labelOutputan = document.getElementById("labelOutputan");
    var caraKonversi = document.getElementById("caraKonversi");
    if (labelInputan.textContent == "Celcius (°C) :"){

        labelInputan.textContent = "Fahrenheit (°F) :";
        labelOutputan.textContent = "Celcius (°C) :";
        caraKonversi.innerHTML = "<h3><b>Cara Konversi Dari Fahrenheit (&deg;F) ke Celcius (&deg;C)</b></h3><hr><p>Suhu <b><i>S</i></b> dalam derajat Celcius (&deg;C) sama dengan 5/9 kali suhu <b><i>S</i></b> dalam dearajat Fahrenheit (&deg;F) kurang 32.</p> <p><b><i>S</i><sub>(&deg;C)</sub> =  5/9 (<i>S</i><sub>(&deg;F)</sub> - 32)</b></p> atau <p><b><i>S</i><sub>(&deg;C)</sub> = 0.55 (<i>S</i><sub>(&deg;F)</sub> - 32)</b></p>";
    }else{
        labelInputan.textContent = "Celcius (°C) :";
        labelOutputan.textContent = "Fahrenheit (°F) :";
        caraKonversi.innerHTML = "<h3><b>Cara Konversi Dari Celcius (&deg;C) ke Fahrenheit (&deg;F)</b></h3><hr><p>Suhu <b><i>S</i></b> dalam derajat Fahrenheit (&deg;F) sama dengan suhu <b><i>S</i></b> dalam dearajat Celcius (&deg;C) kali 9/5 tambah 32.</p> <p><b><i>S</i><sub>(&deg;F)</sub> = (<i>S</i><sub>(&deg;C)</sub> x 9/5) + 32</b></p> atau <p><b><i>S</i><sub>(&deg;F)</sub> = (<i>S</i><sub>(&deg;C)</sub> x 1.8) + 32</b></p>";
    }
    return false;
}




