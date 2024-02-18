export async function GET() {
    const res = await fetch('http://127.0.0.1:8188/object_info', {
        headers: {
            'Content-Type': 'application/json',
        },
    })
    if (!res.ok) {
        throw new Error("An error has occurred")

    }

    const data = await res.json()

    return Response.json({ data })
}