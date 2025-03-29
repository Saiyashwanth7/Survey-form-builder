import React from 'react';
import { Bar } from 'react-chartjs-2';

const Analytics = ({ surveyData }) => {
    const data = {
        labels: surveyData.map(item => item.question),
        datasets: [
            {
                label: 'Responses',
                data: surveyData.map(item => item.responses),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <div>
            <h2>Survey Analytics</h2>
            <Bar data={data} options={options} />
        </div>
    );
};

export default Analytics;