const url = "https://darriola12.github.io/wdd230/chamber/data/members.json";

const companies = async () => {
  try {
    const response = await fetch(url);
    const companiesData = await response.json();
    displayInformation(companiesData.companies);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

function displayInformation(companies) {
  const container = document.querySelector(".container");
  companies.forEach(company => {
    const companySection = document.createElement("section");

    const companyNameHeading = document.createElement("h1");
    companyNameHeading.textContent = company.name;

   
    const phoneNumberHeading = document.createElement("h2");
    phoneNumberHeading.textContent = company.phoneNumber; 

    const addressHeading = document.createElement("h3");
    addressHeading.textContent = company.address; 

    const companyImg = document.createElement("img");
    companyImg.src = company.logoUrl;

    companySection.appendChild(companyNameHeading);
    companySection.appendChild(phoneNumberHeading); 
    companySection.appendChild(addressHeading); 
    companySection.appendChild(companyImg); 

    container.appendChild(companySection);
  });
}

companies();
