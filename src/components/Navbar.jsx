import { MdMovie } from "react-icons/md"
import { BsWindowSidebar } from "react-icons/bs"
import { SlFilm } from "react-icons/sl"
import { BiMoviePlay } from "react-icons/bi"
import { RiMovieFill } from "react-icons/ri"


function Navbar() {
  return (
    <div>
      <div className="navbar bg-base-200">
        <div className="navbar-start gap-24">
          <div className="dropdown left-7 ">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <MdMovie className="w-80 h-8 " />
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content gap-5 mt-3 z-[1] p-1 shadow rounded-box w-20">
              <li><a><BsWindowSidebar className="w-2/3 h-11" /></a></li>
              <li><a><SlFilm className="w-2/3 h-11" /></a></li>
              <li><a><BiMoviePlay className="w-2/3 h-11" /></a></li>
              <li><a><RiMovieFill className="w-2/3 h-11" /></a></li>
            </ul>
          </div>
          <div className="navbar-start">
            <input type="text" placeholder="Search for movies or TV series" className="input text-white input-bordered w-96" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar