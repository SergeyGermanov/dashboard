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
    connectionsMonth: 0,
    connectionsQuarter: 0,
  },
  {
    name: "Mehul",
    connectionsMonth: 0,
    connectionsQuarter: 0,
  },
  {
    name: "Michael",
    connectionsMonth: 0,
    connectionsQuarter: 0,
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

let addDataToObj = (data1, data2) => {
  data1.find((o, i) => {
    if (o.name === "Andrew") {
      data1[i].connectionsMonth = data2.andrewMonth;
      data1[i].connectionsQuarter = data2.andrewQuarter;
    }
    if (o.name === "Chiraag") {
      data1[i].connectionsMonth = data2.chiraagMonth;
      data1[i].connectionsQuarter = data2.chiraagQuarter;
    }
    if (o.name === "Louis") {
      data1[i].connectionsMonth = data2.louisMonth;
      data1[i].connectionsQuarter = data2.louisMonth;
    }
    if (o.name === "Mehul") {
      data1[i].connectionsMonth = data2.mehulMonth;
      data1[i].connectionsQuarter = data2.mehulQuarter;
    }
    if (o.name === "Michael") {
      data1[i].connectionsMonth = data2.michaelMonth;
      data1[i].connectionsQuarter = data2.michaelQuarter;
    }
    if (o.name === "Rahul") {
      data1[i].connectionsMonth = data2.rahulMonth;
      data1[i].connectionsQuarter = data2.rahulQuarter;
    }
    if (o.name === "Shanice") {
      data1[i].connectionsMonth = data2.shaniceMonth;
      data1[i].connectionsQuarter = data2.shaniceQuarter;
    }
    if (o.name === "Savy") {
      data1[i].connectionsMonth = data2.savyMonth;
      data1[i].connectionsQuarter = data2.savyQuarter;
    }
    // return true; // stop searching
  });
};

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

let deliveredMonth = (arr) => {
  document.querySelector("#deliveredNumberMonth").textContent = arr.reduce(
    (a, b) => a + Number(b.connectionsMonth),
    0
  );
};

let deliveredNumberQuarter = (arr) => {
  document.querySelector("#deliveredNumberQuarter").textContent = arr.reduce(
    (a, b) => a + Number(b.connectionsQuarter),
    0
  );
};

let plannedNumberMonth = (num) => {
  document.querySelector("#plannedNumberMonth").textContent = num;
};

let plannedNumberQuarter = (num) => {
  document.querySelector("#plannedNumberQuarter").textContent = num;
};

let updatEquarterTitle = (text) => {
  document.querySelector("#quarterTitle").textContent = text;
};

let datesBetween = (date) => {
  let date1 = new Date();
  let date2 = new Date(date);

  let differenceInTime = date2.getTime() - date1.getTime();

  let differenceInDays = differenceInTime / (1000 * 3600 * 24);

  return differenceInDays < 0 ? 0 : differenceInDays.toFixed(0);
};

let endOfMonthDate = () => {
  let today = new Date();
  return new Date(today.getFullYear(), today.getMonth() + 1, 0);
};

dates(new Date());

let updateFunction = () => {
  // change date for a month
  dates(new Date());

  // update planned number for a month
  plannedNumberMonth(dataForm.plannedNumberMonth);

  // update planned number for a quarter
  plannedNumberQuarter(dataForm.plannedNumberQuarter);

  // count the dates between fir a quarter
  datesBetween(dataForm.endDateQuarter);

  // count the dates between till the end of the month
  datesBetween(endOfMonthDate());

  addDataToObj(engineers, dataForm);
  // add and sort month list

  // update the number delivered for a month
  deliveredMonth(engineers);
  // update the number delivered for a quarter
  deliveredNumberQuarter(engineers);

  // add and sort month list
  // engineers.map((el) => {
  //   el.connectionsMonth = 0;
  //   el.connectionsQuarter = 0;
  // });

  document.querySelector("#monthTop").innerHTML = "";
  engineers
    .sort((a, b) => b.connectionsMonth - a.connectionsMonth)
    .map((el, ind) => {
      listComponent("monthTop", el.name, el.connectionsMonth, ind);
    });

  // add and sort quarter list
  document.querySelector("#quarterTop").innerHTML = "";
  engineers
    .sort((a, b) => b.connectionsQuarter - a.connectionsQuarter)
    .map((el, ind) => {
      listComponent("quarterTop", el.name, el.connectionsQuarter, ind);
    });

  updatEquarterTitle(dataForm.quarterNumber);

  // updates the progressbars
  progressComponent(
    "progressbarQuarter",
    datesBetween(dataForm.endDateQuarter)
  );

  progressComponent("progressbarMonth", datesBetween(endOfMonthDate()));
};
