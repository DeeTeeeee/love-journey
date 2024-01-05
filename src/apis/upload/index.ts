import {API_URL} from '@constants'

import axios from 'axios'

export const URL = {
  upload: `${API_URL}/api/upload`,
}
export const uploadS3 = async (params: any) => {
  try {
    const res = await axios.postForm(URL.upload, params)
    return res.data.data
  } catch (error) {
  }
}