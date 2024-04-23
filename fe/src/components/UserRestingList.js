import React, { useEffect, useState } from "react";
import { getUsers } from "../apis/user.api.ts";
import { useNavigate } from "react-router-dom";
import StopWatch from "./StopWatch.js";

const UserRestingList = () => {
    const [users, setUsers] = useState()
    useEffect(() => {
        (async () => {
            const data = await getUsers()
            setUsers(data)
        })()

    }, []);
    return (
        <>
            <div className="overflow-x-auto">
                <table className="table w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Timeoff</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/415502626_890946702726019_5323667668092281664_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEpi10o13bLRiQAZseSF11zCYIr7-nYyzMJgivv6djLM39C0dPvqfIYAGJfjP5JDxDbiuRqMZ4yGAcqbAay1aXe&_nc_ohc=n1eRgXyYl4MAb5rfP_2&_nc_ht=scontent.fhan5-11.fna&oh=00_AfAA05ew8cyzbaTW52wYvWht2prbVcz29bUrzJvOK82izQ&oe=662962C5"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/415502626_890946702726019_5323667668092281664_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEpi10o13bLRiQAZseSF11zCYIr7-nYyzMJgivv6djLM39C0dPvqfIYAGJfjP5JDxDbiuRqMZ4yGAcqbAay1aXe&_nc_ohc=n1eRgXyYl4MAb5rfP_2&_nc_ht=scontent.fhan5-11.fna&oh=00_AfAA05ew8cyzbaTW52wYvWht2prbVcz29bUrzJvOK82izQ&oe=662962C5"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img
                                                src="https://scontent.fhan5-11.fna.fbcdn.net/v/t39.30808-6/415502626_890946702726019_5323667668092281664_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEpi10o13bLRiQAZseSF11zCYIr7-nYyzMJgivv6djLM39C0dPvqfIYAGJfjP5JDxDbiuRqMZ4yGAcqbAay1aXe&_nc_ohc=n1eRgXyYl4MAb5rfP_2&_nc_ht=scontent.fhan5-11.fna&oh=00_AfAA05ew8cyzbaTW52wYvWht2prbVcz29bUrzJvOK82izQ&oe=662962C5"
                                                alt="Avatar Tailwind CSS Component"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div>
                                    <div className="font-bold">Hart Hagerty</div>
                                    <div className="text-sm opacity-50">United States</div>
                                </div>
                            </td>
                            <td>Purple</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </tfoot>

                </table>
            </div>
        </>
    )
}

export default UserRestingList




//     < div class="relative overflow-x-auto shadow-md sm:rounded-lg" >
//         <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
//             <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//                 <tr>
//                     <th scope="col" class="px-6 py-3">
//                         Product name
//                     </th>
//                     <th scope="col" class="px-6 py-3">
//                         Color
//                     </th>
//                     <th scope="col" class="px-6 py-3">
//                         Category
//                     </th>
//                     <th scope="col" class="px-6 py-3">
//                         Price
//                     </th>
//                     <th scope="col" class="px-6 py-3">
//                         Action
//                     </th>
//                 </tr>
//             </thead>
//             <tbody>
//                 <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                     <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                         Apple MacBook Pro 17"
//                     </th>
//                     <td class="px-6 py-4">
//                         Silver
//                     </td>
//                     <td class="px-6 py-4">
//                         Laptop
//                     </td>
//                     <td class="px-6 py-4">
//                         $2999
//                     </td>
//                     <td class="px-6 py-4">
//                         <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                     </td>
//                 </tr>
//                 <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                     <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                         Microsoft Surface Pro
//                     </th>
//                     <td class="px-6 py-4">
//                         White
//                     </td>
//                     <td class="px-6 py-4">
//                         Laptop PC
//                     </td>
//                     <td class="px-6 py-4">
//                         $1999
//                     </td>
//                     <td class="px-6 py-4">
//                         <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                     </td>
//                 </tr>
//                 <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                     <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                         Magic Mouse 2
//                     </th>
//                     <td class="px-6 py-4">
//                         Black
//                     </td>
//                     <td class="px-6 py-4">
//                         Accessories
//                     </td>
//                     <td class="px-6 py-4">
//                         $99
//                     </td>
//                     <td class="px-6 py-4">
//                         <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                     </td>
//                 </tr>
//                 <tr class="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
//                     <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                         Google Pixel Phone
//                     </th>
//                     <td class="px-6 py-4">
//                         Gray
//                     </td>
//                     <td class="px-6 py-4">
//                         Phone
//                     </td>
//                     <td class="px-6 py-4">
//                         $799
//                     </td>
//                     <td class="px-6 py-4">
//                         <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                     </td>
//                 </tr>
//                 <tr>
//                     <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
//                         Apple Watch 5
//                     </th>
//                     <td class="px-6 py-4">
//                         Red
//                     </td>
//                     <td class="px-6 py-4">
//                         Wearables
//                     </td>
//                     <td class="px-6 py-4">
//                         $999
//                     </td>
//                     <td class="px-6 py-4">
//                         <a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
//                     </td>
//                 </tr>
//             </tbody>
//         </table>
// </ >
