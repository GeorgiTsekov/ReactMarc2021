import React from "react";

function fetcher(WrapperComponent) {

    return class extends React.Component {
        componentDidMount() {
            // fetch()
        }

        render() {
            return (
                <WrapperComponent {...this.props} />
            )
        }
    }
}

export default fetcher