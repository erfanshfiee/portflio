

export default (...sections)=>{
    const cb=(entries)=>{
        const [ent]=entries
        if(ent.isIntersecting){
            const hrefs=document.querySelectorAll('.openNav a')
            const target=ent.target
            console.log(target)

            hrefs.forEach(href=>{
                href.classList.remove('active')
            })
            if(target.id==='footer'){
                hrefs.forEach(href=>{
                    href.classList.remove('active')
                })
                return
            }

            const id=target.id
            hrefs.forEach(href=>{
                if(href.id.startsWith(id)){
                    href.classList.add('active')
                }
            })

        }
    }
    const options={
        rootMargin:'0px',
        threshold:0.5
    }
    const observer=new IntersectionObserver(cb,options)
    sections.forEach(section=>{
        observer.observe(section)
    })
}