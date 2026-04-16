import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  
  return (
    <>
      <div className="flex flex-col gap-15 h-screen justify-center items-center">
        <button
          onClick={() => navigate("/app")}
          className="bg-(--main-green) text-white font-bold py-4 px-5 rounded-xl cursor-pointer ease-in-out duration-300 transition-all hover:scale-102 hover:shadow-xl active:scale-99"
        >Abrir Formulário</button>
      </div>
    </>
  )
}