"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhone, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

const info = [
  {
    icon: <FaPhone />,
    title: "Phone",
    description: "+51 992 260 107",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "juan.atenciog@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Av. Prolongación Javier Prado N° 7931 Ate, Lima",
  },
];
79
import { motion } from "framer-motion";

const contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
              If you have a job offer or would like to collaborate, please fill out the form and I will get in touch with you soon.
              </p>
              {/* input */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstname" placeholder="Firsname"></Input>
                <Input type="lastname" placeholder="Lastname"></Input>
                <Input type="email" placeholder="Email Address"></Input>
                <Input type="phone" placeholder="Phone number"></Input>
              </div>
              {/* Select */}

              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="est">Web Development</SelectItem>
                    <SelectItem value="cst">UI/UX DESING</SelectItem>
                    <SelectItem value="mst">Logo Desing</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/* Text Area */}

              <Textarea
                className="h-[200px]"
                placeholder="type your message here."
              />

              {/* btn */}

              <Button size="md" className="max-w-40">
                Send message
              </Button>

            </form>
          </div>
          {/* Info */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            
          <ul className="flex flex-col gap-10">
            {info.map((item, index)=>{
              return (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl ">{item.description}</h3>
                  </div>
                </li>
              );
            })
            }
          </ul>

          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default contact;
