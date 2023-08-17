import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import QuestionTable from '../../components/QuestionTable';
import fetchData from '../../utils/apiUtils';

export const ListAllQuestions: React.FC = () => {
    const [questions, setQuestions] = useState([]);

    useEffect(() => {
        fetchData('v1/algorithm/questions', {method: 'GET'}).then((res) => {
            if (!res.err) {
                // Success!
                setQuestions(res.result);
            } else {
                // Error
                // TODO: add loading page and error page
            }
        });
    }, []);

    return (
        <Header>
            <QuestionTable data={questions}/>
        </Header>
    );
};

export default ListAllQuestions;
