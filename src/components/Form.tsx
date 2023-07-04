import Input, { InputProps } from './Input';
import Submit, { SubmitProps } from './Submit';
import logo from '../logo.svg';

export interface FormProps {
    inputBoxes: InputProps[];
    buttons: SubmitProps[];
    formName: string;
}

const Form = ({ inputBoxes, buttons, formName }: FormProps): JSX.Element => {
    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    src={logo}
                    alt="Jays Demo"
                    className="mx-auto h-20 w-auto"
                    width={100}
                    height={24}
                />
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                    {formName}
                </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form className="space-y-6" action="#" method="POST">
                    {inputBoxes.map((inputBox, idx) => (
                        <Input
                            key={idx}
                            label={inputBox.label}
                            name={inputBox.name}
                            id={inputBox.id}
                            autoComplete={inputBox.autoComplete}
                            value={inputBox.value}
                            type={inputBox.type}
                            message={inputBox.message}
                            isValid={inputBox.isValid}
                            handleChange={inputBox.handleChange}
                        />
                    ))}
                    {buttons.map((button, idx) => (
                        <Submit
                            key={idx}
                            label={button.label}
                            handleSubmit={button.handleSubmit}
                            isSpin={button.isSpin}
                            done={button.done}
                            doneMessage={button.doneMessage}
                        />
                    ))}
                </form>
            </div>
        </div>
    );
};

export default Form;
