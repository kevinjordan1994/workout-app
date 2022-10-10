import Workout from "../components/Workouts/WorkoutComponent";
import workouts from "../workouts/Workouts";

export default function Home() {
  return (
    <>
      {workouts.map((workout) => (
        <Workout
          key={workout.name}
          name={workout.name}
          targetMuscles={workout.targetMuscles}
        />
      ))}
    </>
  );
}
