import React from 'react'
import $ from 'jquery'
import {getCreativeTabs, setItemInDB} from '../../../utils/Request.js'
import {translate} from './functions.js'

let ct = getCreativeTabs().tabs

class AddItemOnDB extends React.Component {
	state = {
		selectedFile: null
	}

	constructor(props) {
		super(props)

		this.save = this.save.bind(this)
		this.saveImage = this.saveImage.bind(this)
		this.regName = this.regName.bind(this);
		this.setCT = this.setCT.bind(this);
	}

	save(e) {
		e.preventDefault()
		let fd = new FormData(),
			fields = document.forms['itemdb'].elements,
			creativeTabs = fields['ct'].value,
			desc = fields['desc'].value,
			itemname = fields['itemname'].value,
			reg_name = fields['reg_name'].value,
			tag = fields['tag'].value,
			texture = fields['texture_name'].value
		let resp = setItemInDB(itemname, reg_name, tag, texture, desc, creativeTabs),
			d = document.createElement('div')
		d.classList.add('controls-Header__caption', 'controls-Header__fontweight-default', 'controls-fontsize-5xl', 'controls-Header-fontsize-5xl', 'controls-Header_readonly', 'controls-Header__caption_style-default', 'nanomagicPage-MainLayout__title', 'ws-flex-shrink-1', 'nanomagicPage-MainLayout__title_position-top')
		d.append(resp.message)
		d.style.color = 'red'
		if (resp?.msg === 'ok') {
			fields['ct'].value = ""
			fields['desc'].value = ""
			fields['itemname'].value = ""
			fields['reg_name'].value = ""
			fields['tag'].value = ""
		} else {
			$('.image')[0].prepend(d)
		}
	}

	onFileChange = event => {
		this.setState({selectedFile: event.target.files[0]})
	}

	saveImage(e) {
		e.preventDefault()
		if (!([undefined, null, ''].includes($('.item_name')[0].value))) {
			let fd = new FormData()
			fd.append('texture', this.state.selectedFile, translate($('.item_name')[0].value.toLowerCase()) + ".png")
			fetch('https://www.workspace-loliland.ru/api/upload', {
				method: 'POST',
				credentials: 'include',
				headers: {
					Accept: 'application/json'
				},
				body: fd
			}).then(res => res.json()).then(res => {
				$('[name="texture_name"]')[0].value = res.filename
				document.querySelector('form.image').setAttribute('style', 'display:none')
			})
		}
	}

	regName(e) {
		let el = document.querySelector('[name="reg_name"]'),
			v = e.target.value
		v = v.split('>')[0]
		v = v.split('<')[1]
		el.value = v;
	}

	setCT(e) {
		document.querySelector('[name="ct"]').value = e.currentTarget.value
	}

	render() {
		let cts = [], i
		for (i = 0; i < ct.length; i++) {
			cts[i] = <option value={ct[i].id} key={i}>{ct[i].name}</option>
		}
		cts.unshift(<option value={-1} disabled={true}>Творческая вкладка</option>)
		return (
			<>
				<div className={'nanomagicPage-MainLayout__backButton_wrapper ws-flexbox ws-align-items-center controls-maring_left-m ws-flexbox ws-flex-shrink-1 ws-flex-grow-0 ws-align-self-baseline'} tabIndex={0}>
					<div className={'controls-Header__caption controls-Header__fontweight-default controls-fontsize-5xl controls-Header-fontsize-5xl controls-Header_readonly controls-Header__caption_style-default nanomagicPage-MainLayout__title ws-flex-shrink-1 nanomagicPage-MainLayout__title_position-top'}>Добавление предмета в Базу данных</div>
				</div>
				<div className={'crafting-holder'}>
					<form className={'formId1'} name={'itemdb'}>
						{/*<input name={'id'} className={'id'} type={'number'} placeholder={'Идентификатор премета (ID)'}/>*/}
						<input name={'itemname'} type={'text'} className={'item_name'} placeholder={'Название предмета'} />
						{/*<input name={'eng_name'} type={'text'} className={'eng_name'} placeholder={'Название предмета на английском языке'} />*/}
						<input name={'reg_name'} type={'hidden'} className={'reg_name'} placeholder={'Регистрационное имя (minecraft:stone) (не обязательно, заполнит Arekusey-tyan)'} />
						<input name={'tag'} type={'text'} className={'tag'} placeholder={'Тэг предмета (/mt hand)'} onChange={this.regName} />
						<select defaultValue={-1} className={'creative_tab'} placeholder={'Вкладка креатива'} onChange={this.setCT}>
							{cts}
						</select>
						<input type={'hidden'} className={'creative_tab'} name={'ct'} placeholder={'Вкладка креатива'} value={''} />
						<textarea className={'desc'} name={'desc'} placeholder={'Описание предмета (не обязательно, заполнит Arekusey-tyan)'} />
						<input type={'text'} name={'version'} placeholder={'Версия майна (1.7.10, 1.12.2 и т.д.) (Default: 1.12.2)'} />
						<input type={'hidden'} name={'texture_name'} className={'texture'} />
						<button type={'submit'} className={'cybr-btn'} onClick={this.save}><span /><span /><span /><span />Занесение в БД</button>
					</form>
					<form className={'formId1 image'}>
						<div className={'nanomagicPage-MainLayout__backButton_wrapper ws-flexbox ws-align-items-center controls-maring_left-m ws-flexbox ws-flex-shrink-1 ws-flex-grow-0 ws-align-self-baseline'} tabIndex={0}>
							<div className={'controls-Header__caption controls-Header__fontweight-default controls-fontsize-5xl controls-Header-fontsize-5xl controls-Header_readonly controls-Header__caption_style-default nanomagicPage-MainLayout__title ws-flex-shrink-1 nanomagicPage-MainLayout__title_position-top'}>Для добавления изображение заполните поля имени предмета.</div>
						</div>
						<label className={'input-file'}>
							<input type={'file'} name={'texture'} className={'file'} accept={'image/*'} onChange={this.onFileChange.bind(this)}/>
						</label>
						<button type={'submit'} className={'cybr-btn'} onClick={this.saveImage}><span /><span /><span /><span />Добавить изображение</button>
					</form>
				</div>
			</>
		)
	}
}

export default AddItemOnDB