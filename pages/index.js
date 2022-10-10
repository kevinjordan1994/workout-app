import workouts from "../workouts/Workouts";

export default function Home() {
  console.log(workouts);

  return (
    <>
      {workouts.map((workout) => (
        <div key={workout.name}>
          <h3>{workout.name}</h3>
          <p>{workout.targetMuscles}</p>
        </div>
      ))}
    </>
  );
}
