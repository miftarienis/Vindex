import WorkoutCart from '../WorkoutCart'
export default function WorkoutScetion() {
  return (
    <div className="bg-gray-200">
      <div className="container">
        <WorkoutCart title="Workouts" img="/img/workout.png" id="workoutplan" left>
          At Vindex, our commitment to excellence drives us to continually redefine the fitness
          experience. Our dedication to innovation is evident in our relentless pursuit of the most
          unique and cutting-edge equipment, ensuring that our clients embark on a fitness journey
          like no other.For more workouts you can hit the button and you can be assisted with the
          best trainers.
        </WorkoutCart>
        <WorkoutCart title="Diet Plan" img="/img/diet.png" id="dietplan">
          At Vindex, we recognize that achieving optimal fitness isnt solely about the workouts its
          also about nourishing your body from within. Thats why we assembled a team of the finest
          nutritionists who are dedicated to helping you unlock the true potential of your health
          through tailored and effective dietary guidance. For more you can hit the button more and
          you will be assisted.
        </WorkoutCart>
      </div>
    </div>
  )
}
