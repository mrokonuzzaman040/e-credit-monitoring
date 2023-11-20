const AdminHome = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    return (
        <div>
            <h1>Welcome {}</h1>
        </div>
    );
};

export default AdminHome;