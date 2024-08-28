import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState('');
    const [role, setRole] = useState('');

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:5000/api/users', {
                    params: { search, role },
                });
                setUsers(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchUsers();
    }, [search, role]);

    return (
        <div className="container mt-5">
            <h2>User List</h2>
            <div className="row mb-3">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <select
                        className="form-select"
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                    >
                        <option value="">All</option>
                        <option value="User">User</option>
                        <option value="Admin">Admin</option>
                        <option value="Guest">Guest</option>
                    </select>
                </div>
            </div>
            <ul className="list-group">
                {users.map((user) => (
                    <li key={user._id} className="list-group-item">
                        <div>
                            <strong>{`${user.firstName} ${user.lastName}`}</strong> <br />
                            {`${user.email} - ${user.mobileNo} - ${user.role}`}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
