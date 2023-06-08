let colorFunc = (num, div) => {
  let multiplier = div === "monthTop" ? [2, 3, 5, 6, 7] : [7, 8, 15, 16, 21];
  return num >= 0 && num <= multiplier[0]
    ? "danger"
    : num >= multiplier[1] && num <= multiplier[2]
    ? "warning"
    : num >= multiplier[3] && num <= multiplier[4]
    ? "success"
    : "dark";
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
                        num,
                        div
                      )} rounded-pill">${num}</span>`;

  document.querySelector(`#${div}`).appendChild(list);
};
