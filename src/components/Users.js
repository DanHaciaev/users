import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image"

export default function Users() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.data)
            .then((data) => setUsers(data))
            .catch((error) => console.log(error));
    }, [])


    return (
        <main>
            <div className="mx-8 my-8 grid grid-cols-2 gap-[16px] mb-8">
                {users.map((users, index) => (
                    <div
                        key={users.id}
                        className={`flex bg-white h-[12rem] justify-between`}
                        id={`Profile${index + 1}`}>
                        <Image
                            src={`/img${index + 1}.jpg`}
                            alt={`Person${index + 1}`}
                            className="m-[1.875rem] w-auto h-auto"
                            width="120"
                            height="120"
                            loading="lazy"
                        />
                        <div className="grid bg-transparent mt-[1.25rem] w-[10rem] h-[10rem]">
                            <span className="bg-transparent text-red-600 font-semibold"> Name</span>
                            <span className="bg-transparent">{users.name}</span>
                            <span className="bg-transparent text-red-600 font-semibold"> Phone</span>
                            <span className="bg-transparent">{users.phone}</span>
                            <span className="bg-transparent text-red-600 font-semibold"> Website</span>
                            <span className="bg-transparent">{users.website}</span>
                        </div>
                        <div className="grid bg-transparent mt-[1.25rem] w-[20rem] h-[6.875rem]">
                            <span className="bg-transparent text-red-600 font-semibold">Email </span>
                            <span className="bg-transparent">{users.email}</span>
                            <span className="bg-transparent text-red-600 font-semibold">Address</span>
                            <span className="bg-transparent">{users.address?.street}, {users.address.suite}, {users.address.city}, {users.address.zipcode}</span>
                        </div>
                    </div>
                ))}
                
            </div>
        </main>

    )
}