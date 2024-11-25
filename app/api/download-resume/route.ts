import { NextResponse } from "next/server";
import puppeteer from "puppeteer";

import path from "path";
import fs from "fs";

export async function GET() {
  try {
    let pdfBuffer;

    if (process.env.NEXT_APP_ENVIRONMENTS === "Development") {
      const browser = await puppeteer.launch({
        executablePath: process.env.PUPPETEER_CACHE_DIR,
      });

      const page = await browser.newPage();

      // Konten HTML untuk diubah menjadi PDF
      await page.setContent(`
      <html>
        <head>
          <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        </head>
        <body class="bg-gray-100">
          <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
            <header class="border-b pb-4 mb-4">
              <h1 class="text-3xl font-bold">Ida Bagus Perawita Yasa</h1>
              <p class="text-gray-600">+62-898-3220-569 • perawitayasa@gmail.com</p>
              <p class="text-gray-600">West Pemenang, North Lombok Regency, West Nusa Tenggara</p>
            </header>

            <section class="mb-6">
              <h2 class="text-xl font-bold mb-2">Full Stack Web Development</h2>
              <p class="text-gray-700">
                As a freelance web developer experienced in both frontend and backend development, I specialize in
                creating responsive designs while solving complex business logic.
              </p>
            </section>

            <section class="mb-6">
              <h2 class="text-xl font-bold mb-2">Skill and Tools</h2>
              <div class="grid grid-cols-3 gap-4">
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>MySQL</li>
                </ul>
                <ul>
                  <li>Laravel</li>
                  <li>Next.js</li>
                  <li>Bootstrap 5</li>
                </ul>
                <ul>
                  <li>Tailwind</li>
                  <li>VS Code</li>
                  <li>Git</li>
                </ul>
              </div>
            </section>

            <section class="mb-6">
              <h2 class="text-xl font-bold mb-2">Experience</h2>
              <p><strong>Freelance Web Development</strong> (Jan 2024 - Present)</p>
              <p class="text-gray-700">
                Designing database setup, implementing business logic, and delivering projects on time.
              </p>
            </section>

            <section class="flex flex-col md:flex-row justify-between mb-6">
              <div>
                <h2 class="text-xl font-bold mb-2">Education & Certifications</h2>
                <p class="font-bold">University of Technology Mataram</p>
                <p class="text-gray-700">IT Student</p>
                <p class="font-bold">Dicoding Indonesia</p>
                <ul class="text-gray-700 list-disc list-inside">
                  <li>Belajar Dasar AI</li>
                  <li>Belajar Dasar Pemrogramman JavaScript</li>
                </ul>
              </div>
              <div>
                <h2 class="text-xl font-bold mb-2">Everyday Language</h2>
                <p>Indonesia - Active</p>
                <p>English - Passive</p>
              </div>
            </section>
          </div>
        </body>
      </html>
    `);

      // Membuat file PDF
      pdfBuffer = await page.pdf({ format: "a4" });

      await browser.close();
    } else {
      // Jika bukan di lingkungan Development, ambil file dari public folder
      const fileName = "perawita-yasa-resume.pdf";
      const filePath = path.resolve("./public/information", fileName);

      // Cek apakah file ada di public folder
      if (!fs.existsSync(filePath)) {
        return NextResponse.json({ error: "File not found" }, { status: 404 });
      }

      // Baca file dan masukkan ke dalam buffer
      pdfBuffer = fs.readFileSync(filePath);
    }

    // Mengembalikan buffer PDF
    return new Response(pdfBuffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="resume.pdf"',
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json(
      { error: "An error occurred while generating the PDF." },
      { status: 500 }
    );
  }
}
