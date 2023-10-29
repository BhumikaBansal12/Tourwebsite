import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Trip from "../components/Trip";
import Triptwo from "../components/Triptwo";
function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="http://images.unsplash.com/photo-1472313420546-a46e561861d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8NHx8c291cmNlfHwwfHx8fDE2MjUxNzc3NDU&ixlib=rb-1.2.1&q=80&w=1080"
        title="Service"
      />
      <Trip />
      <Triptwo />
      <Footer />
    </>
  );
}

export default Service;
