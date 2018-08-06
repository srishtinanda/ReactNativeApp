
import { COLOR } from 'react-native-material-ui';
import { Platform } from '../../assets/utils/platform';

export default {
    container: {
        padding: (Platform() === 'isIOS') ? 10 : 0,
        marginBottom : (Platform() === 'isIOS') ? 8 : 0,
        backgroundColor: COLOR.teal500
    },
    text: {
        fontSize: 20,
        color: COLOR.black,
        textAlign: 'right'
    }
}