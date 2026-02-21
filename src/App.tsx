import "./App.css";

import { useMutation, useQuery } from "@tanstack/react-query";
import { useState } from "react";

import { getUsersQuery, postUsersMutation } from "./api/user";

function App() {
  const { data: users } = useQuery(getUsersQuery);

  const { mutateAsync: postUser } = useMutation(postUsersMutation);
  const [name, setNAme] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      citron client
      <div>
        {users?.users.map(user => (
          <div key={user.id}>{user.name}</div>
        ))}
      </div>
      <div>
        <input
          type="text"
          value={name}
          onChange={e => setNAme(e.target.value)}
        />
        <input
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          onClick={() =>
            postUser({ name, password }).then(() => {
              setNAme("");
              setPassword("");
            })
          }
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default App;
