import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { defaultThemeProps } from '../../utils/theme'

const createStyles = (theme: defaultThemeProps) =>
    StyleSheet.create({
        bodyStyle: {
            flex: 1,
        },
        imageStyle: {
            flex: 4,
            resizeMode: 'cover',
            width: '100%',
        },
        textStyle: {
            marginTop: -RFValue(50),
            marginBottom: RFValue(20),
            fontSize: RFValue(18),
            textAlign: 'center',
            color: theme.colors.GREYISH_BROWN
        },
        details: {
            flex: 1,
            width: '70%',
            alignSelf: 'center',
        },
        buttonStyle: {
            marginBottom: RFValue(20),
        },
        error: {
            color: theme.colors.BUBBLE_GUM,
            alignSelf: 'center'
        }
    });

export default createStyles