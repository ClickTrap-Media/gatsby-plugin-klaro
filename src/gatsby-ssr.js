import React from "react";

const DEFAULT_VERSION = "v0.7.11";
const DEFAULT_URL = "https://cdn.kiprotect.com/klaro/%version%/klaro.js";

exports.onRenderBody = ({ setHeadComponents }, pluginOptions) => {
    if (
        process.env.NODE_ENV === "production" ||
        pluginOptions.includeInDevelopment
    ) {
        const klaroComponents = [];
        const { klaroVersion, klaroUrl, config, configUrl } = pluginOptions;

        // Prepare config
        let configurationComponent;
        if (configUrl !== undefined) {
            configurationComponent = (
                <script
                    defer
                    key="klaro-config"
                    type="text/javascript"
                    src={configUrl}
                ></script>
            );
        }

        if (config !== undefined) {
            const configAsString =
                "window.klaroConfig = " + JSON.stringify(config);
            configurationComponent = (
                <script
                    key="klaro-config"
                    type="text/javascript"
                    dangerouslySetInnerHTML={{
                        __html: `${configAsString}`,
                    }}
                />
            );
        }

        if (configurationComponent !== undefined) {
            klaroComponents.push(configurationComponent);
        }

        // Prepare Klaro
        const urlToUse = klaroUrl ? klaroUrl : DEFAULT_URL;
        const versionToUse = klaroVersion ? klaroVersion : DEFAULT_VERSION;
        const finalKlaroUrl = urlToUse.replace("%version%", versionToUse);

        const urlComponent = (
            <script
                defer
                key="klaro"
                type="text/javascript"
                src={finalKlaroUrl}
            ></script>
        );
        klaroComponents.push(urlComponent);

        // Add components
        return setHeadComponents(klaroComponents);
    }

    return null;
};
