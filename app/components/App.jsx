import uuid from 'node-uuid';

import React from 'react';

import Notes from './Notes.jsx';

export default class App extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {
            notes: [
                {
                    id: uuid.v4(),
                    task: 'Learn Webpack'
                },
                {
                    id: uuid.v4(),
                    task: 'Learn React'
                },
                {
                    id: uuid.v4(),
                    task: 'Do yardwork'
                }
            ]
        };
    }
    addNote = () => {
        this.setState({
            notes: this.state.notes.concat([{
                id: uuid.v4(),
                task: 'New task'
            }])
        });
    }
    render() {

        const notes = this.state.notes;

        return (
            <div>
                <button onClick={this.addNote}>Add Note Task</button>
                <Notes notes={notes} />
            </div>
        );

    }
}
