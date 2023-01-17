import './habits.css'

interface HabitProps {
  completed: number
}

export function Habit(props: HabitProps) {
  return (
    <div className="habits">
      {props.completed}
    </div>
  );
}