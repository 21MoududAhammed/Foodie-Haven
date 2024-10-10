import partner from "../../assets/partnersImg/partner_1.webp";
import hero from "../../assets/partnersImg/partner_2.webp";
import ButtonPrimary from "../common/ButtonPrimary";

export default function MakePartner() {
  return (
    <section className="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-10 my-40">
      {/* make partner  */}
      <div className="md:flex justify-center items-center gap-5 mb-10 md:mb-0">
        <div className="md:max-w-56 md:max-h-72 mb-8 md:mb-0">
          <img
            className="w-full h-full object-cover  rounded-md"
            src={partner}
            alt=""
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl text-secondary font-bold">
            List Your Restaurant on Foodie Haven
          </h2>
          <p className="text-secondary">
           {` Would you like millions of new customers to enjoy your amazing food
            and groceries? Let's start our partnership today!`}
          </p>
          <ButtonPrimary content={"Become a Partner"} />
        </div>
      </div>
      {/* make a hero rider */}
      <div className="md:flex justify-center items-center gap-5">
        <div className="md:max-w-56 md:max-h-72 mb-8 md:mb-0">
          <img
            className="w-full h-full object-cover  rounded-md"
            src={hero}
            alt=""
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl text-secondary font-bold">
            Become A Foodie Haven Hero
          </h2>
          <p className="text-secondary">
            Are you a man of speed and a master of navigation? Become a Foodi
            Hero and earn up to 25,000 TK each month while spreading joy to the
            doorsteps.
          </p>
          <ButtonPrimary content={"Become a Hero"} />
        </div>
      </div>
    </section>
  );
}
