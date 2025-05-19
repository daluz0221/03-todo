import prisma from '@/lib/prisma';
import { Todo } from '@prisma/client';
import { NextResponse, NextRequest } from 'next/server';

import * as yup from 'yup';


interface Args {
    params: {
        id: string
    }
}

const getTodo = async(id:string):Promise<Todo | null> => {
  
    const todo = await prisma.todo.findUnique({
        where: {
            id
        }
    });


    return todo
}


export async function GET(request: NextRequest, {params}: Args){

    const { id } = params;

    const todo = await getTodo( id );
    if(!todo){
        return NextResponse.json({message: `Todo con id ${ id } no existe`}, {status: 400})
    }

    return NextResponse.json(todo);
};


const putSchema = yup.object({
    description: yup.string().optional(),
    complete: yup.boolean().optional(),
})


export async function PUT(request: NextRequest, {params}: Args){

    const { id } = params;

    const todo = await getTodo( id );
    if(!todo){
        return NextResponse.json({message: `Todo con id ${ id } no existe`}, {status: 400})
    }
    try {
        
        const { complete, description, ...res } = await putSchema.validate(  await request.json() );
    
        const updatedTodo = await prisma.todo.update({
            where: {id},
            data: { complete, description }
        });
        return NextResponse.json(updatedTodo);
    } catch (error) {
        return NextResponse.json(error, {status: 400})
    }

};
