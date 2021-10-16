import React from 'react';
import PropTypes from 'prop-types';
import vam from '../img/Vam.jpg';
import "./vam.css"
import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import './Persik.css';
import ps from '../img/Psina.jpg'


const Home = ({ id, go, fetchedUser }) => (
	<Panel id={id} >
		<PanelHeader >Juicy party &#127866;</PanelHeader>
		{fetchedUser &&
		<Group header={<Header mode="secondary">Заголовок</Header>}>
			<Cell
				before={fetchedUser.photo_200 ? <Avatar src={fetchedUser.photo_200}/> : null}
				description={fetchedUser.city && fetchedUser.city.title ? fetchedUser.city.title : ''}
			>
				{`${fetchedUser.first_name} ${fetchedUser.last_name}`}
			</Cell>
		</Group>}

		<Group header={<Header mode="secondary">Ты лох</Header>}>
			<Div>
			<p >Это аппка чтобы не быть лохом на нашей тусовке, если нет идея по костюму!</p>
			<img className = "Vam" src = {ps}/>
				<Button stretched size="l" mode="secondary" onClick={go} data-to="persik">
					Не быть лохом
				</Button>
			</Div>
		</Group>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};

export default Home;
