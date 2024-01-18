import axios from 'axios'


export const getContacts = async () => {

    try {
        const res = await axios.get('https://localhost:7167/api/Contact')

        console.log("Fetching Successfull")

        return res.data
    }
    catch (err) {
        console.log("Something went wrong")
    }
}


export const addContact = async (formData) => {

    const config = {
        headers: {
            "Content-Type": 'application/json'
        }
    }
    const body = JSON.stringify(formData)

    try {

        await axios.post('https://localhost:7167/api/Contact', body, config)

        console.log("Added Successfully")
    }
    catch (err) {
        console.log("Something went wrong")
    }

}


export const updateContact = async (formData) => {

    const config = {
        headers: {
            "Content-Type": 'application/json'
        }
    }
    const body = JSON.stringify(formData)

    try {

        await axios.put('https://localhost:7167/api/Contact', body, config)

        console.log("Updated Successfully")
    }
    catch (err) {
        console.log("Something went wrong")
    }

}

export const deleteContact = async (id) => {

    try {

        await axios.delete(`https://localhost:7167/api/Contact/${id}`)

        console.log("Deleted Successfully")
    }
    catch (err) {
        console.log("Something went wrong")
    }

}



