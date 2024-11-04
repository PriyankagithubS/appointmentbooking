import { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)
    const {token,setToken}=useContext(AppContext)
    const logout=()=>{
        setToken(false)
        localStorage.removeItem('token')
        
    }

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            {/* Logo */}
            <img className='w-44 cursor-pointer' src={assets.logo} alt="Medico Logo" />

            {/* Mobile Menu Toggle Button */}
            <div className='md:hidden'>
                <button onClick={() => setShowMenu(!showMenu)}>
                    <img src={assets.menu_icon} alt="Menu" className='w-6' />
                </button>
            </div>

            {/* Desktop Menu */}
            <ul className={`hidden md:flex items-start gap-5 font-medium`}>
                <NavLink to='/'>
                    <li className='py-1'>HOME</li>
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-1'>ALL DOCTORS</li>
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>ABOUT</li>
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>CONTACT</li>
                </NavLink>
            </ul>

            {/* Mobile Menu */}
            {showMenu && (
                <ul className={`absolute top-16 left-0 w-full bg-white flex flex-col items-center gap-5 font-medium md:hidden`}>
                    <NavLink to='/' onClick={() => setShowMenu(false)}>
                        <li className='py-2'>HOME</li>
                    </NavLink>
                    <NavLink to='/doctors' onClick={() => setShowMenu(false)}>
                        <li className='py-2'>ALL DOCTORS</li>
                    </NavLink>
                    <NavLink to='/about' onClick={() => setShowMenu(false)}>
                        <li className='py-2'>ABOUT</li>
                    </NavLink>
                    <NavLink to='/contact' onClick={() => setShowMenu(false)}>
                        <li className='py-2'>CONTACT</li>
                    </NavLink>
                </ul>
            )}

            {/* User Profile and Account */}
            <div className='flex items-center gap-4'>
                {token ? (
                    <div className='flex items-center gap-2 cursor-pointer group relative'>
                        <img className='w-8 h-8 rounded-full' src={assets.profile_pic} alt="" />
                        <img className='w-2.5' src={assets.dropdown_icon} alt="" />
                        <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                <p
                                    onClick={() => navigate('/my-profile')}
                                    className='text-gray-800 hover:text-blue-600 cursor-pointer'>
                                    My Profile
                                </p>
                                <p
                                    onClick={() => navigate('/my-appointments')}
                                    className='text-gray-800 hover:text-blue-600 cursor-pointer'>
                                    My Appointments
                                </p>
                                <p
                                    onClick={() => {
                                        logout();
                                        navigate('/');
                                    }}
                                    className='text-gray-800 hover:text-blue-600 cursor-pointer'>
                                    Logout
                                </p>

                            </div>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => navigate('/login')} className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block'>
                        Create Account
                    </button>
                )}
            </div>
        </div>
    )
}

export default Navbar;
