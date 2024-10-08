import heroImg from "../../assets/hero.webp";
export default function Banner() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 ps-5">
      <div className="flex flex-col justify-center  justify- font-gilory space-y-5">
        <h1 className="text-7xl font-bold text-primary">Fast, Fresh</h1>
        <h1 className="text-7xl font-bold">
          <span className="text-primary">& Right</span>{" "}
          <span className="text-secondary">To Your Door</span>
        </h1>
        <h3 className='text-2xl text-secondary'>Order dishes from favorite restaurants near you.</h3>
      </div>
      <div className="flex justify-center items-center ">
        <img className="w-1/2" src={heroImg} alt="hero section image" />
      </div>
    </div>
  );
}
