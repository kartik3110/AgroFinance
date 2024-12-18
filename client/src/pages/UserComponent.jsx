import React, { useState } from "react";
import UserService from "../services/UserService";
import toast from "react-hot-toast";

const UserComponent = () => {
  const [role, setRole] = useState("");

  const handleCreateUser = async () => {
    try {
      const tx = await UserService.createUser();
      console.log("User Created Transaction:", tx);
      toast.success("User created successfully!");
    } catch (error) {
      console.error("Error creating user:", error);
      toast.error("Failed to create user.");
    }
  };

  const handleSetRole = async () => {
    try {
      const tx = await UserService.setRole(role);
      console.log("Role Set Transaction:", tx);
      toast.success("Role set successfully!");
    } catch (error) {
      console.error("Error setting role:", error);
      toast.error("Failed to set role.");
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
