// let colorFunc = (num, div) => {
//     let multiplier = div === "monthTop" ? [2, 3, 5, 6, 7] : [7, 8, 15, 16, 21];
//     return num >= 0 && num <= multiplier[0]
//       ? "danger"
//       : num >= multiplier[1] && num <= multiplier[2]
//       ? "warning"
//       : num >= multiplier[3] && num <= multiplier[4]
//       ? "success"
//       : "dark";
//   };
  
  let devTasksComponent = (div, devDone, devPlanned, pointsDone, pointsPlanned) => {
    const devTask = document.querySelector(`#${div}`);
  
    // ind == 0 && list.classList.add("bg-info");
    // list.classList.add("list-group-item");
    // list.classList.add("d-flex");
    // list.classList.add("justify-content-between");
    // list.classList.add("align-items-start");
    devTask.innerHTML = "";
    devTask.innerHTML = `<div class="card-group">
    <div class="card text-bg-info">
     
      <div class="card-body">
        <h6 class="card-title">Dev Stories</h6>
        <p class="card-text"><strong>${devDone} (${devPlanned})</strong></p>
      </div>
    </div>

    <div class="card text-bg-light">
     
      <div class="card-body">
        <h6 class="card-title">Story Points</h6>
        <p class="card-text"><strong>${pointsDone} (${pointsPlanned})</strong></p>
      </div>
    </div>
  </div>`;
  };



