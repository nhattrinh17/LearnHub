import * as React from 'react';
import Svg, { Defs, RadialGradient, Stop, Rect, Path } from 'react-native-svg';

export function LogoAppComponent(props: any): JSX.Element {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 512 512" {...props}>
      <Defs>
        <RadialGradient id="a" cx={188.24} cy={359.94} r={240.96} gradientTransform="rotate(-53.47 184.353 361.931) scale(1 1.01)" gradientUnits="userSpaceOnUse">
          <Stop offset={0} stopColor="#3a77f6" />
          <Stop offset={0.55} stopColor="#814ef6" />
          <Stop offset={0.66} stopColor="#9145f6" />
          <Stop offset={1} stopColor="#ec6787" />
        </RadialGradient>
      </Defs>
      <Rect width={412.22} height={412.22} x={49.89} y={49.89} fill="#fff" rx={55.43} />
      <Path fill="url(#a)" d="M256 109.08c-81 0-146.73 63.77-146.73 142.43 0 42.42 19.21 80.4 49.52 106.5l1.05 33.45a11.82 11.82 0 0 0 16.64 10.42l33.77-15.09A150.43 150.43 0 0 0 256 394c81 0 146.73-63.77 146.73-142.44S337 109.08 256 109.08Z" />
      <Path fill="#fefefe" d="M168.32 291.45s-5.88 6.72 0 11.2c0 0 4.9 4.76 10.78-1l42.9-32.1s7.14-7.56 15.11 0l34.64 25.82s11.24 6 21.94 0a25.93 25.93 0 0 0 8.51-8.4l43.73-69.7s1.72-5-2.38-8.19c0 0-3.14-3.56-8.5 0l-46.29 35.07s-6.3 5.24-11.86 0l-36.22-27s-11.33-7.28-23.37 0a32 32 0 0 0-6.86 7.56Z" />
    </Svg>
  );
}
export default LogoAppComponent;
