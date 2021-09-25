import { Bool, Number, String } from "@rbxts/pascal";

type Attribute = String 
                | Number
                | Bool
                | UDim 
                | UDim2 
                | BrickColor 
                | Color3 
                | Vector2 
                | Vector3 
                | NumberSequence 
                | ColorSequence 
                | NumberRange 
                | Rect;

export default function Attributes<I extends { [K in keyof I]: Attribute }>(Object: Instance) {
    return setmetatable({}, {
        __index(Key) {
            return Object.GetAttribute(Key as String);
        },

        __newindex(Key, Value) {
            Object.SetAttribute(Key as String, Value);
        }
    }) as I;
}