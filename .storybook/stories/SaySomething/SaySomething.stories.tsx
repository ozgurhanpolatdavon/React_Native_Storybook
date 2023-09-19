import { Text, View } from "react-native";
import SaySomething from "./SaySomething";
import type {Meta, StoryObj} from '@storybook/react-native'
import React from "react";

const mySaySomething: Meta<typeof SaySomething> = {
   component:SaySomething,

}

export default mySaySomething;


type Story  = StoryObj <typeof SaySomething>;

export const Primary : Story = {
    args: {
        something:"Hello World",
    }
}
export const Secondary : Story = {
    args: {
        something:"Naber lan tirrek",
    }
}
