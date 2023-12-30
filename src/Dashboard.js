import Metrics from "./Metrics"
import RevenueByJobLocation from "./RevenueByJobLocation"
import RevenueByJobType from "./RevenueByJobType"
export default function Dashboard() {
    return(
        <div className='grid bg-gray-300 w-fit h-fit'>
            <div className="grid gap-3 w-full h-full p-5">
                <Metrics/>
                <div className="grid grid-cols-[1fr_1fr] gap-[8px]">
                    <RevenueByJobLocation/>
                    <RevenueByJobType/>
                </div>
            </div>
        </div>
    )
}