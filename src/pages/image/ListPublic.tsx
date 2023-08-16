import Header from '../../components/Header';
import Table from '../../components/Table';

const data = [
    {name: "happy", labels: ["end", "asjflksgs", "sljflksfnlsk", "ljasffjljflk"], difficulty: "Easy", solutions: "edit"},
    {name: "happy", labels: ["end", "asjflksgs", "sljflksfnlsk", "ljasffjljflk"], difficulty: "Easy", solutions: "edit"},
    {name: "happy", labels: ["end", "asjflksgs", "sljflksfnlsk", "ljasffjljflk"], difficulty: "Easy", solutions: "edit"},
    {name: "happy", labels: ["end", "asjflksgs", "sljflksfnlsk", "ljasffjljflk"], difficulty: "Easy", solutions: "edit"}
]

export const ListPublic: React.FC = () => {
    

    return (
        <Header>
            <Table data={data}/>
        </Header>
    );
};

export default ListPublic;
