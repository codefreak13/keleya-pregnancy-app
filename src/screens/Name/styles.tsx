import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultThemeProps } from '../../utils/theme'

const createStyles = (theme: defaultThemeProps) =>
    StyleSheet.create({
        bodyStyle: {
            flex: 1,
        },
        imageStyle: {
            flex: 5,
            resizeMode: 'cover',
            width: '100%',
        },
        textStyle: {
            marginTop: RFValue(10),
            fontSize: RFValue(18),
            textAlign: 'center',
        },
        details: {
            flex: 1,
            width: '75%',
            alignSelf: 'center',
        },
        buttonStyle: {
            marginBottom: RFValue(20),
        },
        error: {
            color: theme.colors.DANGER
        }
    });

export default createStyles