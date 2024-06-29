import React, { useState, useEffect } from 'react';
import profilePic from '../assets/User.svg'; 


const Dashboard = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [profile, setProfile] = useState({
        name: "Anushka Singh",
        email: "hello@gmail.com",
        balance: 59090,
        avatar: profilePic 
    });

    useEffect(() => {
        
        const fetchData = async () => {
    
            const mockUsers = [
                { _id: '1', firstName: 'Kumar', lastName: 'Rajesh' },
                { _id: '2', firstName: 'Reema', lastName: 'Singh' },
                { _id: '3', firstName: 'Rohit', lastName: 'Sharma' },
                { _id: '4', firstName: 'Mukesh', lastName: 'Ambani' },
                { _id: '5', firstName: 'Anushka', lastName: 'Singh' },
                { _id: '6', firstName: 'Vartika', lastName: 'Singh' },
                { _id: '7', firstName: 'Arpita', lastName: 'Jain' },
            ];
            setUsers(mockUsers);
            setFilteredUsers(mockUsers);
        };
        fetchData();
    }, []);

    const handleSearch = (event) => {
        const value = event.target.value;
        setSearch(value);
        const filtered = users.filter(user =>
            user.firstName.toLowerCase().includes(value.toLowerCase()) ||
            user.lastName.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    const handleUpdate = () => {
        alert('User updated successfully');
    };

    const handlePay = (userId) => {
        alert(`Payment to user ID: ${userId} processed`);
    };

    return (
        <div className="flex justify-end p-4 bg-gray-100 min-h-screen">
           
            <div className="container mx-auto max-w-2xl bg-white p-6 rounded-lg shadow-md relative z-10">
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                <div className="flex items-center mb-8">
                    <img src={profile.avatar} alt="Profile" className="w-20 h-20 rounded-full mr-4" />
                    <div>
                        <h2 className="text-2xl font-semibold">{profile.name}</h2>
                        <p className="text-lg text-gray-600">{profile.email}</p>
                        <div className="mt-2 flex items-center">
                            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-lg mr-2">
                                Balance: Rs {profile.balance.toFixed(2)}
                            </div>
                            <button
                                onClick={handleUpdate}
                                className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            >
                                Update Profile
                            </button>
                        </div>
                    </div>
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        placeholder="Search Users"
                        value={search}
                        onChange={handleSearch}
                        className="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>
                <div>
                    <h2 className="text-xl font-semibold mb-4">Send Money To:</h2>
                    <ul>
                        {filteredUsers.map(user => (
                            <li key={user._id} className="mb-4 p-4 bg-white rounded-lg shadow-md flex items-center justify-between">
                                <div className="flex items-center">
                                    <img src={profilePic} alt="User" className="w-12 h-12 rounded-full mr-4" />
                                    <div>
                                        <h3 className="text-lg font-semibold">{user.firstName} {user.lastName}</h3>
                                        <p className="text-gray-600">ID: {user._id}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => handlePay(user._id)}
                                    className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
                                >
                                    Pay
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
