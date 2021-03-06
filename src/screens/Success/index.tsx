import React, { useMemo } from 'react'
import { Text, View, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons';
import { useTranslation } from 'react-i18next';

import createStyles from './styles';
import { useTheme } from '../../utils/theme';
import { NOTIFICATIONS_IMAGE } from '../../assets'
import { Button, Line } from '../../components'

const Success = () => {
    const { t } = useTranslation()
    const theme = useTheme();
    const styles = useMemo(() => createStyles(theme), [theme]);
    const { buttonStyle, titleStyle, imageStyle, textStyle, skipTextStyle } = styles

    return (
        <>
            <ImageBackground source={NOTIFICATIONS_IMAGE} style={imageStyle} >
                <View style={titleStyle}>
                    <Icon name="bell" size={70} color={theme.colors.GREYISH_BROWN} />
                    <Text style={textStyle}>{t('success:title')}</Text>
                </View>
                <Text style={skipTextStyle}>{t('success:skip')}</Text>
            </ImageBackground>
            <Button title={t('success:btn_title')} buttonColor={'dark'} buttonStyle={buttonStyle} />
            <Line />
        </>
    )
}

export default Success
