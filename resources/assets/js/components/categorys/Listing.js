import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import Pagination from "react-js-pagination";


export default class Listing extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],

        }
        this.handlePageChange = this.handlePageChange.bind(this);
    }

        componentDidMount() {
            axios.get('http://reactlar2/api/category/')
                .then(response => {
                    this.setState({categories: response.data.data,
                        itemsCountPerPage:response.data.per_page,
                        totalItemsCout:response.data.total,
                        activePage:response.data.current_page
                    });
                });
        }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        //this.setState({activePage: pageNumber});
        axios.get('http://reactlar2/api/category?page='+pageNumber)
            .then(response => {
                this.setState({categories: response.data.data,
                                        itemsCountPerPage:response.data.per_page,
                                        totalItemsCout:response.data.total,
                                        activePage:response.data.current_page
                });
            });
    }

        onDelete(cat_id){
             axios.delete( 'http://reactlar2/api/category/delete/'+cat_id)
                 .then(respnse=>{
                        var categories = this.state.categories;
                        for (var i = 0; i< categories.length; i++){
                            if(categories[i].id==cat_id)
                            {
                                categories.splice(i,1);
                                this.setState({categories:categories});
                            }
                        }
                 });
        }


    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                    <tr>
                        <th>Catecgory name</th>
                        <th>Status</th>
                        <th>Created at</th>
                        <th>Updatedated at</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                            {
                                this.state.categories.map(category=> {
                                    return(
                                        <tr>
                                            <td scope="row">1</td>
                                            <td>{category.name}</td>
                                            <td>{category.active==1?("Active"):("inActive")}</td>
                                            <td>{category.created_at}</td>
                                            <td>
                                                <Link to={`/category/edit/${category.id}`}>Edit</Link>
|                                                <a href="#" onClick={this.onDelete.bind(this,category.id)}>Delete</a>
                                            </td>
                                        </tr>
                                    )

                                })
                            }
                            </tbody>
                </table>
                <div className="row justify-content-center">
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={2}
                        totalItemsCount={this.state.totalItemsCout}
                        pageRangeDisplayed={2}
                        onChange={this.handlePageChange}
                        itemClass='page-item'
                        linkClass='page-link'

                    />
                </div>
            </div>

        );
    }
}




