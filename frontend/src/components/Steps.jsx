import { steps, underline, pizza } from "../../public/assets"
import Heading from "./Heading"

const Steps = () => {
    return (
        <div>
            <div className="relative ">
                <Heading title="Easy Order Steps " className="text-white" img={underline} /></div>
            <img src={steps} alt="" />

            <div className="bg-orange-500 w-full h-auto grid grid-flow-row lg:grid-flow-col  p-4 lg:p-0">
                <div className="mt-5 lg:mt-15 ml-4 lg:ml-10">
                    <span className="font-serif font-semibold text-xl md:text-4xl lg:text-5xl text-white block">Always Hot Food Deliverd At Your Door Step</span>
                    <p className="mt-3 text-sm md:text-base lg:text-lg text-black">Enjoy the convenience of freshly prepared, hot meals delivered straight to your doorstep. Our service ensures your food arrives piping hot and ready to eat, every time.</p>
                </div>
                <div className="flex justify-center lg:justify-end mt-5 lg:mt-0">
                    <img src={pizza} className="h-[200px] md:h-[300px] lg:h-[350px]" alt="Hot Pizza" />
                </div>
            </div>


        </div>
    )
}

export default Steps