import { useMediaQuery } from "@mui/material";
import Baby from "../assets/baby.png";
import Woman from "../assets/woman.png";
import Curology from "../assets/curology.png";

const FlexImage = () => {
  const sixHundred = useMediaQuery("(min-width: 600px) and (max-width:700px)");
  const sevenHundred = useMediaQuery(
    "(min-width: 700px) and (max-width:800px)"
  );
  const eightHundred = useMediaQuery(
    "(min-width: 801px) and (max-width:900px)"
  );
  const nineHundred = useMediaQuery(
    "(min-width: 901px) and (max-width:1000px)"
  );
  const oneThousand = useMediaQuery(
    "(min-width:1001px) and (max-width:1100px)"
  );
  const oneThousandOne = useMediaQuery(
    "(min-width:1101px)  and (max-width:1250px)"
  );
  const isNonMobileScreens = useMediaQuery(
    "(min-width:1251px) and (max-width:2000px)"
  );
  return (
    <>
      {sixHundred && (
        <div className="flex flex-col px-10 pt-16">
          <img src={Woman} alt="woman" className="py-3" />
          <img src={Curology} alt="curology" className="py-3" />
          <img src={Baby} alt="baby" className="py-3" />
        </div>
      )}
      {sevenHundred && (
        <div className="flex justify-center items-center pt-16 space-x-2">
          <img src={Woman} alt="woman" className="h-64 w-56" />
          <img src={Curology} alt="curology" className="h-64 w-56" />
          <img src={Baby} alt="baby" className="h-64 w-56" />
        </div>
      )}
      {eightHundred && (
        <div className="flex justify-center items-center pt-20 space-x-3">
          <img src={Woman} alt="woman" className="h-72 w-64" />
          <img src={Curology} alt="curology" className="h-72 w-64" />
          <img src={Baby} alt="baby" className="h-72 w-64" />
        </div>
      )}
      {nineHundred && (
        <div className="flex justify-center items-center pt-20 space-x-4">
          <img src={Woman} alt="woman" className="h-80 w-72" />
          <img src={Curology} alt="curology" className="h-80 w-72" />
          <img src={Baby} alt="baby" className="h-80 w-72" />
        </div>
      )}
      {oneThousand && (
        <div className="flex justify-center items-center space-x-5 pt-20">
          <img src={Woman} alt="woman" className="h-80 w-72" />
          <img src={Curology} alt="curology" className="h-80 w-72" />
          <img src={Baby} alt="baby" className="h-80 w-72" />
        </div>
      )}
      {oneThousandOne && (
        <div className="flex justify-center items-center space-x-5 pt-20">
          <img src={Woman} alt="woman" className="h-96 w-80" />
          <img src={Curology} alt="curology" className="h-96 w-80" />
          <img src={Baby} alt="baby" className="h-96 w-80" />
        </div>
      )}
      {isNonMobileScreens && (
        <div className="flex pt-24 space-x-5 px-[100px] 2xl:px-0 2xl:justify-center 2xl:items-center 2xl:space-x-10">
          <img src={Woman} alt="woman" className="h-96 w-[400px]" />
          <img src={Curology} alt="curology" className="h-96 w-[400px]" />
          <img src={Baby} alt="baby" className="h-96 w-[400px]" />
        </div>
      )}
    </>
  );
};

export default FlexImage;
