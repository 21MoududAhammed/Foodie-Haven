import Areas from "./components/areas/Areas";
import Banner from "./components/banner/Banner";
import Nav from "./components/common/Nav";

export default function Hello() {
  return (
    <div>
      <Nav />
      <Banner/>
      <Areas/>
    </div>
  );
}
