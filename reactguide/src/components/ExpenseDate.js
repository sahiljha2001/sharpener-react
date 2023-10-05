function ExpenseDate(props){
    return(<>
    <div>{props.date.toLocaleStrings()}</div>
    </>)
}
export default ExpenseDate;