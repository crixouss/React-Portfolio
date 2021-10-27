import * as React from "react";
import {View, Text} from 'react-native';
import {Circle} from "@react-google-maps/api";



export default function Donut(
    {
        percentage = 75,
        radius = 40,
        strokeWidth = 10,
        duration= 500,
        color = 'tomato',
        delay = 0,
        textColor,
        max=100,
    }
){
    const halfCircle = radius * strokeWidth;
    return (
        <View>
            <svg width={radius*2} height={radius*2} viewBox={`0 0 ${halfCircle*2} ${halfCircle*2}`}>
                <g>
                    <Circle cx='50%' cy='50%' stroke={color} strokeWidth={strokeWidth}
                            π={radius}
                    strokeOpacity={0.2}/>
                </g>
            </svg>

        </View>

    );
}