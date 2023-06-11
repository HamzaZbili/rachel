import AboutMe from "./components/AboutMe";
import Header from "./components/Header"

export default function Home() {
  return (
    <main className="min-w-cf-375px">
      <Header/>
      <AboutMe/>
    </main>
  );
}
