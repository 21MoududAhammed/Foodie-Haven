import delivery from "../../assets/svg/delivery.svg";
import location from "../../assets/svg/location.svg";
import mobile from "../../assets/svg/mobile.svg";

export default function Features() {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-0 max-w-screen-2xl mx-auto px-5 text-secondary font-gilory text-center my-16 sm:my-28">
      {/* delivery  */}
      <div className="flex flex-col justify-center items-center px-10 space-y-3">
        <img src={delivery} alt="" />
        <h3 className="text-2xl text-secondary"> Super Fast Delivery</h3>
        <p>
          Faster than your cravings can blink. Experience the super-fast
          delivery and get fresh food.
        </p>
      </div>
      {/* location  */}
      <div className="flex flex-col justify-center items-center px-10 space-y-3">
        <img src={location} alt="" />
        <h3 className="text-2xl">Live Order Tracking</h3>
        <p>
          Track your order while it is delivered to your doorstep from the
          restaurant.
        </p>
      </div>
      {/* mobile  */}
      <div className="flex flex-col justify-center items-center space-y-3 px-10">
        <img src={mobile} alt="" />
        <h3 className="text-2xl">Your Favorite Restaurants</h3>
        <p>
          Find the best and nearest top your favorite restaurants from your
          selected location.
        </p>
      </div>
    </section>
  );
}
