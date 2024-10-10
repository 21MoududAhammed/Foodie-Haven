import logo from "../../assets/logo.png";
import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";

export default function Footer() {
  return (
    <footer className=" py-56 bg-red-200">
      <div className="max-w-screen-2xl mx-auto font-gilory grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20">
        <div className="flex justify-center items-center gap-3">
          <img className="w-10 h-10 rounded-full" src={logo} alt="logo" />
          <h2 className="text-2xl font-bold">Foodie Haven</h2>
        </div>
        <div className="flex justify-center items-center gap-8 text-3xl">
          <p>
            <FaFacebook />
          </p>
          <p>
            <FaLinkedin />
          </p>
          <p>
            <FaInstagramSquare />
          </p>
          <p>
            <IoLogoYoutube />
          </p>
        </div>
      </div>
    </footer>
  );
}
