import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import FIREBASE from '../firebase';
import getUser from './utils/getUser';
import LoadingSpinner from './components/LoadingSpinner';
import DataSection from './components/DataSection'
import { generateBio } from './utils/generateBio';

// The app wont load if the user does'nt have a profile photo 
import defaultProfilePic from './assets/images/defaultProfilePic.jpg'

import './App.css'

function App() {
  const navigate = useNavigate()
  
  /* ------------------------- Get the Firestore data ------------------------- */

  const userId = useParams().id;
  const [User, setUser] = useState(null)

  // Fetch User Data once the component mounts
  useEffect(() => {
    const getUserByID = async () => {
      if (!userId) return;
      const data = await getUser(userId, FIREBASE);
      setUser(data)
    }

    getUserByID()
  }, [])

  // if the provided id is not valid, redirect to the home page and show an error message
  // if the user exists but is loading, show a loading spinner
  if (!userId || User?.error) {
    return navigate("/?message=Couldn't find a user!")
  } else if (!User) {
    return (
      <LoadingSpinner />
    )
  }

  const { userData } = User
    
  /* -------------------------------------------------------------------------- */
  /*                  Modify the object to change display data                  */
  /* -------------------------------------------------------------------------- */

  // Modify the object to change display data, if needed

  const displayedSections = [
    {
      id: 5347269264624,
      dataHeader: "Profile Info",
      items: [
        { "Gender": userData.gender },
        { "DOB": userData.dateOfBirth },
        { "Grade": userData.grade },
        { "School": userData.school },
        { "Personal Website": userData.personalWebsite },
      ]
    },
    {
      id: 24873592492134,
      dataHeader: "Contact Info",
      items: [
        { "Email": userData.email },
      ]
    },
    {
      id: 97162458147907,
      dataHeader: "Academic Achievements",
      items: [
        { "Courses Taken": userData.coursesTaken },
        { "Awards": userData.awards },
        { "Internships": userData.internships },
        { "GPA": userData.GPA },
        { "References": userData.references },
      ]
    },
    {
      id: 27419365919643,
      dataHeader: "Personal Skills",
      items: [
        { "Languages": userData.languages },
        { "Skills": userData.skills },
        { "Arts": userData.arts },
      ]
    },
    {
      id: 62492244135529,
      dataHeader: "Hobbies",
      items: [
        { "Goals": userData.goals },
        { "Sports": userData.sports },
        { "Clubs": userData.clubs },
      ]
    },
    {
      id: 24591836249248,
      dataHeader: "Other",
      items: [
        { "Licenses": userData.licenses },
        { "Community Services": userData.communityService },
        { "Experiences": userData.experiences },
        { "Other Activities": userData.otherActivities },
        { "Other Links": userData.otherLinks },
        // Im not sure why this is here but im going to put it in anyways
        // { "Tasks": userData.tasks },
      ]
    }
  ]

  /* ---------------------------------- Utils --------------------------------- */

  return (
    <div className="container">
      <div className="inner_container">
        <div className="top_section">
          <div className="profile_image_container">
            <img className="profile_image" src={ User.ProfilePicture?.uri || defaultProfilePic } alt="" />
          </div>

          {/* This is the section that displays the user's name and bio */}
          <div className="description_container">
            <div className="user_info">
              <h1 className="text-4xl font-bold mb-4">{userData.name}</h1>
              <hr className='border-2'/>
              <h4 className='text-xl font-semibold mt-4'>Aspiring {userData.dreamjob}</h4>
            </div>

            <b className="description">
              {/* Generate the user's bio based on the users data */}
              { userData ? generateBio(userData) : ""}
            </b>
          </div>
        </div>

        <div className="middle_section">
          {displayedSections.map(section => (
            <DataSection key={section.id} params={section} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
