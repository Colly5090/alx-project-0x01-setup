import { UserData, UserModalProps } from "@/interfaces";
import initialUserData from "./UserData";
import { useState } from "react"

const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
    const [user, setUser] = useState<UserData>(initialUserData);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const keys = name.split('.');

        setUser((prevUser) => {
            const updatedUser = { ...prevUser };

            let temp: any = updatedUser;
            for (let i = 0; i < keys.length - 1; i++) {
                temp = temp[keys[i]]
            }
            temp[keys[keys.length - 1]] = value;

            return updatedUser;
        })
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(user);
        onClose();
    }

    return (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center">
            <div className="bg-white rounded-lg p-8 shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New User</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="userId" className="block text-gray-700 font-medium mb-2">User ID</label>
                        <input
                            type="number"
                            id="userId"
                            name="id"
                            value={user.id}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex gap-2">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={user.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter Full Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="username" className="block text-gray-700 font-medium mb-2">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={user.username}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter User Name"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                            <input
                                id="email"
                                name="email"
                                value={user.email}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter Email Address"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Street</label>
                        <input
                            type="text"
                            name="address.street"
                            value={user.address.street}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="flex gap-2">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">City</label>
                            <input
                                type="text"
                                name="address.city"
                                value={user.address.city}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Zip Code</label>
                            <input
                                type="text"
                                name="address.zipcode"
                                value={user.address.zipcode}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Latitude</label>
                            <input
                                type="text"
                                name="address.geo.lat"
                                value={user.address.geo.lat}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Longitude</label>
                            <input
                                type="text"
                                name="address.geo.lng"
                                value={user.address.geo.lng}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="flex gap-2">
                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Company Name</label>
                            <input
                                type="text"
                                name="company.name"
                                value={user.company.name}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Catchphrase</label>
                            <input
                                type="text"
                                name="company.catchPhrase"
                                value={user.company.catchPhrase}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-1">Business</label>
                            <input
                                type="text"
                                name="company.bs"
                                value={user.company.bs}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between items-center">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                        >
                            Add User
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default UserModal;