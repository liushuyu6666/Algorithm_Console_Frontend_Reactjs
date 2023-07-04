export interface PromptProps {
    message?: string;
    isValid?: boolean;
}

const Prompt = ({
    message,
    isValid,
}: PromptProps): JSX.Element => {
    return (
        <div>
            <p className={"block text-sm font-medium leading-6 " + (isValid ? "text-green-600" : "text-red-600")}>{message}</p>
        </div>
    );
};

export default Prompt;