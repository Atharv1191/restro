import React, { useEffect } from 'react'
import Lenis from "lenis"

const LenisScroll = () => {

    useEffect(()=>{
        const lenis = new Lenis({
            duration:1.2,
            smoothWheel:true,
            syncTouch:false,
            anchors:{
                offset:-120
            },

        })
        const ref = (time)=>{
            lenis.ref(time);
            requestAnimationFrame(ref)
        }
        requestAnimationFrame(ref)
        return ()=>{
            lenis.destroy()
        }

    },[])
  return null
}

export default LenisScroll