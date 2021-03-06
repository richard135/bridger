import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import { List, ListSubHeader, ListItem } from 'react-toolbox/lib/list';
import Input from 'react-toolbox/lib/input';
import { Button } from 'react-toolbox/lib/button';
import Avatar from 'react-toolbox/lib/avatar';

class UserProfile extends Component {
	constructor(props) {
		super(props);
		this.submit = this.submit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = { message: '' };
		this.scrollToBottom = this.scrollToBottom.bind(this);
	}

	componentDidMount() {
	}

	scrollToBottom() {
    const node = ReactDOM.findDOMNode(this.messagesEnd);
    node.scrollIntoView({behavior: "smooth"});
	}

	handleChange(name, message){
		this.setState({message});
	};

	submit(key) {
		if (key.charCode === 13) {
			this.scrollToBottom();
			this.setState({message: ''})
			return this.props.sendMessage(`${this.props.name}: ${this.state.message}`, this.props.data.linkedin_id);
		}
	}

	render() {
		console.log(this.props.data);
		let image = this.props.data.picture_url ? this.props.data.picture_url : "http://vignette2.wikia.nocookie.net/filthy-frank/images/c/ce/Question-mark-face.jpg/revision/latest?cb=20160909100759"

		return (
			<div className='userProfileContainer'>
				<Card className="profileCard" raised>
					<CardMedia
						aspectRatio="square"
						image={image}
					/>
					<CardTitle className="profileCardTitle"
						title={this.props.data.first_name + ' ' + this.props.data.last_name}
						subtitle={this.props.data.location}
					/>
					<CardText className="numConnections">
						{this.props.data.num_connections} Connections
					</CardText>
					{this.props.data.headline && (
						<CardText className="profileCardText">
							HEADLINE <div>{this.props.data.headline}</div>
						</CardText>
					)}
					{this.props.data.positions !== 0 && (
						<CardText className="profileCardText">
							CURRENTLY <div>{this.props.data.position_company_name[0]} - {this.props.data.position_company_title}</div>
						</CardText>
					)}
					{this.props.data.industry !== 'NULL' && (
						<CardText className="profileCardText">
							INDUSTRY <div>{this.props.data.industry}</div>
						</CardText>
					)}
					{this.props.data.summary && (
						<CardText className="profileCardText">
							SUMMARY <div>{this.props.data.summary}</div>
						</CardText>
					)}
					<CardActions>
						<Button className='learnMoreButton' href={this.props.data.public_profile_url} label='LinkedIn' icon='account_circle' raised primary />
		        <Button className="backButton" onClick={this.props.backToEP.bind(null, this.props.data.event_id)} label='Back' icon='arrow_back' />
					</CardActions>
				</Card>
				<Card className="chatCard">
					<List selectable ripple>
						<ListSubHeader className="chatCardHeader" caption={'Send a message to ' + this.props.data.first_name} />
							{this.props.data.message.map((dat, i) => {
								let nameMatch = dat.match(/^(.*?):/i)
								let crop = 0;
								let name = 'System';
								let picture = this.props.data.picture_url;
								if (nameMatch){
									name = nameMatch[0].slice(0, -1)
									crop = nameMatch[0].length + 1;
									if (this.props.name === name) {
										picture = this.props.picture;
									}
								}
								if (name === 'System') {
									picture = `https://babbleon5.files.wordpress.com/2009/08/james_cameron01.jpg`;
								}
							 return <ListItem key = {i} avatar={picture} caption={name} legend={dat.slice(crop)} />
							})}
					</List>
					<Input ref={(el) => { this.messagesEnd = el; }}  className="chatInput" onKeyPress={this.submit} type='text' hint="Let's meet up!" icon='send' name='message' value={this.state.message} onChange={this.handleChange.bind(this, 'message')} />
				</Card>
			</div>
		)
  }
};

export default UserProfile;
