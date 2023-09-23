import {
  type FlexStyle,
  SafeAreaView,
  type StyleProp,
  View,
  type ViewStyle,
} from 'react-native';
import React from 'react';

interface Props {
  children: React.ReactNode;
  safe?: boolean;
  backgroundColor?: string;
  padding?: number;
  justify?: FlexStyle['justifyContent'];
  align?: FlexStyle['alignItems'];
  testID?: string;
  color?: string;
}

export const Screen: React.FC<Props> = ({
  children,
  align,
  justify,
  padding,
  safe = true,
  testID,
  color,
}) => {
  const style: StyleProp<ViewStyle> = {
    flex: 1,
  };

  if (safe) {
    return (
      <SafeAreaView
        testID={testID}
        style={[
          style,
          {
            justifyContent: justify,
            alignItems: align,
            padding,
            backgroundColor: color,
          },
        ]}
      >
        {children}
      </SafeAreaView>
    );
  }

  return (
    <View
      testID={testID}
      style={[
        style,
        {
          justifyContent: justify,
          alignItems: align,
          padding,
          backgroundColor: color,
        },
      ]}
    >
      {children}
    </View>
  );
};

export default Screen;
