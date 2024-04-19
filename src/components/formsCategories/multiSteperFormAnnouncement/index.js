import { useState } from "react"

const useMultiSteperFormAnnouncement = (arrayComponents) => {
    const [currentStepIndex, setCurrentStepIndex] = useState(0)
    const next = () => {
        setCurrentStepIndex((i)=>{
            if(i >= arrayComponents.length -1){
                return i
            }
            return i + 1
        })

    }

    const back = () => {
        setCurrentStepIndex((i)=>{
            if(i <= 0){
                return i
            }
            return i - 1
        })
    }

    const goTo = index => {
        setCurrentStepIndex(index)
    }
    return {
        currentStepIndex,
        step: arrayComponents[currentStepIndex],
        arrayComponents,
        isFirstStep: currentStepIndex === 0,
        isLastStep:currentStepIndex === arrayComponents.length - 1,
        goTo,
        back,
        next
    }
}

export default useMultiSteperFormAnnouncement