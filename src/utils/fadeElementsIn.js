const options={
    rootMargin:'0px',
    threshold:0.4
}
const cb=(ent)=>{
    ent.forEach(en=>{
        if(en.isIntersecting){
            const target=en.target
            const delay=target.dataset.delay || 0


            setTimeout(()=>{
                target.classList.add('showHideElement')
                setTimeout(()=>{
                    const classes=target.classList.value
                    const className=classes.split(' ').find(item=>item.startsWith('hide'))
                    target.classList.remove(className)
                },+delay+1000)

            },delay)
        }
    })

}
const observer=new IntersectionObserver(cb,options)
const scrollAnimate=(...items)=>{
        items.forEach(item=>{
        observer.observe(item)
    })
}
export default scrollAnimate