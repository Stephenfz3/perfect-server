import React, { Component } from 'react';
import Carousel from "../Carousel"
import Youtube from "react-youtube"
import{Button, Modal, ModalHeader, ModalBody, ModalFooter} from "reactstrap"


class AddModal extends Component {
    constructor(props) {
        super(props);
        this.state={
            open:false
        }
        
    }

    // state = {
    //     modalIsOpen: false
    // }

    // toggleModal= () => {
    //     this.setState({modalIsOpen: !this.state.modalIsOpen})
    // }
    toggleModal=()=>this.setState({open:!this.state.open})
    render() { 

        
        return ( 
            <React.Fragment>
            <a  onClick={this.toggleModal}>
            {this.props.name}
            </a>
            <Modal size="lg" isOpen={this.state.open}>
            <ModalHeader onClick={this.toggleModal} toggle={this.props.toggle}>
            {this.props.name}
            </ModalHeader>
            <ModalBody>{<Youtube videoId={this.props.videoId} alt="..."/>}</ModalBody>
            <ModalFooter>
              <Button color="primary">SAve</Button>
              <Button color="secondary" onClick={this.toggleModal}>Cancel</Button>
            </ModalFooter>

          </Modal>
          
          </React.Fragment>
         );
    }
}
 
export default AddModal;