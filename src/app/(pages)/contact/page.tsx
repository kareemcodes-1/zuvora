"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Hero from "./components/hero";
import ContactInfo from "./components/contact-info";
import FAQ from "./components/faq";
import { useNavbar } from "@/app/providers/navbar-provider";

const Contact = () => {

      const { setTheme, theme } = useNavbar();
    useEffect(() => { setTheme("light"); }, []);

  return (
   <>
   <Hero />
   <ContactInfo />
   <FAQ />
   </>
  );
};

export default Contact;
