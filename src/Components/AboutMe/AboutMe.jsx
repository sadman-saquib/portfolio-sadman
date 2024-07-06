import React from 'react'
import './AboutMe.css'

import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs} from 'react-icons/fa'
import {SiTailwindcss, SiCplusplus, SiAdobeillustrator, SiAdobephotoshop, SiAdobeaftereffects, SiAdobepremierepro, SiAdobelightroom} from 'react-icons/si'

const about = {
    title: "About me",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima eveniet neque dolor, obcaecati deserunt eligendi fugit possimus! Deserunt debitis enim fugit, magnam amet exercitationem!",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Sadman Saquib"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91) 8011 255811"
        },
        {
            fieldName: "Whatsapp",
            fieldValue: "(+91) 8876 315857"
        },
        {
            fieldName: "Email",
            fieldValue: "sadmansaquib12@gmail.com"
        },
        {
            fieldName: "Instagram",
            fieldValue: "sadman_saquib"
        },
        {
            fieldName: "Address",
            fieldValue: "N.S. Road, ward no.4, Dhubri, Assam, PIN: 783301"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        }
    ]
}

const internship = {
    // icon:,
    title: "Internship Experiences",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima eveniet neque dolor, obcaecati deserunt eligendi fugit possimus! Deserunt debitis enim fugit, magnam amet exercitationem!",
    items: [
        {
            company: "NEEPCO AGgBPS",
            position: "Intern",
            designation: "Full-time",
            duration: "Summer 2023"
        },
        {
            company: "Byok",
            position: "Video-editing Intern",
            designation: "Part-Time",
            duration: "October 2023 - December 2023"
        },
        {
            company: "Exposys",
            position: "Web-Developer Intern",
            designation: "Full-Time",
            duration: "Summer 2024"
        }
    ]
}

const por = {
    icon: '/assets/send-white.png',
    title: 'Position Of Responsibilities',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima eveniet neque dolor, obcaecati deserunt eligendi fugit possimus! Deserunt debitis enim fugit, magnam amet exercitationem!", 
    items: [
        {
            company: "Electra Society",
            position: "Technical Head",
            duration: "2023-2024"
        },
        {
            company: "Institute of Engineers India: Student's Chapter (Silchar)",
            position: "Design Head",
            duration: "2023-2024"
        },
        {
            company: "SriGen, E-Cell",
            position: "Video Editing co-Head",
            duration: "2023-2024"
        },
        {
            company: "Incandescence 2024, NIT Silchar",
            position: "Design Co-Head (Lead)",
            duration: "2024"
        },
        {
            company: "Tecnoesis 2024, NIT Silchar",
            position: "Design & Video-Editing Co-Head",
            duration: "2024"
        },
        {
            company: "Symphonits - Music Club, NIT Silchar",
            position: "Core Team Member",
            duration: "2024"
        },
        {
            company: "Posua 2023",
            position: "Video Editing Executive",
            duration: "2023"
        },
    ]
}

const education = {
    icon: '/assets/send-white.png',
    title: 'Education',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima eveniet neque dolor, obcaecati deserunt eligendi fugit possimus! Deserunt debitis enim fugit, magnam amet exercitationem!", 
    items: [
        {
            institution: "S.P. English Medium High School, Dhubri",
            degree: "HSLC",
            percentage: "92%",
            Place: "Assam, India"
        },
        {
            institution: "S.P. Higher Secondary School, Dhubri",
            degree: "HSC",
            percentage: "89.2%",
            Place: "Assam, India"
        },
        {
            institution: "National Institute of Technology, Silchar",
            degree: "B Tech. - Electrical",
            percentage: "7.66",
            Place: "Assam, India"
        }
    ]
}

