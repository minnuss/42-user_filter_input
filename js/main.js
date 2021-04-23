const apiURL = 'https://randomuser.me/api?results=100'
const result = document.querySelector('.result')
const filterInput = document.querySelector('.filter')

// USER LI ELEMENTS WITH ALL THE DATA, PUSHED BY getPersonData()
const listItems = []

// INPUT EVENT
filterInput.addEventListener('input', (e) => {
    filterData(e.target.value)
})

// GET THE USERS
async function getPersonData() {
    const res = await fetch(apiURL)
    const data = await res.json()

    const resultData = data.results
    // Clear results list
    result.innerHTML = ''

    resultData.forEach(user => {

        const liUser = document.createElement('li')

        listItems.push(liUser)

        liUser.innerHTML = `
                <img src="${user.picture.large}" alt="Sara">
                <div class="user-info">
                    <h4>${user.name.first} ${user.name.last}</h4>
                    <p>${user.location.state}, ${user.location.country}</p>
                </div>
                `
        result.appendChild(liUser)
    })

}
// console.log(listItems)
getPersonData()

// FILTER THE DATA
function filterData(searchVal) {
    // list items array holds all user li with all information about that html element, so we check if input val has some characters inside of user element and add or remove class from it
    listItems.forEach(user => {
        if (user.innerText.toLowerCase().includes(searchVal.toLowerCase())) {
            user.classList.remove('hide')
        } else {
            user.classList.add('hide')
        }
    })
}