import React, { Component } from 'react';
import  axios from 'axios';
import SuccessAlert from  './SuccessAlert';
import ErrorAlert from  './ErrorAlert';

export default class Edit extends Component {

    constructor(props)
    {
        super(props);
        this.onChangeCategoryName =this.onChangeCategoryName.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            cat_name:'',
            alert_message:''
        };
    }

    componentDidMount() {
        axios.get('http://reactlar2/api/category/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({cat_name: response.data.name});
            });
    }
    onChangeCategoryName(e){
        this.setState({
            cat_name: e.target.value
        });
    };

    onSubmit(e){
        e.preventDefault();
        const category = {
            cat_name: this.state.cat_name
        };

        axios.put('http://reactlar2/category/update'+this.props.match.params.id, category)
            .then(res=>{
                this.setState({alert_message:"success"}).catch(error=>{
                    this.setState({alert_message:"error"});
                })
            });

        this.setState({
            cat_name:""
        })
    }

    render()
    {
        return (
            <div>
                <hr/>
                {this.state.alert_message =="success"?<SuccessAlert/>:null}
                {this.state.alert_message =="error"?<ErrorAlert/>:null}
                <form onSubmit={this.onSubmit}>
                    <div className="form-group" >
                        <label for="cat name">Category name:</label>
                        <input type="text" className="form-control"
                               id="cat_name"
                               value={this.state.cat_name}
                               onChange={this.onChangeCategoryName}

                        />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>

        );
    };
}






