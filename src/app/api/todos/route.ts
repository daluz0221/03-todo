import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';

import * as yup from 'yup'


export async function GET(request: NextRequest){

    const { searchParams } = new URL(request.url)
    const take = searchParams.get('take') ?? '10'; 
    const skip = searchParams.get('skip') ?? '0'; 

    if(isNaN(+take)) return NextResponse.json({message: 'Take tiene que ser un número'}, {status: 400})

    const todos = await prisma.todo.findMany({
        take: +take,
        skip: +skip
    });

    return NextResponse.json(todos);
};

const postSchema = yup.object({
    description: yup.string().required(),
    complete: yup.boolean().optional().default(false),
})


export async function POST(request: NextRequest){

    try {
        const {complete, description} =  await postSchema.validate(await request.json());
        const todo = await prisma.todo.create({ data: {complete, description} })
        
        return NextResponse.json(todo);
    } catch (error) {
    return NextResponse.json(error, {status:400})        

    }
};

const deleteSchema = yup.object({
    complete: yup.boolean().required(),
})


export async function DELETE(request: NextRequest){

    
    try {

        const deleteTodos = await prisma.todo.deleteMany({
            where: {
                complete: true
            }
        })
        return NextResponse.json(deleteTodos);
    } catch (error) {
        return NextResponse.json(error, {status:400})
    }
    
};