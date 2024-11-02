import gsap from "gsap";
import { useEffect } from "react";

interface ButtonProf {
    title: string;
    clasName?: string;
    href: string
}

export function Button({ title, clasName, href }: ButtonProf) {

    const handleButton = (url: string) => window.location.href = url

    useEffect(() => {
        const tl = gsap.timeline({ repeat: -1 });
        tl.to('.bi-arrow-right', {
            x: 30,
            xPercent: 0,
            duration: 1,
            yoyo: true, // this will alternate back 
            ease: "power1.inOut"
        })

        return () => {
            tl.kill();
        };
    }, [])

    return (
        <button onClick={() => handleButton(href)}
            className={`${clasName} md:py-6 text-lg text-white flex items-center hover:text-gray-400 transition-colors`}
        >
            <span className="flex-1">{title}</span>

            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-arrow-right ml-2 transform"
                viewBox="0 0 16 16"
            >
                <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                />
            </svg>
        </button>
    );
}
