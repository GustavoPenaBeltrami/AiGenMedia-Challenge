import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET() {
  try {
    const jsonDirectory = path.join(process.cwd(), "public/jsons");
    console.log('jsonDirectory:', jsonDirectory);

    // Leer el contenido de la carpeta
    const filenames = fs.readdirSync(jsonDirectory);
  
    // Filtrar los archivos que sean .json
    const jsonFiles = filenames.filter((file) => file.endsWith(".json"));

    // Devolver los datos como JSON
    return NextResponse.json(jsonFiles);
  } catch (error) {
    return NextResponse.json({ error: 'File not found or error reading file' }, { status: 404 });
  }
}