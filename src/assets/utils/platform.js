import DeviceInfo from 'react-native-device-info';

const model = DeviceInfo.getModel();

export const Platform = {
    get isIOS() {
        return model.iOS;
    },
    get isAndroid() {
        return model.Android;
    }
};
