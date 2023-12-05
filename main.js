function addNewWEField(){
let newNode=document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("weField");
newNode.classList.add("mt-2");
newNode.setAttribute("rows",3);
newNode.setAttribute('placeholder','Enter here');

let weOb = document.getElementById("we");
let weaddbuttonOb = document.getElementById("weaddbutton");

weOb.insertBefore(newNode , weaddbuttonOb);
}


function addNewAQField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",3);
    newNode.setAttribute('placeholder','Enter here');

    let aqOb = document.getElementById("aq");
    let aqaddbuttonOb = document.getElementById("aqaddbutton");

    aqOb.insertBefore(newNode , aqaddbuttonOb);
}

function addNewskillField(){
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("skillField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows",2);
    newNode.setAttribute('placeholder','Enter here');

    let skillOb = document.getElementById("skill");
    let skilladdbuttonOb = document.getElementById("skilladdbutton");

    skillOb.insertBefore(newNode ,skilladdbuttonOb);
}




//generating resume
function generateresume(){
    let nameField=document.getElementById("nameField").value;

    let nameT1 = document.getElementById('nameT1')

    nameT1.innerHTML = nameField;

    //direct
    
    document.getElementById("nameT2").innerHTML = nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    document.getElementById("mailT").innerHTML = document.getElementById("mailField").value;

    document.getElementById("linkedT").innerHTML = document.getElementById("linkedField").value;

    document.getElementById("instaT").innerHTML = document.getElementById("instaField").value;
    

    // objective
    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    // work experience
    let wes = document.getElementsByClassName("weField");

    let str="";

    for(let e of wes){
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("weT").innerHTML = str;

    // aq
    let aqs = document.getElementsByClassName("aqField");
    
    let str1="";

    for(let e of aqs){
        str1 = str1 + `<li> ${e.value} </li>`;
    }

    document.getElementById("aqT").innerHTML = str1;

    // skills
    let skills = document.getElementsByClassName("skillField");
    
    let str2="";

    for(let e of skills){
        str2 = str2 + `<li> ${e.value} </li>`;
    }

    document.getElementById("skillT").innerHTML = str2;

    document.getElementById("resume-form").style.display = "none";
    document.getElementById("resume-template").style.display = "block";
    
   

}

// function previewresume(){
//     window.location.href = 'generatersm.html';
// }


// printing resume
function printresume(){
    window.print();
}

function previewImage(input) {
    var profileImage = document.getElementById('profileImage');
    if (input.files && input.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        profileImage.src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }




