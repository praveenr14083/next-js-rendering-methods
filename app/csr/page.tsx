"use client";

import { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
};

export default function CSRPage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data: User[]) => setUsers(data));
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h1>CSR Page</h1>
      <p>Rendered on the client (browser).</p>

      {users.slice(0, 3).map((u) => (
        <p key={u.id}>{u.name}</p>
      ))}
    </div>
  );
}
