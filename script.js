

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


const users.list = document.getElementById('usersList');
// for (i = 0; i < usersList.length; i++) {
// some code
//}

let usersHtml = '';

function renderUsersTable () {

  for (let user of users) {
    usersHtml += `<tr>
    <td>${user.id}</td>
    <td>${user.first_name}</td>
      <td>${user.last_name}</td>
      <td>${user.handle}</td>
    </tr>`
  }
  usersList.innerHTML = usersHtml;
};

renderUsersTable();
// Add new user to the table
// Get value from input java script
// Call a function on a button click
// Rerender users table

function addNewUser(e) {
  e.preventDefault()
   const name = document.getElementById('Ime').value;
   const address = document.getElementById('Adresa').value;
   const phone = document.getElementById('Telefon').value;

   const data = {
    id: 3,
    Name: Ime,
      address: adresa,
      phone: telefon
    }

    users.push(data);
  console.log('data', users)


renderUsersTable()

// users.push(
 //    {
 //      id: 4,
 //      Ime: 'Andrej',
 //      adresa: 'ulica 12',
 //      handle: '55522258'
 //    }
 //  )
  }


<table id="table">
    <tr>
      <th >John Doe</th>
      <th>Street 1</th>
      <th >0550505050</th>
    </tr>
    <tr>
        <td id="Ime"></td>
        <td id="Adresa"></td>
        <td id="Telefon"></td>
    </tr>

    <tr>
      <th >Sara Doe</th>
      <th>Street 2</th>
      <th >049595959</th>
    </tr>
    <tr>
        <td id="Ime"></td>
        <td id="Adresa"></td>
        <td id="Telefon"></td>
    </tr>

    <tr>
      <th >Peter Doe</th>
      <th>Street 3</th>
      <th >3454654646</th>
    </tr>
    <tr>
        <td id="Ime"></td>
        <td id="Adresa"></td>
        <td id="Telefon"></td>
    </tr>
</table>