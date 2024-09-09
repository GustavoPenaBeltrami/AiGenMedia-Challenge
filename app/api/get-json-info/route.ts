import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs';

export async function GET(request: Request) {
  // Obtener el archivo desde los parámetros de búsqueda (query params)
  const { searchParams } = new URL(request.url);
  const fileName = searchParams.get('file');

  if (!fileName) {
    return NextResponse.json({ error: 'No file specified' }, { status: 400 });
  }

  try {
    // Ruta del archivo en la carpeta public/jsons
    const filePath = path.join(process.cwd(), 'public', 'jsons', fileName);
    
    // Leer el archivo JSON
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const parsedData = JSON.parse(jsonData);

    // Devolver los datos como JSON
    return NextResponse.json(parsedData);
  } catch (error) {
    return NextResponse.json({ error: 'File not found or error reading file' }, { status: 404 });
  }
}
