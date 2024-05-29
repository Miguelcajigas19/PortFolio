import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onHobbiesText7Click = useCallback(() => {
    navigate("/surface-pro-8-2");
  }, [navigate]);

  const onHobbiesText8Click = useCallback(() => {
    navigate("/surface-pro-8-2");
  }, [navigate]);

  const onSobreMiText7Click = useCallback(() => {
    navigate("/surface-pro-8-3");
  }, [navigate]);

  const onSobreMiText8Click = useCallback(() => {
    navigate("/surface-pro-8-3");
  }, [navigate]);

  const onHabilidadesText7Click = useCallback(() => {
    navigate("/surface-pro-8-4");
  }, [navigate]);

  const onHabilidadesText8Click = useCallback(() => {
    navigate("/surface-pro-8-4");
  }, [navigate]);

  const onContactoText6Click = useCallback(() => {
    navigate("/surface-pro-8-6");
  }, [navigate]);

  const onContactoText7Click = useCallback(() => {
    navigate("/surface-pro-8-6");
  }, [navigate]);

  return (
    <section
      className={`w-[1308px] flex flex-col items-start justify-start pt-0 pb-[147px] pr-5 pl-0 box-border gap-[12px] max-w-full text-left text-29xl text-black font-montaga mq750:pb-24 mq750:box-border ${className}`}
    >
      <div className="w-[1175px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
        <h1 className="m-0 w-[577px] relative text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit inline-block shrink-0 max-w-full mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
          Bienvenido a mi Portafolio
        </h1>
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-center max-w-full [row-gap:20px] text-lg text-gray font-body-p">
        <div className="w-[310px] flex flex-col items-start justify-start pt-[50px] px-0 pb-0 box-border mq450:pt-8 mq450:box-border">
          <div className="flex flex-row items-start justify-start gap-[9px] shrink-0 [debug_commit:bf4bc93]">
            <img
              className="h-[355px] w-[55px] relative object-cover"
              loading="lazy"
              alt=""
              src="/image-22@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-[21px] px-0 pb-0">
              <div className="flex flex-col items-start justify-start gap-[36.5px]">
                <div className="w-[98px] flex flex-row items-start justify-start py-0 px-[5px] box-border">
                  <div className="flex-1 flex flex-row items-start justify-start">
                    <div
                      className="flex-1 relative tracking-[-0.01em] leading-[31px] cursor-pointer"
                      onClick={onHobbiesText7Click}
                    >
                      Hobbies
                    </div>
                    <div
                      className="flex-1 relative tracking-[-0.01em] leading-[31px] cursor-pointer z-[1] ml-[-88px]"
                      onClick={onHobbiesText8Click}
                    >
                      Hobbies
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[110px]">
                    Experiencia
                  </div>
                  <div className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[110px] z-[1] ml-[-110px]">
                    Experiencia
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                  <div className="flex flex-row items-start justify-start">
                    <div
                      className="relative tracking-[-0.01em] leading-[30px] inline-block min-w-[88px] cursor-pointer"
                      onClick={onSobreMiText7Click}
                    >
                      Sobre mi
                    </div>
                    <div
                      className="relative tracking-[-0.01em] leading-[30px] inline-block min-w-[88px] cursor-pointer z-[1] ml-[-88px]"
                      onClick={onSobreMiText8Click}
                    >
                      Sobre mi
                    </div>
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start">
                  <div
                    className="relative tracking-[-0.01em] leading-[30px] inline-block min-w-[110px] cursor-pointer"
                    onClick={onHabilidadesText7Click}
                  >
                    Habilidades
                  </div>
                  <div
                    className="relative tracking-[-0.01em] leading-[30px] inline-block min-w-[110px] cursor-pointer z-[1] ml-[-110px]"
                    onClick={onHabilidadesText8Click}
                  >
                    Habilidades
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                  <div className="flex flex-row items-start justify-start">
                    <div
                      className="relative tracking-[-0.01em] leading-[30px] inline-block min-w-[88px] cursor-pointer"
                      onClick={onContactoText6Click}
                    >
                      Contacto
                    </div>
                    <div
                      className="relative tracking-[-0.01em] leading-[30px] inline-block min-w-[88px] cursor-pointer z-[1] ml-[-88px]"
                      onClick={onContactoText7Click}
                    >
                      Contacto
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[54px] min-w-[587px] shrink-0 [debug_commit:bf4bc93] max-w-full ml-[-110px] text-29xl text-black mq750:min-w-full mq450:gap-[27px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full">
            <h1 className="m-0 w-[750px] relative text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit inline-block max-w-full mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
              <p className="m-0">&nbsp;</p>
            </h1>
            <div className="self-stretch flex flex-row items-start justify-end max-w-full text-5xl">
              <b className="w-[733px] relative tracking-[-0.01em] leading-[36px] inline-block shrink-0 max-w-full mq450:text-lgi mq450:leading-[29px]">
                <span>{`Hola soy `}</span>
                <span className="text-mediumblue">Miguel Cajigas</span>
              </b>
            </div>
          </div>
          <div className="w-[759px] flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-lg text-gray">
            <p className="m-0 w-[561px] relative tracking-[-0.01em] leading-[30px] whitespace-pre-wrap flex items-center shrink-0 max-w-full">{`Bienvenido a mi portafolio en este te contare todo sobre mi  persona mis experiencias, mis habilidades, mis hobbis y mi contacto espero tengas una muy buena experiencia y te lleves algo bueno de mi `}</p>
          </div>
        </div>
        <div className="h-[416px] w-[295px] flex flex-col items-start justify-start pt-[25px] px-0 pb-0 box-border ml-[-110px]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover shrink-0 [debug_commit:bf4bc93]"
            loading="lazy"
            alt=""
            src="/whatsapp-image-20240423-at-648-2@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
