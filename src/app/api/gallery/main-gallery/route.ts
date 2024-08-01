export async function GET() {
    const req = await fetch(
        `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/galerias?filters[name][$eq]=${'galeria-principal'}&populate=${'images'}`
    );

    const { data } = await req.json();

    return Response.json({ data });
}
