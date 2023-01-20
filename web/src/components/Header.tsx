import { Plus} from "phosphor-react";
import LogoImage from '../assets/logo.svg'

export function Header() {

  return (
    <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
          <img src={LogoImage} alt="logoHabits" />
          <button
            type="button"
            className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-background"
           >
            <Plus size={20} className="text-violet-500"/>
            Novo habito
          </button>
        </div>
  );
}