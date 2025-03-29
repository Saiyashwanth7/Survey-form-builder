import React, { useEffect, useState } from 'react';

const SurveyList = () => {
    const [surveys, setSurveys] = useState([]);

    useEffect(() => {
        const fetchSurveys = async () => {
            try {
                const response = await fetch('/api/surveys/');
                const data = await response.json();
                setSurveys(data);
            } catch (error) {
                console.error('Error fetching surveys:', error);
            }
        };

        fetchSurveys();
    }, []);

    return (
        <div>
            <h2>Survey List</h2>
            <ul>
                {surveys.map(survey => (
                    <li key={survey.id}>
                        {survey.title}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SurveyList;