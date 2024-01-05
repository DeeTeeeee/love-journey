import Icomoon from 'react-native-icomoon'
import type {IconMoonProps} from 'react-native-icomoon'
import selection from '../assets/icons/selection.json'

type IconProps = Omit<IconMoonProps, 'iconSet'>

const Icon: React.FC<IconProps & {color: string}> = ({name, ...restProps}: IconProps) => {
  return <Icomoon iconSet={selection} name={name} {...restProps} />
}

export default Icon
