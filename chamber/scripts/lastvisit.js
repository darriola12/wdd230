document.addEventListener("DOMContentLoaded", () => {
    const downcount = document.querySelector(".downcount");
    
    let timenow = new Date().getTime();
    var lastdate = localStorage.getItem("downcount");

    if(lastdate) {
        let timedifference = timenow - parseInt(lastdate);
        let daysdifference = Math.floor(timedifference / (1000 * 60 * 60 * 24));

        if(daysdifference === 0) {
            downcount.textContent = "Back so soon, Welcome!";
        } else if (daysdifference === 1) {
            downcount.textContent = "Your last visit was 1 day ago";
        } else {
            downcount.textContent = `Your last visit was ${daysdifference} days ago`;
        }
    } else {
        downcount.textContent = "Welcome! Let us know if you have any questions";
    }

    localStorage.setItem("downcount", timenow.toString()); 



});






