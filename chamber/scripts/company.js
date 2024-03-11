const url = "https://darriola12.github.io/wdd230/chamber/data/members.json";

const companies = async () => {

    const response = await fetch(url);
    const companiesData = await response.json();
    displayInformation(companiesData.companies);
  
}

function displayInformation(info) {
  const container = document.querySelector(".container2");
  info.forEach(company => {
    const companySection = document.createElement("section");

    
    // se cambio className por classList
    companySection.classList = "sectionDirectory";  

    const companyNameHeading = document.createElement("h1");
    companyNameHeading.classList = "headingDis";

    const newA = document.createElement("a");
    newA.href = company.websiteURLs;
    newA.textContent = company.name;  
    companyNameHeading.appendChild(newA);

   
    const phoneNumberHeading = document.createElement("h2");
    phoneNumberHeading.textContent = company.phoneNumber; 
    phoneNumberHeading.classList = "info";

    const addressHeading = document.createElement("h3");
    addressHeading.textContent = company.addresses; 
    addressHeading.classList = "info";


    const website = document.createElement("p");
    // website.textContent = company.websiteURLs;
    website.classList = "info";

    const newA2 = document.createElement("a");
    newA2.href = company.websiteURLs;
    newA2.textContent = company.websiteURLs;
    website.appendChild(newA2);


    const companyImg = document.createElement("img");
    companyImg.className = "imgDirectory"
    companyImg.setAttribute("src", company.image);
    companyImg.setAttribute("alt", company.name);
    companyImg.setAttribute("loading", "lazy");
    companyImg.setAttribute("width", "140");
    companyImg.setAttribute("height", "140");


    

    


    companySection.appendChild(companyNameHeading);
    companySection.appendChild(companyImg);
    companySection.appendChild(addressHeading); 
    companySection.appendChild(phoneNumberHeading); 
    companySection.appendChild(website);
    container.appendChild(companySection);
  });
}

companies();
