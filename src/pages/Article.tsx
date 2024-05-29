import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import SurfacePro4 from "../components/SurfacePro4";
import SurfacePro3 from "../components/SurfacePro3";
import SurfacePro2 from "../components/SurfacePro2";
import SurfacePro1 from "../components/SurfacePro1";
import SurfacePro from "../components/SurfacePro";

const Article: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-azure-400 overflow-hidden flex flex-col items-start justify-start pt-[68px] px-0 pb-0 box-border leading-[normal] tracking-[normal]">
      <FrameComponent />
      <SurfacePro4 />
      <SurfacePro3 />
      <SurfacePro2 />
      <SurfacePro1 />
      <SurfacePro />
    </div>
  );
};

export default Article;
