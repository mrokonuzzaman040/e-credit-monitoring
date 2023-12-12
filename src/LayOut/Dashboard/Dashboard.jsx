import { Link, NavLink, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import useAxiosSecure from "../../hooks/useAxiosSecure";
// Icons
import { FaAlignLeft, FaRegUser, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaAd } from "react-icons/fa";
import { MdReviews, MdAddBox, MdOutlinePersonPin } from "react-icons/md";


const Dashboard = () => {
    const { user, logOut } = useAuth();
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
                <div className="mt-4 glass bg-indigo-300 min-h-full rounded-xl p-4">
                    <Outlet></Outlet>
                </div>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu p-2 w-80 min-h-full flex flex-col justify-between bg-base-200 text-base-content">
                    {/* admin nav links */}
                    <div className="flex flex-col gap-2">
                        {
                            isAdmin ? <>
                                <li>
                                    <NavLink className={({ isActive, isPending }) => isActive ? 'border-b-4 border-indigo-500' : 'hover:border-b-4 hover:border-indigo-500'} to="/dashboard/adminHome">
                                        <FaHome></FaHome>
                                        Admin Home</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive, isPending }) => isActive ? 'border-b-4 border-indigo-500' : 'hover:border-b-4 hover:border-indigo-500'} to="/dashboard/addReviews">
                                        <MdAddBox></MdAddBox >
                                        Add Review</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive, isPending }) => isActive ? 'border-b-4 border-indigo-500' : 'hover:border-b-4 hover:border-indigo-500'} to="/dashboard/manageReviews">
                                        <MdReviews></MdReviews>
                                        Manage Reviews</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive, isPending }) => isActive ? 'border-b-4 border-indigo-500' : 'hover:border-b-4 hover:border-indigo-500'} to="/dashboard/userInfos">
                                        <FaRegUser></FaRegUser>
                                        Member Info</NavLink>
                                </li>
                                <li>
                                    <NavLink className={({ isActive, isPending }) => isActive ? 'border-b-4 border-indigo-500' : 'hover:border-b-4 hover:border-indigo-500'} to="/dashboard/allUsers">
                                        <FaUsers></FaUsers>
                                        All Members</NavLink>
                                </li>

                            </>
                                :
                                <>
                                    <li>
                                        <NavLink className={({ isActive, isPending }) => isActive ? 'border-b-4 border-indigo-500' : 'hover:border-b-4 hover:border-indigo-500'} to="/dashboard/userHome">
                                            <FaHome></FaHome>
                                            Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({ isActive, isPending }) => isActive ? 'border-b-4 border-indigo-500' : 'hover:border-b-4 hover:border-indigo-500'} to="/dashboard/credit-score">
                                            <FaCalendar></FaCalendar>
                                            Check Score</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({ isActive, isPending }) => isActive ? 'border-b-4 border-indigo-500' : 'hover:border-b-4 hover:border-indigo-500'} to="/dashboard/score-monitor">
                                            <FaShoppingCart></FaShoppingCart>
                                            Score Monitor</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({ isActive, isPending }) => isActive ? 'border-b-4 border-indigo-500' : 'hover:border-b-4 hover:border-indigo-500'} to="/dashboard/paymentHistory">
                                            <FaAd></FaAd>
                                            Payment History</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className={({ isActive, isPending }) => isActive ? 'border-b-4 border-indigo-500' : 'hover:border-b-4 hover:border-indigo-500'} to="/dashboard/scoretHistory">
                                            <FaList></FaList>
                                            Report History</NavLink>
                                    </li>
                                </>
                        }
                    </div>
                    {/* shared nav links */}
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
                                <NavLink to="/dashboard/contact">
                                    <FaEnvelope></FaEnvelope>
                                    Contact</NavLink>
                            </li>
                        </div>

                        <div className="">
                            <li>
                                <NavLink to="/dashboard/settings">
                                    <MdOutlinePersonPin></MdOutlinePersonPin>
                                    Settings</NavLink>
                            </li>
                            <li>
                                {/* <NavLink to={'#'}> */}
                                <button className="bg-wite border-4 border-red-600 rounded" onClick={handleLogOut} >Logout</button>
                                {/* </NavLink> */}
                            </li>
                        </div>
                    </div>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;