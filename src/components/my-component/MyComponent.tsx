import React, {FC} from "react";

type MyComponentPropType = {
    title: string;
    children?: React.ReactNode;
};

// це те саме
// function MyComponent({text}: MyComponentPropType) {
// це те саме
// const MyComponent = ({text}: MyComponentPropType) => {
const MyComponent: FC<MyComponentPropType> = ({title, children}) => {
    return (
        <div className='text-3xl font-bold underline'>
            <h1>{title}</h1>
            <p>{children}</p>
        </div>
    );
};

export default MyComponent;