export async function POST(request: Request) {
    // const formData = await request.formData()
    const formData = await request.json()
    console.log(`formData ${formData}`)
    return Response.json({ formData })
    // const res = await fetch('http://127.0.0.1:8188/prompt', {
    //     method: "POST"
    // })
    // if (!res.ok) {
    //     throw new Error("An error has occurred")

    // }

    // const data = await res.json()

    // return Response.json({ data })
}