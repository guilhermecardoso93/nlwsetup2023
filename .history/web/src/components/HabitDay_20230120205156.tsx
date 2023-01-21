import * as Popover from "@radix-ui/react-popover";
import * as Checkbox from "@radix-ui/react-checkbox";
import clsx from "clsx";
import { ProgressBar } from "./ProgressBar";
import { Check } from "phosphor-react";

import { HabitDayProps } from "./HabitDayProps";
import dayjs from "dayjs";

export function HabitDay({ completed = 0, amount = 0 }: HabitDayProps) {
  const completedPercent = amount > 0 ? Math.round((completed / amount) * 100) : 0;

  const dayInMath = dayjs().format('DD/MM')

  return (
    <Popover.Root>
      <Popover.Trigger
        className={clsx(
          "w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg",
          {
            "bg-zinc-900 border-zinc-900": completedPercent === 0,
            "bg-violet-900 border-violet-700":
              completedPercent >= 0 && completedPercent < 20,
            "bg-violet-800 border-violet-600":
              completedPercent >= 20 && completedPercent < 40,
            "bg-violet-700 border-violet-500":
              completedPercent >= 40 && completedPercent < 60,
            "bg-violet-600 border-violet-500":
              completedPercent >= 60 && completedPercent < 80,
            "bg-violet-500 border-violet-400": completedPercent >= 80,
          }
        )}
      />

      <Popover.Portal>
        <Popover.Content className="min-w-[320px] p-6 rounded-2xl bg-zinc-900 flex flex-col">
          <span className="font-semibold text-zinc-400">terça-feira</span>
          <span className="mt-1 font-extrabold leading-tight text-3xl">
            17 de Janeiro - 2022
          </span>

          <ProgressBar progress={40} />

          <div className="mt-6 flex flex-col gap-3">
            <Checkbox.Root className="flex items-center gap-3 group">
              <div
                className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2
               border-zinc-800 group-data-[state=checked]:bg-green-500  group-data-[state=checked]:border-green-500"
              >
                <Checkbox.Indicator>
                  <Check size={20} className="text-white" />
                </Checkbox.Indicator>
              </div>

              <span className="font-semibold text-xl text-white leading-tight group-data-[state=checked]:line-through group-data-[state=checked]:text-zinc-400">
                Beber 2 litros de água
              </span>
            </Checkbox.Root>
          </div>

          <Popover.Arrow className="fill-zinc-900" height={8} width={16} />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
