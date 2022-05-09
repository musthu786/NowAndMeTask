
import React from 'react';
import { View } from 'react-native';
import { FormField } from '../../molecules';

const FormComponent = (props) => {
    const { formFileds } = props;
    return (
        <>
            <View>
                {formFileds &&
                    formFileds.map((item) => (
                        <FormField
						prefixVal={item.prefixVal}
                            title={item.title}
                            value={item.value}
                            label={item.label}
                            key={item?.label}
                            placeholder={item.placeholder}
                            onFocus={item.onFocus}
                            onFocusInput={item.onFocusInput}
                            error={item.error}
                            isPassword={item.isPassword}
                            maxlength={item.maxlength}
                            onChangeText={item.onChangeText}
                            keyboardType={item.keyboardType}
                            {...props}
                        />
                    ))}
            </View>
        </>
    );
};

export default FormComponent;
