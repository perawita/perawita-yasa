'use client';

import React, { useEffect, useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ExclamationTriangleIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';

interface ModalProps {
    setModalState: (state: boolean) => void;
    message: string;
    status: string;
    end: boolean;
}

const Modal: React.FC<ModalProps> = ({ setModalState, message, status, end }) => {
    const [open, setOpen] = useState(true);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    const closeModal = () => {
        setOpen(false);
        setModalState(false);
    };

    return (
        <Dialog open={open} onClose={closeModal} className="relative z-10">
            {/* Backdrop */}
            <DialogBackdrop className="fixed inset-0 bg-gray-900 bg-opacity-50 transition-opacity duration-300 ease-in-out" />

            {/* Modal Container */}
            <div className="fixed inset-0 z-20 flex items-center justify-center overflow-y-auto">
                <DialogPanel className="relative w-full max-w-md sm:max-w-lg md:max-w-xl bg-white rounded-lg shadow-lg transform transition-all duration-300 ease-in-out">
                    {isLoading ? (
                        // Loading State
                        <div className="flex flex-col items-center justify-center py-10">
                            <div className="loader border-t-4 border-gray-300 rounded-full w-12 h-12 animate-spin"></div>
                            <p className="mt-4 text-sm text-gray-500">Loading...</p>
                        </div>
                    ) : (
                        // Content after loading
                        <>
                            {/* Modal Header */}
                            <div className="flex items-start bg-white px-5 py-4 border-b border-gray-200">
                                <div
                                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                                        status === 'Error' ? 'bg-red-100' : 'bg-green-100'
                                    }`}
                                >
                                    {status === 'Error' ? (
                                        <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
                                    ) : (
                                        <ShieldExclamationIcon className="h-6 w-6 text-green-600" />
                                    )}
                                </div>
                                <div className="ml-4">
                                    <DialogTitle
                                        as="h3"
                                        className="text-lg font-semibold leading-6 text-gray-900 sm:text-xl"
                                    >
                                        {status === 'Error' ? 'An Error Occurred' : 'Success'}
                                    </DialogTitle>
                                    <p className="mt-1 text-sm text-gray-500 sm:text-base">
                                        {message}
                                    </p>
                                </div>
                            </div>

                            {/* Modal Footer */}
                            {end && (
                                <div className="flex justify-end gap-2 bg-gray-50 px-5 py-4">
                                    <button
                                        onClick={closeModal}
                                        className={`inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none transition duration-200 ease-in-out ${
                                            status === 'Error'
                                                ? 'bg-red-600 hover:bg-red-500'
                                                : 'bg-green-600 hover:bg-green-500'
                                        }`}
                                    >
                                        {status === 'Error' ? 'Retry' : 'Continue'}
                                    </button>
                                    <button
                                        onClick={closeModal}
                                        className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100"
                                    >
                                        Close
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </DialogPanel>
            </div>
        </Dialog>
    );
};

export default Modal;
