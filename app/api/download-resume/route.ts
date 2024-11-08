import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

export async function GET() {
  try {
    const browser = await puppeteer.connect({
        browserURL: 'ws://127.0.0.1:9222/devtools/browser/944f91ee-3df5-4f2a-bc87-0fbcde8ccc85'
    });

    const page = await browser.newPage();

    // Set the HTML content to convert into a PDF
    await page.setContent(
      `
        <html>
        <head>
            <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body>
            <div class="w-full h-full overflow-hidden rounded-lg shadow-lg bg-white mb-4">
                <div class="py-5 w-[100%] top-6 left-[5%] text-black px-4 md:px-6 lg:px-8">
                    <h1 class="text-xl md:text-2xl lg:text-3xl font-bold text-left">Ida Bagus Perawita Yasa</h1>
                    <p class="text-base md:text-lg text-left mt-2">+62-898-3220-569 • perawitayasa@gmail.com</p>
                    <p class="text-base md:text-lg text-left">West Pemenang Pemenang Barat Pemenang North Lombok Regency West
                        Nusa Tenggara</p>

                    <hr class="my-5 border-black" />

                    <h2 class="text-lg md:text-xl font-bold mb-2">Full Stack Web Development</h2>
                    <p class="text-base md:text-lg leading-relaxed">
                        As a freelance web developer experienced in both frontend and backend development, I specialize in
                        creating responsive designs while also solving complex business logic. You can rely on me to find
                        efficient and scalable solutions for your business needs.
                    </p>

                    <hr class="my-5 border-black" />

                    <h2 class="text-lg md:text-xl font-bold mb-2">Skill and Tools</h2>
                    <div class="grid grid-cols-3 gap-4">
                        <div>
                            <ol class="pl-4">
                                <li class="text-base md:text-lg">HTML</li>
                                <li class="text-base md:text-lg">CSS</li>
                                <li class="text-base md:text-lg">JavaScript</li>
                                <li class="text-base md:text-lg">MySQL</li>
                            </ol>
                        </div>
                        <div>
                            <ol class="pl-4">
                                <li class="text-base md:text-lg">Laravel</li>
                                <li class="text-base md:text-lg">Next.js</li>
                                <li class="text-base md:text-lg">Bootstrap 5</li>
                            </ol>
                        </div>
                        <div>
                            <ol class="pl-4">
                                <li class="text-base md:text-lg">Tailwind</li>
                                <li class="text-base md:text-lg">VS Code</li>
                                <li class="text-base md:text-lg">Git</li>
                            </ol>
                        </div>
                    </div>

                    <hr class="my-5 border-black" />

                    <h2 class="text-lg md:text-xl font-bold mb-2">Experience</h2>
                    <p><strong>Freelance Web Development</strong> (Jan 2024 - Present)</p>
                    <p>
                        Starting conversations to reach an agreement that works for everyone, designing the database setup and
                        business logic based on the technology we have agreed on, and completing tasks on time as planned
                        together.
                    </p>

                    <hr class="my-5 border-black" />

                    <div class="flex flex-col md:flex-row justify-between">
                        <div class="mb-4 md:mb-0">
                            <h2 class="text-lg md:text-xl font-bold mb-2">Education & Certifications</h2>
                            <p class="text-base md:text-lg font-bold">University of Technology Mataram</p>
                            <p class="text-base md:text-lg px-2">Studying as an IT student</p>
                            <p class="text-base md:text-lg font-bold">Dicoding Indonesia</p>
                            <p class="text-base md:text-lg px-2">Belajar Dasar AI</p>
                            <p class="text-base md:text-lg px-2">Belajar Dasar Pemrogramman JavaScript</p>
                        </div>

                        <div>
                            <h2 class="text-lg md:text-xl font-bold mb-2">Everyday Language</h2>
                            <p class="text-base md:text-lg">Indonesia - Active</p>
                            <p class="text-base md:text-lg">English - Passive</p>
                        </div>
                    </div>
                </div>
            </div>
        </body>
        </html>
    `);

    // Generate PDF with Puppeteer
    const pdfBuffer = await page.pdf({ format: "a4" });

    await browser.close();

    // Return the PDF buffer in the response
    return new NextResponse(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json({ error: "" + error }, { status: 500 });
  }
}
