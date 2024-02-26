document.addEventListener("DOMContentLoaded", () => 
    {
        const newDate =  new Date().getTime(); 
        document.querySelector(".visit-paragraph");
        localStorage.setItem("visitDate", new Date());

        const getDate = localStorage.getItem("visitDate");

        if()
        {
            let timeifference = newDate - parseInt(getDate);
            let daysdifference = Math.floor(timeifference / (1000 * 60 * 60 * 24)); 

            if ()

        }


        

    }))





