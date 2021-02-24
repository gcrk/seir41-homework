import React, { Component } from 'react'
import _ from 'underscore'
import axios from 'axios'

import InstaSearch from './InstaSearch'
import Profile from './Profile'
import Video from './Video'

export class Dashboard extends Component {

    constructor() {
        super();
        this.state = {
            data: []
        }
        this.fetchData = this.fetchData.bind(this)
    }

    async fetchData(username) {
        
        try {
            const res = await axios(`https://www.instagram.com/${username}/?__a=1`);
            console.log(res);
            this.setState({data: res.data.graphql.user})
            console.log(this.state.data);
        } catch (error) {
            console.error(error)
        }
    }

    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <InstaSearch onSubmit={this.fetchData}/>
                <Profile data={this.state.data} />
                <Video data={this.state.data} />
            </div>
        )
    }
}

export default Dashboard
