export interface SubmitProps {
    label: string;
    handleSubmit: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isSpin: boolean;
    done: boolean;
    doneMessage: string;
}

const Submit = ({
    label,
    handleSubmit,
    isSpin,
    done,
    doneMessage,
}: SubmitProps): JSX.Element => {
    let button;
    if (isSpin) {
        button = (
            <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                <span className="animate-spin rounded-full h-6 w-3 border-t-2 border-white"></span>
            </button>
        );
    } else {
        button = (
            <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
                {label}
            </button>
        );
    }

    let nestedElement;
    if (done) {
        nestedElement = (<span className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 bg-green-600">{doneMessage}</span>)
    } else {
        nestedElement = button;
    }
    return (
        <div>
            {nestedElement}
        </div>
    );
};

export default Submit;
