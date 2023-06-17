let employees = [];

function generateID() {
  return employees.length + 1;
}

function addEmployee(name, profession, age) {
  const employee = {
    id: generateID(),
    name,
    profession,
    age
  };
  
  employees.push(employee);
  displayEmployeeData();
  showMessage('Success : Employee Added!', 'success-message');

  
}

function deleteEmployee(id) {
  employees = employees.filter(employee => employee.id !== id);
  displayEmployeeData();

}

function showMessage(message, className) {
  const messageDiv = document.getElementById('message');
  messageDiv.innerText = message;
  messageDiv.className = className;
  const employeesHeading = document.getElementById('employees');
  employeesHeading.insertAdjacentElement('afterend', messageDiv);
}

function displayEmployeeData() {

   
  const addedEmployeeContainer = document.querySelector('.AddedEmployee-container');
  addedEmployeeContainer.innerHTML = '';

  if (employees.length === 0) {
    addedEmployeeContainer.textContent = 'You have 0 Employees.';
    return;
  }

  employees.forEach(employee => {
    const addData = document.createElement('div');
    addData.classList.add('addData');

    const updateOnUi = document.createElement('div');
    updateOnUi.classList.add('updateOnUi');

    const idSpan = document.createElement('span');
    idSpan.textContent = ` ${employee.id}`;
    updateOnUi.appendChild(idSpan);

    const nameSpan = document.createElement('span');
    nameSpan.textContent = `Name: ${employee.name}`;
    updateOnUi.appendChild(nameSpan);

    const professionSpan = document.createElement('span');
    professionSpan.textContent = `Profession: ${employee.profession}`;
    updateOnUi.appendChild(professionSpan);

    const ageSpan = document.createElement('span');
    ageSpan.textContent = `Age: ${employee.age}`;
    updateOnUi.appendChild(ageSpan);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.id = 'delete-btn';
    deleteButton.addEventListener('click', () => deleteEmployee(employee.id));

    addData.appendChild(updateOnUi);
    addData.appendChild(deleteButton);
    addedEmployeeContainer.appendChild(addData);
  });
  const messageDiv = document.getElementById('message');
  const employeesHeading = document.getElementById('employees');
  employeesHeading.insertAdjacentElement('afterend', messageDiv);
}

document.getElementById('btn-user').addEventListener('click', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const profession = document.getElementById('profession').value.trim();
  const age = document.getElementById('age').value.trim();

  if (name === '' || profession === '' || age === '') {
    showMessage('Error : Please Make sure All the fields are filled before adding in an employee !', 'error-message');
  } else {
    addEmployee(name, profession, age);
    document.getElementById('name').value = '';
    document.getElementById('profession').value = '';
    document.getElementById('age').value = '';
  }
});
