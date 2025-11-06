export const dynamic = "force-static"; // ✅ SSG

type Comment = {
  id: number;
  email: string;
};

export default async function SSGPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/comments");
  const comments: Comment[] = await res.json();

  return (
    <div style={{ padding: 20 }}>
      <h1 className="text-3xl">SSG Page</h1>
      <p>Rendering time of this page {new Date().toLocaleTimeString()}</p>
      <p>Generated at build time (static).</p>

      {comments.slice(0, 3).map((c) => (
        <p key={c.id}>{c.email}</p>
      ))}
    </div>
  );
}
