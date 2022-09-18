import React from 'react'
import { useState } from 'react'
import { useUser } from '../context/UserInformationContext'
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import "../main.scss"

export default function UserInfo() {

    const { dispatch } = useUser()
    const [nameValue, setNameValue] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const navigate = useNavigate();

    const handleOnSubmit = (e) => {
        e.preventDefault()
        dispatch({
            type: "SET_USER_INFO",
            userName: nameValue,
            avatar: imageUrl
        })

        navigate(`/todos`);
    }

    const previewImage = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImageUrl(reader.result)
            }
        }

        reader.readAsDataURL(e.target.files[0])
    }



    return (
        <div className='container'>
            <div className='form-container'>
                <form className='user-form' onSubmit={handleOnSubmit}>
                    <TextField color="warning" type="text" size="small" id="outlined-basic" label="Username" variant="outlined" value={nameValue} onChange={e => setNameValue(e.target.value)} />
                    <Button
                        variant="contained"
                        component="label"
                        color='secondary'
                        className='img-button'
                        id='avatar'
                    >
                        Upload Image
                        <input
                            type="file"
                            hidden
                            onChange={previewImage}
                        />
                    </Button>
                    <Button className='submit-button' color='warning' variant="contained" type='submit'>Save</Button>
                </form>
                <div className='image'>
                    <img src={imageUrl || "./icon.svg"} />
                </div>
            </div>
        </div>
    )
}
