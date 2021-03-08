import { useEffect, useRef, useState } from 'react'

export default function useNearScreen({ distance = '100px', externalRef, once = true } = {}) {
    const [isNearScreen, setIsNearScreen] = useState(false)
    const fromRef = useRef()
    
    useEffect(() => {
        let observer
        const element = externalRef ? externalRef.current : fromRef.current
        const onChange = (entries, observer) => {
            const el = entries[0]
            if (el.isIntersecting) {
                setIsNearScreen(true)
                // observer.onObserve(); Para dejar de observar
                once && observer.disconnect()
            } else {
                !once && setIsNearScreen(false)
            }
        }
    
        // Polyfill - soporte para otros navegadores
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? IntersectionObserver
                : import('intersection-observer')
        ).then(() => {
            observer = new IntersectionObserver(onChange, {
                rootMargin: distance
            })
    
            if (element) observer.observe(element)
        })
    
    
        return () => observer && observer.disconnect()
    })

    return {isNearScreen, fromRef}
}