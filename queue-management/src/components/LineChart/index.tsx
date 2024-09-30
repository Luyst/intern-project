// LineChart.tsx
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
                const myChart = new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: labels,
                        datasets: [
                            {
                                label: 'Số liệu hàng ngày',
                                data: data,
                                fill: true,
                                borderColor: 'rgba(75, 192, 192, 1)',
                                tension: 0.4, // Tăng giá trị tension để bo tròn các đường
                            },
                        ],
                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true,
                            },
                        },
                        plugins: {
                            tooltip: {
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
