import { useEffect, useRef, useState } from "react";
import PropTypes from 'prop-types'
import { BsPlusSquare } from 'react-icons/bs'
import { FiMinusSquare } from 'react-icons/fi'

export default function ExpandablePanel({ title, children }) {
    const [open, setOpen] = useState(false);
    const myRef = useRef(null);
    const innerRef = useRef(null);
    const refStyles = useRef({
        height: "auto",
        opacity: 1
    });

    useEffect(() => {
        refStyles.current.height = myRef.current.clientHeight + "px";
    }, []);

    useEffect(() => {
        window.addEventListener("resize", (e) => { });
        return window.removeEventListener("resize", () => {
            console.log("removed event listener");
        });
    }, []);

    return (
        <div className="container shadow-md px-6">
            <div className="flex flex-col">
                <div
                    className="cursor-pointer flex flex-row content-end p-3 justify-between items-center "
                    onClick={(e) => {
                        setOpen(!open);
                    }}
                >
                    <h4 className="">{title}</h4>
                    {!open ? <BsPlusSquare /> : <FiMinusSquare />}
                </div>
                <div
                    className="transitionClass"
                    style={{
                        height: open ? innerRef.current.clientHeight : "0px",
                        overflow: "hidden"
                    }}
                    ref={myRef}
                >
                    <div className="h-auto p-3" ref={innerRef}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const ExpandablePanelWrapper = (props) => {
    const [open, setOpen] = useState(0);
    return props.panels

}

ExpandablePanelWrapper.propTypes = {
    panels: PropTypes.arrayOf(<ExpandablePanel />)
}

ExpandablePanel.propTypes = {
    title: PropTypes.string.isRequired
}