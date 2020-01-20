import React, { Component } from "react";
import boardManager from "../../helpers/data/boardManager";
import pinManager from "../../helpers/data/pinManager";
import { Card, CardBody, CardHeader, CardTitle } from "reactstrap";

class SingleBoard extends Component {

    state = {
        board: {},
        pins: []
    }

    getData = () => {
        boardManager.getSingleBoard(this.props.boardId)
        .then(boardResponse => {
            pinManager.getPinsByBoardId(this.props.boardId)
            .then(pinResponse => {
                this.setState({
                    board: boardResponse,
                    pins: pinResponse
                })
            })
        })
    }

    componentDidMount() {
        this.getData();
    }

    render() {
        console.log("what is pin state", this.state.pins);
        return(
            <>
            <Card>
                <CardHeader tag="h3">{this.state.board.name}</CardHeader>
                <CardBody>
                    <CardTitle>{this.state.board.description}</CardTitle>
                    {this.state.pins.map(pin =>
                        <h2 key={pin.id}>{pin.title}</h2>
                    )}
                </CardBody>
            </Card>
            </>
        )
    }
}

export default SingleBoard