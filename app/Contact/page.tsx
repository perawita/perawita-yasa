"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/button";
import Title from "@/components/stack";
import Modal from "@/components/modal";
import gsap from "gsap";
import axios from "axios";

export default function Contact() {
    const [modalState, setModalState] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalStatus, setModalStatus] = useState('');
    const [modalEnd, setModalEnd] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        gsap.from('.contact', {
            x: 0,
            opacity: 1,
            delay: 0.5,
            ease: 'back.in'
        });
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setModalState(true);
        setModalMessage('Try send data.....');
        axios.post('/api/emails', formData, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(function (response) {
                if (response.status === 201) {
                    // Respons sukses, lakukan sesuatu
                    console.log("Respons berhasil:", response.data);
                } else {
                    // Respons diterima tapi mungkin bukan status sukses yang diinginkan
                    console.log("Respons dengan status tidak diharapkan:", response.status);
                }
                setModalStatus('Success');
                setModalMessage('Success send email to owner');
                setModalEnd(true);
            })
            .catch(function (error) {
                if (error.response) {
                    // Server merespons dengan status error (di luar 2xx)
                    console.log("Error data:", error.response.data);
                    console.log("Error status:", error.response.status);
                    console.log("Error headers:", error.response.headers);
                } else if (error.request) {
                    // Permintaan dibuat tapi tidak ada respons
                    console.log("Error request:", error.request);
                } else {
                    // Terjadi kesalahan lain dalam pengaturan permintaan
                    console.log('Error', error.message);
                }
                console.log("Error config:", error.config);
                setModalStatus('Error');
                setModalMessage('Error send email to owner somthing is wrong from server');
                setModalEnd(true);
            });

    };

    const handleGotoEmail = () => {
        window.location.href = 'mailto:perawitayasa@gmail.com';
    }

    return (
        <section className="text-left space-y-6">
            <Title>Contact.</Title>
            <div className="text-lg">
                <div className="flex text-lg">
                    <p
                        key={0}
                        className="px-3 paragraf text-white text-lg"
                        style={{
                            '--index': 0,
                        } as React.CSSProperties}>
                        Get in touch or shoot me an email directly on
                    </p>
                    <button onClick={() => handleGotoEmail()} className="text-white underline font-semibold" rel="noopener noreferrer">
                        <b>perawitayasa@gmail.com</b>
                    </button>
                </div>
            </div>
            <br />
            <form onSubmit={handleSubmit} method="POST" className="contact grid gap-4 text-lg text-gray-600">
                <div className="flex flex-col">
                    <input
                        placeholder="Name"
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="p-2 focus:text-white border border-gray-700 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="flex flex-col">
                    <input
                        placeholder="Email"
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="p-2 focus:text-white border border-gray-700 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                <div className="flex flex-col">
                    <textarea
                        placeholder="Message"
                        name="message"
                        id="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="p-2 focus:text-white text-gray-600 border border-gray-700 bg-transparent rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    ></textarea>
                </div>

                <div>
                    <button
                        type="submit"
                        className="px-4 py-2 p-2 border border-gray-700 bg-transparent text-white rounded hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        Submit
                    </button>
                </div>
            </form>


            <Button title="go back home" href="/" />
            {modalState && <Modal
                setModalState={setModalState}
                message={modalMessage}
                status={modalStatus}
                end={modalEnd}
            />
            }
        </section>
    )
}