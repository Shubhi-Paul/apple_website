import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { heroVideo, smallHeroVideo } from '../utils';
import React, { useEffect, useState } from 'react';

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(window.innerWidth < 640 ? smallHeroVideo : heroVideo)
  const [delayTime, setDelayTime] = useState(window.innerWidth < 640 ? 2 : 1)

  const handleVideoSrcSet = () => {
    if(window.innerWidth < 640) {
      setVideoSrc(smallHeroVideo)
      setDelayTime(2);
    } else {
      setVideoSrc(heroVideo)
      setDelayTime(1);
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleVideoSrcSet);
    window.addEventListener('resize', setDelayTime);

    return () => {
      window.removeEventListener('reisze', handleVideoSrcSet)
      window.removeEventListener('reisze', setDelayTime);
    }
  }, [])

  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: delayTime })
    gsap.fromTo('#cta', {y:20},{ opacity: 1, y: 0, delay: delayTime })
  }, [])

  return (
    <section className="w-full nav-height bg-black relative">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">iPhone 15 Pro</p>
        <div className="md:w-10/12 w-9/12">
          <video className="pointer-events-none" autoPlay muted playsInline={true} key={videoSrc}>
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20"
      >
        <a href="#highlights" className="btn">Buy</a>
        <p className="font-normal text-xl">From $199/month or $999</p>
      </div>
      </div>
    </section>
  )
}

export default Hero