export async function GET() {
  const res = await fetch('https://api.github.com/users/felipekg')

  const data = await res.json()

  return Response.json(data)
}
