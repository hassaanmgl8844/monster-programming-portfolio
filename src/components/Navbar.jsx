"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Hamburger from "hamburger-react";
import { Button } from "./ui/button";
import { Github, Linkedin, TwitterIcon, YoutubeIcon } from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="flex justify-between items-center p-4 bg-green-500 relative z-10">
            <Link href={"/"}>
                <Image
                    className={"size-8"}
                    width={50}
                    height={50}
                    src={"/nav.png"}
                    alt=""
                />
            </Link>
            <div>
                <Hamburger toggle={setOpen} toggled={open} />
            </div>
            {open && <Menu open={open} setOpen={setOpen} />}
        </nav>
    );
};

const Menu = ({ open, setOpen }) => {
    return (
        <div className="absolute top-0 left-0 w-full h-screen bg-black flex">
            <div className="w-1/2  flex text-amber-100">
                {SocialLinks.map((links, i) => (
                    <Social key={i} bgColor={links.bgColor} href={links.href} name={links.name} />
                ))}
            </div>
            <div className="w-1/2 flex  flex-col">
                <div className="h-20 bg-green-500 w-full flex items-center">
                    <span className="ml-auto mr-5">
                        <Hamburger toggle={setOpen} toggled={open} />
                    </span>
                </div>
                <div className="flex flex-col">
                    {Links.map((l, i) => (
                        <Button
                            key={i}
                            className={
                                "text-green-500 py-12 bg-black flex justify-end items-center text-6xl hover:bg-gray-900 group"
                            }
                        >
                            <Image
                                width={43}
                                height={42}
                                className="rotate-90 opacity-0 group-hover:opacity-100 mr-9 transition-opacity ease-in-out duration-500"
                                src={"/arrow.png"}
                            />
                            <Link className="" href={l.href}>
                                {l.name}
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>
        </div>
    );
};


const Social = ({ href, name, bgColor }) => {
    return (
        <div style={{
            backgroundColor: bgColor
        }} className={"w-1/4  group"}>
            <Link className="flex  -rotate-90 gap-10 justify-center items-center w-full h-full" href={href}>
                <span className="text-7xl  group-hover:text-green-500 transition-colors ease-in-out duration-500">
                    {name}
                </span>
            </Link>
        </div>
    )
}

const SocialLinks = [
    {
        name: "Github",
        href: "/",
        bgColor: "rgb(51, 51, 51)"
    },
    {
        name: "Linkedin",
        href: "/",
        bgColor: "rgb(0, 119, 181)"
    },
    {
        name: "Youtube",
        href: "/",
        bgColor: "rgb(29, 161, 242)"
    },
    {
        name: "Twitter",
        href: "/",
        bgColor: "rgb(0, 108, 255)"
    },
]

const Links = [
    {
        name: "Home",
        href: "/",
    },
    {
        name: "Projects",
        href: "/",
    },
    {
        name: "Resume",
        href: "/",
    },
    {
        name: "Personal Info",
        href: "/",
    },
    {
        name: "Background",
        href: "/",
    },
];

export default Navbar;
