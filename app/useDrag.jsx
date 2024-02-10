import { useState, useEffect } from "react";

export default function useDrag(ref, deps = [], options) {
    const {
        onPointerDown = () => { },
        onPointerUp = () => { },
        onPointerMove = () => { },
        onDrag = () => { }
    } = options;

    const [isDragging, setIsDragging] = useState(false);

    function handlePointerDown(e) {
        //onPointerDown(e);
        setIsDragging(true);
    };

    function handlePointerUp(e) {
        //onPointerUp(e);
        setIsDragging(false);

    };

    function handlePointerMove(e) {
        //onPointerMove(e);

        if (isDragging) {
            onDrag(e);
        }
    };

    useEffect(() => {
        const element = ref.current;
        if (element) {
            element.addEventListener("pointerdown", handlePointerDown);
            window.addEventListener("pointerup", handlePointerUp);
            window.addEventListener("pointermove", handlePointerMove);


            return () => {
                element.removeEventListener("pointerdown", handlePointerDown);
                window.removeEventListener("pointerup", handlePointerUp);
                window.removeEventListener("pointermove", handlePointerMove);
            };
        }

        return () => { };
        //    }, [...deps, isDragging]);
    }, [...deps, isDragging]);

    //return { isDragging };
    return {};
};

