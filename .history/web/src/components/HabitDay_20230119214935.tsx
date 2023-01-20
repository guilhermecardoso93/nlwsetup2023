
import * as Popover from '@radix-ui/react-popover';

export function HabitDay() {
  return (
    <Popover.Root>
    <Popover.Trigger className="w-10 h-10 bg-zinc-900 border-2 border-zinc-800 rounded-lg"/>
    <Popover.Anchor />
    <Popover.Portal>
      <Popover.Content>
        <Popover.Close />
        <Popover.Arrow />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
    
  );
}


