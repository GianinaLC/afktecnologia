import './Notification.css'
import {  useState, createContext, useContext } from 'react'

const Notification = ({ message, severity}) => {

    if(message === ''){
        return null 
    }

    return (
        <div className={`${severity === 'success' ? 'success' : 'error'}`}>
            { message }
        </div>
    )
}

const NotificationContext = createContext()

export const NotificationProvider = ({ children }) => {
    const [ message, setMessage ] = useState('')
    const [ severity, setSeverity ] = useState('success')

    const setNotification = (sev, msg) => {
        setSeverity(sev)
        setMessage(msg)
        setTimeout(()=>{
            setMessage('')
        },1000)
    }


    return (
        <NotificationContext.Provider value={{ setNotification }}>
            <Notification message={ message }  severity={ severity } />
            { children }
        </NotificationContext.Provider>
    )
}

export const useNotification = () => {
    return useContext(NotificationContext)
}
