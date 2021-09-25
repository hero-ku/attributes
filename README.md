
# Attributes
Attributes is a Roblox Typescript package for using type-safe attributes.

`npm install @rbxts/attributes`

## Usage

### Types

These are the types supported by Roblox attributes.
`String`
`Boolean`
`Number`
`UDim`
`UDim2`
`BrickColor`
`Color3`
`Vector2`
`Vector3`
`NumberSequence`
`ColorSequence`
`NumberRange`
`Rect`

### Using Attributes
To create your object of attributes, invoke the `Attributes` function with the instance and the attribute types. From there, simply assign to or reference your attributes to get or set them.

```ts
const MyPart = new Instance("Part");
const PartData = Attributes<{ Message: string }>(MyPart);

PartData.Message = "Hello World!";
print(PrintData.Message);
```