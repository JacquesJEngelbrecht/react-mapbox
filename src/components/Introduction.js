import react, { Component } from 'react';

class Introduction extends Component {
    constructor(props) {
        super(props);

        this.state = {
            message: 'Hey da',
            userInput: '',
        }
    }

    handleInput = (e) => {
        const { value } = e.target;
        this.setState({ userInput: value })
    }

    render() {
        return (
            <div>
                <input value={this.state.userInput} onChange={this.handleInput.bind(this)} />
                <h1>{this.state.userInput}</h1>
            </div>
        );
    }
}
export default Introduction