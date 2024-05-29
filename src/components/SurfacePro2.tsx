import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type SurfacePro2Type = {
  className?: string;
};

const SurfacePro2: FunctionComponent<SurfacePro2Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onHobbiesText6Click = useCallback(() => {
    navigate("/surface-pro-8-2");
  }, [navigate]);

  const onSobreMiText6Click = useCallback(() => {
    navigate("/surface-pro-8-3");
  }, [navigate]);

  const onHabilidadesText6Click = useCallback(() => {
    navigate("/surface-pro-8-4");
  }, [navigate]);

  const onContactoText8Click = useCallback(() => {
    navigate("/surface-pro-8-6");
  }, [navigate]);

  return (
    <section
      className={`self-stretch bg-azure-600 overflow-hidden flex flex-col items-start justify-start pt-[95px] px-0 pb-[145px] box-border max-w-full z-[8] text-left text-29xl text-black font-body-p mq750:pt-10 mq750:pb-[61px] mq750:box-border mq1050:pt-[62px] mq1050:pb-[94px] mq1050:box-border ${className}`}
    >
      <div className="w-[1286px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <h1 className="m-0 h-36 w-[750px] relative text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit inline-block shrink-0 max-w-full mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
          Sobre mi
        </h1>
      </div>
      <div className="w-[850px] flex flex-row flex-wrap items-start justify-center py-0 pr-5 pl-0 box-border gap-[25px] max-w-full mt-[-72px] text-lg text-gray">
        <div className="h-96 w-[55px] flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/image-22@2x.png"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[40.5px] min-w-[487px] max-w-full mq750:gap-[20px] mq750:min-w-full">
          <div className="self-stretch h-36 flex flex-row items-start justify-start pt-0 px-0 pb-0 box-border max-w-full">
            <div className="flex-1 flex flex-row items-start justify-start relative max-w-full shrink-0">
              <p className="!m-[0] w-[786px] absolute right-[-210px] bottom-[-32px] tracking-[-0.01em] leading-[30px] whitespace-pre-wrap inline-block">{`Hola soy Miguel Angel Cajigas Delgado tengo 20 años  vivo en Pasto soy originario de Sandona Nariño me gradue en la Escula Normal superior de Pasto y actualmente estoy cursando 5to semestre de la carrera Ingenieria de Software en Universidad Cooperativa de Colombia `}</p>
              <h1 className="m-0 h-36 flex-1 relative text-29xl tracking-[-0.01em] leading-[72px] font-normal font-inherit text-black inline-block max-w-full z-[1] mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
                <p className="m-0">&nbsp;</p>
              </h1>
            </div>
            <div className="flex-1 flex flex-row items-start justify-start pt-0 px-0 pb-[3px] box-border relative max-w-full shrink-0 ml-[-750px]">
              <h1 className="m-0 h-36 flex-1 relative text-29xl tracking-[-0.01em] leading-[72px] font-normal font-inherit text-black inline-block max-w-full z-[2] mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
                <p className="m-0">&nbsp;</p>
              </h1>
              <div
                className="w-[88px] absolute !m-[0] top-[46px] left-[0px] tracking-[-0.01em] leading-[31px] inline-block cursor-pointer z-[3]"
                onClick={onHobbiesText6Click}
              >
                Hobbies
              </div>
              <div className="absolute !m-[0] bottom-[0px] left-[0px] tracking-[-0.01em] leading-[31px] inline-block min-w-[110px] z-[3]">
                Experiencia
              </div>
            </div>
          </div>
          <div
            className="relative tracking-[-0.01em] leading-[30px] inline-block min-w-[88px] cursor-pointer"
            onClick={onSobreMiText6Click}
          >
            Sobre mi
          </div>
          <div className="w-[681px] flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[42px]">
              <div
                className="relative tracking-[-0.01em] leading-[30px] inline-block min-w-[110px] cursor-pointer"
                onClick={onHabilidadesText6Click}
              >
                Habilidades
              </div>
              <div
                className="relative tracking-[-0.01em] leading-[30px] inline-block min-w-[88px] cursor-pointer"
                onClick={onContactoText8Click}
              >
                Contacto
              </div>
            </div>
            <div className="h-[393px] w-[306px] flex flex-col items-start justify-start pt-px px-0 pb-0 box-border">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/whatsapp-image-20240423-at-648-2-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurfacePro2;
