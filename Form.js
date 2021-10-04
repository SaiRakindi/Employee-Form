let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");


let genderMaleEl = document.getElementById("genderMale");
let genderFemaleEl = document.getElementById("genderFemale");

let myFormEl = document.getElementById("myForm");

let phoneEl = document.getElementById("phone");
let phoneErrMsgEl = document.getElementById("phoneErrMsg")

let tableEl = document.getElementById("table")

let formData = {
    name: "",
    gender: "",
    email: "",
    dob: "",
    phone: "",
    hobbies: ""
};

nameEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        nameErrMsgEl.textContent = "Required*";
    } else {
        nameErrMsgEl.textContent = "";
    }

    formData.name = event.target.value;
});

emailEl.addEventListener("change", function(event) {
    if (event.target.value === "") {
        emailErrMsgEl.textContent = "Required*";
    } else {
        emailErrMsgEl.textContent = "";
    }

    formData.email = event.target.value;
});

workingStatusEl.addEventListener("change", function(event) {
    formData.status = event.target.value;
});

genderMaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

genderFemaleEl.addEventListener("change", function(event) {
    formData.gender = event.target.value;
});

function validateFormData(formData) {
    let {
        name,
        email
    } = formData;
    if (name === "" || (name.length < 4 && name.length > 20)) {
        nameErrMsgEl.textContent = "Required*";
    }
    if (email === "" || (!email.includes("@"))) {
        emailErrMsgEl.textContent = "Required*";
    }

    if (phone === "" || (phone.length > 10)) {
        phoneErrMsgEl.textContent = "Required*"
    }
}

function submitFormData(formData) {
    var tr = document.createElement("tr");

    var td1 = tr.appendChild(document.createElement("td"));
    var td2 = tr.appendChild(document.createElement("td"));
    var td3 = tr.appendChild(document.createElement("td"));
    var td4 = tr.appendChild(document.createElement("td"));
    var td5 = tr.appendChild(document.createElement("td"));
    var td6 = tr.appendChild(document.createElement("td"));

    td1.textContent = formData.name;
    td1.textContent = formData.gender;
    td1.textContent = formData.email;
    td1.textContent = formData.dob;
    td1.textContent = formData.phone;
    td1.textContent = formData.hobbies;

    tableEl.appendChild(tr)

}

myFormEl.addEventListener("submit", function(event) {
    event.preventDefault();
    validateFormData(formData);
    submitFormData(formData);
});
