class List extends React.Component {
    constructor(props){
        super(props)
        this.changeHandler = this.changeHandler.bind(this);
        this.clickEvent = this.clickEvent.bind(this);
        this.deleteEvent = this.deleteEvent.bind(this);
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
        let wordArr = this.state.word.split('');
            if (wordArr.length > 140) {
                alert('too many typings!');
                return;
            } else {
                currentState.list.push(this.state.word);
                this.state.word = '';
                console.log("push", currentState.list);

                this.setState(currentState);       
           }
    }

    deleteEvent(index) {
        let currentState = this.state;

        currentState.list.splice(index, 1);

        console.log(currentState.list);

        this.setState(currentState);
    }






    render() {
        // render the list with a map() here

        const listTheThing = this.state.list.map( (listItem, listIdx) => {
            return (
                <li>{listItem}
                <button onClick={ event => this.deleteEvent(listIdx) }>Delete</button>
                </li>
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

