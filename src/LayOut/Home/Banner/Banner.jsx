import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import bannerImg from '../../../assets/b-2.png'
const Banner = () => {
    return (
        <div className="hero min-h-[80vh] max-w-7xl mx-auto mb-8">
            <div className="hero-content flex-col md:flex-row ">
                <div className="text-left lg:w-1/2" data-aos="fade-up" data-aos-duration="1500">
                    <div className="badge badge-ghost mb-6">Personal</div>
                    <p className='text-2xl'>Life can not remain upside-down indefinitely.</p>
                    <h1 className="py-8 text-3xl md:text-4xl lg:text-6xl">
                        <span className="block mb-4">Ensure your credit </span> <span className="block mb-4">stays in good shape with</span>
                        <span className='border-b-4 rounded-md font-bold border-indigo-500'><span className='text-indigo-500'>S</span>wipe<span className='text-indigo-500'>D</span>efend®</span>.
                    </h1>
                    <button className="relative overflow-hidden btn  border-indigo-500 group mt-4 ">
                        <span className="relative z-10 transition-colors group-hover:text-white px-6 ">Start Now</span>
                        <span className="absolute inset-0 bg-indigo-500 transition-all duration-500 transform scale-x-0 origin-left group-hover:scale-x-50"></span>
                        <span className="absolute inset-0 bg-indigo-500 transition-all duration-500 transform scale-x-0 origin-right group-hover:scale-x-50"></span>
                    </button>
                </div>
                <div className="md:w-1/2 lg:w-1/2" data-aos="fade-down" data-aos-duration="1500">
                    <img className="object-cover " src={bannerImg} alt="Banner" />
                </div>
            </div>
        </div>
    );
};

export default Banner;