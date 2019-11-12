import React, { Component } from 'react';
import './styles.css'
import API from '../../utils/API';



class Answers extends Component {
    constructor(props) {
        super(props)
        this.state = {
            subCategory: ""
        };
    };

    onSelect = () => {
        this.setState({ subCategory: this.props.subCategory })
        API.getSubCategory(this.state.subCategory)
            .then(res => res.json(data))
            .catch(err => console.log(err));
    };
    render() {
        let answers = null;
        switch (this.state.category) {
            case "drink":
                answers = (
                    <AnswersForm ></AnswersForm>
                )
        }
        return (
            <div>
                <div className='row answer-card'>
                    <div clasname='row'>
                        <div className='col'>
                            <h1>{this.props.item}</h1>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <img onClick={this.onSelect} src={this.props.src}></img>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}



export default Answers