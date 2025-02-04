import { Plus } from "lucide-react"
import {  ResumeCardButton } from "./resume-card"

export const AddResumesButton = () => {
    return (
        <ResumeCardButton
            title="Criar curriculo"
            description="Crie seu curriculo agora"
            icon={<Plus size = {50}/>}
        /> 
    )
}