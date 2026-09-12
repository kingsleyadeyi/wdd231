const membersURL = "data/members.json";

const members = document.querySelector("#members");
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

async function getMembers() {
    try {
        const response = await fetch(membersURL);
        const data = await response.json();
        displayMembers(data);
    } catch (error) {
        members.innerHTML = "<p>Unable to load business directory.</p>";
        console.error(error);
    }
}

function displayMembers(companies) {
    members.innerHTML = "";

    companies.forEach((company) => {
        const card = document.createElement("section");

        card.innerHTML = `
            <h2>${company.name}</h2>
            <img src="images/${company.image}" 
                 alt="${company.name} logo" 
                 loading="lazy">
            <p>${company.address}</p>
            <p>${company.phone}</p>
            <a href="${company.website}" target="_blank" rel="noopener">
                Visit Website
            </a>
            <p>Membership Level: ${company.membership}</p>
            <p>${company.description}</p>
        `;

        members.appendChild(card);
    });
}

gridButton.addEventListener("click", () => {
    members.classList.add("grid-view");
    members.classList.remove("list-view");
});

listButton.addEventListener("click", () => {
    members.classList.add("list-view");
    members.classList.remove("grid-view");
});

menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
});

document.querySelector("#currentyear").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = document.lastModified;

getMembers();