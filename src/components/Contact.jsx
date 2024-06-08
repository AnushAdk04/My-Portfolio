import React from 'react';

const Contact = () => {

    return (

        <>
        
        <h1 className='text-5xl underline text-center font-bold pb-10'>Contact Me</h1>

        <div id='contact' className='main-container bg-gradient-to-r from-pink-600 to bg-purple-600 flex justify-center items-center'>

            <form action='https://getform.io/f/pboxwqoa' method='post' className="w-full max-w-lg">

                <fieldset className="p-4 rounded-lg">

                    <legend className="text-center text-3xl text-white">Contact Information</legend>

                    <div className="mb-4">

                        <label className="block mb-1 text-2xl text-white">Full Name:</label>

                        <input
                            type='text'
                            name='fullName'
                            placeholder='eg: Ram Sharma'
                            required
                            className="w-full p-2 rounded-md"
                        />

                    </div>

                    <div className="mb-4">

                        <label className="block mb-1 text-2xl text-white">E-mail:</label>

                        <input
                            type='email'
                            name='email'
                            placeholder='eg: xyz@gmail.com'
                            required
                            className="w-full p-2 rounded-md"
                        />
                        
                    </div>

                    <div className="mb-4">

                        <label className="block mb-1 text-2xl text-white">Message:</label>

                        <textarea
                            name='message'
                            placeholder='Send Message'
                            required
                            className="w-full p-2 rounded-md resize-none"
                            style={{ resize: 'none' }}
                        />

                    </div>

                    <div className="flex justify-center">

                        <button type='submit' className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-md mr-2">Submit</button>

                        <button type='reset' className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded-md text-white">Reset</button>

                    </div>

                </fieldset>

            </form>

        </div>

        </>
    );
};

export default Contact;
