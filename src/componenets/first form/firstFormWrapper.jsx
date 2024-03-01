import InputsWrapper from "./inputs/inputsWrapper";

export default function FirstFormWapper() {
  return (
    <div className="w-4/5 md:w-2/5 lg:w-2/5 xl:w-1/4 aspect-square bg-white transition-all duration-500 delay-75 drop-shadow-[0px_0px_25px_rgba(49,155,228,0.2)] rounded-sm px-10 py-8 flex flex-col items-center justify-between  hover:drop-shadow-[0px_0px_65px_rgba(49,155,228,0.45)] ">
      <InputsWrapper></InputsWrapper>
    </div>
  );
}
