import { BiohazardIcon } from "../../icons"

interface FormContainerHeaderProps {
  title: string
}

export default function FormContainerHeader({title}: FormContainerHeaderProps){
  return (
    <div className="flex items-center gap-3 bg-slate-50 shadow-lg py-3 px-4 rounded-xl">
      <div className="rounded-xl bg-linear-to-br from-(--main-green) to-(--main-green-dark) text-white p-2">
        <BiohazardIcon />
      </div>
      <h1 className="text-lg font-bold">{title}</h1>
    </div>
  )
}