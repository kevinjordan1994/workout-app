import Workout from "./WorkoutComponent";
import styles from "./WorkoutComponent.module.css";

export default function WorkoutList(props) {
  return (
    <section className={styles.workout__list}>
      <div className={styles.workout__inner_div}>
        {props.workouts.map((workout) => (
          <Workout
            key={workout.name}
            name={workout.name}
            targetMuscles={workout.targetMuscles}
          />
        ))}
      </div>
    </section>
  );
}
