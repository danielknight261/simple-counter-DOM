// count initially starts at 0
let count = 0;

//selcection of all the buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

//for each looked over the buttons, using event obkect and getting current target and class list
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if(count > 0) {
        value.style.color ="yellow"
    }
    if  (count < 0){
        value.style.color = "pink"
    }
    if (count === 0) {
        value.style.color ="black"
    }
    value.textContent = count;
  });
});
