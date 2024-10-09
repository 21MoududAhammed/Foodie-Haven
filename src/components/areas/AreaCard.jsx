/* eslint-disable react/prop-types */
export default function AreaCard({ image, area }) {
  return (
    <div className=" relative group">
      <img className="rounded-xl object-cover  w-full h-40 md:h-full transition-transform duration-300 transform group-hover:scale-95 group-focus:scale-95" src={image} alt="location" />

      <div className="absolute bg-white left-5 bottom-5 rounded-md px-2 ">
        <h2 className="text-xs sm:text-xl md:text-2xl text-secondary">{area}</h2>
      </div>
    </div>
  );
}
