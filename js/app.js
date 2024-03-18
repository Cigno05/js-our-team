console.log('JS funziona');

// Creare l’array di oggetti con le informazioni fornite.

const teamMembers = [];

const memberCeo = memberGenerator('Wayne Barnett', 'Founder & CEO', 'wayne-barnett-founder-ceo.jpg');
console.log('Name ', memberCeo.name, 'Job ', memberCeo.job, 'String img ', memberCeo.img);

const memberChief = memberGenerator('Angela Caroll', 'Chief Editor', 'angela-caroll-chief-editor.jpg');
console.log('Name ', memberChief.name, 'Job ', memberChief.job, 'String img ', memberChief.img);

const memberOffice = memberGenerator('Walter Gordon', 'Office Manager', 'walter-gordon-office-manager.jpg');
console.log('Name ', memberOffice.name, 'Job ', memberOffice.job, 'String img ', memberOffice.img);

const memberSocial = memberGenerator('Angela Lopez', 'Social Media Manager', 'angela-lopez-social-media-manager.jpg');
console.log('Name ', memberSocial.name, 'Job ', memberSocial.job, 'String img ', memberSocial.img);

const memberDeveloper = memberGenerator('Scott Estrada', 'Developer', 'scott-estrada-developer.jpg');
console.log('Name ', memberDeveloper.name, 'Job ', memberDeveloper.job, 'String img ', memberDeveloper.img);

const memberDesigner = memberGenerator('Barbara Ramos', 'Graphic Designer', 'barbara-ramos-graphic-designer.jpg');
console.log('Name ', memberDesigner.name, 'Job ', memberDesigner.job, 'String img ', memberDesigner.img);

teamMembers.push(memberCeo, memberChief, memberOffice, memberSocial, memberDeveloper, memberDesigner)
console.log(teamMembers)

// richiamare gli id delle card

const cardCeo = document.getElementById('ceo')
cardCeo.innerHTML = `
    <img src="./img/${memberCeo.img}" class="card-img-top" alt="foto di ${memberCeo.name}">
          
    <div class="card-body">
    <h3 class="card-name">${memberCeo.name}</h3>
    <h5 class="card-job">${memberCeo.job}</h5>
    </div>
    `;

const cardChief = document.getElementById('chief')
cardChief.innerHTML = `
    <img src="./img/${memberChief.img}" class="card-img-top" alt="foto di ${memberChief.name}">
          
    <div class="card-body">
    <h3 class="card-name">${memberChief.name}</h3>
    <h5 class="card-job">${memberChief.job}</h5>
    </div>
    `;

const cardOffice = document.getElementById('office')
cardOffice.innerHTML = `
        <img src="./img/${memberOffice.img}" class="card-img-top" alt="foto di ${memberOffice.name}">
              
        <div class="card-body">
        <h3 class="card-name">${memberOffice.name}</h3>
        <h5 class="card-job">${memberOffice.job}</h5>
        </div>
        `;

const cardSocial = document.getElementById('social')
cardSocial.innerHTML = `
            <img src="./img/${memberSocial.img}" class="card-img-top" alt="foto di ${memberSocial.name}">
                  
            <div class="card-body">
            <h3 class="card-name">${memberSocial.name}</h3>
            <h5 class="card-job">${memberSocial.job}</h5>
            </div>
            `;

const cardDeveloper = document.getElementById('developer')
cardDeveloper.innerHTML = `
    <img src="./img/${memberDeveloper.img}" class="card-img-top" alt="foto di ${memberDeveloper.name}">
          
    <div class="card-body">
    <h3 class="card-name">${memberDeveloper.name}</h3>
    <h5 class="card-job">${memberDeveloper.job}</h5>
    </div>
    `;

const cardDesigner = document.getElementById('designer')
cardDesigner.innerHTML = `
    <img src="./img/${memberDesigner.img}" class="card-img-top" alt="foto di ${memberDesigner.name}">
          
    <div class="card-body">
    <h3 class="card-name">${memberDesigner.name}</h3>
    <h5 class="card-job">${memberDesigner.job}</h5>
    </div>
    `;




function memberGenerator(memberName, memberJob, memberIMG) {
    const member = {
        name: memberName,
        job: memberJob,
        img: memberIMG,

    }
    return member
}













































































