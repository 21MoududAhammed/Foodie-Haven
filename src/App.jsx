import Areas from "./components/areas/Areas";
import Banner from "./components/banner/Banner";
import Footer from "./components/common/Footer";
import Nav from "./components/common/Nav";
import Features from "./components/features/Features";
import MakePartner from "./components/makePartner/MakePartner";

export default function Hello() {
  return (
    <div>
      <Nav />
      <Banner/>
      <Areas/>
      <Features/>
      <MakePartner/>
      <Footer/>
    </div>
  );
}
