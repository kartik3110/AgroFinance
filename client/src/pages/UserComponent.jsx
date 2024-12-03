import React, { useState } from "react";
import UserService from "../services/UserService";

const UserComponent = () => {
  const [role, setRole] = useState("");

  const handleCreateUser = async () => {
    try {
      const tx = await UserService.createUser();
      console.log("User Created Transaction:", tx);
      alert("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      alert("Failed to create user.");
    }
  };

  const handleSetRole = async () => {
    try {
      const tx = await UserService.setRole(role);
      console.log("Role Set Transaction:", tx);
      alert("Role set successfully!");
    } catch (error) {
      console.error("Error setting role:", error);
      alert("Failed to set role.");
    }
  };

  return (
    <div>
      <h2>User Management</h2>
      <button onClick={handleCreateUser}>Create User</button>
      <input
        type="text"
        placeholder="Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <button onClick={handleSetRole}>Set Role</button>
    </div>
  );
};

export default UserComponent;
