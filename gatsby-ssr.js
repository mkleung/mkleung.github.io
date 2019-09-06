/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

const React = require("react")
exports.onRenderBody = ({
    setHeadComponents,
    setPreBodyComponents,
    setPostBodyComponents,
}) => {
    setHeadComponents([
        <script
            key="1"
            type="text/javascript"
            src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.5.0/prism.min.js"
        />,
    ])

}