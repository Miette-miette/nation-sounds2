import React, { useEffect, useState } from "react";
import axios from "axios";
import './alert.css';

const Alert = () =>{
    const [alert, setAlert]= useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentAlert, setCurrentAlert] = useState(null);
    const [showAlert, setShowAlert] = useState(true);
    const [closing, setClosing] = useState(false);

    const baseUrl = axios.create({
        baseURL: process.env.REACT_APP_BASE_URL,
    });
    const endpoint = '/api/alert';

    useEffect(() => {
        axios.get(baseUrl + endpoint)
        .then((res)=> {
            setAlert(res.data);
            setCurrentAlert(res.data[0] || null);
        })
    },[])

    //Affichage alertes
    useEffect(() => {
        if (alert.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => {
                const nextIndex = (prevIndex + 1) % alert.length;
                setCurrentAlert(alert[nextIndex]);
                return nextIndex;
            });
        }, 10000); 

        return () => clearInterval(interval);
    }, [alert]);

    const handleClose = () => {
        setClosing(true); 
        setShowAlert(false); 
    };

    
    return(
        showAlert && (
        <section id="alert">
            <button className="alert-close" onClick={handleClose}>×</button>
            {
                currentAlert && showAlert && (
                    <div key={currentAlert.id} className="alert-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                        <h3>{currentAlert.type}</h3>
                        <p>{currentAlert.message}</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                            <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
                        </svg>
                    </div>
                )
            }
            
        </section>
    )
)}
export default Alert;