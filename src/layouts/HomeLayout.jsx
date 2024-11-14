import Header from "../components/Header";
import LatestNews from "../components/LatestNews";
import LeftNavbar from "../components/layout-component/LeftNavbar";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <header>
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav className="w-11/12 mx-auto py-2">
        <Navbar></Navbar>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12 ">
        <aside className="left col-span-3">
            <LeftNavbar />
        </aside>
        <section className="col-span-6">main content</section>
        <aside className="right col-span-3">right navbar</aside>
      </main>
    </div>
  ); 
};

export default HomeLayout;
