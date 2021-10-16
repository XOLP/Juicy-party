import React from 'react';
import PropTypes, { array, string } from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import persik from '../img/persik.png';
import './Persik.css';
import { getRandomInt } from '@vkontakte/vkjs';
import Vam from '../img/Vam.jpg';
import Ob from '../img/Ob.jpg';
import Ch from '../img/Ch.jpg';

import i0 from '../img/вампир.jpg';
import i1 from '../img/ведьма.jpg';
import i2 from '../img/верните.jpg';
import i3 from '../img/вселенная.jpg';
import i4 from '../img/горничная.jpg';
import i5 from '../img/дерево.jpg';
import i6 from '../img/драг.jpg';
import i7 from '../img/киса.jpg';
import i8 from '../img/крыса.jpg';
import i9 from '../img/марвел.jpg';
import i10 from '../img/монашка.jpg';
import i11 from '../img/наруто.jpg';
import i12 from '../img/приведение.jpg';
import i13 from '../img/семейка.png';
import i14 from '../img/тыква.jpg';
import i15 from '../img/феечка.jpg';
import i16 from '../img/хиппи.jpg';
import i17 from '../img/чирлидерша.jpg';
import i18 from '../img/шрек.jpg';
import i19 from '../img/эльф.jpg';



import { arrayPattern, functionTypeAnnotation } from '@babel/types';

let name1;
let i;
let arr = ["Кровососка","Ведьма","верните мой 2007 (готы, панки, эмо)","Вселенная Тима Бертона","Горничная","Бревно","Драг квин","Киса","Крыса","Марвел","Монашка","Наруто","Приведение","Семейка Аддамс","Тыква","Феечка","Хиппи","Чирлидерша","Шрек","Эльф"]
let arrp = [i0,i1, i2,i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15 ,i16, i17, i18 ,i19 ]
function rad(){
	return	i = getRandomInt(0,19)
}

let a = rad();

let imgF = arrp[a];

const Persik = props => (
	
	<Panel id={props.id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={props.go} data-to="home"/>}
		>
			{arr[a]}
		</PanelHeader>
		<img className="Persik" src={arrp[a]} alt={arr[a]}/>
		
	</Panel>
);



	


Persik.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Persik;
