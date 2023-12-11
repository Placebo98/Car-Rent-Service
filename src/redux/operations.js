import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://6572101fd61ba6fcc0145108.mockapi.io';

export const fetchCars = createAsyncThunk('cars/getCars', async () => {
  try {
    const response = await axios.get('/adverts');
    const data = response.data;
    return data;
  } catch (error) {
    console.error('Error in fetchCars:', error.message);
    throw error;
  }
});
