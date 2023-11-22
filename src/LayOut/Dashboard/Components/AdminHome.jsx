import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";


const AdminHome = () => {

    const axiosSecure = useAxiosSecure();

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })

    refetch();
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
                            <h2 className="card-title">Total User</h2>
                            <p>{ }</p>
                        </div>
                    </div>
                </div>
                <div className="bg-red-400 glass rounded-lg">
                    <div className="card text-neutral-content">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title">Total User</h2>
                            <p>{ }</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminHome;
{/* <h1>Hello {user.displayName}</h1>
<h1>Admin Home</h1> */}