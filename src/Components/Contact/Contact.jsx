import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+91) 8011 255811",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "sadmansaquib12@gmail.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        description: "N.S. Road, Dhubri, Assam PIN: 783301",
    },
];

const Contact = () => {
    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);
        formData.append("access_key", "844a4d57-27bc-44e6-ad32-07643741222b");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Message sent!");
                event.target.reset();
            } else {
                setResult(data.message);
            }
        } catch (error) {
            console.error("Error submitting the form:", error);
            setResult("Error submitting the form. Please try again later.");
        }

         // Clear result message after 1 second
         setTimeout(() => {
            setResult('');
        }, 1000);
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 0, duration: 0.4, ease: "easeIn" }
            }}
            className='py-6'
        >
            <div className='container mx-auto'>
                <div className='flex flex-col xl:flex-row gap-[30px]'>
                    {/* Form */}
                    <div className='xl:w-[54%] order-2 xl:order-none'>
                        <form onSubmit={onSubmit} className='flex flex-col gap-6 p-10 bg-secondary rounded-xl'>
                            <h3 className='text-4xl font-bold text-accent'>Let's Connect</h3>
                            <p className='text-white/60'>What's on your mind?</p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                                <Input type="text" placeholder='Firstname' name="firstname" />
                                <Input type="text" placeholder='Lastname' name="lastname" />
                                <Input type="email" placeholder='Email' name="email" />
                                <Input type="tel" placeholder='Phone number' name="phone" />
                            </div>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select an option" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectItem value='web-development'>Web Development</SelectItem>
                                        <SelectItem value='graphic-design'>Graphic Design</SelectItem>
                                        <SelectItem value='ui-ux-design'>UI/UX Design</SelectItem>
                                        <SelectItem value='video-editing'>Video Editing</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea className="h-[200px]" placeholder='Type your message' name="message"></Textarea>
                            <Button type='submit' className='flex items-right bg-accent hover:bg-[#FF456D] w-full mt-5 md:w-[200px]'>Send message</Button>
                        </form>
                        <p className={`mt-4 ${result === "Message sent!" ? 'text-green-500' : 'text-red-500'}`}>{result}</p>
                    </div>
                    {/* Info */}
                    <div className='flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0'>
                        <ul className='flex flex-col gap-5 md:gap-10'>
                            {info.map((infoItem, index) => (
                                <li key={index} className='flex items-start gap-6'>
                                    <div className='w-[50px] h-[50px] xl:w-[72px] xl:h-[72px] bg-secondary text-accent rounded-full flex items-center justify-center'>
                                        <div className='text-[24px] xl:text-[28px]'>{infoItem.icon}</div>
                                    </div>
                                    <div className='flex-1'>
                                        <p className='text-white/60 text-sm md:text-md'>{infoItem.title}</p>
                                        <h3 className='text-lg md:text-xl'>{infoItem.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
