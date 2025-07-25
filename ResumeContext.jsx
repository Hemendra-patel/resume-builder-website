import { createContext, useState } from "react";

export  const resumeContext = createContext();

const ResumeDataProvider = ({children})=>{
      const [basicInfo,setBasicInfo]=useState({
        name: "",
        contact: "",
        gmail: "",
        linkedin: "",
        github: "",
        hackerRank: "",
        address: "",
        hobbies: "",
        education: "",
        skill: "",
        experience: "",
        image:""
      });


return(
    <resumeContext.Provider value={{basicInfo,setBasicInfo}}>
        {children}
    </resumeContext.Provider>
)
}
export default ResumeDataProvider