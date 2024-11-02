"use client";
import { Button } from "@/components/button";
import Title from "@/components/stack";

export default function About() {
    return (
        <section className="text-left space-y-6">
            <div className="text-lg font-semibold">
                <Title>About Me.</Title>
            </div>
            <div className="border-l-2 border-gray-500 space-y-4">
                <div>
                    <h1
                        key={0}
                        className="px-2 paragraf text-white text-lg"
                        style={{
                            '--index': 0,
                        } as React.CSSProperties}>Web developer</h1>
                </div>
                <p
                    key={0}
                    className="px-5 paragraf text-white text-lg"
                    style={{
                        '--index': 0,
                    } as React.CSSProperties}>
                    Grow as a web developer by adopting the latest technologies and continuously learning to stay at the forefront of innovation and keep pace with evolving tech trends.
                </p>

                <div>
                    <h1
                        key={0}
                        className="px-2 paragraf text-white text-lg"
                        style={{
                            '--index': 0,
                        } as React.CSSProperties}>Back end</h1>
                </div>
                <p
                    key={1}
                    className="px-5 paragraf text-white text-lg"
                    style={{
                        '--index': 1,
                    } as React.CSSProperties}>
                    Keep advancing as a backend developer to deliver secure data solutions and craft optimal business logic for every application you build, using technologies like Node.js for JavaScript and Laravel for PHP.
                </p>
                <div>
                    <h1
                        key={0}
                        className="px-2 paragraf text-white text-lg"
                        style={{
                            '--index': 0,
                        } as React.CSSProperties}>Front end</h1>
                </div>
                <p
                    key={2}
                    className="px-5 paragraf text-white text-lg"
                    style={{
                        '--index': 2,
                    } as React.CSSProperties}>
                    Continuously strive to create user-friendly and responsive designs, ensuring websites look appealing and function seamlessly across all devices.
                </p>
            </div>

            <br />

            <div className="text-lg font-semibold">
                <Title>My Reads.</Title>
            </div>

            <div className="border-l-2 border-gray-500 space-y-4">
                <div className="flex">
                    <a href="https://www.dicoding.com/certificates/1RXY20QN9XVM"
                        target="_blank"
                        key={0}
                        className="flex-1 px-2 paragraf text-white text-lg"
                        style={{
                            '--index': 0,
                        } as React.CSSProperties}>Belajar Dasar Pemrograman JavaScript</a>


                    <div className="flex right-0 justify-between items-center space-x-3 text-white text-right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="flex-1 bi bi-calendar4-event" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                            <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <p
                            key={1}
                            className="px-5 paragraf text-white text-lg"
                            style={{
                                '--index': 1,
                            } as React.CSSProperties}>
                            Oct 12, 2024</p>
                    </div>
                </div>
                <p
                    key={0}
                    className="px-5 paragraf text-white text-lg"
                    style={{
                        '--index': 0,
                    } as React.CSSProperties}>
                    In this class, I delved into basic techniques in JavaScript, studied data types, learned consistent coding styles, explored OOP, and much more.
                </p>

                <div className="flex">
                    <a href="https://www.dicoding.com/certificates/6RPNY49GQZ2M"
                        target="_blank"
                        key={0}
                        className="flex-1 px-2 paragraf text-white text-lg"
                        style={{
                            '--index': 0,
                        } as React.CSSProperties}>Belajar Dasar AI</a>

                    <div className="flex right-0 justify-between items-center space-x-3 text-white text-right">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="flex-1 bi bi-calendar4-event" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1z" />
                            <path d="M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <p
                            key={1}
                            className="px-5 paragraf text-white text-lg"
                            style={{
                                '--index': 1,
                            } as React.CSSProperties}>
                            Oct 12, 2024</p>
                    </div>
                </div>
                <p
                    key={1}
                    className="px-5 paragraf text-white text-lg"
                    style={{
                        '--index': 1,
                    } as React.CSSProperties}>
                    In this class, I learned about what AI is and what is needed to build AI, as well as how to create effective Machine Learning models.
                </p>
                <div>
                    <h1
                        key={0}
                        className="px-2 paragraf text-white text-lg"
                        style={{
                            '--index': 0,
                        } as React.CSSProperties}>keep learning somthing new </h1>
                </div>
                <p
                    key={2}
                    className="px-5 paragraf text-white text-lg"
                    style={{
                        '--index': 2,
                    } as React.CSSProperties}>
                    is continuing to deepen and continue to study developments 😁
                </p>
            </div>
            <Button title="see project" href="/Project" />
        </section>
    );
}
