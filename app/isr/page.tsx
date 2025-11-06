export const revalidate = 10; // ✅ Regenerate every 10 seconds

type Todo = {
  id: number;
  title: string;
};

export default async function ISRPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] = await res.json();

  return (
    <div style={{ padding: 20 }}>
      <h1 className="text-3xl">ISR Page</h1>
      <p>Rendering time of this page {new Date().toLocaleTimeString()}</p>
      <p>Regenerates every 10 seconds.</p>

      {todos.slice(0, 3).map((t) => (
        <p key={t.id}>{t.title}</p>
      ))}
    </div>
  );
}