const skills = {
    title: "Skills",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima eveniet neque dolor, obcaecati deserunt eligendi fugit possimus! Deserunt debitis enim fugit, magnam amet exercitationem!",
    items : [
        {
            icon: <FaHtml5 />,
            name: "HTML 5" 
        },
        {
            icon: <FaCss3 />,
            name: "CSS 3" 
        },
        {
            icon: <FaJs />,
            name: "Javacript" 
        },
        {
            icon: <FaReact />,
            name: "React js" 
        },
        {
            icon: <FaNodeJs />,
            name: "node js" 
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwindcss" 
        },
        {
            icon: <SiCplusplus />,
            name: "C++" 
        },
        {
            icon: <SiAdobeillustrator />,
            name: "Adobe illustrator" 
        },
        {
            icon: <SiAdobephotoshop />,
            name: "Adobe photoshop" 
        },
        {
            icon: <SiAdobeaftereffects />,
            name: "Adobe after effects" 
        },
        {
            icon: <SiAdobepremierepro />,
            name: "Adobe premiere pro" 
        },
        {
            icon: <SiAdobelightroom />,
            name: "Adobe lightroom" 
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip"
import { ScrollArea } from "../ui/scroll-area"
import { motion } from 'framer-motion'

const AboutMe = () => {
  return (
    <motion.div  
    initial = {{opacity:0}}  
    animate = {{
        opacity: 1, 
        transition: {delay:0 , duration: 0.4, ease: "easeIn"},
    }}
    className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
        <div className='container mx-auto'>
            <Tabs 
            defaultValue='education'
            className='flex flex-col xl:flex-row gap-[60px]'>
                <TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6'>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="internshipExperiences">Internship Experiences</TabsTrigger>
                    <TabsTrigger value="positionOfResponsibility">Positions of Responsibility</TabsTrigger>
                    <TabsTrigger value="about">About Me</TabsTrigger>
                </TabsList>
                <div className='min-h-[70vh] w-full'>
                    {/* Education */}
                    <TabsContent value="education" className='w-full'>
                        <div className='flex flex-col gap-[30px] text-left'>
                            <h3 className='text-4xl font-bold'>{education.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{education.description}</p>
                        <ScrollArea className='h-[400px]'>
                            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                {
                                    education.items.map((item, index)=>{
                                        return(
                                        <li key={index}  className='bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                            <span className='text-accent'>{item.degree}</span>
                                            <h3 className='text-xl max-w-[250px] min-h-[70px] text-center lg:text-left'>{item.institution}</h3>
                                            <div className='flex items-center gap-3'>
                                                {/*dot*/}
                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                <p className='text-white/60'>{item.percentage}</p>
                                            </div>
                                        </li>
                                        );
                                    })
                                }
                            </ul>
                        </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* Skills */}
                    <TabsContent value="skills" className='w-full'>
                        <div className='flex flex-col gap-[30px]'>
                            <h3  className='text-4xl font-bold'>{skills.title}</h3>
                            <p className='text-white/60'>{skills.description}</p>
                            
                            <ScrollArea className='h-[400px]'>
                            <ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]'>
                                {skills.items.map((skill, index) =>{
                                    return <li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className='w-full h-[150px] bg-secondary flex rounded-xl justify-center items-center group'>
                                                    <div className='text-6xl group-hover:text-accent transition-all duration-300'>{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                }
                                )}
                            </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* Internship */}
                    <TabsContent value="internshipExperiences" className='w-full'>
                    <div className='flex flex-col gap-[30px] text-left'>
                            <h3 className='text-4xl font-bold'>{internship.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{internship.description}</p>
                        <ScrollArea className='h-[400px]'>
                            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                {
                                    internship.items.map((item, index)=>{
                                        return(
                                        <li key={index}  className='bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                            <span className='text-accent'>{item.duration}</span>
                                            <h3 className='text-xl max-w-[260px] min-h-[0px] text-center lg:text-left'>{item.company}</h3>
                                            <p className='text-white/60 min-h-[40px] text-sm'>{item.position}</p>
                                            <div className='flex items-center gap-3'>
                                                {/*dot*/}
                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                <p className='text-white/60'>{item.designation}</p>
                                            </div>
                                        </li>
                                        );
                                    })
                                }
                            </ul>
                        </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* Position Of Responsibility */}
                    <TabsContent value="positionOfResponsibility" className='w-full'>
                    <div className='flex flex-col gap-[30px] text-left'>
                            <h3 className='text-4xl font-bold'>{por.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{internship.description}</p>
                        <ScrollArea className='h-[400px]'>
                            <ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
                                {
                                    por.items.map((item, index)=>{
                                        return(
                                        <li key={index}  className='bg-secondary h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1'>
                                            <span className='text-accent'>{item.duration}</span>
                                            <h3 className='text-xl max-w-[260px] min-h-[70px] text-center lg:text-left'>{item.company}</h3>
                                            {/* <p className='text-white/60 min-h-[50px] text-sm'>{item.position}</p> */}
                                            <div className='flex items-center gap-3'>
                                                {/*dot*/}
                                                <span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
                                                <p className='text-white/60 text-md'>{item.position}</p>
                                            </div>
                                        </li>
                                        );
                                    })
                                }
                            </ul>
                        </ScrollArea>
                        </div>
                    </TabsContent>

                    {/* About me */}
                    <TabsContent value="about" className='w-full'>
                        <div className='flex flex-col gap-[30px]'>
                            <h3 className='text-4xl font-bold'>{about.title}</h3>
                            <p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>{about.description}</p>
                            <ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px]'>
                                {about.info.map((info, index)=>{
                                    return (
                                        <li key={index}
                                            className='flex items-end justify-start xl:justify-start gap-4'
                                        >
                                            <span className='text-accent'>{info.fieldName}</span>
                                            <span className='text-l font-medium'>{info.fieldValue}</span>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                </div>
            </Tabs>
        </div>
    </motion.div>
  )
}

export default AboutMe
