import Marquee from "react-fast-marquee";
const ThirdBanner = () => {
    return (
        <div className="hero min-h-[30vh] bg-indigo-100 p-10">
            <div className="hero-content text-center">
                <div className="">
                    <h1 className="text-5xl font-semibold mb-4">Make sure your credit stays right-side-up with <span className="text-indigo-500">S</span>wipe<span className="text-indigo-500">D</span>efend Credit Monitoring.</h1>
                    <Marquee speed={100}>
                    See your credit score now and stay on top of it with updates available daily !!!
                    </Marquee>
                    <button className="relative overflow-hidden btn  border-indigo-500 group mt-4 ">
                        <span className="relative z-10 transition-colors group-hover:text-white px-6 ">Start Now</span>
                        <span className="absolute inset-0 bg-indigo-500 transition-all duration-500 transform scale-x-0 origin-left group-hover:scale-x-50"></span>
                        <span className="absolute inset-0 bg-indigo-500 transition-all duration-500 transform scale-x-0 origin-right group-hover:scale-x-50"></span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ThirdBanner;