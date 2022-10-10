import WorkoutList from "../components/Workouts/WorkoutList";
import workouts from "../workouts/Workouts";

export default function Home() {
  return (
    <>
      <WorkoutList workouts={workouts} />
    </>
  );
}
