import ExpenseItem from "./ExpenseItem";
import "./ExpenseItem.css";
import { useState } from "react";
import Card from './Card';
import ExpensesFilter from "./Expensefilter";
import { useEffect } from "react";


export default function NewExpenseItem(props){

    const [sortedlist, SetSortedList]= useState(props.expenses);
    const [selectedyear, setselectedyear] = useState('2022')

    
    function ChangeYear(year){
        setselectedyear(year);
        SetSortedList(props.expenses.filter((expense) => expense.date.getFullYear().toString()=== year));
    }


    useEffect(() => {
        SetSortedList(props.expenses.filter((expense) => expense.date.getFullYear().toString()=== '2022'));
    }, [])
    




    return(   
        <Card className="expenses">
        <ExpensesFilter setected={selectedyear} onChangeFilter={ChangeYear}/>
        {sortedlist.map((expense)=><ExpenseItem key={expense.key} expense={expense}/>)}
        </Card>
    )
}