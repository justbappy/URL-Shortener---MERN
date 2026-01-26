import React from 'react'
import { FaRegUserCircle } from "react-icons/fa";

const UserProfile = () => {

    // const user = {
    //     name: "vishal yennam",
    //     email: "vishal.yennam@ustu.edu.in",
    //     password: "peace@189"
    // }

    return (
        <div className='bg-gray-50/10 p-5 flex flex-col items-center w-fit mx-auto my-auto text-gray-400 rounded-lg mt-10'>
            <div>
                <div className='flex flex-col items-center mb-7'>
                    <img src="https://media.istockphoto.com/id/1130884625/vector/user-member-vector-icon-for-ui-user-interface-or-profile-face-avatar-app-in-circle-design.jpg?s=612x612&w=0&k=20&c=1ky-gNHiS2iyLsUPQkxAtPBWH1BZt0PKBB1WBtxQJRE=" alt="" 
                    className='w-15 rounded-full mb-2'
                    />
                    <form action="">
                        <label htmlFor="fileInput">Set Profile Picture</label>
                    <input type="file" name="file_input" id="fileInput" placeholder='' hidden/>
                    </form>
                </div>
                <div className='flex gap-2 mb-5'>
                    <p>Name:</p>
                    <p>Vishal Yennam</p>
                </div>
                <div className='flex gap-2 mb-5'>
                    <p>Email: </p>
                    <p>vishal.yennam@ustu.edu.in</p>
                </div>
                <div className='flex gap-2 mb-5'>
                    <p>Total Short Links Created: </p>
                    <p>05</p>
                </div>
            </div>
        </div>
    )
}

export default UserProfile