import axios from "axios";
import React, { useEffect, useState } from "react";
import CardPage from "./CardPage";
import "./User.css";
import NavbarPage from "../components/NavbarPage";

const User = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchUsers = async () => {
    try {
      const res = await axios.get("http://localhost:3000/user");
      setAllUsers(res.data);
      setFilteredUsers(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const filtered = allUsers.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredUsers(filtered);
  }, [searchTerm, allUsers]);

  return (
    <div className="container">
      <NavbarPage />
      <h1 className="head">Our Latest Posts</h1>
      <div>
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="students">
        {filteredUsers.map((user) => (
          <CardPage key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default User;
