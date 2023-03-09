import React, { useState } from 'react'

import { validateEmail } from '../utils/helpers'

function ContactForm() {

    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and message
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !userName) {
            setErrorMessage('Email or username is invalid');
            return;
        }
        if (!message) {
            console.log('Please enter a message');
            setErrorMessage(
                `Enter a Message`
            );
            return;
        }

        const mailto = `mailto:johnfrom209@gmail.com?subject=Message from ${userName}&body=${message}`;
        window.location.href = mailto;
        // mailto:`${email}?subject=${userName}&body=${message}`
        //how to send email
        alert(`Hello ${userName}, Thank you for your message!`);

        setUserName('');
        setMessage('');
        setEmail('');
        setErrorMessage('');
    }

    return (
        <div className='mt-20 mb-44 xl:mb-20  font-bold place-content-center flex justify-center'>
            <div className='bg-sColorll rounded-xl p-5 xl:w-4/12 border-4 border-mColord'>
                <h4 className='text-5xl text-mColord ml-5  mb-5 flex justify-center'>Contact Me</h4>
                <h3 className='text-xl text-mColord ml-5  mb-5 flex justify-center'>johnfrom209@gmail.com</h3>
                <form className="form place-self-center text-xl ">
                    <input
                        className='block mx-auto my-5 w-10/12 h-10 rounded-xl p-5'
                        value={userName}
                        name="userName"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Name"
                    />
                    <input
                        className='block mx-auto my-5 w-10/12 h-10 rounded-xl p-5'
                        value={email}
                        name="email"
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                    <textarea
                        className='block mx-auto my-5 w-10/12 h-full rounded-xl p-5'
                        value={message}
                        name="message"
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Message"
                    />
                    <button className='bg-mColord my-5 block p-2 rounded mx-auto hover:bg-mColorll active:bg-mColordd' type="button" onClick={handleFormSubmit}>Submit</button>
                </form>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ContactForm;