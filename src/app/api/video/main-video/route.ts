export async function GET() {
    const req = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/videos?filter[name][$eq]=${`video-principal`}`);

    const { data } = await req.json();

    return Response.json({ data });
}
