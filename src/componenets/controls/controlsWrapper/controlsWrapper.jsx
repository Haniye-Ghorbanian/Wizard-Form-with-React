import Progress from "../progress/progress"
import BackwardArrow from "../control arrows/backwardArrow"
import ForwardArrow from "../control arrows/forwardArrow"
export default function ControlsWrapper() {
    return(
        <div className="w-4/5 md:w-2/5 lg:w-2/5 xl:w-1/4 py-3 flex items-center justify-between">
            <ForwardArrow />
            <Progress />
            <BackwardArrow />
        </div>
    )
}