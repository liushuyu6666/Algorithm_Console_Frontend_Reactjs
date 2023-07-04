import { useEffect, useState } from 'react';
import { InputProps } from '../../components/Input';
import { SubmitProps } from '../../components/Submit';
import Form from '../../components/Form';

export const Register: React.FC = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [message, setMessage] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [isValid, setIsValid] = useState({
        username: true,
        email: true,
        password: true,
        confirmPassword: true,
    });

    const [buttonFeatures, setButtonFeatures] = useState({
        isSpin: false,
        done: false,
        doneMessage: "",
    });
    
    useEffect(() => {
        // Validate confirm password
        if (
            formData.password.length > 0 &&
            formData.confirmPassword.length > 0
        ) {
            if (formData.confirmPassword !== formData.password) {
                setMessage({
                    ...message,
                    confirmPassword: 'Passwords mismatch!',
                });
                setIsValid({
                    ...isValid,
                    confirmPassword: false,
                });
            } else {
                setMessage({
                    ...message,
                    confirmPassword: 'Passwords match.',
                });
                setIsValid({
                    ...isValid,
                    confirmPassword: true,
                });
            }
        }
    }, [formData]);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputId = event.target.id;
        const inputValue = event.target.value;

        setFormData({
            ...formData,
            [inputId]: inputValue,
        });

        // Validate username, email and password.
        if (
            ['username', 'email', 'password'].includes(inputId) &&
            inputValue.length > 0
        ) {
            setMessage({
                ...message,
                [inputId]: '',
            });
            setIsValid({
                ...isValid,
                [inputId]: true,
            });
        }
    };

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (formData.username.length === 0) {
            setMessage({
                ...message,
                username: 'Username should not be empty!',
            });
            setIsValid({
                ...isValid,
                username: false,
            });
            return;
        }

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

        if (formData.password !== formData.confirmPassword) {
            setMessage({
                ...message,
                confirmPassword: 'Passwords mismatch!',
            });
            setIsValid({
                ...isValid,
                confirmPassword: false,
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

        // TODO: refactor
        setButtonFeatures({
            ...buttonFeatures,
            isSpin: true
        });
        fetch('http://localhost:8080/v1/jays/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: formData.username,
                password: formData.password,
                email: formData.email,
            }),
        }).then((res) => {
            return res.json();
        }).then((res) => {
            // Success!
            // TODO: jump to login page
            setButtonFeatures({
                ...buttonFeatures,
                isSpin: false,
                done: true,
                doneMessage: res.msg
            });
            setMessage({
                username: "",
                password: "",
                email: "",
                confirmPassword: ""
            })
        });
    };

    const inputBoxes: InputProps[] = [
        {
            label: 'Username',
            name: 'username',
            id: 'username',
            autoComplete: 'username',
            value: formData.username,
            type: 'text',
            message: message.username,
            isValid: isValid.username,
            handleChange,
        },
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
        {
            label: 'Confirm password',
            name: 'confirm_password',
            id: 'confirmPassword',
            autoComplete: 'password',
            value: formData.confirmPassword,
            type: 'password',
            message: message.confirmPassword,
            isValid: isValid.confirmPassword,
            handleChange,
        },
    ];

    const buttons: SubmitProps[] = [
        {
            label: 'Submit',
            handleSubmit,
            isSpin: buttonFeatures.isSpin,
            done: buttonFeatures.done,
            doneMessage: buttonFeatures.doneMessage
        },
    ];

    return (
        <Form
            inputBoxes={inputBoxes}
            buttons={buttons}
            formName="Set up your account"
        />
    );
};

export default Register;
