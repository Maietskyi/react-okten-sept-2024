import {FC} from "react";

type MyComponentPropType = { text: string };

// це те саме
// function MyComponent({text}: MyComponentPropType) {
// це те саме
// const MyComponent = ({text}: MyComponentPropType) => {
const MyComponent: FC<MyComponentPropType> = ({text}) => {
    return (
        <div className='text-3xl font-bold underline'>
            {text}
        </div>
    );
};

export default MyComponent;