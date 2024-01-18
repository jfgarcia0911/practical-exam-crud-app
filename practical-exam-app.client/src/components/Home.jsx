import { useNavigate } from 'react-router-dom'
import { deleteContact } from '../../http'



export default function Home({ contacts, handleUpdate }) {
    const navigate = useNavigate()

    const handleCreate = () => {
        navigate('/create')
    }


    const handleEdit = (id) => {
        navigate(`/edit/${id}`)
    }

    const handleDelete = async (id) => {
        await deleteContact(id)
        handleUpdate()
    }



    return (
        <>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg p-9 mx-10">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
                        <tr className="grid grid-cols-5">
                            <th scope="col" className=" py-3">
                                First Name
                            </th>
                            <th scope="col" className=" py-3">
                                Last Name
                            </th>
                            <th scope="col" className=" py-3">
                                Email
                            </th>
                            <th scope="col" className=" py-3">
                                Phone
                            </th>
                            <th scope="col" className=" py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className=" odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                        {contacts && contacts.map(contact => {
                            return (
                                <>
                                    <tr key={contact.ContactId} className="grid grid-cols-5" >
                                        <th scope="row" className=" py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {contact.FirstName}
                                        </th>
                                        <td className=" py-4">
                                            {contact.LastName}
                                        </td>
                                        <td className=" py-4">
                                            {contact.Email}
                                        </td>
                                        <td className=" py-4">
                                            {contact.Phone}
                                        </td>
                                        <td className=" py-4">
                                            <a onClick={() => handleEdit(contact.ContactId)} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                            <a onClick={() => handleDelete(contact.ContactId)} href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline"> Delete</a>
                                        </td>
                                    </tr>
                                </>
                            )
                        })}
                    </tbody>
                </table>
                <button onClick={handleCreate} className="mt-5 text-white bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center dark:bg-blue-600 ">Create</button>

            </div>
            

        </>
    )
}