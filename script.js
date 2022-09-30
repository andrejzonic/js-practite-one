
var entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

var row = 1;

function displayDetails() {
    var name = document.getElementById("Ime").value;
    var address = document.getElementById("Adresa").value;
    var phone = document.getElementById("Telefon").value;

    if(!name || !address || !phone) {
        alert("Molim vas popunite sva polja!");
        return;
    }

    var display = document.getElementById("display");

    var newRow = display.insertRow(row);

    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);

    cell1.innerHTML = name;
    cell2.innerHTML = address;
    cell3.innerHTML = phone;

    row++;



}