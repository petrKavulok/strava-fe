import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { SportsData } from '../services/api';


ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
    data: SportsData[];
}

interface LabelData {
  text: string;
  image: string;
}

const countOccurrences = (data: string[]): { [key: string]: number } => {
    return data.reduce((acc, curr) => {
        acc[curr?.toLowerCase()] = (acc[curr?.toLowerCase()] || 0) + 1;
        return acc;
    }, {} as { [key: string]: number });
};

const splitData = (data: SportsData[]) => {
    const names = data
        .map((item) => item.mvpDistance?.split(' ')[0])
        .filter((name): name is string => name !== undefined);
    return countOccurrences(names);
}


export const DonutChart: React.FC<DonutChartProps> = ({ data }) => {

    

    const chartData = {
        labels: Object.keys(splitData(data)).map((key) => ({
            text: key.toUpperCase(),
            // image: `path/to/your/${key}.png`
            image: `src/assets/milacci/jess.png`
        })),
        datasets: [
            {
                data: Object.values(splitData(data)),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                    'rgba(255, 206, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
                labels: {
                    generateLabels: (chart: any) => {
                        const data = chart.data;
                        return data.labels.map((label: LabelData, index: number) => ({
                            text: label.text,
                            fillStyle: data.datasets[0].backgroundColor[index],
                            strokeStyle: data.datasets[0].borderColor[index],
                            lineWidth: 1,
                            hidden: false,
                            index: index
                        }));
                    },
                    usePointStyle: true,
                    render: (legendItem: any, context: any) => {
                        return ` ${legendItem.text}`;
                    }
                }
            },
            tooltip: {
                enabled: false,
                external: (context: any) => {
                    let tooltipEl = document.getElementById('chartjs-tooltip');
                    if (!tooltipEl) {
                        tooltipEl = document.createElement('div');
                        tooltipEl.id = 'chartjs-tooltip';
                        tooltipEl.innerHTML = '<div></div>';
                        document.body.appendChild(tooltipEl);
                    }

                    const tooltipModel = context.tooltip;
                    if (tooltipModel.opacity === 0) {
                        tooltipEl.style.opacity = '0';
                        return;
                    }

                    if (tooltipModel.body) {
                        const dataPoint = tooltipModel.dataPoints[0];
                        const label = context.chart.data.labels[dataPoint.dataIndex];

                        console.log('label', label)
                        console.log('dataPoint', dataPoint)
                        
                        const innerHtml = `
                            <div style="padding: 10px;">
                                <div style="display: flex; align-items: center;">
                                    <img src="${label.image}" style="width: 20px; height: 20px; margin-right: 5px;"/>
                                    <span style="font-size: 16px; font-weight: bold; color: black;">${label.text}: ${dataPoint.formattedValue}</span>
                                </div>
                            </div>`;
                        
                        const tooltipDiv = tooltipEl.querySelector('div');
                        if (tooltipDiv) {
                            tooltipDiv.innerHTML = innerHtml;
                        }
                    }

                    tooltipEl.style.opacity = '1';
                    tooltipEl.style.position = 'absolute';
                    tooltipEl.style.left = context.chart.canvas.offsetLeft + tooltipModel.caretX + 'px';
                    tooltipEl.style.top = context.chart.canvas.offsetTop + tooltipModel.caretY + 'px';
                    tooltipEl.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                    tooltipEl.style.borderRadius = '3px';
                    tooltipEl.style.boxShadow = '0 2px 5px rgba(0,0,0,0.2)';
                }
            },
            title: {
                display: true,
                text: 'MVP Statistics',
            },
        },
    };

    return (
        <>  
        <div style={{ width: '300px', height: '400px' }}>
            <Doughnut data={chartData} options={{
                ...options,
                // plugins: {
                //     ...options.plugins,
                //     legend: {
                //         display: false
                //     }
                // }
            }} />
            {/* <div style={{ marginTop: '20px' }}>
                {chartData.labels.map((label: LabelData, index: number) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center', margin: '5px 0' }}>
                        <img src={label.image} alt={label.text} style={{ width: '20px', height: '20px', marginRight: '5px' }}/>
                        <span>{label.text}</span>
                    </div>
                ))}
            </div> */}
        </div>
        </>
    );
};
