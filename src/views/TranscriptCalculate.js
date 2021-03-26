import React, { Component } from 'react';
import EntryForm from '../components/Blockchain/EntryForm';
import Result from '../components/Blockchain/Result';

class TranscriptCalculate extends Component {
    render() {
        return (
            <div 
                className="container"
                >
                <EntryForm />
                <Result />
            </div>
        )
    }
}

export default TranscriptCalculate;
