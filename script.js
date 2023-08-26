const aboutBtn = document.getElementById('about')
const projectsBtn = document.getElementById('projects')
const contactsBtn = document.getElementById('contacts')
const wrapperEl = document.querySelector('.wrapper')
const aboutEl = document.querySelector('.about')

const aboutPageGenerate = () => {
    wrapperEl.style.display = "none";
    aboutEl.style.display = 'flex'
}

aboutBtn.addEventListener('click', aboutPageGenerate)