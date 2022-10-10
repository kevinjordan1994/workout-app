import styles from "./WorkoutComponent.module.css";

export default function Workout(props) {
  const addWorkoutHandler = () => {
    console.log(props.name);
  };

  return (
    <div className={styles.workout__div}>
      <div className={styles.workout__header}>
        <h3>{props.name}</h3>
      </div>
      <div className={styles.workout__content}>
        <p>{props.targetMuscles}</p>
        <button
          onClick={addWorkoutHandler}
          className={styles.workout__add_button}
        >
          Add
        </button>
      </div>
    </div>
  );
}
