import React, { useEffect, useState } from "react";
import api from "../utils/api";
import "../stylesheets/userlist.css";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const { data } = await api.get("/users/list", {
          headers: { Authorization: localStorage.getItem("token") },
        });
        setUsers(data);
      } catch (err) {
        console.error(err.response.data);
      }
    };

    fetchUsers();
  }, []);

  return (
    <table className="user-table">
      <thead>
        <tr>
          <th>Usernames</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user._id}>
            <td>{user.username}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserList;
