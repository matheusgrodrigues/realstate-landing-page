export async function GET() {
    const req = await fetch(
        `${process.env.API_URL}/galeria-principals?filters[nome][$eq]=galeria-principal&populate=*`
    );

    const { data } = await req.json();

    return Response.json({ data });
}
