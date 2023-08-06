'use client'
import React, { useState, useEffect, useRef } from 'react'
import { Logo, Name, Icon } from '@/public'
import { navbar } from '@/utils/constants'

const Navbar = () => {
    const [selected, setSelected] = useState<string>('about-us')
    const headerRef = useRef<HTMLDivElement>(null)
    const handleClick = (value: string, path: string) => {
        setSelected(value)
        const element = document.getElementById(`${value}`)
        const offset = headerRef.current?.offsetHeight
        if (value === 'about-us') {
            window.scrollTo({ top: element?.offsetTop! - offset! - 70 || 0, behavior: 'smooth' })
        }
        else {
            window.scrollTo({ top: element?.offsetTop! - offset! + 10 || 0, behavior: 'smooth' })
        }
    }
    const [scrolled, setScrolled] = useState<boolean>(false)
    // detect the scroll position, and change the selected navbar
    useEffect(() => {
        const handleScroll = () => {
            const aboutUs = document.getElementById('about-us')
            const menu = document.getElementById('menu')
            const news = document.getElementById('news')
            const pictures = document.getElementById('pictures')
            const contactBooking = document.getElementById('contact-booking')
            if (window.scrollY > 0) {
                setScrolled(true)
            }
            else {
                setSelected('about-us')
                setScrolled(false)
            }
            if (window.scrollY > menu?.offsetTop! - aboutUs?.offsetTop!) {
                setSelected('menu')
            }
            if (window.scrollY > news?.offsetTop! - aboutUs?.offsetTop!) {
                setSelected('news')
            }
            if (window.scrollY > pictures?.offsetTop! - aboutUs?.offsetTop!) {
                setSelected('pictures')
            }
            if (window.scrollY > contactBooking?.offsetTop! - aboutUs?.offsetTop!) {
                setSelected('contact-booking')
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])
    return (
        <div className={`fixed top-0 md:pt-[64px] pt-[20px] w-screen z-50 ${scrolled ? 'bg-[#173448] bg-opacity-80 backdrop-filter backdrop-blur-lg' : 'bg-[#173448]'}`} ref={headerRef}>
            <div className='md:mx-40 mx-10 flex justify-center items-center mb-4'>
                <img src={Logo.src} alt="reiizakaya-logo" className='md:w-[161px] w-[60px] md:mr-6 mr-1 md:mt-1' />
                <img src={Icon.src} alt="reiizakaya-icon" className='md:w-[286px] w-[100px] md:mr-5 mr-1' />
                <img src={Name.src} alt="reiizakay-name" className='md:w-[224px] w-[70px] md:mt-5 mt-1' />
            </div>
            <div className='md:mx-40 mx-2 flex justify-between items-center'>
                {navbar.map((item, index) => (
                    <div key={index} onClick={() => handleClick(item.key, item.path)}>
                        <p className={`${selected === item.key ? 'text-[#B11F24]' : 'text-[#F2F2F2]'} text-[14px] md:text-3xl font-bold cursor-pointer hover:text-[#B11F24] transition-all duration-150 ease-in-out`}>{item.label}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Navbar