export default function ResumeGrid({ hidden }: { hidden: string }) {

    return (
        <div
            className={`w-full h-full overflow-hidden rounded-lg shadow-lg bg-white mt-6 mb-4`}
        >
            <div className="py-5 w-[100%] top-6 left-[5%] text-black px-4 md:px-6 lg:px-8">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-left">Ida Bagus Perawita Yasa</h1>
                <p className="text-base md:text-lg text-left mt-2">+62-898-3220-569 • perawitayasa@gmail.com</p>
                <p className="text-base md:text-lg text-left">West Pemenang Pemenang Barat Pemenang North Lombok Regency West Nusa Tenggara</p>

                <hr className="my-5 border-black" />

                <h2 className="text-lg md:text-xl font-bold mb-2">Full Stack Web Development</h2>
                <p className="text-base md:text-lg leading-relaxed">
                    As a freelance web developer experienced in both frontend and backend development, I specialize in
                    creating responsive designs while also solving complex business logic. You can rely on me to find
                    efficient and scalable solutions for your business needs.
                </p>

                <div className={`${hidden}`}>
                <hr className="my-5 border-black" />

                    <h2 className="text-lg md:text-xl font-bold mb-2">Skill and Tools</h2>
                    <ul className={`flex flex-wrap list-none p-0`}>
                        {[
                            'Html',
                            'Laravel',
                            'Tailwind',
                            'CSS',
                            'Next.js',
                            'VS Code',
                            'JavaScript',
                            'Bootstrap 5',
                            'Git',
                            'MySQL',
                        ].map((skill, index) => (
                            <li key={index} className="flex-1 min-w-[30%] sm:min-w-[45%] md:min-w-[30%] mb-2 text-base md:text-lg">{skill}</li>
                        ))}
                    </ul>

                    <hr className={`my-5 border-black`} />

                    <h2 className={`text-lg md:text-xl font-bold mb-2`}>Experience</h2>
                    <p ><strong>Freelance Web Development</strong> (Jan 2024 - Present)</p>
                    <p >
                        Starting conversations to reach an agreement that works for everyone, designing the database setup and
                        business logic based on the technology we have agreed on, and completing tasks on time as planned together.
                    </p>

                    <hr className={`my-5 border-black`} />

                    <div className={`flex flex-col md:flex-row justify-between`}>
                        <div className={`mb-4 md:mb-0`}>
                            <h2 className={`text-lg md:text-xl font-bold mb-2`}>Education & Certifications</h2>
                            <p className="text-base md:text-lg font-bold">University of Technology Mataram</p>
                            <p className="text-base md:text-lg px-2">Studying as an IT student</p>
                            <p className="text-base md:text-lg font-bold">Dicoding Indonesia</p>
                            <p className="text-base md:text-lg px-2">Belajar Dasar AI</p>
                            <p className="text-base md:text-lg px-2">Belajar Dasar Pemrogramman JavaScript</p>
                        </div>

                        <div>
                            <h2 className={`text-lg md:text-xl font-bold mb-2`}>Everyday Language</h2>
                            <p className="text-base md:text-lg">Indonesia - Active</p>
                            <p className="text-base md:text-lg">English - Passive</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
