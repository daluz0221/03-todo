'use client';


import { Todo } from "@prisma/client"
import { startTransition, useOptimistic } from 'react'

// import styles from './TodoItem.module.css'
import { IoCheckboxOutline, IoSquareOutline } from "react-icons/io5";


interface Props {
    todo: Todo;
    toggleTodo: ( id: string, complete: boolean ) => Promise<Todo|void>
}


export const TodoItem = ({ todo, toggleTodo }:Props) => {

    const [ todoOp, toggleTodoOp ] = useOptimistic(
        todo,
        (state, newCompleteValue: boolean) => ({...state, complete: newCompleteValue})
    );

    const onToggleTodo = async () => {
        
        try {
            startTransition( () => toggleTodoOp( !todoOp.complete ));
            await toggleTodo( todoOp.id, !todoOp.complete )
        } catch (error) {
            startTransition( () => toggleTodoOp( !todoOp.complete ));
        }

    };


  return (
    <div className={ todoOp.complete ? 'line-through bg-blue-50 rounded-lg shadow-sm p-5 border-dashed border border-blue-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0' : 'bg-red-50 rounded-lg shadow-sm p-5 border-dashed border border-red-500 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0;'  }>

        <div className="flex flex-col sm:flex-row justify-start items-center gap-4">
            <div 
                onClick={()=> onToggleTodo( )}
                className={`
                flex p-2 rounded-md cursor-pointer
                hover:bg-opacity-60
                ${ todoOp.complete ? 'bg-blue-100 ' : 'bg-red-100 ' }   
            `} >
               {
                todoOp.complete
                ?  <IoCheckboxOutline  size={30} />
                : <IoSquareOutline size={30} />
               }
                
            </div>
            <div className=" text-center sm:text-left ">
                {todoOp.description}

            </div>
        </div>
    </div>
  )
}
