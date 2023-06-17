import AboutMe from "./components/AboutMe";
import FeatureArticles from "./components/FeatureArticles";
import Footer from "./components/Footer";
import Header from "./components/Header"
import MyWork from "./components/MyWork";
import NavBar from "./components/NavBar";

export default function Home() {


  return (
    <main className="min-w-cf-375px">
      <Header />
      <NavBar />
      <AboutMe />
      <MyWork />
      <FeatureArticles />
      <Footer />
    </main>
  );
}
