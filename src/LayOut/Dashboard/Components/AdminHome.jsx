import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Bar } from "react-chartjs-2";

const AdminHome = () => {
    const axiosSecure = useAxiosSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        },
    });

const totalEarnings = () => {
    
}

const totalProfit = () => {

}


const [startDate, setStartDate] = useState("");
const [endDate, setEndDate] = useState("");

// Filter users by calendar
const filteredUsers = users.filter((user) => {
    const userCalendar = new Date(user.calendar);
    return userCalendar >= startDate && userCalendar <= endDate;
});

return (
    <div>
        <div className="grid grid-cols-3 w-auto justify-center items-end text-center gap-4 ">
            <div className="bg-red-400 glass rounded-lg">
                <div className="card text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Total User</h2>
                        <p>{users.length}</p>
                    </div>
                </div>
            </div>
            <div className="bg-red-400 glass rounded-lg">
                <div className="card text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Total Earnings</h2>
                        <p>{totalEarnings}</p>
                    </div>
                </div>
            </div>
            <div className="bg-red-400 glass rounded-lg">
                <div className="card text-neutral-content">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Total Profit</h2>
                        <p>{totalProfit}</p>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex justify-center mt-4">
            <div className="flex items-center mr-4">
                <label className="mr-2">Start Date:</label>
                <input
                    type="date"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />
            </div>
            <div className="flex items-center">
                <label className="mr-2">End Date:</label>
                <input
                    type="date"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
                    className="border border-gray-300 rounded px-2 py-1"
                />
            </div>
        </div>
        <div className="chart-container">

        </div>
    </div>
);
};

export default AdminHome;