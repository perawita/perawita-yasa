"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";

import { Button } from "@/components/button";
import Title from "@/components/stack";
import Modal from "@/components/modal";

import ResumeGrid from "@/components/ui/resume-grid";

export default function Resume() {
    const [modalState, setModalState] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const [modalStatus, setModalStatus] = useState('');
    const [modalEnd, setModalEnd] = useState(false);
    const [fullScreen, setFullScreen] = useState(
        {
            full: false,
            hidden: 'hidden'
        }
    );

    useEffect(() => {
        gsap.from('.resume', {
            x: 0,
            opacity: 1,
            delay: 0.5,
            ease: 'back.in'
        });
    }, []);

    const handleFullScreen = () => {
        setFullScreen(prevState => ({
            ...prevState,
            full: !prevState.full,
            hidden: prevState.full ? 'hidden' : 'block'
        }));
    }

    const handleDownloadPDF = async () => {
        try {
            setModalState(true);
            setModalMessage('Try get data.....');
            const response = await fetch('/api/download-resume', {
                method: 'GET',
            });

            if (response.ok) {
                const blob = await response.blob();
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'perawita-yasa-resume.pdf';
                document.body.appendChild(a);
                a.click();
                a.remove();
                setModalStatus('Success');
                setModalMessage('Success download perawita-yasa-resume.pdf');
                setModalEnd(true);
            } else {
                console.error('Failed to download PDF');
                setModalStatus('Error');
                setModalMessage('Failed to download PDF');
                setModalEnd(true);
            }

        } catch (e) {
            console.error(e);
            setModalStatus('Error');
            setModalMessage('Error download somthing is wrong from server');
            setModalEnd(true);
        }
    };

    return (
        <section className="text-left space-y-6">
            <Title>Resume.</Title>
            <div className="flex text-lg">
                <p
                    key={0}
                    className="px-3 paragraf text-white text-lg"
                    style={{
                        '--index': 0,
                    } as React.CSSProperties}>
                    View or download the resume
                </p>
                <button onClick={() => handleDownloadPDF()} className="text-white underline font-semibold" rel="noopener noreferrer">
                    <b>Download</b>
                </button>
            </div>
            <div className="resume grid gap-4 text-lg text-gray-600">
                <div className="md:relative">
                    <div className="flex justify-end items-center space-x-5 py-4 text-gray-600 z-20 transform -translate-x-5 translate-y-20">

                        <button onClick={() => handleFullScreen()} className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                fill="currentColor"
                                className="bi bi-arrows-angle-expand filter drop-shadow-lg"
                                viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M5.828 10.172a.5.5 0 0 0-.707 0l-4.096 4.096V11.5a.5.5 0 0 0-1 0v3.975a.5.5 0 0 0 .5.5H4.5a.5.5 0 0 0 0-1H1.732l4.096-4.096a.5.5 0 0 0 0-.707m4.344-4.344a.5.5 0 0 0 .707 0l4.096-4.096V4.5a.5.5 0 1 0 1 0V.525a.5.5 0 0 0-.5-.5H11.5a.5.5 0 0 0 0 1h2.768l-4.096 4.096a.5.5 0 0 0 0 .707" />
                            </svg>
                        </button>
                    </div>
                    <ResumeGrid hidden={fullScreen.hidden} />
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <Button title="go to contact" href="/Contact" />
            
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