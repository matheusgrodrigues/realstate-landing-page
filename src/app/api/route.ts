export async function GET() {
    const req = await fetch(
        `${process.env.API_URL}/galeria-principals?filters[nome][$eq]=galeria-principal&populate=*`
    );

    const { data } = await req.json();

    console.log(data);
    return Response.json({ data });
}
