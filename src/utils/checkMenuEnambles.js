
export default function checkMenuEnambles(sections,links){
    const localSections=sections
    const navLinks=links
    function clearNav() {
        links.forEach(link => {
            link.classList.remove('active')
        })
    }
    const scrolled=window.scrollY+100
    function checkNavs()
    {
        sections.forEach(section=>{
            if(scrolled>=section.offsetTop){
                clearNav()
                links.forEach(link=>{
                    if(link.dataset.target===section.id){
                        link.classList.add('active')
                    }
                })
            }
        })
    }
    return {checkNavs}
}