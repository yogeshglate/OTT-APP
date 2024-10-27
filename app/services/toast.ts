import { colors } from 'constant';
import i18n from 'i18next';
import Toast, { ToastType } from 'react-native-toast-message';
import { ToastOptions } from 'types';

export const showToast = (
  type: ToastType,
  text1: string,
  text2: string = '',
  options: ToastOptions = {},
) => {
  Toast.show({
    type,
    text1,
    text2,
    visibilityTime: options.visibilityTime || 2000,
    swipeable: options.swipeable || true,
    text1Style: { color: colors.light.text, fontSize: 16 },
    text2Style: { color: colors.light.text, fontSize: 14 },
    position: 'top',
    ...options,
  });
};

export const showError = (text2: string = '') => {
  showToast('error', i18n.t('ERROR'), text2);
};

export const showSuccess = (text2: string = '') => {
  showToast('success', i18n.t('SUCCESS'), text2);
};
