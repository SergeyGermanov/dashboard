let colorFunc = (num) => {
  return num >= 0 && num <= 2
    ? "danger"
    : num >= 3 && num <= 4
    ? "warning"
    : "success";
};

let listComponent = (div, name, num, ind) => {
  const list = document.createElement("li");

  ind == 0 && list.classList.add("bg-info");
  list.classList.add("list-group-item");
  list.classList.add("d-flex");
  list.classList.add("justify-content-between");
  list.classList.add("align-items-start");

  list.innerHTML = `<div class="ms-2 me-auto">
                        <div class="fw-bold">${name}</div>
                      </div>
                      <span class="badge text-bg-${colorFunc(
                        num
                      )} rounded-pill">${num}</span>`;
  document.querySelector(`#${div}`).appendChild(list);
};

engineers
  .sort((a, b) => b.connectionsMonth - a.connectionsMonth)
  .map((el, ind) => {
    listComponent("monthTop", el.name, el.connectionsMonth, ind);
  });

engineers
  .sort((a, b) => b.connectionsQuarter - a.connectionsQuarter)
  .map((el, ind) => {
    listComponent("quarterTop", el.name, el.connectionsQuarter, ind);
  });