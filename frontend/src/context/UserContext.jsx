import React,{createContext,useContext,useState} from 'react'
import { AppContext } from './AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

export const UserContext = createContext()

export const UserContextProvider = (props) => {
   
    const {backendUrl,token} = useContext(AppContext)
    const[user,setUser] = useState('')
    const [pinnedFeatures, setPinnedFeatures] = useState([]);
    
   
        // Get Profile: 
    const getMyProfile = async () => {
    try {
      const response = await axios.get(backendUrl + "/users/profile", {headers: { Authorization: `Bearer ${token}` }})
         setUser(response.data.user)
    } catch (error) {
      toast.error(error.message);
      console.log(error.response?.data  || error.message)
    }
  };

      const getPinnedFeatures = async () => {
      try {
        const res = await axios.get( backendUrl+ '/users/get-pinnedFeatures', {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPinnedFeatures(res.data.pinnedFeatures);
      } catch (error) {
         toast.error("Something went wrong");
        console.error(error.response?.data  || error.message);
        
      }
    };
   
   const handlePinToggle = async (feature) => {
    try {
      if (pinnedFeatures.some(f => f.id === feature.id)) {
        await axios.post(`${backendUrl}/users/unpin-feature`,{ feature }, { headers: { Authorization: `Bearer ${token}` } }   );
        toast.success("Feature unpinned");
        getPinnedFeatures()
      } else {
      await axios.post(`${backendUrl}/users/pin-feature`,   {feature} ,   { headers: { Authorization: `Bearer ${token}` } } );
        toast.success("Feature pinned");
        getPinnedFeatures()
      }
  
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
    
    const value = {
     user,setUser,getMyProfile,
     handlePinToggle,getPinnedFeatures,pinnedFeatures,setPinnedFeatures

    }
    
  return (
    <div>
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    </div>
  )
}

export default UserContextProvider;