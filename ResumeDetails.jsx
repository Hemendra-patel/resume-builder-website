import { useContext, useState } from "react";
import { resumeContext } from "../context/ResumeContext";

const ResumeDetails = () => {
  const { basicInfo, setBasicInfo } = useContext(resumeContext);
  const [basic, setBasic] = useState({
    name: "",
    contact: "",
    Gmail: "",
    linkedin: "",
    Github: "",
    hackerRank: "",
    address: "",
    hobbies: "",
    education: "",
    skill: "",
    experience: "",
    image: "",
  });

  const handleClick = () => {
    setBasicInfo(basic);
    console.log(basic);
    basic("");
  };
  return (
    <>
      <div className="h-screen  bg-blue-100 p-2 flex flex-col  gap-5">
        <div>
          <h1 className="text-2xl">PERSONAL DETAILS</h1>
          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex gap-3">
              <h1>NAME</h1>
              <input
                type="text"
                value={basic.name}
                onChange={(e) => setBasic({ ...basic, name: e.target.value })}
                className="outline-none uppercase pl-2"
                placeholder="Enter Your Name"
              />
            </div>
            <div className="flex gap-3">
              <h1>TITLE</h1>
              <input
                type="text"
                value={basic.title}
                onChange={(e) => setBasic({ ...basic, title: e.target.value })}
                className="outline-none pl-2"
                placeholder="Your Professional Tital"
              />
            </div>
            <div className="flex gap-3">
              <h1>CONTACT</h1>
              <input
                type="number"
                value={basic.contact}
                onChange={(e) =>
                  setBasic({ ...basic, contact: e.target.value })
                }
                className="outline-none pl-2"
                placeholder="Phone Number"
              />
            </div>
            <div className="flex gap-3">
              <h1>G-mail</h1>
              <input
                type="text"
                value={basic.Gmail}
                onChange={(e) => setBasic({ ...basic, Gmail: e.target.value })}
                className="outline-none pl-2"
                placeholder="Enter Your G-mail id"
              />
            </div>
            <div className="flex gap-3">
              <h1>Linkedin</h1>
              <input
                type="text"
                value={basic.linkedin}
                onChange={(e) =>
                  setBasic({ ...basic, linkedin: e.target.value })
                }
                className="outline-none pl-2"
                placeholder="Enter Your Linkedin id"
              />
            </div>
            <div className="flex gap-3">
              <h1>Github</h1>
              <input
                type="text"
                value={basic.Github}
                onChange={(e) => setBasic({ ...basic, Github: e.target.value })}
                className="outline-none pl-2"
                placeholder="Enter Your Github id"
              />
            </div>
            <div className="flex gap-3">
              <h1>HackerRank</h1>
              <input
                type="text"
                value={basic.hackerRank}
                onChange={(e) =>
                  setBasic({ ...basic, hackerRank: e.target.value })
                }
                className="outline-none pl-2"
                placeholder="Enter Your HackerRank id"
              />
            </div>
            <div className="flex gap-3">
              <h1>Address</h1>
              <input
                type="text"
                value={basic.adress}
                onChange={(e) => setBasic({ ...basic, adress: e.target.value })}
                className="outline-none pl-2"
                placeholder="Enter Your Adress"
              />
            </div>
            <div className="flex gap-3">
              <h1>image</h1>
            <input
              type="text"
              id="#"
              placeholder="img address"
              value={basic.image}
              onChange={(e) => setBasic({ ...basic, image: e.target.value })}
            />
            </div>
          </div>
        </div>

        <div className="p-2 border-2 gap-6">
          <h1 className="text-2xl -mt-7 ">Hobbies</h1>
          <textarea
            name="comment"
            value={basic.hobbies}
            onChange={(e) => setBasic({ ...basic, hobbies: e.target.value })}
            id="#"
            className="w-full outline-none pl-2 h-12"
            placeholder="Write Your Hobbies"
          ></textarea>
        </div>
        <div className="p-2 border-2 gap-6 ">
          <h1 className="text-2xl -mt-7">Education</h1>
          <textarea
            name="comment"
            id="#"
            value={basic.education}
            onChange={(e) => setBasic({ ...basic, education: e.target.value })}
            className="w-full outline-none pl-2"
            placeholder="Write Your Education"
          ></textarea>
        </div>
        <div className="p-2 border-2 gap-6">
          <h1 className="text-2xl -mt-7">Skills</h1>
          <textarea
            name="comment"
            id="#"
            value={basic.skills}
            onChange={(e) => setBasic({ ...basic, skills: e.target.value })}
            className="w-full outline-none pl-2"
            placeholder="Write Your Skills"
          ></textarea>
        </div>
        <div className="p-2 border-2 gap-6 ">
          <h1 className="text-2xl -mt-7 ">Experience</h1>
          <textarea
            name="comment"
            id="#"
            value={basic.experience}
            onChange={(e) => setBasic({ ...basic, experience: e.target.value })}
            className="w-full outline-none pl-2"
            placeholder="Write Your Experiences in 50 words"
          ></textarea>
        </div>
        <button
          className="border border-2 border-red-500 px-3 py-3"
          onClick={handleClick}
        >
          Submit
        </button>
      </div>
    </>
  );
};
export default ResumeDetails;
