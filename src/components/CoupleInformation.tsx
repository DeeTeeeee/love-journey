import {Colors, SCREEN_HEIGHT} from '@constants'
import {Image, Pressable, View} from 'native-base'
import React, {useEffect, useState} from 'react'
import {openPicker} from 'react-native-image-crop-picker'
import {uploadS3, URL} from '@apis/index'
import Icon from './Icon'
import {
  getGeneralInformation,
  uploadGeneralInformation,
} from '@apis/generalInformation'
import RNFS from 'react-native-fs'
import {Buffer} from 'buffer'
import {GeneralInformationType} from 'src/types/generalInformation.type'

const CoupleInformation = () => {
  const [generalInformation, setGeneralInformation] =
    useState<GeneralInformationType>({} as GeneralInformationType)
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    ;(async () => {
      try {
        const res = await getGeneralInformation()
        setGeneralInformation(res)
      } catch (error) {
        setLoading(false)
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const handleAddAvatar = async (sex: string) => {
    const res = await openPicker({
      maxFiles: 1,
    })

    // setImageUrl(res.path)
    setGeneralInformation(state => ({...state, maleImage: res.path}))

    const formData = new FormData()

    formData.append('file', {
      uri: res.path,
      type: res.mime,
      name: res.filename,
    })
    try {
      const res = await uploadS3(formData)
      handleUpdateGeneralInformation(res, sex)
    } catch (error) {
      console.log(error)
      return error
    }
  }

  const handleUpdateGeneralInformation = async (
    imageUrl: string,
    sex: string
  ) => {
    await uploadGeneralInformation(
      sex === 'male'
        ? {
            maleImage: imageUrl,
            femaleImage: '',
          }
        : {
            maleImage: '',
            femaleImage: imageUrl,
          }
    )
  }

  return (
    <View
      position={'absolute'}
      bottom={0}
      w="full"
      h={SCREEN_HEIGHT / 4}
      justifyContent="center"
      alignItems="center"
    >
      <Pressable
        w={100}
        h={100}
        borderColor={
          isLoading ? Colors.pinkPastel : Colors.transparent
        }
        borderWidth={3}
        rounded="full"
        justifyContent={'center'}
        alignItems={'center'}
        onPress={() => handleAddAvatar('male')}
      >
        {isLoading ? (
          <Icon name="add" color={Colors.pinkPastel} />
        ) : (
          <View w="100%" h="100%" rounded="full" overflow="hidden">
            <Image
              w="full"
              h="full"
              src={generalInformation.maleImage}
              overflow="hidden"
            />
          </View>
        )}
      </Pressable>
    </View>
  )
}

export default CoupleInformation
