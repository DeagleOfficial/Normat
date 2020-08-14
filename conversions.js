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

function decimal_func() {
    binary.value = parseInt(decimal.value).toString(2)
    octal.value = parseInt(decimal.value).toString(8)
    hexadecimal.value = parseInt(decimal.value).toString(16)
    if (decimal.value == "" && binary.value == "NaN" && octal.value == "NaN" && hexadecimal.value == "NaN") {
        binary.value = ""
        octal.value = ""
        hexadecimal.value = ""
    }
}

function binary_func() {
    var dec = Number.parseInt(binary.value, 2).toString(10)
    decimal.value = dec;
    octal.value = parseInt(decimal.value).toString(8)
    hexadecimal.value = parseInt(decimal.value).toString(16)
    if (decimal.value == "NaN" && binary.value == "" && octal.value == "NaN" && hexadecimal.value == "NaN") {
        decimal.value = ""
        octal.value = ""
        hexadecimal.value = ""
    }
}

function octal_func() {
    var dec = Number.parseInt(octal.value, 8).toString(10)
    decimal.value = dec;
    binary.value = parseInt(decimal.value).toString(2)
    hexadecimal.value = parseInt(decimal.value).toString(16)
    if (decimal.value == "NaN" && binary.value == "NaN" && octal.value == "" && hexadecimal.value == "NaN") {
        decimal.value = ""
        binary.value = ""
        hexadecimal.value = ""
    }
}

function hexadecimal_func() {
    var dec = Number.parseInt(hexadecimal.value, 16).toString(10)
    decimal.value = dec;
    binary.value = parseInt(decimal.value).toString(2)
    octal.value = parseInt(decimal.value).toString(8)
    if (decimal.value == "NaN" && binary.value == "NaN" && octal.value == "NaN" && hexadecimal.value == "") {
        decimal.value = ""
        binary.value = ""
        octal.value = ""
    }
}

decimal.addEventListener("input", decimal_func)
binary.addEventListener("input", binary_func)
octal.addEventListener("input", octal_func)
hexadecimal.addEventListener("input", hexadecimal_func)