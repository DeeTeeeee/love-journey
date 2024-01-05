import {API_URL} from '@constants'

import axios from 'axios'

const URL = {
  upload: `${API_URL}/api/generalInformation/update`,
  get: `${API_URL}/api/generalInformation`
}

type IUpdateGeneralInformationParamsType = {
  maleImage: string
  femaleImage: string
}

export const uploadGeneralInformation = async (params: IUpdateGeneralInformationParamsType) => {
  const res = await axios.post(URL.upload, params)
  return res.data.data
}

export const getGeneralInformation = async () => {
  const res = await axios.get(URL.get)
  return res.data.data
}