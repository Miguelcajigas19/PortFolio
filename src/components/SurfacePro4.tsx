import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type SurfacePro4Type = {
  className?: string;
};

const SurfacePro4: FunctionComponent<SurfacePro4Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onHobbiesText3Click = useCallback(() => {
    navigate("/surface-pro-8-2");
  }, [navigate]);

  const onHobbiesText4Click = useCallback(() => {
    navigate("/surface-pro-8-2");
  }, [navigate]);

  const onExperienciaText4Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='surfacePro85']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onSobreMiText3Click = useCallback(() => {
    navigate("/surface-pro-8-3");
  }, [navigate]);

  const onSobreMiText4Click = useCallback(() => {
    navigate("/surface-pro-8-3");
  }, [navigate]);

  const onHabilidadesText3Click = useCallback(() => {
    navigate("/surface-pro-8-4");
  }, [navigate]);

  const onHabilidadesText4Click = useCallback(() => {
    navigate("/surface-pro-8-4");
  }, [navigate]);

  const onContactoText3Click = useCallback(() => {
    navigate("/surface-pro-8-6");
  }, [navigate]);

  const onContactoText4Click = useCallback(() => {
    navigate("/surface-pro-8-6");
  }, [navigate]);

  return (
    <section
      className={`self-stretch h-[715px] bg-azure-200 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-5 pb-0 pr-0 pl-[17px] box-border max-w-full text-center text-mini text-actionable-item font-body-p mq1225:h-auto ${className}`}
    >
      <div className="w-[1453px] bg-azure-700 overflow-hidden shrink-0 flex flex-row items-start justify-start pt-[120px] px-0 pb-[430px] box-border gap-[15px] [debug_commit:bf4bc93] max-w-[103%] mq750:pt-[51px] mq750:pb-[181px] mq750:box-border mq1050:pt-[78px] mq1050:pb-[279px] mq1050:box-border mq1225:flex-wrap">
        <div className="h-10 w-[130px] relative hidden whitespace-nowrap">
          <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-white box-border hidden border-[1px] border-solid border-actionable-item" />
          <div className="absolute top-[27.5%] left-[16.92%] tracking-[-0.01em] font-medium hidden">
            Learn more
          </div>
        </div>
        <div className="h-96 w-[55px] flex flex-col items-start justify-start pt-[29px] px-0 pb-0 box-border">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/image-22@2x.png"
          />
        </div>
        <div className="w-[1098px] flex flex-col items-start justify-start gap-[37.5px] max-w-full text-left text-lg text-gray mq750:gap-[19px]">
          <div className="w-[770px] flex flex-col items-start justify-start pt-0 px-2.5 pb-1 box-border relative max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-29xl text-black">
              <h1 className="m-0 h-36 flex-1 relative text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit inline-block max-w-full mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
                <p className="m-0">&nbsp;</p>
              </h1>
              <h1 className="!m-[0] h-full w-full absolute top-[-43px] right-[-271px] text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit inline-block z-[1] mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
                Hobbies
              </h1>
              <div className="w-full !m-[0] absolute right-[-11px] bottom-[-12px] flex flex-col items-start justify-start max-w-full h-full text-lg text-gray">
                <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                  <p className="!m-[0] w-[599px] absolute right-[-67px] bottom-[-107px] tracking-[-0.01em] leading-[30px] whitespace-pre-wrap inline-block z-[1]">
                    Mis pasatiempos en su mayoria son mirar partidos de futbol u
                    programa en tv una vez acabe con mis actividades educativas
                    , tambien me gusta practicar la programacion ademas de
                    practicar deportes como el futbol y los fines de semana me
                    gusta dedicarselos a mi familia u amigos
                  </p>
                  <h1 className="m-0 h-[146px] flex-1 relative text-29xl tracking-[-0.01em] leading-[72px] font-normal font-inherit text-black inline-block max-w-full z-[2] mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
                    <p className="m-0">&nbsp;</p>
                  </h1>
                </div>
                <h1 className="m-0 self-stretch h-[146px] relative text-29xl tracking-[-0.01em] leading-[72px] font-normal font-inherit text-black inline-block shrink-0 z-[4] mt-[-146px] mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
                  <p className="m-0">&nbsp;</p>
                </h1>
              </div>
            </div>
            <div className="!m-[0] absolute top-[47px] left-[5px] flex flex-row items-start justify-start">
              <div
                className="relative tracking-[-0.01em] leading-[32px] inline-block min-w-[70.6px] cursor-pointer z-[3]"
                onClick={onHobbiesText3Click}
              >
                Hobbies
              </div>
              <div
                className="relative tracking-[-0.01em] leading-[32px] inline-block min-w-[70.6px] cursor-pointer z-[5] ml-[-70.6px]"
                onClick={onHobbiesText4Click}
              >
                Hobbies
              </div>
            </div>
            <div className="!m-[0] absolute bottom-[0px] left-[0px] flex flex-row items-start justify-start">
              <div className="relative tracking-[-0.01em] leading-[32px] inline-block min-w-[98.4px] shrink-0 [debug_commit:bf4bc93] z-[3]">
                Experiencia
              </div>
              <div
                className="relative tracking-[-0.01em] leading-[32px] inline-block min-w-[98.4px] shrink-0 [debug_commit:bf4bc93] cursor-pointer z-[5] ml-[-98.4px]"
                onClick={onExperienciaText4Click}
              >
                Experiencia
              </div>
            </div>
          </div>
          <div className="flex flex-row items-start justify-start py-0 px-[5px]">
            <div className="flex flex-row items-start justify-start">
              <div
                className="relative tracking-[-0.01em] leading-[30px] inline-block min-w-[88px] cursor-pointer"
                onClick={onSobreMiText3Click}
              >
                Sobre mi
              </div>
              <div
                className="relative tracking-[-0.01em] leading-[30px] inline-block min-w-[88px] cursor-pointer z-[1] ml-[-88px]"
                onClick={onSobreMiText4Click}
              >
                Sobre mi
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] mq1050:flex-wrap">
            <div className="flex flex-col items-start justify-start py-0 pr-[9px] pl-0 gap-[38px]">
              <div className="flex flex-row items-start justify-start">
                <div
                  className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[110px] cursor-pointer"
                  onClick={onHabilidadesText3Click}
                >
                  Habilidades
                </div>
                <div
                  className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[110px] cursor-pointer z-[1] ml-[-110px]"
                  onClick={onHabilidadesText4Click}
                >
                  Habilidades
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-0 px-[5px]">
                <div className="flex flex-row items-start justify-start">
                  <div
                    className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[88px] cursor-pointer"
                    onClick={onContactoText3Click}
                  >
                    Contacto
                  </div>
                  <div
                    className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[88px] cursor-pointer z-[1] ml-[-88px]"
                    onClick={onContactoText4Click}
                  >
                    Contacto
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[275px] w-[397px] flex flex-col items-start justify-start pt-[52px] px-0 pb-0 box-border max-w-full">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover z-[6]"
                loading="lazy"
                alt=""
                src="/image-28@2x.png"
              />
            </div>
            <div className="h-[280px] w-[418px] flex flex-col items-start justify-start pt-[58px] px-0 pb-0 box-border max-w-full">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="lazy"
                alt=""
                src="/whatsapp-image-20240423-at-638-1@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurfacePro4;
