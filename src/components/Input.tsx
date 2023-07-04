export interface InputProps {
    label: string;
    name: string;
    id: string;
    autoComplete: string;
    value: string;
    type: string;
    message?: string;
    isValid?: boolean;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
    label,
    name,
    id,
    autoComplete,
    value,
    type,
    message,
    isValid,
    handleChange,
}: InputProps): JSX.Element => {
    return (
        <div>
            <label
                htmlFor={name}
                className="block text-sm font-medium leading-6 text-gray-900"
            >
                {label}
            </label>
            <div className="mt-2">
                <input
                    id={id}
                    name={name}
                    type={type}
                    autoComplete={autoComplete}
                    value={value}
                    onChange={handleChange}
                    required
                    className="border border-gray-30 block w-full rounded-md py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <p className={"block text-sm font-medium leading-6 " + (isValid ? "text-green-600" : "text-red-600")}>{message}</p>
        </div>
    );
};

export default Input;