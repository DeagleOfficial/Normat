var decimal = document.getElementById("decimal")
var binary = document.getElementById("binary")
var octal = document.getElementById("octal")
var hexadecimal = document.getElementById("hex")
var convert = document.getElementById("convert")
var clear = document.getElementById("clear")

clear.onclick = function() {
    decimal.value = ""
    binary.value = ""
    octal.value = ""
    hexadecimal.value = ""
}

convert.onclick = function() {
    if (decimal.value == "" && binary.value == "" && octal.value == "" && hexadecimal.value == "") 
        alert("Please enter a number")
    else {
        if (decimal.value != "") {
            binary.value = parseInt(decimal.value).toString(2)
            octal.value = parseInt(decimal.value).toString(8)
            hexadecimal.value = parseInt(decimal.value).toString(16)
            return
        }
        else if (binary.value != "") {
            var dec = Number.parseInt(binary.value, 2).toString(10)
            decimal.value = dec;
            octal.value = parseInt(decimal.value).toString(8)
            hexadecimal.value = parseInt(decimal.value).toString(16)
        }

        else if (octal.value != "") {
            var dec = Number.parseInt(octal.value, 8).toString(10)
            decimal.value = dec;
            binary.value = parseInt(decimal.value).toString(2)
            hexadecimal.value = parseInt(decimal.value).toString(16)
        }
        else if (hexadecimal.value != "") {
            var dec = Number.parseInt(hexadecimal.value, 16).toString(10)
            decimal.value = dec;
            binary.value = parseInt(decimal.value).toString(2)
            octal.value = parseInt(decimal.value).toString(8)
        }
        else return
    }
}

