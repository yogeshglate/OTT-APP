import { ButtonProps } from 'types';
import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { fontSize, moderateScale, scale, verticalScale } from 'services';

const Button: React.FC<ButtonProps> = ({
  text,
  onPress,
  type = 'contained',
}) => {
  const isContained = type === 'contained';

  return (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        isContained ? styles.containedButton : styles.outlinedButton,
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}>
      <Text style={isContained ? styles.containedText : styles.outlinedText}>
        {text}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: verticalScale(12),
    paddingHorizontal: scale(32),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: moderateScale(4),
    width: '100%',
    marginVertical: verticalScale(10),
  },
  containedButton: {
    backgroundColor: '#32a873',
    shadowColor: 'rgba(50, 168, 115, 0.4)',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: moderateScale(8),
    elevation: moderateScale(8),
  },
  outlinedButton: {
    borderWidth: 1,
    borderColor: '#32a873',
  },
  buttonPressed: {
    opacity: 0.8,
  },
  containedText: {
    color: '#121212',
    fontWeight: '700',
    fontSize: fontSize.medium,
  },
  outlinedText: {
    color: '#32a873',
    fontWeight: '700',
    fontSize: fontSize.medium,
  },
});

export default React.memo(Button);
