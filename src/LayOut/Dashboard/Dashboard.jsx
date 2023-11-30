import { Link, NavLink, Outlet } from "react-router-dom";
import useAdmin from "../../hooks/useAdmin";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useEffect } from "react";
import { useState } from "react";

// Icons
import { FaAlignLeft, FaRegUser, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaAd } from "react-icons/fa";
import { MdReviews, MdAddBox, MdOutlinePersonPin } from "react-icons/md";


const Dashboard = () => {
    const { user } = useAuth();
    const { logOut } = useAuth();
    const [isAdmin] = useAdmin();
    const [userData, setUserData] = useState({});
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const axiosSecure = useAxiosSecure();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosSecure.get(`singleuser/${user.email}`);
                setUserData(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [axiosSecure, user.email]);


    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col p-10">
                <div className="flex justify-between items-center bg-indigo-300 p-4 rounded-lg">
                    <div className="lg:text-center">
                        <h2 className="text-2xl">Welcome to Dashboard, {userData.first_name}</h2>
                    </div>
                    <div className="lg:hidden">
                        <label htmlFor="my-drawer-2" className="btn items-center justify-center btn-square btn-primary drawer-button"><FaAlignLeft ></FaAlignLeft></label>
                    </div>
                </div>
                <div className="mt-4 bg-indigo-300 min-h-full rounded-xl p-4">
                    <Outlet></Outlet>
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                    {/* admin nav links */}
                    <div className="">
                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink to="/dashboard/adminHome">
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addReviews">
                                        <MdAddBox></MdAddBox >
                                        Add Review</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageReviews">
                                        <MdReviews></MdReviews>
                                        Manage Reviews</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/userInfos">
                                        <FaRegUser></FaRegUser>
                                        Member Info</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allUsers">
                                        <FaUsers></FaUsers>
                                        All Members</NavLink>
                                </li>

                            </>
                                :
                                <>
                                    <li>
                                        <NavLink to="/dashboard/userHome">
                                            <FaHome></FaHome>
                                            Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/credit-score">
                                            <FaCalendar></FaCalendar>
                                            Check Score</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/score-monitor">
                                            <FaShoppingCart></FaShoppingCart>
                                            Score Monitor</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/paymentHistory">
                                            <FaAd></FaAd>
                                            Payment History</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/scoretHistory">
                                            <FaList></FaList>
                                            Report History</NavLink>
                                    </li>
                                </>
                        }
                    </div>
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <div className="grid grid-cols-1 justify-between">
                        <div className="">
                            <li>
                                <NavLink to="/">
                                    <FaHome></FaHome>
                                    Home</NavLink>
                            </li>
                            <li>
                                <NavLink to="/order/salad">
                                    <FaSearch></FaSearch>
                                    Services</NavLink>
                            </li>
                            <li>
                                <NavLink to="/order/contact">
                                    <FaEnvelope></FaEnvelope>
                                    Contact</NavLink>
                            </li>
                        </div>

                        <div className="">
                            <li>
                                <NavLink to="/dashboard/profile">
                                    <MdOutlinePersonPin></MdOutlinePersonPin>
                                    Settings</NavLink>
                            </li>
                            <li>
                                <Link to={'#'}>
                                    <button onClick={handleLogOut} >Logout</button>
                                </Link>
                            </li>
                        </div>
                    </div>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;