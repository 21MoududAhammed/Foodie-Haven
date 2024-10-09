import Areas from "./components/areas/Areas";
import Banner from "./components/banner/Banner";
import Nav from "./components/common/Nav";
import Features from "./components/features/Features";

export default function Hello() {
  return (
    <div>
      <Nav />
      <Banner/>
      <Areas/>
      <Features/>
    </div>
  );
}
