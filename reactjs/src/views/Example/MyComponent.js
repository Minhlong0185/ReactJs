import React from "react";


class MyComponent extends React.Component {

    state = {
        name: 'Messi',
        channel: 'hule'
    }

    handleOnChangeName = (event) => {
        this.setState(
            {
                name: event.target.value
            }
        )
    }

    render() {

        return (
            <>
                <div className="first">
                    <input value={this.state.name} type="text"
                        onChange={(event) => this.handleOnChangeName(event)}
                    />
                    Hello, {this.state.name}
                </div>
                <div className="second">
                    hehe {this.state.channel}
                </div>
            </>
        )
    }
}


export default MyComponent;