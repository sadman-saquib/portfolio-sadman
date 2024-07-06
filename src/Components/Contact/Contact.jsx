import React from 'react'
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Textarea } from '../ui/textarea'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '../ui/select'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import { Description } from '@radix-ui/react-dialog'

const info =  [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "(+91) 8011 255811",
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "sadmansaquib12@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt/>,
        title: "Address",
        description: "N.S. Road, Dhubri, Assam PIN: 783301",
    },
]

import { color, motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.section 
    initial = {{opacity: 0}}
    animate = {{
        opacity: 1,
        transition:  {delay: 0, duration: 0.4, ease: "easeIn"}
    }}
    className='py-6'
    >
        <div className='container mx-auto'>
            <div className='flex flex-col xl:flex-row gap-[30px]'>
                {/* form */}
                <div className='xl:w-[54%] order-2 xl:order-none'>
                    <form className='flex flex-col gap-6 p-10 bg-secondary rounded-xl'>
                        <h3 className='text-4xl font-bold text-accent'>Let's Connect</h3>
                        <p className='text-white/60'> What is your project idea?</p>
                        {/* input */}
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                            <Input type="firstname" placeholder='Firstname'/>
                            <Input type="lasstname" placeholder='Lastname'/>
                            <Input type="email" placeholder='Email'/>
                            <Input type="phone" placeholder='Phone number'/>
                        </div>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select an option" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                {/* <SelectLabel>Select</SelectLabel> */}
                                <SelectItem value='est'>Web Development</SelectItem>
                                <SelectItem value='cst'>Graphic Design</SelectItem>
                                <SelectItem value='mst'>UI/UX Design</SelectItem>
                                <SelectItem value='nst'>Video Editing</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                        <Textarea className="h-[200px]" placeholder='Type your message'></Textarea>
                        <div className=''>
                        <Button className='flex items-right bg-accent hover:bg-[#FF456D] w-full mt-5 md:w-[200px]'>Send</Button>
                        </div>
                    </form>
                </div>
                {/* Info */}
                <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                <ul className='flex flex-col gap-5 md:gap-10'>
                    {info.map((info, index)=>{
                        return(
                            <li key={index} className='flex items-start gap-6'>
                                <div className='w-[50px] h-[50px] xl:w-[72px] xl:h-[72px] bg-secondary text-accent rounded-full flex items-center justify-center'>
                                    <div className='text-[24px] xl:text-[28px]'>{info.icon}</div>
                                </div>
                                <div className='flex-1'>
                                <p className='text-white/60 text-sm md:text-md'>{info.title}</p>
                                <h3 className='text-lg md:text-xl'>{info.description}</h3>
                                </div>
                            </li>
                        )
                    })}
                </ul>
                </div>
            </div>
        </div>
    </motion.section>
  )
}

export default Contact
