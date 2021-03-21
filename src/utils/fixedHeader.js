const options = {
    rootMargin: '20px',
    threshold:0.2
}
const cb = (entries) => {
    const [ent] = entries
    const target = document.querySelector('header')
    const rest = document.querySelector('#rest')
    const top = document.querySelector('#topbar')
    if (!ent.isIntersecting) {
        rest.classList.add('restDown')
        target.classList.add('fixedHeader')

    } else {
        rest.classList.remove('restDown')
        target.classList.remove('fixedHeader')
    }
}
const observer = new IntersectionObserver(cb, options)

function fixedHeader(item) {
    observer.observe(item)
}

export default fixedHeader