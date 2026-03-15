"use client";
import { useEffect } from "react";
import Hero from "./components/hero";
import Story from "./components/story";
import { useNavbar } from "@/app/providers/navbar-provider";

function AboutPage() {

    const { setTheme, theme } = useNavbar();
  useEffect(() => { setTheme("light"); }, []);
  console.log(theme)

    return ( 
    <>
        <Hero />
        <Story />
    </>
  );
}

export default AboutPage;