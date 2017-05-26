import React, {
    Component
}
from 'react';
import 'isomorphic-fetch';
import {
    connect
}
from 'react-redux';
import {fetchBoards} from '../actions/boardsActions';
import List from '../components/List';
import {
    CardDeck,
    Row
}
from 'reactstrap';
import NewBoardForm from '../components/NewBoardForm';
import BoardSelector from '../components/BoardSelector';
import {withRouter} from 'react-router-dom';
import ListsContainer from './ListsContainer';


const makeLists = (lists) => {
    return lists.map((list) => {
        return (
            <ListsContainer key={list.id} {...list}/>
        );
    });

};

class BoardsContainer extends Component {

    componentDidMount() {
        console.log("dashboard did mount");
        //fetch initial data
        this.props.fetchBoards();
    }
    
    
    render() {
        const {boards, selectedBoard } = this.props;
        if (boards.length === 0){
            console.log("empty board list, probably needs to load");
            return null;
        }
        return (
            <div className="container">
                <NewBoardForm buttonLabel="+Add board"/>
                <BoardSelector boards={boards}/>
                <Row>
                        {makeLists(selectedBoard ? selectedBoard.Lists : [])}
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    
    return {
        boards: state.boards.data,
        selectedBoard: state.boards.data.find((board) => {
            return board.id == ownProps.match.params.id;
        })
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchBoards: () => {
            dispatch(fetchBoards());
        }
    };
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BoardsContainer));