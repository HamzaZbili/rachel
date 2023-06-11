import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";
import Header from "./components/Header"
import MyWork from "./components/MyWork";

export default function Home() {


  return (
    <main className="min-w-cf-375px">
      <Header />
      <AboutMe />
      <MyWork/>
      <Footer/>
    </main>
  );
}
