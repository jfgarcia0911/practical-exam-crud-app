import { useState } from "react"
import { addContact } from "../../http"
import {useNavigate } from 'react-router-dom'


export default function Create({handleUpdate }) {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: ''
    })
    const {firstName, lastName, email, phone } = formData

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = async (e) => {
        e.preventDefault()
        await addContact(formData)
        handleUpdate()
        navigate('/')
    }

    const handleBack = () => {
        navigate('/')
    }

    return (
        <>
            <form className="max-w-sm mx-auto pt-10" onSubmit={e => onSubmit(e) }>
                <div className="mb-5">
                    <label htmlFor="firstName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                    <input type="text" id="firstName" name="firstName" value={firstName} onChange={e => onChange(e) } className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 " required />
                </div>
                <div className="mb-5">
                    <label htmlFor="lastName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                    <input type="text" id="lastName" name="lastName" value={lastName} onChange={e => onChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 " required />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" id="email" name="email" value={email} onChange={e => onChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 " required />
                </div>
                <div className="mb-5">
                    <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                    <input type="text" id="phone" name="phone" value={phone} onChange={e => onChange(e)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 " required />
                </div>
                <div className="flex justify-between">
                    <button type="submit" className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm w-2/5  px-5 py-2.5 text-center ">Submit</button>
                    <button onClick={handleBack} type="button" className="text-white bg-red-500 hover:bg-red-700 font-medium rounded-lg text-sm w-2/5 px-5 py-2.5 text-center ">Back</button>

                </div>
                
            </form>
        </>
    )
}