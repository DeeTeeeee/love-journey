import {getGeneralInformation} from '@apis/generalInformation'

export const useGetGeneralInformation = () => {
  const handleGetGeneralInformation = async () => {
    const res = await getGeneralInformation()
  }
  return {handleGetGeneralInformation}
}
