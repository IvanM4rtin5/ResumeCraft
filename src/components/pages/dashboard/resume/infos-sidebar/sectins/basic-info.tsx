import { UserRound } from "lucide-react"
import { SectionTitle } from "../section-title"
import { InputField } from "@/components/ui/input/field"

export const BasicInfoSection = () => {
    return (
        <div className="flex flex-col gap-2">
            <SectionTitle title="Informacoes Básicas" icon={UserRound} />
            <div className="grid grid-cols-2 gap-4 mt-4 w-full">
                <div className="col-span-full w-full flex gap-3 items-end">
                    <InputField
                    label="Foto"
                    placeholder="https://..."
                    name="content.image.url"
                    />
                </div>
            </div>
        </div>
    )
}