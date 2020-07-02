var selectedRow = null;

function onFormSubmit() {
  if (validate()) {
    var FormData = readFormData();
    if (selectedRow == null) insertNewData(FormData);
    else upDate(FormData);
    resetForm();
  }
}

function readFormData() {
  var FormData = {};
  FormData["mytext"] = document.getElementById("mytext").value;
  return FormData;
}

function insertNewData(data) {
  var table = document
    .getElementById("employeelist")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.lenght);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = '<input type="checkbox" unchecked>';
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.mytext;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = `<a onClick="onEdit(this)">Изменить</a>
                       <a onClick="onDelete(this)">Удалить</a>`;
  selectedRow = null;
}

function resetForm() {
  document.getElementById("mytext").value = "";
  selectedRow = null;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("mytext").value = selectedRow.cells[1].innerHTML;
}

function upDate(formData) {
  selectedRow.cells[1].innerHTML = formData.mytext;
}

function onDelete(td) {
  row = td.parentElement.parentElement;
  document.getElementById("employeelist").deleteRow(row.rowIndex);
  resetForm();
}

function validate() {
  isValid = true;
  if (document.getElementById("mytext").value == "") {
    isValid = false;
    document.getElementById("mytextValidationError").classList.remove("hide");
  } else {
    isValid = true;
    if (
      !document
        .getElementById("mytextValidationError")
        .classList.contains("hide")
    )
      document.getElementById("mytextValidationError").classList.add("hide");
  }
  return isValid;
}
/*
function EditOnClick() {
  var ths = document.querySelectorAll("th");

  for (var i = 0; i < ths.length; i++) {
    ths[i].addEventListener("click", function () {
      var input = document.createElement("input");
      input.value = this.innerHTML;
      this.innerHTML = "";
      this.appendChild(input);
    });
  }
}*/
