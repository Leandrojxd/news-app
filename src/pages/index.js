import { useState } from "react";
export default function Home() {
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const handleClick = async () => {
    try{
      const response = await fetch('/api/hello');
      const { users } = await response.json();
      setUser(users);
      setError(null);
    }catch(error){
      console.log(error)
      setError('Error fetching users.')
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Obtener nombre de Usuarios</button>
      <p>Nombre de la tabla: {user.map((eachUser) => (eachUser.Name))}</p>
    </div>
  );
}
