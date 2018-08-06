import { COLOR } from 'react-native-material-ui';
import { Platform } from '../../assets/utils/platform';

export default {
    container: {
        marginVertical: Platform.isIOS ? 11 : 9,
        marginHorizontal: 10,
        shadowOpacity: 0.5,
        backgroundColor: COLOR.teal100
    }
}
