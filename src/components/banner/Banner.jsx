import heroImg from "../../assets/hero.webp";
import { MdOutlineMyLocation } from "react-icons/md";

export default function Banner() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2  max-w-screen-2xl mx-auto px-5">
      <div className="flex flex-col justify-center  justify- font-gilory space-y-5">
        {/* headings  */}
        <h1 className=" text-4xl sm:text-6xl  md:text-7xl font-bold text-primary">Fast, Fresh</h1>
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold">
          <span className="text-primary">& Right</span>{" "}
          <span className="text-secondary">To Your Door</span>
        </h1>
        <h3 className=" text-xl sm:text-2xl text-secondary ">
          Order dishes from favorite restaurants near you.
        </h3>
        {/* search / find food  */}
        <div className="flex items-center justify-center border-2 border-primary rounded-md relative">
          <div className="w-full p-2">
            {" "}
            <input
              className="w-full py-3 px-2 focus:outline-none"
              type="text"
              name="search"
              id="search"
              placeholder="Enter the location"
            />{" "}
          </div>
          <div className="bg-primary w-40 h-full flex justify-center items-center">
            {" "}
            <button className="text-xl sm:text-2xl font-bold text-white">Find Food</button>
          </div>
          <div className="absolute right-28 sm:right-36 text-primary font-semibold ">
            <button className="flex justify-center items-center gap-1">
              <MdOutlineMyLocation /> 
              {/* Locate me */}
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img className="w-3/4" src={heroImg} alt="hero section image" />
      </div>
    </div>
  );
}
