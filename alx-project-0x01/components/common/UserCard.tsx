import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = (user) => {
    return (
        <div className="flex gap-2 max-w-xl mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex flex-col">
                <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center text-xl font-bold text-white">
                    {(() => {
                        const parts = user.name.trim().split(' ');
                        const firstInitial = parts[0]?.charAt(0) || '';
                        const lastInitial = parts[parts.length - 1]?.charAt(0) || '';
                        return `${firstInitial}${lastInitial}`;
                    })()}
                </div>
                <div>
                    <p className="mt-1 text-lg font-medium flex items-center justify-center"><span className="font-bold text-green-700">Id:</span>{user.id}</p>
                </div>
            </div>
            <div>
                <h3 className="text-lg font-medium">{user.name}</h3>
                <p className="text-sm ">@{user.username}</p>
                <p className="mt-2 ">{user.email}</p>
                <p className="">{user.phone}</p>
                <div className="flex flex-col ">
                    <div className="flex gap-4">
                        <p>{user.address.street}</p>
                        <p>{user.address.suite}</p>
                    </div>
                    <div className="flex gap-4">
                        <p>{user.address.city}</p>
                        <p>{user.address.zipcode}</p>
                    </div>
                    <div className="flex gap-4">
                        <p>{user.address.geo.lat}</p>
                        <p>{user.address.geo.lng}</p>
                    </div>
                </div>
                <p><span className="font-semibold">Company:</span> {user.company.name}</p>
                <p><span className="font-semibold">Motor:</span> {user.company.catchPhrase}</p>
                <p><span className="font-semibold">Aim:</span> {user.company.bs}</p>
                <p>{user.website}</p>
            </div>
        </div>
    )
}

export default UserCard;