export function NewHabitForm(){
  return (
    <form>
      <label htmlFor="title">
        Qual seu comprometimento?
      </label>

      <input
        type='text'
        id='title'
        placeholder="ex.: Exercícios, dormir be, etc"
        autoFocus
      />
    </form>
  )
}