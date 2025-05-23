import prisma from "@/lib/prisma";
import { NewTodo, TodosGrid } from "@/todos";



export const metadata = {
 title: 'Listado de todos',
 description: 'SEO',
};


export default async function ServerTodosPage() {
    console.log('construido');

  const todos = await prisma.todo.findMany({
    orderBy: {
      description: 'asc'
    }
  })


  return (
    <>
      
      <span className="text-3xl mb-10">Server Actions</span>
      <div className="w-full px-3 mx-5 mb-5" >
        <NewTodo />
      </div>

      <TodosGrid todos={todos} />
    </>
  );
}