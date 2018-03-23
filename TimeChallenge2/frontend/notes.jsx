import React from 'react';


class Notes extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            notes: ""
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            notes: e.target.value
        });
    }


    render() {
        return (
            <div>
                <h1>This is a simple Notes App!</h1>
                <h2>See your notes below!</h2>
                <section>
                    <ul>
                        <li>{this.state.notes}</li>
                    </ul>
                </section>

                <form>
                    <textarea placeholder="Type your notes here" />
                    
                    <input type="submit" value="submit"/>
                </form>

            </div>
        );
    }
}

export default Notes;