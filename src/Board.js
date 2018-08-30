import React, { Component } from 'react';
import BlankPiece from './BlankPiece'
import XPiece from './XPiece'
import OPiece from './OPiece'

class Board extends React.Component {
    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Tic-Tac-Toe-Board</h1>
                    
                    
                </header>
                <div>
                    <section>
                    <table>
    <tr>
        <td><OPiece /></td>
        <td><BlankPiece /></td>
        <td><XPiece /></td>
    </tr>
    <tr>
        <td><BlankPiece /></td>
        <td><OPiece /></td>
        <td><BlankPiece /></td>
    </tr>
    <tr>
        <td><XPiece /></td>
        <td><BlankPiece /></td>
        <td><XPiece /></td>
    </tr>
</table>

                    </section>

                </div>
            </div>
        )
    }
}
export default Board