import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type SurfacePro1Type = {
  className?: string;
};

const SurfacePro1: FunctionComponent<SurfacePro1Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onHobbiesText2Click = useCallback(() => {
    navigate("/surface-pro-8-2");
  }, [navigate]);

  const onSobreMiText1Click = useCallback(() => {
    navigate("/surface-pro-8-3");
  }, [navigate]);

  const onHabilidadesText2Click = useCallback(() => {
    navigate("/surface-pro-8-4");
  }, [navigate]);

  const onContactoText2Click = useCallback(() => {
    navigate("/surface-pro-8-6");
  }, [navigate]);

  return (
    <section
      className={`self-stretch bg-azure-300 overflow-hidden flex flex-col items-start justify-start pt-[43px] px-0 pb-[163px] box-border max-w-full z-[9] text-left text-29xl text-black font-body-p mq750:pt-7 mq750:pb-[106px] mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-center py-0 pr-5 pl-[354px] box-border max-w-full mq750:pl-[88px] mq750:box-border mq450:pl-5 mq450:box-border mq1225:pl-[177px] mq1225:box-border">
        <h1 className="m-0 h-36 w-[750px] relative text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit inline-block shrink-0 max-w-full mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">{`Habilidades `}</h1>
      </div>
      <div className="w-[907px] flex flex-row flex-wrap items-end justify-center py-0 pr-5 pl-0 box-border gap-[25px] max-w-full mt-[-72px] text-lg text-gray">
        <img
          className="h-[355px] w-[55px] relative object-cover"
          loading="lazy"
          alt=""
          src="/image-22@2x.png"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[37px] min-w-[525px] max-w-full mq750:min-w-full mq450:gap-[18px]">
          <div className="w-[750px] flex flex-col items-start justify-start pt-0 px-0 pb-1 box-border relative max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
              <p className="!m-[0] h-[90px] w-[590px] absolute right-[-155px] bottom-[-32px] tracking-[-0.01em] leading-[30px] whitespace-pre-wrap inline-block">
                Mis habilidades en el mundo del software estan en crecimiento
                debido al continuo aprendizaje en los diferentes tipos de
                lenguajes de programascion como lo son Java, JavaScript,
                Python,SQL..
              </p>
              <h1 className="m-0 h-36 flex-1 relative text-29xl tracking-[-0.01em] leading-[72px] font-normal font-inherit text-black inline-block max-w-full z-[1] mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
                <p className="m-0">&nbsp;</p>
              </h1>
            </div>
            <div
              className="w-[88px] absolute !m-[0] top-[46px] left-[5px] tracking-[-0.01em] leading-[32px] inline-block cursor-pointer z-[2]"
              onClick={onHobbiesText2Click}
            >
              Hobbies
            </div>
            <div className="absolute !m-[0] bottom-[0px] left-[0px] tracking-[-0.01em] leading-[32px] inline-block min-w-[110px] z-[2]">
              Experiencia
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
            <div className="flex flex-row items-start justify-start py-0 px-[5px]">
              <a
                className="[text-decoration:none] relative tracking-[-0.01em] leading-[32px] text-[inherit] inline-block min-w-[88px] cursor-pointer"
                onClick={onSobreMiText1Click}
              >
                Sobre mi
              </a>
            </div>
            <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq750:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[22px] px-0 pb-0">
                <div className="flex flex-col items-start justify-start gap-[39px]">
                  <div
                    className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[110px] cursor-pointer"
                    onClick={onHabilidadesText2Click}
                  >
                    Habilidades
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                    <div
                      className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[88px] cursor-pointer"
                      onClick={onContactoText2Click}
                    >
                      Contacto
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[492px] flex flex-row items-end justify-start gap-[87px] max-w-full mq750:gap-[43px] mq450:flex-wrap">
                <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-1.5 box-border min-w-[138px]">
                  <img
                    className="self-stretch h-[122px] relative max-w-full overflow-hidden shrink-0 object-cover"
                    loading="lazy"
                    alt=""
                    src="/image-23@2x.png"
                  />
                </div>
                <img
                  className="h-[151px] w-[193px] relative object-cover mq450:flex-1"
                  loading="lazy"
                  alt=""
                  src="/image-26@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurfacePro1;
