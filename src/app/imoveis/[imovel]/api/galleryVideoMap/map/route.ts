export async function GET() {
    const req = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/mapas?filter[name][$eq]=${`mapa-principal`}`);
    const { data } = await req.json();
    return Response.json({ data });
}
