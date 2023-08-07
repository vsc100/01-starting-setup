import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";
import Card from './Card'

export default function NewExpenseItem(props){
    return(
        <Card className="expenses">
        <ExpenseItem expense={props.expenses[0]}/>
        <ExpenseItem expense={props.expenses[1]}/>
        <ExpenseItem expense={props.expenses[2]}/>
        <ExpenseItem expense={props.expenses[3]}/>
        </Card>
    )
}