import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Header from "./Header";
import Main from "./Main";
import Sides from "./Sides";

function MyresumeComponents() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div>
      <Header />
      <Sides />
      <Main />
    </div>
  );
}

export default MyresumeComponents;
