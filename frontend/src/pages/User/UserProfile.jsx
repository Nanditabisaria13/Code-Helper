import React, { useContext, useEffect, useState } from 'react'
import UserContextProvider, { UserContext } from '../../context/UserContext';
import { toast } from 'react-toastify';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
import axios from 'axios';


const UserProfile = () => {

    const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

    const { getMyProfile, user, setUser} = useContext(UserContext)
    const {token,setToken, backendUrl} = useContext(AppContext)

     const navigate = useNavigate()

  useEffect(() => {
    getMyProfile();
  }, []);

  if (!user) return <p>Loading...</p>;

const updateProfile = async () => {
    try {
      const formData = new FormData();

      formData.append("firstName", user.fullName.firstName);
      formData.append("lastName", user.fullName.lastName);
      formData.append("email", user.email);
      image && formData.append("image", image);
      console.log(formData)
      console.log(token)
      for (let [key, value] of formData.entries()) {
  console.log(key, value);
}

   const response = await axios.post(backendUrl + "/users/update-profile",  formData,  { headers: {  Authorization: `Bearer ${token}`}}   );

      if(response.data.success){
        setUser(response.data.updatedUser);
        getMyProfile()
        toast.success(response.data.message);
        setIsEdit(false);
        setImage(null);
      }else{
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error.message);
      toast.error("Something Went Wrong!");
    }
  };

   const deleteAccount = async ()=>{
       try {
         const response = await axios.post(backendUrl + '/users/delete-profile',  {},   { headers: {  Authorization: `Bearer ${token}`}})
         if(response.data.success){
           toast.success(response.data.message)
           localStorage.removeItem("token");
           setToken(null);
            navigate('/')
         }else{
           toast.error(data.message)
         }
       } catch (error) {
         toast.error("Error While Deleting the account");
         console.log(error)
       }
     }
  return (
    <div
          className="flex items-center justify-center w-full p-16  mt-16 cursor-pointer"
        >

          <div className='flex flex-col  text-sm items-center justify-center gap-4 rop-shadow-md
              bg-transparent border rounded-xl p-6 border-[#535353] '>
    
          <div className="flex flex-col gap-2 items-center">
            {isEdit ? (
              <label htmlFor="image">
                <div className="inline-block relative cursor-pointer">
                  <img
                    className="w-36 rounded opacity-75"
                    src={
                      image ? URL.createObjectURL(image) : assets.uploadImage
                    }
                    alt="profile"
                  />
                </div>
                <input
                  onChange={(e) => setImage(e.target.files[0])}
                  type="file"
                  id="image"
                  hidden
                />
              </label>
            ) : (
              <img
                className="w-36 h-36 rounded-full"
                src={user.image || assets.uploadImage}
                alt=""
              />
            )}

            <div className="flex gap-2">
              {isEdit ? (
                <input
                  className=" text-3xl text-white font-medium max-w-24 mt-2 bg-transparent"
                  type="text"
                  value={user.fullName.firstName}
                  onChange={(e) =>
                    setUser((prev) => ({
                      ...prev,
                      fullName: { ...prev.fullName, firstName: e.target.value },
                    }))
                  }
                />
              ) : ( <p className="font-medium text-3xl text-white mt-2">
                  {user.fullName.firstName}
                </p>
              )}
               

              {isEdit ? (
                <input
                  className=" text-3xl text-white font-medium max-w-28 mt-2 bg-transparent"
                  type="text"
                  value={user.fullName.lastName}
                  onChange={(e) =>
                    setUser((prev) => ({
                      ...prev,
                      fullName: { ...prev.fullName, lastName: e.target.value },
                    }))
                  }
                />
              ) : (
                <p className="font-medium text-3xl text-white mt-2">
                  {user.fullName.lastName}
                </p>
              )}
            </div>

       
          </div>

          <div className="flex flex-col gap-5">
           
              <div className="flex items-center justify-center gap-4 bg-transparent border border-[#535353]  drop-shadow-md rounded-lg  text-white">
                <p className="text-white font-medium text-base">
                  Email:
                </p>

            

                   {isEdit ? (
                  <input
                    className="max-w-28 bg-transparent text-white"
                    type="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser((prev) => ({ ...prev, email: e.target.value }))
                    }
                  />
                ) : (
                  <p className="text-gray-100 text-base">
                    {user.email}
                  </p>
                )}

              
               
              {/* </div> */}
            </div>

          
           <div className=" flex gap-2 mt-4">
              {isEdit ? (
                <button
                  className="border border-primary px-8 py-2 rounded-lg bg-green-500 hover:bg-green-600 text-white transition-all
                            text-base sm:text-xl "
                  onClick={() => updateProfile()}
                >
                  Save Information
                </button>
              ) : (
                <button
                  className="border border-primary px-8 py-2 rounded-md bg-green-500 hover:bg-green-600 text-white transition-all
                            text-base sm:text-xl "
                  onClick={() => setIsEdit(true)}
                >
                  Edit
                </button>
              )}
              <button
                onClick={() => setShowDeleteModal(true)}
                className="border border-primary px-10 py-2 rounded-lg bg-red-500 hover:bg-red-700
               text-white transition-all text-base sm:text-xl font-normal"
              >
                Delete Account
              </button>
            </div>

                   {showDeleteModal && (
          <div className="fixed inset-0 bg-transparent bg-opacity-50 flex justify-center items-center z-50">
            <div className="p-5 bg-white text-black rounded-lg">
              <p className="text-lg">Are you sure you want to delete your account? </p>
              <div className="flex items-center justify-center gap-6 mt-4">
                <button
                  className="bg-red-600 text-white px-5 py-2 rounded-md"
                  onClick={()=>deleteAccount()} 
                >
                  Delete
                </button>
                <button
                  className="bg-gray-300 text-black px-5 py-2 rounded-md"
                  onClick={() => setShowDeleteModal(false)} 
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
          </div>

          </div>
        </div>
  )
}

export default UserProfile