export const dynamic = "force-dynamic"; // ✅ SSR

type Post = {
  id: number;
  name: string;
};

export default async function SSRPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const posts: Post[] = await res.json();

  return (
    <div style={{ padding: 20 }}>
      <h1>SSR Page</h1>
      <p>Rendered on the server for every request.</p>

      {posts.slice(0, 3).map((p) => (
        <p key={p.id}>{p.name}</p>
      ))}
    </div>
  );
}
