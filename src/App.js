import React, {useEffect, useState} from "react";
import FilterInput from "./FilterInput";
import Table from "./Table";
import { getUsers } from "./API";
import './App.css';

function App() {
  const [initialUsers, updateAvaibleUsers] = useState([]);
  const [usersToRender, updateUsersToRender] = useState([]);

  useEffect(() => {
    getUsers().then(({ data: { results } }) => updateAvaibleUsers(results));
    
  }, []);

  return (
    <div className="App">
      <h1>Employee Directory</h1>
      <p>
        Choose your fighter! or! Search your fighter with the user input!
      </p>
      <FilterInput users={initialUsers} updateUsers={updateUsersToRender} />
      <Table users={usersToRender} />
    </div>
  );
}
export default App;
