const aboutBtn = document.getElementById('about')
const projectsBtn = document.getElementById('projects')
const contactsBtn = document.getElementById('contacts')
const wrapperEl = document.querySelector('.wrapper')
const aboutEl = document.querySelector('.about')
const projectEl = document.querySelector('.projects')
const contactEl = document.querySelector('.contact')

const aboutPageGenerate = () => {
    wrapperEl.style.display = "none";
    aboutEl.style.display = 'flex'
    projectEl.style.display = 'none'
    contactEl.style.display = 'none'
}

const projectsPageGenerate = () => {
    wrapperEl.style.display = 'none';
    aboutEl.style.display = 'none';
    projectEl.style.display = 'flex'
    contactEl.style.display = 'none'
}

const contactPageGenerate = () => {
    wrapperEl.style.display = 'none';
    aboutEl.style.display = 'none';
    projectEl.style.display = 'none'
    contactEl.style.display = 'flex'
}

aboutBtn.addEventListener('click', aboutPageGenerate)
projectsBtn.addEventListener('click', projectsPageGenerate)
contactsBtn.addEventListener('click', contactPageGenerate)