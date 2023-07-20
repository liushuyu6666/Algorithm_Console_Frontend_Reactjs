import { useState } from 'react';
import { InputProps } from '../../components/Input';
import { SubmitProps } from '../../components/Submit';
import Form from '../../components/Form';
import { useNavigate } from 'react-router-dom';
import fetchData from '../../utils/apiUtils';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/user/userSlice';

export const Login: React.FC = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const [message, setMessage] = useState({
        email: '',
        password: '',
    });

    const [isValid, setIsValid] = useState({
        email: true,
        password: true,
    });

    const [buttonFeatures, setButtonFeatures] = useState({
        isSpin: false,
        done: false,
        doneMessage: '',
    });

    const [prompt, setPrompt] = useState({
        message: '',
        isValid: false,
    });

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputId = event.target.id;
        const inputValue = event.target.value;

        setFormData({
            ...formData,
            [inputId]: inputValue,
        });

        // Validate email and password.
        if (['email', 'password'].includes(inputId) && inputValue.length > 0) {
            setMessage({
                ...message,
                [inputId]: '',
            });
            setIsValid({
                ...isValid,
                [inputId]: true,
            });
        }

        // Reset Prompt
        setPrompt({
            message: '',
            isValid: true,
        });
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (formData.email.length === 0) {
            setMessage({
                ...message,
                email: 'Email address should not be empty!',
            });
            setIsValid({
                ...isValid,
                email: false,
            });
            return;
        }

        if (formData.password.length === 0) {
            setMessage({
                ...message,
                password: 'Password should not be empty!',
            });
            setIsValid({
                ...isValid,
                password: false,
            });
            return;
        }

        setButtonFeatures({
            ...buttonFeatures,
            isSpin: true,
        });

        fetchData('v1/jays/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                password: formData.password,
                email: formData.email,
            }),
        })
            .then((res) => {
                if (!res.err) {
                    // Success!
                    setPrompt({
                        message: res.msg,
                        isValid: true,
                    });
                    setButtonFeatures({
                        done: true,
                        doneMessage: 'Login successfully',
                        isSpin: false,
                    });
                    localStorage.setItem('Authorization', res.result.token);
                    dispatch(setUser(res.result.username))
                    navigate('/');
                } else {
                    // Error
                    setPrompt({
                        message: res.msg,
                        isValid: false,
                    });
                    setButtonFeatures({
                        done: false,
                        doneMessage: '',
                        isSpin: false,
                    });
                }
            })
            .catch((err) => {
                // Error
                setPrompt({
                    message: err.message,
                    isValid: false,
                });
                setButtonFeatures({
                    done: false,
                    doneMessage: '',
                    isSpin: false,
                });
            });
    };

    const inputBoxes: InputProps[] = [
        {
            label: 'Email address',
            name: 'email',
            id: 'email',
            autoComplete: 'email',
            value: formData.email,
            type: 'email',
            message: message.email,
            isValid: isValid.email,
            handleChange,
        },
        {
            label: 'Password',
            name: 'password',
            id: 'password',
            autoComplete: 'password',
            value: formData.password,
            type: 'password',
            message: message.password,
            isValid: isValid.password,
            handleChange,
        },
    ];

    const button: SubmitProps = {
        label: 'Submit',
        handleSubmit,
        isSpin: buttonFeatures.isSpin,
        done: buttonFeatures.done,
        doneMessage: buttonFeatures.doneMessage,
    };

    return (
        <Form
            inputBoxes={inputBoxes}
            button={button}
            formName="Login to your account"
            prompt={prompt}
        />
    );
};

export default Login;
