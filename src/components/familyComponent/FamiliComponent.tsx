import {simpsons} from "../../data/data.tsx";
import {CharacterComponent} from "../characterComponent/CharacterComponents.tsx";

export const FamilyComponents = ()=>{
    return (
        <div>
            {
                simpsons.map((value, index)=><CharacterComponent key={index} item={value}>
                    {value.info}
                    </CharacterComponent>
                    )
            }
        </div>
    )
}