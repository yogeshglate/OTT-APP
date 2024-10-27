import React from 'react';
import { TextInput } from 'react-native-paper';
import { InputFieldProps } from 'types';

const InputField: React.FC<InputFieldProps> = ({
  label,
  icon,
  themeColors,
  ...props
}) => {
  return (
    <>
      <TextInput
        mode="outlined"
        label={label}
        left={
          <TextInput.Icon icon={icon} size={30} color={themeColors?.primary} />
        }
        style={{ backgroundColor: themeColors?.background }}
        outlineColor={themeColors?.outlineColor}
        activeOutlineColor={themeColors?.primary}
        textColor={themeColors?.text}
        theme={{
          colors: {
            text: themeColors?.text,
            placeholder: themeColors?.placeholder,
          },
        }}
        {...props}
      />
    </>
  );
};

export default InputField;
