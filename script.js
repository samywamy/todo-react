
// Add a button click handler that 
    // - takes what is in the input, 
    // - removes it from the input and 
    // - pushes it into the list.
// write the code that renders the list


class List extends React.Component {
    constructor(props){
        super(props)
        this.changeHandler = this.changeHandler.bind(this);
        this.clickEvent = this.clickEvent.bind(this);
        this.state = {
            list : [],
            word : ""
        }
    }

    changeHandler(event) {
        let currentState = this.state;
        currentState.word = event.target.value;
        console.log("change", event.target.value); 
        // console.log(currentState.word);

        this.setState(currentState);
    }

    clickEvent(event) {
        let currentState = this.state;
        currentState.list.push(this.state.word);
        this.state.word = '';
        console.log("push", currentState.list);

        this.setState(currentState);
    }

    render() {
        // render the list with a map() here

        const listTheThing = this.state.list.map(listItem => {
            return (
                <li>{listItem}</li>
            );
        });


        console.log("rendering");
        return (
            <div className="list">
                <input onChange={e => this.changeHandler(e)} value={this.state.word}/>

                <button onClick={this.clickEvent}>Add item</button>

                <ul>
                    {listTheThing}
                </ul>
            </div>
          );
    }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

