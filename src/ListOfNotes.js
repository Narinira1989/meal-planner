import trash from './trash.png'

const ListOfNotes = ({addMeal,deleteMeal, mealPlans, activeNote, setActiveNote}) => {
    return (
        <div className="noteList">
            <div>
                <h1>Let's make a weekly meal plan</h1>
                <div className="button">
                    <button className="btn-add" onClick={addMeal}>Add Meal</button>
                </div>
                <div>
                    {mealPlans.map(({id,title, mealForADay}) => (
                        <div key={id} className={`meal ${id === activeNote ? "selected" : "default"}`}
                            onClick={() => setActiveNote(id)}>
                            <p className="title">{title}</p>
                            <p className="field">{mealForADay.substring(0, 60)}</p>
                            <button className="btn-delete" onClick={() => deleteMeal(id)}><img src={trash} alt="trash" width="15px"/></button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default ListOfNotes;