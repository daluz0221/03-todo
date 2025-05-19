import { NextResponse, NextRequest } from 'next/server';




export async function GET(request: NextRequest){


    return NextResponse.json({
        hola: 'mundo'
    })

};


export async function POST(request: NextRequest){


    return NextResponse.json({
        hola: 'mundo',
        method: 'POST'
    })

};
