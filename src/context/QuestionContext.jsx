import React, { createContext, useState, useEffect} from "react";
import axios from 'axios';

export const QuestionContext = createContext()

const QuestionProvider = ({children}) => {
    const [question, setQuestion] = useState([])

    const getDataUsingAxios = async () => {
        const res = await axios.get('https://win24-assignment.azurewebsites.net/api/faq')
        console.log(res.data);         
        setQuestion(res.data)
    }



    useEffect(() => {        
        getDataUsingAxios()
    },[])

    return (
        <QuestionContext.Provider value={{ question }}>
            {children}
        </QuestionContext.Provider>
    )

}

export default QuestionProvider