import InputsWrapper from "./inputs/inputsWrapper";

export default function FirstFormWapper() {
  return (
    <div className="w-1/5 aspect-square bg-white transition-all duration-500 delay-75 drop-shadow-[0px_0px_25px_rgba(49,155,228,0.2)] rounded-sm px-10 py-8 flex flex-col items-center justify-between  hover:drop-shadow-[0px_0px_65px_rgba(49,155,228,0.45)] ">
      <InputsWrapper></InputsWrapper>
    </div>
  );
}
