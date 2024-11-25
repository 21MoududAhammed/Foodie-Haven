import dhakaImg from "../../assets/areas/Dhaka.webp";
import chittagongImg from "../../assets/areas/Chittagong.webp";
import barisalImg from "../../assets/areas/Barisal.webp";
import bargunaImg from "../../assets/areas/Barguna.webp";
import jessoreImg from "../../assets/areas/Jessore.webp";
import bandarbanImg from "../../assets/areas/Bandarban.webp";
import cumillaImg from "../../assets/areas/cumilla.webp";
import khulnaImg from "../../assets/areas/Khulna.webp";

import AreaCard from "./AreaCard";
export default function Areas() {
  return (
    <section className="max-w-screen-2xl mx-auto py-20 font-gilory">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-secondary">
        Find us in these cities and many more!
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 mx-5 mt-12">
        <AreaCard image={dhakaImg} area={"Dhaka"} />
        <AreaCard image={chittagongImg} area={"Chittagong"} />
        <AreaCard image={barisalImg} area={"Barisal"} />
        <AreaCard image={bargunaImg} area={"Barguna"} />
        <AreaCard image={jessoreImg} area={"Jessore"} />
        <AreaCard image={cumillaImg} area={"Bandarban"} />
        <AreaCard image={bandarbanImg} area={"BandarbanImg"} />
        <AreaCard image={khulnaImg} area={"Khulna"} />
      </div>
    </section>
  );
}
