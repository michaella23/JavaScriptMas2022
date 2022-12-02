import userData from "./data.js";

const main = document.body.querySelector('main')

function transformData(data) {
    const peopleArr = data.map(({name, dob}) => {
        const fullName = `${name.first} ${name.last}`
        const dateOfBirth = new Date(dob.date).toDateString()
        main.innerHTML += `
        <div class="person">
            <p>${fullName}</p>
            <p>${dateOfBirth}</p>
        </div>
        `
        return {fullName, dateOfBirth}       
    })
    return peopleArr;
}

console.log(transformData(userData));


