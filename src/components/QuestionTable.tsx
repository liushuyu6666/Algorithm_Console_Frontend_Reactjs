import SolutionsDropdown from './SolutionsDropdown';

export interface SimplifiedLabel {
    labelId: string;
    name: string;
    url: string;
}

export interface Solution {
    language: string;
    url: string;
    description: string;
}

export interface QuestionTableRow {
    questionId: string;
    readableId: string;
    labels: SimplifiedLabel[];
    difficulty: string;
    from: string;
    solutions: Solution[];
}

export interface QuestionTableProps {
    data: QuestionTableRow[];
}

const QuestionTable = ({ data }: QuestionTableProps): JSX.Element => {
    return (
        <div className="w-full">
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-indigo-400 text-gray-950 hidden border border-white lg:table-cell">
                            Name
                        </th>
                        <th className="p-3 font-bold uppercase bg-indigo-400 text-gray-950 hidden border border-white lg:table-cell">
                            Labels
                        </th>
                        <th className="p-3 font-bold uppercase bg-indigo-400 text-gray-950 hidden border border-white lg:table-cell">
                            Difficulty
                        </th>
                        <th className="p-3 font-bold uppercase bg-indigo-400 text-gray-950 hidden border border-white lg:table-cell">
                            Solutions
                        </th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {data.map((row, index) => (
                        <tr
                            id={row.questionId}
                            key={index}
                            className={
                                index % 2 === 0
                                    ? 'bg-indigo-50'
                                    : 'bg-indigo-100'
                            }
                        >
                            <td
                                className="p-3 border-white text-gray-950 border cell"
                                style={{ width: '20%' }}
                            >
                                <a href={row.from}>{row.readableId}</a>
                            </td>
                            <td
                                className="p-3 border-white text-gray-950 border cell"
                                style={{ width: '60%' }}
                            >
                                <div className="labels">
                                    {row.labels.map((label, idx) => (
                                        <div key={idx} className="label">
                                            <a href={label.url}>{label.name}</a>
                                        </div>
                                    ))}
                                </div>
                            </td>
                            <td
                                className="p-3 border-white text-gray-950 border cell text-center"
                                style={{ width: '5%'}}
                            >
                                {row.difficulty}
                            </td>
                            <td
                                className="p-3 border-white text-gray-950 border cell text-center"
                                style={{ width: '15%' }}
                            >
                                <SolutionsDropdown solutions={row.solutions} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default QuestionTable;
