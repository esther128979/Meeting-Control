import React, { useState, useEffect } from 'react';
import { getAllUsers, createUser } from '../api/usersApi';
import { User } from '../types/models';

const UsersPage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    useEffect(() => {
        getAllUsers().then(setUsers).catch(console.error);
    }, []);

    const handleAddUser = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const newUser = await createUser({
                name, email,
                meetingIds: []
            });
            setUsers([...users, newUser]);
            setName('');
            setEmail('');
            setShowForm(false);
        } catch (error) {
            alert('שגיאה בהוספת משתמש');
        }
    };

    return (
        <div className="container mt-4">
            <h2>רשימת משתמשים</h2>
            <button className="btn btn-link mb-3" onClick={() => setShowForm(!showForm)}>
                {showForm ? 'ביטול' : 'הוסף משתמש חדש'}
            </button>
            {showForm && (
                <form onSubmit={handleAddUser} className="border rounded p-3 mb-3">
                    <div className="mb-2">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="שם"
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-2">
                        <input
                            type="email"
                            className="form-control"
                            placeholder="אימייל"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100">הוסף משתמש</button>
                </form>
            )}
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>שם</th>
                        <th>אימייל</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersPage;