export default function HomePage() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Next.js Rendering Methods</h1>

      <ul>
        <li>
          <a href="/csr">CSR Example</a>
        </li>
        <li>
          <a href="/ssr">SSR Example</a>
        </li>
        <li>
          <a href="/ssg">SSG Example</a>
        </li>
        <li>
          <a href="/isr">ISR Example</a>
        </li>
      </ul>
    </div>
  );
}
