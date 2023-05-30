let colorBar = (num, id) => {
  let numbersMonth = [10, 20];
  let numbersQuarter = [30, 60];
  let numbers = id == "progressbarMonth" ? numbersMonth : numbersQuarter;
  return num < numbers[0]
    ? "danger"
    : num >= numbers[0] && num < numbers[1]
    ? "warning"
    : "success";
};

let widthBarQuarter = (num, id) => {
  return id == "progressbarMonth" ? 3.3 * num : 1.11 * num;
};

let progressComponent = (div, num) => {
  const bar = document.createElement("div");

  bar.innerHTML = `<div class="progress" role="progressbar" style="height: 35px">
                        <div class="progress-bar bg-${colorBar(
                          num,
                          div
                        )}" style="width: ${widthBarQuarter(
    num,
    div
  )}%; font-size: large; font-weight: bold; color: black;">
                            ${num}
                        </div>
                    </div>`;
  document.querySelector(`#${div}`).appendChild(bar);
};

progressComponent("progressbarQuarter", 55);
progressComponent("progressbarMonth", 5);
