let nameEL = document.getElementById("name");
let subtitleEl = document.getElementById("subtitle");
let skillsDataEl = document.getElementById("skillsData");
let academicDetailsDataEl = document.getElementById("academicDetailsData");
let contactDataEl = document.getElementById("contactData");
let workDataEl = document.getElementById("workData");
let projectsDataEl = document.getElementById("projectsData");
let emailDataEl = document.getElementById("emailData");

let data = JSON.parse(localStorage.getItem("formData"));

const setData = () => {
  const {
    name,
    title,
    experience,
    academicDetails,
    skills,
    projects,
    contact,
    email,
  } = { ...data };
  nameEL.innerText = name;
  subtitleEl.innerText = title;
  skillsDataEl.innerText = skills;
  academicDetailsDataEl.innerText = academicDetails;
  contactDataEl.innerText = contact;
  workDataEl.innerText = experience;
  projectsDataEl.innerText = projects;
  emailDataEl.innerText = email;
};

setData();
