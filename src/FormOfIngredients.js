const FormOfIngredients = ({activeNote, updateNote}) => {

    const editMyMeal = (myInput, value) => {
        updateNote({
            ...activeNote,
            [myInput] : value
        })
    }

    if(!activeNote) {
        return <p className="titleBeforeForm">PLAN YOUR WEEK AHEAD OF TIME!</p>
    }

    return (
        <div className="ingredientsForm">
            <input
                onChange={(e) => editMyMeal("title", e.target.value)} 
                className="myInput" 
                id="title"
                value={activeNote.title}
                type="text"
                placeholder="Today is..."/>
            <textarea 
                onChange={(e) => editMyMeal("mealForADay", e.target.value)}
                placeholder="Type your weekly meal plan"
                id="mealForADay"
                value={activeNote.mealForADay}/>
            <textarea 
                onChange={(e) => editMyMeal("ingredients", e.target.value)}
                placeholder="Ingredients..."
                id="mealForADay"
                value={activeNote.ingredients}/>
        </div>
    )
}

export default FormOfIngredients;