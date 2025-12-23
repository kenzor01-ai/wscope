import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

// GET all clients
export async function GET() {
  const clients = await prisma.client.findMany();
  return NextResponse.json(clients);
}

// POST a new client
export async function POST(req: Request) {
  const data = await req.json();
  const newClient = await prisma.client.create({ data });
  return NextResponse.json(newClient);
}

