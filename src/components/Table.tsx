export interface TableRow {
    name: String;
    labels: String[];
    difficulty: String;
    solutions: String;
}

export interface TableProps {
    data: TableRow[];
}

const Table = ({
    data
}: TableProps): JSX.Element => {
    return (
        <div className="w-full">
            <table className="w-full border-collapse">
                <thead>
                    <tr>
                        <th className="p-3 font-bold uppercase bg-indigo-400 text-gray-950 hidden border border-white lg:table-cell">Name</th>
                        <th className="p-3 font-bold uppercase bg-indigo-400 text-gray-950 hidden border border-white lg:table-cell">Labels</th>
                        <th className="p-3 font-bold uppercase bg-indigo-400 text-gray-950 hidden border border-white lg:table-cell">Difficulty</th>
                        <th className="p-3 font-bold uppercase bg-indigo-400 text-gray-950 hidden border border-white lg:table-cell">Solutions</th>
                    </tr>
                </thead>
                <tbody className="text-gray-700">
                    {data.map((row, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-indigo-50' : 'bg-indigo-100'}>
                            <td className="p-3 border-white text-gray-950 border cell">{row.name}</td>
                            <td className="labels p-3 border-white text-gray-950 border">{row.labels.map((label, idx) => (
                                <div key={idx} className="label">{label}</div>
                            ))}</td>
                            <td className="p-3 border-white text-gray-950 border">{row.difficulty}</td>
                            <td className="p-3 border-white text-gray-950 border">{row.solutions}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
