

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

const users = [
    {
      name: 'John Doe',
      address: 'Street 1',
      phone: '0550505050'
    },
    {
      name: 'Sara Doe',
      address: 'Street 2',
      phone: '049595959'
    },
    {
      name: 'Peter Doe',
      address: 'Street 3',
      phone: '3454654646'
    }
  ]

  var options = {
    valueNames: [ 'name', 'address', 'phone' ]
  };
  
  var userList = new List('users', options);



