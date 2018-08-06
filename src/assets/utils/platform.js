import DeviceInfo from 'react-native-device-info';

const model = DeviceInfo.getSystemName();

export const Platform = () => {
    if (model === 'iOS') {
        return 'isIOS';
    }
    else {
        return 'isAndroid';
    }
}
