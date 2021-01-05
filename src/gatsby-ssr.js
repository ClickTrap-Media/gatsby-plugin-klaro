import React from "react";

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
    if (
        process.env.NODE_ENV === "production" ||
        pluginOptions.includeInDevelopment
    ) {
        return setHeadComponents([
            <script
                defer
                key="klaro-config"
                type="text/javascript"
                src="config.js"
            ></script>,
            <script
                defer
                key="klaro"
                type="text/javascript"
                src="https://cdn.kiprotect.com/klaro/v0.7.11/klaro.js"
            ></script>,
        ]);
    }

    return null;
};
