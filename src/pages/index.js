import { useState } from "react";
export default function Home() {
  //AQUI SE GUARDA LA DATA Y EL ERROR
  const [user, setUser] = useState([]);
  const [error, setError] = useState(null);
  const [Name, setName] = useState('');
  console.log(Name)
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
  const api_Post = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/hello', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Name })
    });
    const data = await response.json();
    console.log(data);
  };  
  

  return (
    <div>
      <button onClick={handleClick}>Obtener nombre de Usuarios</button>
      <p>Nombre de la tabla: {user.map((eachUser) => (eachUser.Name))}</p>
      <label>
        Nombre:
        <input type="text" name="name" value = {Name} onChange = {(name) => setName(name.target.value)}/>
      </label>
      <button onClick={api_Post}>Enviar nombre</button>
    </div>
  );
}
