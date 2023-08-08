import Moon from '../assets/Sun.png'
import { Link } from 'react-router-dom'
import { BsXLg } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";



const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-6 shadow-sm bg-blue-300 rounded-3xl'>
        <div className='flex space-x-5'>
        <Link to={"/"}><span className=' text-white hover:text-blue-600 text-3xl uppercase'>Today</span></Link>
        </div>
        {/* <div className="flex justify-evenly items-center bg-blue-200 px-3 rounded-xl shadow-2xl">
          <div className="flex items-center">
            <FiSearch />
            <input
              className=" bg-blue-200 text-blue-900 font-semibold font placeholder:text-black px-4 py-2 outline-none focus:border-none "
              type="text"
              placeholder="Search for places..."
            />
          </div>
        </div>
        <div className='flex space-x-3'>
            <button className='rounded-full bg-black text-white shadow-2xl  w-10 h-10'>°C</button>
            <button className='rounded-full text-black bg-white shadow-2xl  w-10 h-10'>°F</button>
            <img className='rounded-xl bg-green-400  w-10 h-10 shadow-2xl' src={Moon} alt="" />
        </div> */}
    </div>
  )
}

export default Navbar