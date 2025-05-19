import prisma from '@/lib/prisma';
import { NextResponse, NextRequest } from 'next/server';




export async function GET(request: NextRequest){

    await prisma.todo.deleteMany();

    await prisma.todo.createMany({
        data: [
            {description: 'Aprender next'},
            {description: 'Aprender node', complete: true},
            {description: 'Aprender docker'},
            {description: 'Aprender react native'},
            {description: 'Aprender despliegues'},

        ]
    })
    
    return NextResponse.json({
       message: 'SEED execute'
    })

};


export async function POST(request: NextRequest){


    return NextResponse.json({
        hola: 'mundo',
        method: 'POST'
    })

};
