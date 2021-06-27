const filterButtons = document.querySelector("#filter-btns").children;
const filterButtonsTest = document.querySelector("#filter-btnss").children;
const items = document.querySelector(".portfolio-gallery").children;
const itemsTest = document.querySelector(".portfolio-gallery1").children;

for (let i = 0; i < filterButtons.length; i++) {
    filterButtons[i].addEventListener("click", function () {
        for (let j = 0; j < filterButtons.length; j++) {
            filterButtons[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")
        
        for (let k = 0; k < items.length; k++) {
            items[k].style.display = "none";
            if (target == items[k].getAttribute("data-id")) {
                items[k].style.display = "block";
                items[k].style.margin= "0 auto";
                
            }
            if (target == "all") {
                items[k].style.display = "block";
                items[k].style.margin= "0 auto";
            }
        }
   
    })
}

// for loops
for(let i=0;i<filterButtonsTest.length;i++){
    filterButtonsTest[i].addEventListener("click",function(){
        for (let j = 0; j < filterButtonsTest.length; j++) {
            filterButtonsTest[j].classList.remove("active")
        }
        this.classList.add("active");
        const target = this.getAttribute("data-target")
        for(let k=0;k<itemsTest.length;k++){
            itemsTest[k].style.display = "none";
            if (target == itemsTest[k].getAttribute("data-id")) {
                itemsTest[k].style.display = "block";
                itemsTest[k].style.margin= "0 auto";
                
            }
        }
    })
}
