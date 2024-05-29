import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

export type SurfaceProType = {
  className?: string;
};

const SurfacePro: FunctionComponent<SurfaceProType> = ({ className = "" }) => {
  const navigate = useNavigate();

  const onHobbiesText1Click = useCallback(() => {
    navigate("/surface-pro-8-2");
  }, [navigate]);

  const onSobreMiText2Click = useCallback(() => {
    navigate("/surface-pro-8-3");
  }, [navigate]);

  const onHabilidadesText1Click = useCallback(() => {
    navigate("/surface-pro-8-4");
  }, [navigate]);

  return (
    <section
      className={`self-stretch bg-azure-500 overflow-hidden flex flex-row items-end justify-start pt-[68px] px-0 pb-16 box-border gap-[25px] max-w-full z-[10] text-left text-lg text-gray font-body-p mq750:pt-11 mq750:pb-[42px] mq750:box-border mq1225:flex-wrap ${className}`}
    >
      <img
        className="h-[355px] w-[55px] relative object-cover"
        loading="lazy"
        alt=""
        src="/image-22@2x.png"
      />
      <div className="w-[1217px] flex flex-col items-start justify-end pt-0 px-0 pb-[31px] box-border max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[36.5px] max-w-full mq750:gap-[18px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[27px] max-w-full text-29xl text-black">
            <div className="self-stretch flex flex-col items-start justify-start max-w-full">
              <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                <h1 className="m-0 h-36 w-[750px] relative text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit inline-block shrink-0 max-w-full mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
                  Contacto
                </h1>
              </div>
              <div className="w-[770px] flex flex-col items-start justify-start py-0 pr-5 pl-0 box-border relative max-w-full mt-[-82px] text-lg text-gray">
                <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-29xl text-black">
                  <p className="!m-[0] w-[686px] absolute right-[-343px] bottom-[-34px] text-lg tracking-[-0.01em] leading-[30px] text-gray inline-block">
                    <span className="block">
                      Numero de telefono: 3052421137
                    </span>
                    <span className="block">
                      correo personal: miguelcajigas18@gmail.com
                    </span>
                  </p>
                  <h1 className="m-0 h-36 flex-1 relative text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit inline-block max-w-full z-[1] mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
                    <p className="m-0">&nbsp;</p>
                  </h1>
                  <h1 className="!m-[0] h-full w-full absolute top-[-35px] right-[-136px] text-inherit tracking-[-0.01em] leading-[72px] font-normal font-inherit inline-block z-[2] mq750:text-19xl mq750:leading-[58px] mq450:text-10xl mq450:leading-[43px]">
                    <p className="m-0">&nbsp;</p>
                  </h1>
                </div>
                <a
                  className="[text-decoration:none] w-[88px] absolute !m-[0] top-[27px] left-[0px] tracking-[-0.01em] leading-[31px] text-[inherit] inline-block cursor-pointer z-[2]"
                  onClick={onHobbiesText1Click}
                >
                  Hobbies
                </a>
                <div className="absolute !m-[0] bottom-[10px] left-[0px] tracking-[-0.01em] leading-[31px] inline-block min-w-[110px] z-[2]">
                  Experiencia
                </div>
              </div>
            </div>
            <a
              className="[text-decoration:none] relative text-lg tracking-[-0.01em] leading-[30px] text-gray inline-block min-w-[88px] cursor-pointer"
              onClick={onSobreMiText2Click}
            >
              Sobre mi
            </a>
          </div>
          <div
            className="relative tracking-[-0.01em] leading-[30px] inline-block min-w-[110px] cursor-pointer"
            onClick={onHabilidadesText1Click}
          >
            Habilidades
          </div>
          <div className="relative tracking-[-0.01em] leading-[30px] inline-block min-w-[88px]">
            Contacto
          </div>
        </div>
      </div>
    </section>
  );
};

export default SurfacePro;
