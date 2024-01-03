"use client"

import React, { useState, useCallback, useRef, Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'


const CreatePostModal = () => {
    const [open, setOpen] = useState(false)
    const cancelButtonRef = useRef(null)
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        // axios
    }
    return <>
        <button type='button' onClick={() => setOpen(true)} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Create Post
        </button>
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                <form onSubmit={onSubmit}>
                                    <div className="bg-white px-4 pb-4 pt-5 sm:p-4 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-gray-900">
                                                    Create Post
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <div className="w-full mb-4 border border-gray-200 rounded-lg h-full">
                                                        <div className="rounded-t-lg flex items-center justify-between px-3 py-2 border-b bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                                            <div className="flex flex-wrap items-center ">
                                                                <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4 w-full">
                                                                    <div>
                                                                        <label className="block mb-2 text-sm font-medium dark:text-white" htmlFor="file_input">Upload file</label>
                                                                        <input name="image" className="block w-full text-sm  border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" accept="image/png, image/jpeg, image/jpg" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <input value="6582d8a00507c8dc58b260ed" type="hidden" name="topicId" />
                                                        <div className="px-4 py-2  rounded-b-lg">
                                                            <textarea id="editor" name="body" rows={8} className="block w-full px-0 text-sm border-0 focus:ring-0 outline-0" placeholder="Write an article..." required></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                            <button
                                                type="submit"
                                                className="inline-flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 sm:ml-3 sm:w-auto"
                                            >
                                                Submit
                                            </button>
                                            <button
                                                type="button"
                                                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                                onClick={() => setOpen(false)}
                                                ref={cancelButtonRef}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root >
    </>
}

export default CreatePostModal


