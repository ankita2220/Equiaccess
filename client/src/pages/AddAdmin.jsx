import React, { useState } from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom'

const AddAdmin = () => {
    const navigate = useNavigate();
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [type, setType] = useState('');
    const [society, setSociety] = useState('');

    const handleTypeChange = (e) => {
        setType(e.target.value);
        // Reset society when type changes
        setSociety('');
    };

    const handleSocietyChange = (e) => {
        setSociety(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Check if userName and password are provided
        if (!userName || !password) {
            alert('Please provide a username and password.');
            return;
        }
    
        axios.post('http://localhost:4000/admin/add', {
            userName: userName,
            password: password,
            type: type,
            society: society
        })
        .then((res) => {
            // console.log(res.data);
            navigate('/admin/list');
        })
        .catch(err => {
            console.log(err);
        });
    };
    

    return (
        <div className="max-w-md mx-auto">
            <h1>Add Admin</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="john doe"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
                <div className="mb-4 relative">
                    <select
                        value={type}
                        onChange={handleTypeChange}
                        className="appearance-none bg-transparent border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="" disabled hidden>Select Type</option>
                        <option value="ADMIN">ADMIN</option>
                        <option value="HEAD">HEAD</option>
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </div>
                </div>
                {type === 'HEAD' && (
                    <select
                        value={society}
                        onChange={handleSocietyChange}
                        required={type === 'HEAD'}
                        className="mb-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    >
                        <option value="" disabled hidden>Select Society</option>
                        <option value="vamunique">Vamunique</option>
                        <option value="ffortisimmo">Ffortisimmo</option>
                        <option value="aakriti">Aakriti</option>
                        <option value="bhangde_te_sartaaj">Bhangde te Sartaaj</option>
                        <option value="jyc">JYC</option>
                        <option value="abhivyakti">Abhivyakti</option>
                    </select>
                )}
                <button type="submit" className="primary">
                    Add Admin
                </button>
            </form>
        </div>
    );
};

export default AddAdmin;
