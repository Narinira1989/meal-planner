import { useEffect, useState } from 'react';
import './App.css';
import FormOfIngredients from './FormOfIngredients';
import ListOfNotes from './ListOfNotes';
import uuid from 'react-uuid';

function App() {

  const [mealPlans, setMealPlans] = useState(localStorage.mealPlans ? JSON.parse(localStorage.mealPlans) : []);
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    localStorage.setItem("mealPlans", JSON.stringify(mealPlans))
  }, [mealPlans])

  const addMeal = () => {
    const newMeal = {
      title: "Today is...",
      id: uuid(),
      mealForADay: "",
      ingredients: ""
    }
    setMealPlans([newMeal, ...mealPlans])
  }

  const deleteMeal = (mealId) => {
    setMealPlans(mealPlans.filter(({id}) => id !== mealId))
  }

  const updateNote = (myUpdatedMeal) => {
    const updatedMeals = mealPlans.map((mealPlan) => {
      if(mealPlan.id === myUpdatedMeal.id) {
        return myUpdatedMeal;
      }
      return mealPlan;
    })
    setMealPlans(updatedMeals)
  }

  const getActiveMeal = () => {
    return mealPlans.find(({id}) => id === activeNote)
  }

  return (
    <div className="App">
      <ListOfNotes 
        addMeal={addMeal} 
        mealPlans={mealPlans} 
        deleteMeal={deleteMeal}
        activeNote={activeNote}
        setActiveNote={setActiveNote}/>
      <FormOfIngredients activeNote={getActiveMeal()} updateNote={updateNote}/>
    </div>
  );
}

export default App;
