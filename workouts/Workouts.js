class Workout {
  constructor(name, targetMuscles, image) {
    this.name = name;
    this.targetMuscles = targetMuscles;
    this.image = image;
  }
}

const workoutsObj = {
  barbellBackSquat: new Workout("Barbell Back Squat", "Legs", null),
  angledLegPress: new Workout("Angled Leg Press", "Legs", null),
  legCurl: new Workout("Leg Curl", "Hamstrings, Calves", null),
  legExtension: new Workout("Leg Extension Machine", "Quadriceps", null),
  calfRaises: new Workout("Calf Raises", "Calves", null),
  deadLift: new Workout("Deadlift", "Legs, Back, Arms", null),
  pullUp: new Workout("Pull Up", "Back, Arms", null),
  rearDeltFly: new Workout("Rear Delt Fly", "Back, Rear Delts", null),
  latPulldown: new Workout("Lat Pulldown", "Lats, Biceps", null),
  cableRow: new Workout("Cable Row", "Back", null),
  bicepCurl: new Workout("Bicep Curl", "Biceps", null),
  hammerCurl: new Workout("Hammer Curl", "Biceps", null),
  benchPress: new Workout("Bench Press", "Chest, Triceps", null),
  shoulderPress: new Workout("Shoulder Press", "Shoulders", null),
};

const workouts = [];

for (const workout in workoutsObj) {
  workouts.push(workoutsObj[workout]);
}

export default workouts;
