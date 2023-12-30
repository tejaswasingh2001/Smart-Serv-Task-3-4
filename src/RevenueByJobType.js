import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { revenueByJobType } from './constants/charts'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export default function RevenueByJobType() {
    const options = {
        scales:{
            x:{
                ticks:{
                    stepSize:20000
                }
            }
        },
        indexAxis: 'y',
        elements: {
            bar: {
                borderWidth: 2,
            },
        },
        responsive: true,
        plugins: {
            legend: {
                position: 'right',
                display:false
            },
            title: {
                display: true,
                text: 'Revenue for November 2019',
                position:'bottom'
            },
        },
    };
    return (
        <div className='grid grid-rows-[auto_1fr]'>
            <div className='grid font-bold text-md'>
                Reveue By Job Type
            </div>
            <Bar className='bg-white shadow-[rgba(99,_99,_99,_0.2)_0px_2px_8px_0px]' data={revenueByJobType} options={options} />
        </div>
    )
}