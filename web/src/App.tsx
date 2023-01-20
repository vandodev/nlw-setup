import { Habit } from "./components/Habit"
import './styles/global.css';
import LogoImg from './assets/logo.svg'
import { Plus } from "phosphor-react";


export function App() {
  return (  
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-full max-w-5xl px-6 flex flex-col gap-16">
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
          <img src={LogoImg} alt="logoHabits" />
          <button
            type="button"
            className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background"
           >
            <Plus size={20} className="text-violet-500"/>
            Novo habito
          </button>
        </div>
      </div>
    </div>
  )
}

