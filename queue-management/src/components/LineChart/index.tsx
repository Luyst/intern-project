import React, { useEffect } from 'react';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

interface LineChartProps {
    data: number[];
    labels: string[];
}

const LineChart: React.FC<LineChartProps> = ({ data, labels }) => {
    const chartRef = React.useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (chartRef.current) {
            const ctx = chartRef.current.getContext('2d');
            if (ctx) {
                const gradient = ctx.createLinearGradient(0, 0, 0, 400);
                gradient.addColorStop(0, 'rgba(206, 221, 255, 1)');
                gradient.addColorStop(1, 'rgba(206, 221, 255, 0)');

                const myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: '',
                                data: data,
                                fill: true,
                                backgroundColor: gradient,
                                borderColor: 'rgba(81, 133, 247, 1)',
                                tension: 0.4,
                                pointRadius: 10,
                                pointBorderColor: 'rgba(255, 255,255, 0)',
                                pointBackgroundColor: 'rgba(255, 255,255, 0)',
                                pointHoverRadius: 8,
                                pointHoverBorderWidth: 4,
                                pointHoverBorderColor: 'rgba(255,255,255,1)',
                                pointHoverBackgroundColor: 'rgba(81, 133, 247, 1)',
                            },
                        ],
                    },
                    options: {
                        responsive: true,
                        scales: {
                            x: {
                                grid: {
                                    display: false,
                                },
                            },
                            y: {
                                beginAtZero: true,
                                max: 6000,
                            },
                        },
                        plugins: {
                            tooltip: {
                                backgroundColor: 'rgba(81, 133, 247, 1)',

                                bodyColor: 'white',

                                displayColors: false,
                                callbacks: {
                                    label: function (tooltipItem) {
                                        return tooltipItem.formattedValue;
                                    },
                                },
                            },
                        },
                    },
                });

                return () => {
                    myChart.destroy(); // Dọn dẹp khi component unmount
                };
            }
        }
    }, [data, labels]);

    return <canvas ref={chartRef} width="400" height="200" />;
};

export default LineChart;
