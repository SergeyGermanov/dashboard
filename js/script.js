const dataObj = {
  qMonths: "",
  qLastDate: 0,
  qPlanned: 0,
  mPlanned: 0,
  dateNow: new Date(),
};

const engineers = [
  {
    name: "Andrew",
    connectionsMonth: 0,
    connectionsQuarter: 0,
  },
  {
    name: "Chiraag",
    connectionsMonth: 0,
    connectionsQuarter: 0,
  },
  {
    name: "Louis",
    connectionsMonth: 8,
    connectionsQuarter: 8,
  },
  {
    name: "Mehul",
    connectionsMonth: 3,
    connectionsQuarter: 18,
  },
  {
    name: "Michael",
    connectionsMonth: 1,
    connectionsQuarter: 1,
  },
  {
    name: "Rahul",
    connectionsMonth: 0,
    connectionsQuarter: 0,
  },
  {
    name: "Shanice",
    connectionsMonth: 0,
    connectionsQuarter: 0,
  },
  {
    name: "Savy",
    connectionsMonth: 0,
    connectionsQuarter: 0,
  },
];

let dates = (date) => {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let name = month[date.getMonth()] + " " + date.getFullYear();
  document.querySelector("#monthHeader").innerHTML = name;
};

dates(dataObj.dateNow);
