import React, { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../auth.css';
import axios from '../../../services/api/axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faUser, faVoicemail } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../assets/logo.jpg';
import AuthInputField from '../../../components/AuthInptField';

const FORGOT_PASSWORD_URL = '/api/account/forgot-password';
const EMAIL_REGEX = /^[a-zA-Z][a-zA-Z0-9._%+-]*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const ForgotPasswordForm = () => {
    const errRef = useRef();
    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);
    const [loading, setLoading] = useState(false);
    const [isTokenSent, setIsTokenSent] = useState(false);
    const [errMsg, setErrMsg] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const result = EMAIL_REGEX.test(email);
        setValidEmail(result);
    }, [email])

    useEffect(() => {
        setErrMsg('');
    }, [email])

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post(FORGOT_PASSWORD_URL,
                JSON.stringify({email}),
                 {
                    headers: {
                        'Accept': '*/*',
                        'Content-Type': 'application/json',
                    },
                }
            );
            const data = response.data;
            console.log(data)

            if (data.message === 'Successful') {
                setIsTokenSent(true);
            };
        } catch (error) {
            if (!error.response) {
                setErrMsg('No Server Response');
            } else {
                setErrMsg(error.response.data.message)
            }

            errRef.current.focus();
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-white pt-16">
            {
                !isTokenSent ?
                (
                    <div className="">
                        <div className="flex justify-center">
                            <img src={Logo} />
                        </div>
                        <h2 className="text-2xl font-semibold mt-6 mb-4">Forgot Password</h2>
                        <h2 className="text-[15px] text-black text-opacity-60 mb-6">Kindly enter your email address</h2>
                        <p ref={errRef} className={errMsg ? "errmsg" :
                            "offscreen"} aria-live='asserive'>{errMsg}</p>
                        <form onSubmit={handleLogin}>
                            <div className="mb-4">
                                <AuthInputField
                                    label="Email"
                                    type='email'
                                    icon={faUser}
                                    validName={validEmail}
                                    valueName={email}
                                    id="contactEmail"
                                    onChange={(e) => setEmail(e.target.value)}
                                    setOnFocus={setEmailFocus}
                                    nameFocus={emailFocus}
                                    errNote={(
                                        <>
                                            Enter a valid email address
                                        </>
                                    )}
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-priColor text-white py-2 rounded-lg"
                                disabled={loading}
                            >
                                {loading ? 'Loading...' : 'Continue'}
                            </button>
                            <div className="text-center mt-4">
                                <Link to="/login" className="text-xs lg:text-sm">Go back to <span className='text-priColor hover:underline'> Log In</span></Link>
                            </div>
                        </form>
                    </div>
                ) :
                (
                    <div className="text-[13px]">
                        <div className="flex flex-col justify-center items-center gap-6 py-[20px] px-[40px] mb-8">
                            <FontAwesomeIcon icon={faCheckCircle} size='4x' style={{color: 'green'}} />
                            <p className='text-[13px] text-center'>Kindly click the link that was sent to your mail to reset your password.</p>
                        </div>
                        <Link to='/login' className='text-blue-800 hover:underline'>Go back to Login</Link>
                    </div>
                )
            }
        </div>
    );
};

export default ForgotPasswordForm;
