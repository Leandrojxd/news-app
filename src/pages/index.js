import { useState } from "react";
import { supabase } from "/lib/supabaseClient";

export default function Home() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      const { data } = await supabase.from("users").select("Name");
      const userNames = data.map((user) => user.Name);
      setUsers(userNames);
      setError(null);
    } catch (error) {
      console.log(error);
      setError("Error fetching users.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await fetchUsers();
  };

  return (
    <div>
      <h1>Aprendiendo Next.js desde Cero</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <button type="submit">Fetch Users</button>
        </label>
      </form>
      {error && <div>Error: {error}</div>}
      <div>
        <h2>User Names:</h2>
        <ul>
          {users.map((user) => (
            <li key={user}>{user}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

