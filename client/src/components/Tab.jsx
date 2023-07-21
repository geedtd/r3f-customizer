import { useSnapshot } from "valtio"

import state from "../store"

const Tab = ({tab, isFilterTab, isActiveTab, handleClick}) => {
    const snap = useSnapshot(state)

    const activeStyles = isFilterTab && isActiveTab 
        ? {backgroundColor: snap.color, opacity: 0.45} 
        : {backgroundColor: "transparent", opacity: 1} 

    return (
        <div
            key={tab.name}
            className={`tab-btn ${isFilterTab ? 'rounded-full glassmorphism' : 'rounded-4'}`}
            onClick={handleClick}
        >
            <img 
                src={tab.icon}
            />
        </div>
    )
}
export default Tab