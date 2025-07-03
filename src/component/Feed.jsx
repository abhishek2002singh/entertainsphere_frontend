/* eslint-disable no-empty */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/Constant';
import { apiPath } from '../utils/path';
import ShortsCard from './ShortsCard';
import { addUser } from '../utils/userSlice';
import { useDispatch } from 'react-redux';

const Feed = () => {
  const [shorts, setShorts] = useState([]);
  const dispatch = useDispatch()

  const fetchShortsData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}${apiPath.GETSHOTS}`, {
        withCredentials: true,
      });
      setShorts(response.data.shorts);
      console.log(response.data.shorts)
    } catch (err) {
      console.error('Error fetching shorts:', err);
    }
  };

  const loggedUserInformation = async() =>{
    try{
     
      const res = await axios.get(`${BASE_URL}/me`, {
           
            withCredentials: true,
          });

          dispatch(addUser(res?.data));

    }catch(error){
      console.error(error)

    }
  }
 

  useEffect(() => {
    loggedUserInformation()
    fetchShortsData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 min-h-screen">
      {shorts.map((short) => (
        <ShortsCard key={short._id} short={short} />
      ))}
    </div>
  );
};

export default Feed;
