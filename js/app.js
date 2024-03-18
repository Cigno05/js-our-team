console.log('JS funziona');

// Creare l’array di oggetti con le informazioni fornite.

const teamMembers = [];

const memberCeo = memberGenerator('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg');
// console.log('Name ', memberCeo.name, 'Job ', memberCeo.job, 'String img ', memberCeo.img);

const memberChief = memberGenerator('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg');
// console.log('Name ', memberChief.name, 'Job ', memberChief.job, 'String img ', memberChief.img);

const memberOffice = memberGenerator('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg');
// console.log('Name ', memberOffice.name, 'Job ', memberOffice.job, 'String img ', memberOffice.img);

const memberSocial = memberGenerator('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg');
// console.log('Name ', memberSocial.name, 'Job ', memberSocial.job, 'String img ', memberSocial.img);

const memberDeveloper = memberGenerator('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg');
// console.log('Name ', memberDeveloper.name, 'Job ', memberDeveloper.job, 'String img ', memberDeveloper.img);

const memberDesigner = memberGenerator('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg');
// console.log('Name ', memberDesigner.name, 'Job ', memberDesigner.job, 'String img ', memberDesigner.img);

teamMembers.push(memberCeo, memberChief, memberOffice, memberSocial, memberDeveloper, memberDesigner)
// console.log(teamMembers)

let cardContainer = document.getElementById('card-container')

cardContainer.innerHTML += '';

for (let index = 0; index < teamMembers.length; index++) {


    const colElement = document.createElement('div');
    colElement.classList.add('col', 'col-12', 'col-md-6', 'col-lg-4', 'mt-4');
    colElement.innerHTML = `
    <div class="card">
        <div class="member-img">
            <img src="./img/${teamMembers[index].img}" class="card-img-top" alt="foto di ${teamMembers[index].name}">
        </div>      
        <div class="card-body">
            <h3 class="card-name">${teamMembers[index].name}</h3>
            <h5 class="card-job">${teamMembers[index].job}</h5>
        </div>
    </div>
    `;

    cardContainer.append(colElement)
 }







function memberGenerator(memberName, memberJob, memberIMG) {
    const member = {
        name: memberName,
        job: memberJob,
        img: memberIMG,
    }

    return member
}














































































