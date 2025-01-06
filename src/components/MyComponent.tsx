import {FC} from "react";
import styles from './MyComponent.module.css'

type MyComponentPropType = { text: string }

// це те саме
// function MyComponent({text}: MyComponentPropType) {
// це те саме
// const MyComponent = ({text}: MyComponentPropType) => {
const MyComponent: FC<MyComponentPropType> = ({text}) => {
    return <div className={styles.target}>
        {text}
    </div>
}

export default MyComponent;