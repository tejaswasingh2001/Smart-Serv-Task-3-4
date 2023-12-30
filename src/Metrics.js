import companyMetrics from './constants/metrics'

export default function Metrics(){
    return(
        <div className='grid grid-rows-[auto_1fr] gap-2'>
            <div className='text-md font-bold'>Company Metrics</div>
            <div className='flex flex-wrap h-fit gap-y-[40px] justify-around gap-[10px]'>
                {
                    companyMetrics.map(({title,amount,id}) => (
                        <div className='grid px-4 py-2 bg-white w-[300px] h-[100px] border-l-8 border-green-600'>
                            <div className={`grid text-md font-semibold ${id ? id==='revenue'? 'text-green-700' : 'text-red-700' : ''}`}>
                                {amount}
                            </div>
                            <div className='grid text-md self-end font-semibold'>
                                {title}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}