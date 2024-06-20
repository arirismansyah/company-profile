import { NextResponse } from "next/server";
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export async function GET(request) {
    try {
        const users = await prisma.attributes.findFirst({ where: { attribute_name: "company_name_pt1" } });
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch attributes' }, { status: 500 });
    }

}