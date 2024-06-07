import * as React from 'react'
import {View} from 'react-native'
import Svg, {Path} from 'react-native-svg'
export function Newskie({size}: {size: number}) {
  return (
    <View style={{height: size, width: size}}>
      <Svg fill="none" viewBox="0 0 21 11">
        <Path
          fill="#FFC404"
          d="M14.147 10.984c.538 0 .975-.403.975-.942 0-2.782-2.264-5.03-5.047-5.03-2.782 0-5.046 2.24-5.046 5.022 0 .539.437.95.975.95h8.143Zm-4.072-7.439c-.544 0-.892-.44-.892-.984V.985c0-.544.349-.985.892-.985.545 0 .893.44.893.985V2.56c0 .545-.348.985-.893.985Zm4.618 1.913a.983.983 0 0 1 0-1.393l1.114-1.114A.985.985 0 0 1 17.2 4.344l-1.114 1.114a.985.985 0 0 1-1.393 0ZM19.165 9.2H17.59c-.544 0-.985.353-.985.896a.87.87 0 0 0 .89.887h1.67c.544 0 .985-.348.985-.892 0-.543-.44-.892-.985-.892Zm-15.62.892c0-.544-.44-.892-.985-.892H.985c-.544 0-.985.349-.985.892 0 .544.44.892.985.892H2.56c.545 0 .985-.348.985-.892Zm1.913-4.634a.985.985 0 0 0 0-1.393L4.344 2.95A.985.985 0 0 0 2.95 4.344l1.114 1.114a.983.983 0 0 0 1.393 0Z"
        />
      </Svg>
    </View>
  )
}
