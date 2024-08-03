import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet, Image, ViewProps, StyleProp, ViewStyle } from 'react-native';

// Định nghĩa kiểu cho props
interface FadeInViewProps extends ViewProps {
  fadeInDuration?: number; // Thời gian để hiện ảnh
  fadeOutDuration?: number; // Thời gian để ẩn ảnh
}

export const FadeInView: React.FC<FadeInViewProps> = props => {
  const fadeAnim = useRef(new Animated.Value(0)).current; // Giá trị bắt đầu của opacity

  useEffect(() => {
    // Animation lặp lại
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: props.fadeInDuration || 2000,
          useNativeDriver: true,
        }),
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: props.fadeOutDuration || 2000,
          useNativeDriver: true,
        }),
      ]),
    ).start();
  }, [fadeAnim]);

  // Kiểm tra kiểu của props.style trước khi sử dụng toán tử spread
  const combinedStyle: StyleProp<ViewStyle> = [
    props.style,
    { opacity: fadeAnim }, // Liên kết giá trị animated với thuộc tính opacity
  ];

  return (
    <Animated.View // Sử dụng Animated.View thay vì View
      style={combinedStyle}>
      {props.children}
    </Animated.View>
  );
};
