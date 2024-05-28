import React, { useEffect } from "react";

import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";


function Fancybox({ children, options }) {
    const delegate = "[data-fancybox]";

    useEffect(() => {
        const opts = options || {};

        NativeFancybox.bind(delegate, opts);

        return () => {
            NativeFancybox.destroy();
        };
    }, []);

    return children;
}

export default Fancybox;