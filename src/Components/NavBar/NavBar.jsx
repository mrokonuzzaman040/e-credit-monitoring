import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png'
import { FaRegUserCircle } from "react-icons/fa";
const NavBar = () => {
    const links = <>
        <li>
           <Link to={'/'}>Product</Link>
        </li>
        <li><Link to={'/'}>Resources</Link></li>
        <li><Link to={'/'}>Services</Link></li>
        <li><Link to={'/'}>Insights</Link></li>
        <li><Link to={'/'}>Consumer Support</Link></li>
        <li><Link to={'/'}>About</Link></li>
        <li><Link to={'/login'}><FaRegUserCircle /> Member Login</Link></li>
    </>
    return (
        <div className="navbar shadow-xl py-4 px-6">
            <div className="navbar-start">
                <div className="dropdown">
                    <div className="drawer lg:hidden" style={{ zIndex: 10 }}>
                        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content">
                            <label htmlFor="my-drawer" className=" drawer-button"> <svg xmlns="http://www.w3.org/2000/svg" className="h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
                        </div>
                        <div className="drawer-side">
                            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
                                {
                                    links
                                }
                            </ul>
                        </div>
                    </div>

                </div>
                <Link><img className='h-[50px] invisible lg:visible' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end" style={{ zIndex: 1 }}>
                <button className="relative overflow-hidden btn  border-indigo-500 group btn-sm">
                    <Link to={'/register'} className="relative z-10 transition-colors group-hover:text-white px-6 ">Get Credit Monitoring</Link>
                    <span className="absolute inset-0 bg-indigo-500 transition-all duration-500 transform scale-x-0 origin-right group-hover:scale-x-100"></span>
                </button>
            </div>
        </div>
    );
};

export default NavBar;