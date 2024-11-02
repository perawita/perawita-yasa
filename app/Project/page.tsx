"use client";

import React, { useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

import { Button } from "@/components/button";
import Title from "@/components/stack";
import gsap from "gsap";

export default function Project() {

    useEffect(() => {
        gsap.from('.project', {
            x: 0,
            opacity: 1,
            delay: 0.5,
            ease: 'back.in'
        });
    }, []);

    return (
        <section className="text-left space-y-6">
            <Title>Projects.</Title>
            <div className="flex text-lg">
                <p
                    key={0}
                    className="px-5 paragraf text-white text-lg"
                    style={{
                        '--index': 0,
                    } as React.CSSProperties}>
                    Go to my github to get full information about the app
                </p>

                <a className="text-white underline font-semibold" href="https://github.com/perawita?tab=repositories" target="_blank" rel="noopener noreferrer">
                    <b>Github</b>
                </a>
            </div>

            <div className="project h-screen w-full">
                <LayoutGrid cards={cards} />
            </div>

            <Button title="go to my resume" href="/Resume" />
        </section>
    )
}

const Skeleton = ({ Title, Description, Link, NameLink }: { Title: string; Description: string; Link: string; NameLink: string }) => {
    return (
        <div>
            <p className="font-bold md:text-4xl text-xl text-white">
                {Title}
            </p>
            <p className="font-normal text-base text-white underline">
                <a href={Link} target="_blank" rel="noopener noreferrer">Show in {NameLink}</a></p>
            <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
                {Description}
            </p>
        </div>
    );
};

const cards = [
    {
        id: 1,
        content: <Skeleton
            Title="System Informasi SPP"
            Description="Saya mengembangkan aplikasi berbasis web ini sebagai alat bantu bagi pihak administrasi sekolah untuk menangani pembayaran SPP siswa. Sebagai pengembang penuh, saya bertanggung jawab atas seluruh proses mulai dari perancangan arsitektur, pengembangan frontend dengan UI yang mudah digunakan, hingga backend untuk pengelolaan data pembayaran yang aman."
            Link="https://"
            NameLink="Github" />,
        className: "md:col-span-2",
        thumbnail: "/project/2.png",
    },
    {
        id: 2,
        content: <Skeleton
            Title="Air Terjun Benang Kelambu"
            Description="Aplikasi ini saya rancang dan kembangkan untuk menyediakan informasi bagi turis, baik asing maupun domestik, tentang Air Terjun Benang Kelambu. Fitur utama mencakup peta lokasi, ulasan, dan informasi kontak, yang saya bangun secara keseluruhan, termasuk implementasi API dan integrasi peta."
            Link="https://"
            NameLink="Github" />,
        className: "col-span-1",
        thumbnail: "/project/3.png",
    },
    {
        id: 3,
        content: <Skeleton
            Title="Verifikasi Nomor"
            Description="Dalam aplikasi ini, saya berfokus pada pengembangan backend untuk memverifikasi nomor telepon pengguna secara aman. Tugas saya meliputi pengaturan sistem verifikasi otomatis melalui API dan memastikan keamanan data pengguna."
            Link="https://"
            NameLink="Github" />,
        className: "col-span-1",
        thumbnail: "/project/4.png",
    },
    {
        id: 4,
        content: <Skeleton
            Title="Analisis Data Saham"
            Description="Saya mengembangkan aplikasi ini sebagai alat bantu untuk analisis data saham global, dengan fitur untuk menghitung margin of safety menggunakan rumus Graham. Dalam pengembangannya, saya bertanggung jawab penuh atas integrasi data pasar saham, pembuatan algoritme analisis, dan antarmuka pengguna yang interaktif."
            Link="https://"
            NameLink="Github" />,
        className: "md:col-span-2",
        thumbnail: "/project/1.png",
    },
    {
        id: 5,
        content: <Skeleton
            Title="Admin Page Verifikasi Nomor"
            Description="Sebagai pengembang backend, saya membangun halaman admin untuk aplikasi verifikasi nomor. Halaman ini mengelola data pengguna dan log verifikasi, memberikan kontrol yang lengkap bagi admin untuk memantau dan mengelola verifikasi secara efisien."
            Link="https://"
            NameLink="Github" />,
        className: "col-span-1",
        thumbnail: "/project/5.png",
    },
    {
        id: 6,
        content: <Skeleton
            Title="Portal Perpustakaan"
            Description="Aplikasi perpustakaan ini saya kembangkan sebagai alat bantu bagi admin dan pengguna. Admin dapat mengelola buku dan data peminjaman, sedangkan pengguna dapat melakukan pencarian dan peminjaman buku secara online. Saya bertanggung jawab atas keseluruhan arsitektur dan integrasi fitur untuk kelancaran sistem."
            Link="https://"
            NameLink="Github" />,
        className: "md:col-span-2",
        thumbnail: "/project/6.png",
    },
    {
        id: 7,
        content: <Skeleton
            Title="E-commerce"
            Description="Sebagai proyek latihan, saya membuat aplikasi e-commerce yang responsif menggunakan Tailwind UI untuk mengukur keterampilan saya dalam membuat tampilan dan fitur-fitur e-commerce seperti katalog produk, keranjang belanja, dan sistem pembayaran."
            Link="https://"
            NameLink="Github" />,
        className: "md:col-span-2",
        thumbnail: "/project/7.png",
    },
];
