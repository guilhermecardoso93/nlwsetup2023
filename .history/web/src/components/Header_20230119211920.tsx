import { useState } from "react";
import { Plus } from "phosphor-react";
import LogoImage from "../assets/logo.svg";

export function Header() {
  const  [isModalOpen, setIsModalOpen] = useState(false);

  function buttonClicked() {
    setIsModalOpen(true)
  }

  return (
    <div className="w-full max-w-3xl mx-auto flex justify-between items-center">
      <img src={LogoImage} alt="Logo" />
      {isModalOpen ? <p>oi</p> : null}
      <button
        type="button"
        onClick={buttonClicked}
        className="border border-violet-500 font-semibold rounded-lg px-6 py-4 flex items-center gap-3 hover:border-violet-300"
      >
        <Plus width={20} className="text-violet-500" />
        Novo habito
      </button>
    </div>
  );
}
