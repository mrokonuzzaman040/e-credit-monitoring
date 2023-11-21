import { FaArrowRight } from "react-icons/fa";


const Card = () => {
    return (
        <div className="mt-28 mb-20">
            <div>
                <h1 className="text-3xl font-bold max-w-7xl mx-auto mb-8">Take control of your Credit Health ..</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto gap-4">
                <div className="card bg-indigo-50 shadow-xl py-6" data-aos="flip-up" data-aos-duration="1500">
                    <div className="card-body">
                        <h2 className="card-title text-2xl mb-4">Fraud Alerts of Credit</h2>
                        <p>A fraud alert is free and notifies creditors to take extra steps to verify your identity before extending credit.</p>
                        <div className="card-actions flex items-center">
                            Get Started <FaArrowRight className="hover:text-indigo-700 text-xl"></FaArrowRight>
                        </div>
                    </div>
                </div>
                <div className="card  bg-indigo-50 shadow-xl py-6" data-aos="flip-up" data-aos-duration="1500">
                    <div className="card-body">
                        <h2 className="card-title text-2xl mb-4">Credit Freeze & Unfreeze</h2>
                        <p>A credit freeze is the best way to help prevent new accounts from being opened in your name.</p>
                        <div className="card-actions flex items-center ">
                            Get Started <FaArrowRight className="hover:text-indigo-700 text-xl"></FaArrowRight>
                        </div>
                    </div>
                </div>
                <div className="card  bg-indigo-50 shadow-xl py-6" data-aos="flip-up" data-aos-duration="1500">
                    <div className="card-body">
                        <h2 className="card-title text-2xl mb-4">Free Annual Credit Report</h2>
                        <p>Visit to learn how you can request your free U.S. credit report by mail.</p>
                        <div className="card-actions flex items-center ">
                            Get Started <FaArrowRight className="hover:text-indigo-700 text-xl"></FaArrowRight>
                        </div>
                    </div>
                </div>
                <div className="card  bg-indigo-50 shadow-xl py-6" data-aos="flip-up" data-aos-duration="1500">
                    <div className="card-body">
                        <h2 className="card-title text-2xl mb-4">Credit Challenge Resolution</h2>
                        <p>Disputes are an important tool to take control of your credit health. </p>
                        <div className="card-actions flex items-center">
                            Get Started <FaArrowRight className="hover:text-indigo-700 text-xl"></FaArrowRight>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;


