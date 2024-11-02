'use client';

import React, { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react';
import { ExclamationTriangleIcon, ShieldExclamationIcon } from '@heroicons/react/24/outline';

interface ModalProps {
    setModalState: (state: boolean) => void;
    message: string;
    status: string;
    end: boolean;
}

const Modal: React.FC<ModalProps> = (props) => {
    const [open, setOpen] = useState(true);

    const closeModal = () => {
        setOpen(false);
        props.setModalState(false);
    };

    return (
        <Dialog open={open} onClose={() => setOpen(true)} className="relative z-10">
            <DialogBackdrop className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-300 ease-out" />

            <div className="fixed inset-0 z-10 w-full overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-6 md:p-8 lg:p-10">
                    <DialogPanel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all duration-300 ease-out my-8 w-full max-w-md sm:max-w-lg md:max-w-xl">
                        <div className="bg-white px-4 py-5 sm:px-6">
                            <div className="flex items-start">
                                <div
                                    className={`mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${
                                        props.status === 'Error' ? 'bg-red-100' : 'bg-green-100'
                                    } sm:h-10 sm:w-10`}
                                >
                                    {props.status === 'Error' ? (
                                        <ExclamationTriangleIcon aria-hidden="true" className="h-6 w-6 text-red-600" />
                                    ) : (
                                        <ShieldExclamationIcon aria-hidden="true" className="h-6 w-6 text-green-600" />
                                    )}
                                </div>
                                <div className="ml-4 text-left">
                                    <DialogTitle as="h3" className="text-base font-semibold leading-6 text-gray-900 sm:text-lg md:text-xl">
                                        Fetching data
                                    </DialogTitle>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500 sm:text-base md:text-lg">
                                            {props.message}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-50 px-4 py-3 flex flex-row-reverse sm:px-6">
                            {props.end && (
                                <>
                                    <button
                                        onClick={closeModal}
                                        className={`mt-3 inline-flex justify-center rounded-md ${
                                            props.status === 'Error'
                                                ? 'bg-red-600 hover:bg-red-500'
                                                : 'bg-green-600 hover:bg-green-500'
                                        } px-3 py-2 text-sm font-semibold text-white shadow-sm sm:w-auto`}
                                    >
                                        {props.status}
                                    </button>
                                    <button
                                        type="button"
                                        onClick={closeModal}
                                        className="mt-3 inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                    >
                                        Close
                                    </button>
                                </>
                            )}
                        </div>
                    </DialogPanel>
                </div>
            </div>
        </Dialog>
    );
};

export default Modal;
