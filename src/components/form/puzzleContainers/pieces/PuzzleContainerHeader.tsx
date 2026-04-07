import { DocumentIcon, InfoIcon } from "../../../icons";

interface PuzzleContainerHeaderProps {
  question: string
  hint?: string
}

export default function PuzzleContainerHeader({question, hint}: PuzzleContainerHeaderProps){
 return (
 <div className="flex flex-col gap-5 mb-2">
   <div>
     <div className="flex items-center gap-1">
       <DocumentIcon/>
       <p className="font-semibold">REGISTRO:</p>
     </div>
     
     <p className="text-lg">{question}</p>
   </div>
   
   {hint && 
     <div className="flex items-center gap-1">
       <InfoIcon />
       <p className="">{hint}</p>
     </div>
   }
 </div>
 ) 
}