import IdInput from "./id"
import NameInput from "./name"
import PhoneNumInput from "./phoneNumber"

export default function InputsWrapper() {
    return(
        <div className="w-full h-full flex flex-col space-y-4 items-center justify-evenly">
            <NameInput></NameInput>
            <IdInput></IdInput>
            <PhoneNumInput></PhoneNumInput>
        </div>
    )
}