import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(faCheck);

class ModalExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            dropdownOpen: false,
            currentBoard: '',
            current_list_ID: null,
            boards: [],
            boardLists: [],
            status:null,

        };

        this.toggle = this.toggle.bind(this);
        this.dropdownToggle = this.dropdownToggle.bind(this);
    }

    trelloInfo = {
        key: 'f82341477d9945fa09f2babfd04fd90d',
        token: '6d0c45de4084717470f61741e57c263e6eb08ddcadf9421a4c9e2dac99168feb',
        idOrganization: '5cad87eb8d26e64fcc5f81ed',
    }


    componentDidMount() {
        axios.get(`https://api.trello.com/1/organizations/${this.trelloInfo.idOrganization}/boards?filter=open&fields=all&key=${this.trelloInfo.key}&token=${this.trelloInfo.token}`).then((res) => {
            this.setState({ boards: res.data });
        });
    }

    toggle() {
        this.setState(prevState => ({
            modal: !prevState.modal,
        }));

    }

    dropdownToggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    selectBoard(e, board) {
        // console.log(board);
        axios.get(`https://api.trello.com/1/boards/${board.id}/lists?cards=none&card_fields=all&filter=open&key=${this.trelloInfo.key}&token=${this.trelloInfo.token}`).then((res) => {
            // https://api.trello.com/1/boards/kkkkkkkkkkk/lists?cards=none&card_fields=all&filter=open&fields=all&key=hhh&token=kkk
            console.log(res.data);

            this.setState({ boardLists: res.data, currentBoard: board });
        });

    }

    hendleChange(e){
        // console.log(e.target.value);
        this.setState({ [e.target.name]:e.target.value });
        // console.log(this.state);
        
    }

    createDropdownItem() {

        return (
            <div>
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropdownToggle}>
                    <DropdownToggle caret>
                        {this.state.currentBoard === '' ? 'SELECT BOARD' : this.state.currentBoard.name}
                    </DropdownToggle>
                    <DropdownMenu>

                        <DropdownItem header>Header</DropdownItem>
                        {this.state.boards.map((b, i) => {
                            console.log(this.state.boards);
                            
                            return <DropdownItem onClick={(e) => this.selectBoard(e, b)} key={i}>{b.name}</DropdownItem>
                        })}
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }

    handleSelectList(e){
        let index = e.target.selectedIndex;
        let el = e.target.childNodes[index]
        let id =  el.getAttribute('id'); 
        console.log(e.target, index, id);
        this.setState({ current_list_ID: id })
        
    }

    sendCardToTrello(){
        console.log(this.state);
        
        axios.post(`https://api.trello.com/1/cards?name=${this.state.name_1}&desc=${this.state.name_2}&pos=top&idList=${this.state.current_list_ID}&key=${this.trelloInfo.key}&token=${this.trelloInfo.token}`)
        .then((req) => {
            console.log(req.request.status);
            if (req.request.status === 200) {
                this.setState({ status: 200 })
            }
        })
    }

    render() {
        return (
            <div>
                <Button color="info" onClick={this.toggle}>POST BUG</Button>
                <Modal style={{ width: '10000px' }} isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <AvForm>
                            <AvField
                             name="name_1" 
                             label="Name (default error message) 1" 
                             type="text" 
                             validate={{required: { value: true, errorMessage: 'Please enter a name' }}}
                             onChange={(e) => this.hendleChange(e)} 
                             />
                            <AvField 
                             name="name_2"
                             label="Name (custom error message) 2" 
                             type="text" 
                             validate={{required: { value: true, errorMessage: 'Please enter a name' }}}
                             onChange={(e) => this.hendleChange(e)}
                             />
                            <AvField 
                             name="name_3" 
                             label="Name (custom error message) 3" 
                             type="text"
                             validate={{required: { value: true, errorMessage: 'Please enter a name' }}}
                             onChange={(e) => this.hendleChange(e)}
                             />
                            <AvField 
                             type="select" 
                             name="select" 
                             label={`Lists`} 
                             helpMessage="select the list bug"
                             validate={{ required: { value: true, errorMessage: 'Please select list' }}}
                             onChange={(e) => this.handleSelectList(e)}
                             >
                             {this.state.boardLists.length > 0 ? this.state.boardLists.map((list, index) => {
                                return(
                                    <option name={list.name} id={list.id} key={index}>{list.name}</option>
                                )}) : <option>select bord...</option>}
                            </AvField>
                        </AvForm>
                    </ModalBody>
                    <ModalFooter>
                        {/* {this.state.status === 200 ? <p>OK</p> : <React.Fragment/>} */}
                        {this.state.status === 200 ? <FontAwesomeIcon icon={faCheck} /> : <React.Fragment/>}
                        <Button color="secondary" onClick={() => this.sendCardToTrello()}>SEND</Button>{' '}
                        {this.createDropdownItem()}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

export default ModalExample;