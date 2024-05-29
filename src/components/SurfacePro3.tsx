import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type SurfacePro3Type = {
  className?: string;
};

const SurfacePro3: FunctionComponent<SurfacePro3Type> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const onHobbiesText5Click = useCallback(() => {
    navigate("/surface-pro-8-2");
  }, [navigate]);

  const onSobreMiText5Click = useCallback(() => {
    navigate("/surface-pro-8-3");
  }, [navigate]);

  const onHabilidadesText5Click = useCallback(() => {
    navigate("/surface-pro-8-4");
  }, [navigate]);

  const onContactoText5Click = useCallback(() => {
    navigate("/surface-pro-8-6");
  }, [navigate]);

  return (
    <section
      className={`self-stretch bg-azure-100 overflow-hidden flex flex-row items-start justify-start pt-44 px-0 pb-[204px] box-border relative gap-[100px] max-w-[101%] shrink-0 z-[7] text-left text-lg text-gray font-body-p mq750:gap-[25px] mq750:pt-[114px] mq750:pb-[133px] mq750:box-border mq1050:flex-wrap mq1050:gap-[50px] ${className}`}
      data-scroll-to="surfacePro85"
    >
      <div className="w-[750px] !m-[0] absolute top-[145px] left-[89px] flex flex-row items-start justify-start max-w-full text-29xl text-black">
        <h1 className="!m-[0] h-full w-full absolute top-[-72px] right-[-223px] text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit inline-block mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
          Experiencia
        </h1>
        <h1 className="m-0 h-36 flex-1 relative text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit inline-block max-w-full z-[2] mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
          <p className="m-0">&nbsp;</p>
        </h1>
        <h1 className="!m-[0] h-full w-full absolute bottom-[-16px] left-[0px] text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit inline-block z-[3] mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
          <p className="m-0">&nbsp;</p>
        </h1>
      </div>
      <div className="flex flex-row items-start justify-start gap-[13px]">
        <img
          className="h-[355px] w-[55px] relative object-cover"
          loading="lazy"
          alt=""
          src="/image-22@2x.png"
        />
        <div className="flex flex-col items-start justify-start pt-[23px] px-0 pb-0">
          <div className="flex flex-col items-start justify-start gap-[36.5px]">
            <div className="flex flex-row items-start justify-start py-0 px-0.5">
              <div
                className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[74px] cursor-pointer z-[4]"
                onClick={onHobbiesText5Click}
              >
                Hobbies
              </div>
            </div>
            <div className="relative tracking-[-0.01em] leading-[31px] inline-block min-w-[103px] z-[4]">
              Experiencia
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[5px]">
              <div
                className="relative tracking-[-0.01em] leading-[30px] inline-block min-w-[88px] cursor-pointer"
                onClick={onSobreMiText5Click}
              >
                Sobre mi
              </div>
            </div>
            <div
              className="relative tracking-[-0.01em] leading-[30px] inline-block min-w-[110px] cursor-pointer"
              onClick={onHabilidadesText5Click}
            >
              Habilidades
            </div>
            <div className="flex flex-row items-start justify-start py-0 px-[5px]">
              <div
                className="relative tracking-[-0.01em] leading-[30px] inline-block min-w-[88px] cursor-pointer"
                onClick={onContactoText5Click}
              >
                Contacto
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[750px] flex flex-col items-start justify-start gap-[23px] max-w-full">
        <div className="w-[648px] flex flex-row items-start justify-start py-0 px-[15px] box-border max-w-full">
          <p className="m-0 flex-1 relative tracking-[-0.01em] leading-[30px] whitespace-pre-wrap [display:-webkit-inline-box] overflow-hidden text-ellipsis [-webkit-line-clamp:3] [-webkit-box-orient:vertical] max-w-full z-[1]">{`Por el momento no cuento con experiencia en el mundo laboral pero espero muy pronto empezarlo a hacer por mientras  a seguir con mi continuo aprendizaje `}</p>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-29xl text-black">
          <img
            className="h-[271px] w-[474px] absolute !m-[0] bottom-[-188px] left-[87px] object-cover"
            loading="lazy"
            alt=""
            src="/image-27@2x.png"
          />
          <h1 className="m-0 h-[142px] flex-1 relative text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit inline-block max-w-full z-[1] mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
            <p className="m-0">&nbsp;</p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SurfacePro3;
