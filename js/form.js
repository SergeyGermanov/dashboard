let form = document.forms["dashboard-form"];
let dataForm = {};
let listOfValues = [
  "andrewMonth",
  "andrewQuarter",
  "chiraagMonth",
  "chiraagQuarter",
  "louisMonth",
  "louisQuarter",
  "mehulMonth",
  "mehulQuarter",
  "michaelMonth",
  "michaelQuarter",
  "rahulMonth",
  "rahulQuarter",
  "shaniceMonth",
  "shaniceQuarter",
  "savyMonth",
  "savyQuarter",
  "plannedNumberMonth",
  "plannedNumberQuarter",
  "endDateQuarter",
  "quarterNumber",
];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  listOfValues.map((el) => (dataForm[el] = form.elements[el].value));
  updateFunction();
  //   form.reset();
});
