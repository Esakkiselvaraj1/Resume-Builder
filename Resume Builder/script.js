"use strict";
const nameEl = document.getElementById("name");
const profileEl = document.getElementById("Profile");
const ExperienceEl = document.getElementById("Experience");
const QualificationsEl = document.getElementById(" Qualifications");
const SkillsEl = document.getElementById("Skills");
const ProjectsEl = document.getElementById("Projects");
const ContactEl = document.getElementById("contact");
const emailEl = document.getElementById("email");
const formButtonEl = document.querySelector(".form-btn");

let formData;

const init = () => {
  let data = JSON.parse(localStorage.getItem("formData"));
  if (data !== null) {
    setData(data);
    return;
  }
};

formButtonEl.addEventListener("click", () => {
  formData = {
    name: nameEl.value,
    profile: profileEl.value,
    experience: ExperienceEl.value,
    Qualifications: QualificationsEl.value,
    skills: SkillsEl.value,
    projects: ProjectsEl.value,
    contact: ContactEl.value,
    email: emailEl.value,
  };
  localStorage.setItem("formData", formData);
  localStorage.setItem("formData", JSON.stringify(formData));
});

const setData = (data) => {
  const {
    name,
    profile,
    experience,
    Qualifications,
    skills,
    projects,
    contact,
    email,
  } = { ...data };

  nameEl.value = name;
  profileEl.value = profile;
  ExperienceEl.value = experience;
  QualificationsEl.value = academicDetails;
  SkillsEl.value = skills;
  ProjectsEl.value = projects;
  ContactEl.value = contact;
  emailEl.value = email;
};

const Delete = () => {
  localStorage.clear();
  location.reload();
};
init();
