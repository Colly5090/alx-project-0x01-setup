import Header from "@/components/layout/Header";
import UserCard from "@/components/common/UserCard";
import UserModal from "@/components/common/UserModal";
import { UserData, UserProps } from "@/interfaces";
import { useState } from "react";


const User: React.FC<{ posts: UserProps[] }> = ({ posts }) => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState<UserData | null>(null);

    const handleAddUser = (newUser: UserData) => {
        setUser({ ...newUser, id: posts.length + 1 })
    }

    console.log(posts)
    return (
        <div>
            <Header />
            <main className="p-4">
                <div className="flex justify-between">
                    <h1 className=" text-2xl font-semibold">User Content</h1>
                    <button onClick={() => { setModalOpen(true) }}
                        className="bg-blue-700 px-4 py-2 rounded-full text-white">
                        Add User
                    </button>
                </div>
                <div className="grid grid-cols-3 gap-2 w-full ">
                    {posts.map((user: UserProps, key: number) => (
                        <UserCard user={user} key={key} />
                    ))}
                </div>
            </main>
            {isModalOpen &&
                <UserModal onClose={() => { setModalOpen(false) }} onSubmit={handleAddUser} />
            }
        </div>
    )
}

export async function getStaticProps() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const posts = await response.json()

    return {
        props: {
            posts
        }
    }
}

export default User;