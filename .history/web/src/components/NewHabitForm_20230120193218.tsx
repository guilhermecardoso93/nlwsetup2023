import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";
import { FormEvent, useState } from "react";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

export function NewHabitForm() {
  const [ title, setTitle ] = useState('')
  
  function createHabit(event: FormEvent) {
    event.preventDefault()
    

  }

  return (
    <form className="w-full flex flex-col mt-6" onSubmit={createHabit}>
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>

      <input
        type="text"
        id="title"
        placeholder="ex.: Exercícios, dormir be, etc"
        autoFocus
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400"
        onChange={event => { setTitle(event.target.value)}}
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrência?
      </label>
      <div className="flex flex-col gap-2 mt-3">
        {availableWeekDays.map((day) => {
          return (
            <Checkbox.Root className="flex items-center gap-3 group" key={day}>
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2
               border-zinc-800 group-data-[state=checked]:bg-green-500  group-data-[state=checked]:border-green-500"
              >
                <Checkbox.Indicator>
                  <Check size={20} className="text-white" />
                </Checkbox.Indicator>
              </div>

              <span className=" text-white text-semibold leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
                {day}
              </span>
            </Checkbox.Root>
          );
        })}
      </div>
      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center gap-3 font-semibold justify-center bg-green-400 hover:bg-green-500"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
}