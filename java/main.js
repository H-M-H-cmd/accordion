var heading = document.getElementsByClassName("accordian"),
    para = document.getElementsByClassName("desc"),
    i;

for (i = 0 ; i < heading.length ; i += 1) {
    heading[i].addEventListener("click" , function() {
        this.classList.toggle("active");
        
        var desc = this.nextElementSibling;
        if(desc.style.maxHeight){
            desc.style.maxHeight = null ;  
        } else {
            desc.style.maxHeight = desc.scrollHeight + "px";
        }
    });
}