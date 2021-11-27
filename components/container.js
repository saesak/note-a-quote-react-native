import React, {Component} from "react";
import {
    StyleSheet,
    TextInput,
    View,
    Text,
    Button,
  } from "react-native";
  import Note from "./note";
  import PopUp from "./popup";


export default class Container extends Component {
    
    state = {
        notes : [ //default inputs
            {id: 1, text: 'Add a Note!', details: 'First Sample', seen: false},
            {id: 2, text: 'Add a Second Note!', details: 'Second Sample', seen: false}
        ],
        new_note_text : "",
    }
    
    togglePop = (note) => {
        let noteId = note.id
        let notes = this.state.notes

        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === noteId) {
                notes[i].seen = !notes[i].seen //flip true false
            }
        }
        
        this.setState({
            notes: notes
        })
    }

    checkToggle = (noteId) => {
        let notes = this.state.notes
        
        for (let i = 0; i < notes.length; i++) {
            if (notes[i].id === noteId) {
                if (notes[i].seen === true) {
                    return true
                }
                else {
                    return false
                }
            }
        } 

        return false
    }
    
    handleDelete = (noteId) => {
        const notes = this.state.notes.filter((c) => c.id !== noteId);
        this.setState({ notes: notes })
    }

    handleAdd = () => {
        let last_id = this.state.notes[this.state.notes.length - 1].id
        let notes = this.state.notes
        //notes = notes.concat([{id: last_id + 1, text: this.state.new_note_text}])
        notes.push({id: last_id + 1, text: this.state.new_note_text, details: 'empty', seen: false})
        this.setState({ notes: notes, new_note_text: "" })
    }


    

    render () {

        return (
            <View style={styles.Overall}>
                <View style={styles.notes_div}> 
                {this.state.notes.map((note) => (
                    <View style={styles.Row}> 
                        <Note
                        key={note.id}
                        id={note.id}
                        inputText={note.text}
                        onDelete={this.handleDelete}
                        />
                        <View style={styles.btn}>
                            <Button 
                            onPress={() => this.togglePop(note)} 
                            title="Activate Details"
                            >
                            </Button>
                        </View>
                        {this.checkToggle(note.id) ? <PopUp details = {note.details} toggle={() => this.togglePop(note)} /> : null}     
                    </View>
                ))}
                </View>
                <View style={styles.control_bar}>
                    <Text>New Note</Text>
                    <TextInput
                    onChangeText={(new_note_text) => this.setState({new_note_text})}
                    value={this.state.new_note_text}
                    />
                    <Button style={styles.btn_add} onPress={this.handleAdd} title="Submit" />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Overall: {
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
    },
    notes_div: {
    alignItems: "center",
    justifyContent: "center",
    },
    Row: {

    },
    btn: {

    },
    control_bar: {

    },
    btn_add: {

    }
});

