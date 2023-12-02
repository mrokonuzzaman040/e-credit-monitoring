const applicants = {
    orderInfo:
    {
        inquiryDate,
        inquiryType,
        permPurpose,
        trackingId,
        sourceSystemId,
        sourceName,
        resellerName,
        platformName,
        intermediaryName,
        requestor: {
            name,
            endUser,
            email,
            address,
            phoneNumbers,
        }
    },
    primaryConsumer: 
    {
        personalInformation:{
            customerReferenceIdentifier,
            socialSecurityNumber, 
        }
    }
}


import React, { useState } from 'react';
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const UsersInfo = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const [searchTerm, setSearchTerm] = useState("");
    const [sortColumn, setSortColumn] = useState(null);
    const [sortDirection, setSortDirection] = useState("asc");

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSort = (column) => {
        if (sortColumn === column) {
            setSortDirection(sortDirection === "asc" ? "desc" : "asc");
        } else {
            setSortColumn(column);
            setSortDirection("asc");
        }
    };

    const filteredUsers = users.filter((user) =>
        user.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.last_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const sortedUsers = sortColumn
        ? filteredUsers.sort((a, b) => {
            const aValue = a[sortColumn];
            const bValue = b[sortColumn];
            if (aValue < bValue) {
                return sortDirection === "asc" ? -1 : 1;
            }
            if (aValue > bValue) {
                return sortDirection === "asc" ? 1 : -1;
            }
            return 0;
        })
        : filteredUsers;

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-2xl font-bold mb-4">Example Datatable</h2>
            <div className="mb-4 flex justify-end">
                <input
                    type="text"
                    placeholder="Search with name"
                    value={searchTerm}
                    onChange={handleSearch}
                    className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            <table id="example" className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("first_name")}>
                            Name {sortColumn === "first_name" && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
                        </th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("ssn")}>
                            SSN {sortColumn === "ssn" && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
                        </th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("dob")}>
                            DOB {sortColumn === "dob" && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
                        </th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("phone")}>
                            Phone {sortColumn === "phone" && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
                        </th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("address")}>
                            Address {sortColumn === "address" && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
                        </th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("city")}>
                            City {sortColumn === "city" && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
                        </th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("state")}>
                            State {sortColumn === "state" && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
                        </th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("zip")}>
                            ZIP {sortColumn === "zip" && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
                        </th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("card_number")}>
                            Card Number {sortColumn === "card_number" && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
                        </th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("exdate")}>
                            Expire Date {sortColumn === "exdate" && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
                        </th>
                        <th className="px-4 py-2 cursor-pointer" onClick={() => handleSort("cvc")}>
                            CVC {sortColumn === "cvc" && <span>{sortDirection === "asc" ? "▲" : "▼"}</span>}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map((user, index) => (
                        <tr key={index}>
                            <td className="border px-4 py-2">{user.first_name} {user.last_name}</td>
                            <td className="border px-4 py-2">{user.ssn}</td>
                            <td className="border px-4 py-2">{user.dob}</td>
                            <td className="border px-4 py-2">{user.phone}</td>
                            <td className="border px-4 py-2">{user.address}</td>
                            <td className="border px-4 py-2">{user.city}</td>
                            <td className="border px-4 py-2">{user.state}</td>
                            <td className="border px-4 py-2">{user.zip}</td>
                            <td className="border px-4 py-2">{user.card_number}</td>
                            <td className="border px-4 py-2">{user.exdate}</td>
                            <td className="border px-4 py-2">{user.cvc}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersInfo;
