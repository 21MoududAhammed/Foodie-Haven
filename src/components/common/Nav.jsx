import logo from "../../assets/logo.png";
import { MdFavoriteBorder } from "react-icons/md";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineShoppingCart } from "react-icons/ai";
export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-8 py-3 shadow">
      <div className="flex justify-center items-center gap-2">
        <img className="w-12 rounded-full" src={logo} alt="logo" />
        <h2 className="text-2xl font-bold font-serif hidden sm:block">
          Foodie Haven
        </h2>
      </div>
      <div className="flex justify-center items-center gap-5">
        <ul className="flex justify-center items-center gap-3">
          <li>
            <p className="text-2xl">
              <MdFavoriteBorder />
            </p>
          </li>
          <li>
            <p className="text-2xl">
              <IoMdNotificationsOutline />
            </p>
          </li>
          <li>
            <p className="text-2xl">
              <AiOutlineShoppingCart />
            </p>
          </li>
        </ul>
        <div className="flex items-center justify-center gap-3">
          <div className="bg-red-400 w-10 h-10  rounded-full flex justify-center items-center">
            <p className='text-white font-bold text-xl'>M</p>
          </div>
          <div>
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
}
