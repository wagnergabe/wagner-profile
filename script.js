const aboutBtn = document.getElementById('about')
const projectsBtn = document.getElementById('projects')
const contactsBtn = document.getElementById('contacts')
const submitBtn = document.getElementById('submitbtn')
const wrapperEl = document.querySelector('.wrapper')
const aboutEl = document.querySelector('.about')
const projectEl = document.querySelector('.projects')
const contactEl = document.querySelector('.contact')
const thankYouEl = document.getElementById('thankYou')

const aboutPageGenerate = () => {
    wrapperEl.style.display = "none";
    aboutEl.style.display = 'block'
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

const thankYou = () => {
    thankYouEl.style.display = "block"
}

aboutBtn.addEventListener('click', aboutPageGenerate)
projectsBtn.addEventListener('click', projectsPageGenerate)
contactsBtn.addEventListener('click', contactPageGenerate)
submitBtn.addEventListener('click', thankYou)