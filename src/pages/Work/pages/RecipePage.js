import React from 'react'
import ReactDOM from 'react-dom/client'
import EditItemOnDB from '../recipe/EditItemOnDB.js'
import RecipeFurnace from '../recipe/RecipeFurnace.js'
import RecipeInscribe from '../recipe/RecipeInscribe.js'
import RecipeInfusion from '../recipe/RecipeInfusion.js'
import RecipeWorkBench3x3 from '../recipe/wb.3x3.js'
import AddItemOnDB from '../recipe/AddItemOnDB.js'
import RecipeWorkBench9x9 from '../recipe/wb.9x9.js'
import RecipeWorkBench3x3Shapeless from '../recipe/wb.3x3.less.js'

class GenList extends React.Component {
	constructor(props) {
		super(props)

		this.lists = props.items
		this.inputItems = []
		this.removed = false
		this.outputItems = []
		this.recipeName = null

		this.getRecipe = this.getRecipe.bind(this)
	}

	getRecipe(e) {
		e.preventDefault()
		let el = +e.currentTarget.attributes['item-key'].value,
			root2 = ReactDOM.createRoot(document.querySelector('.recipe__result')),
			res = []
		window.localStorage.setItem('itemId', el)
		if (!window.localStorage.getItem('v')) window.localStorage.setItem('v', '1.12.2')
		if (el === -2) {
			res = <EditItemOnDB />
		}
		if (el === -1) {
			res = <AddItemOnDB />
		}
		if (el === 0) {
			res = <RecipeWorkBench3x3 />
		}
		if (el === 1) {
			res = <RecipeWorkBench3x3Shapeless />
		}
		if (el === 2) {
			res = <RecipeFurnace />
		}
		if (el === 3) {
			res = <RecipeWorkBench9x9 />
		}
		if (el === 4) {
			res = <RecipeInscribe />
		}
		if (el === 5) {}
		if (el === 6) {}
		if (el === 7) {}
		if (el === 8) {}
		if (el === 9) {}
		if (el === 10) {}
		if (el === 11) {}
		if (el === 12) {}
		if (el === 13) {}
		if (el === 14) {}
		if (el === 15) {}
		if (el === 16) {}
		if (el === 17) {}
		if (el === 18) {}
		if (el === 19) {}
		if (el === 20) {}
		if (el === 21) {}
		if (el === 22) {}
		if (el === 23) {}
		if (el === 24) {}
		if (el === 25) {}
		if (el === 26) {}
		if (el === 27) {}
		if (el === 28) {}
		if (el === 29) {}
		if (el === 30) {}
		if (el === 31) {}
		if (el === 32) {}
		if (el === 33) {}
		if (el === 34) {}
		if (el === 35) {}
		if (el === 36) {}
		if (el === 37) {}
		if (el === 38) {}
		if (el === 39) {}
		if (el === 40) {}
		if (el === 41) {}
		if (el === 42) {}
		if (el === 43) {}
		if (el === 44) {}
		if (el === 45) {}
		if (el === 46) {}
		if (el === 47) {}
		if (el === 48) {}
		if (el === 49) {}
		if (el === 50) {}
		if (el === 51) {}
		if (el === 52) {}
		if (el === 53) {}
		if (el === 54) {}
		if (el === 55) {}
		if (el === 56) {}
		if (el === 57) {}
		if (el === 58) {}
		if (el === 59) {}
		if (el === 60) {}
		if (el === 61) {}
		if (el === 62) {}
		if (el === 63) {}
		if (el === 64) {}
		if (el === 65) {}
		if (el === 66) {}
		if (el === 67) {}
		if (el === 68) {}
		if (el === 69) {}
		if (el === 70) {}
		if (el === 71) {}
		if (el === 72) {}
		if (el === 73) {}
		if (el === 74) {}
		if (el === 75) {}
		if (el === 76) {}
		if (el === 77) {}
		if (el === 78) {}
		if (el === 79) {}
		if (el === 80) {}
		if (el === 81) {}
		if (el === 82) {}
		if (el === 83) {}
		if (el === 84) {}
		if (el === 85) {
			res = <RecipeInfusion />
		}
		if (res === undefined || res === null || res.length === 0) res = 'Undefined recipe page'
		root2.render(res)
	}

	render() {
		let elems = []
		for (let i = 0; i < this.lists.length; i++) {
			elems[i] =
				<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-' + i} item-key={i} key={i} data-qa={'item'} className={'controls-ListView__itemV-relative controls-ListView__itemV js-controls-ListView__editingTarget controls-ListView__itemV_cursor-pointer controls-ListView__item_default controls-ListView__item_showActions js-controls-ListView__measurableContainer controls-ListView__item__unmarked_default controls-ListView__item_highlightOnHover controls-hover-background-default'} tabIndex={0} onClick={this.getRecipe}>
					<div className={'controls-ListView__itemContent  controls-ListView__item_default-topPadding_default controls-ListView__item_default-bottomPadding_default controls-ListView__item-rightPadding_default controls-ListView__item-leftPadding_default  '}>
						<div className={''} tabIndex={0}>
							<div className={'person-BaseInfo ws-flexbox ws-align-items-baseline person-BaseInfo__textAlignment_fontsize-2xl controls_Person_theme-default person-Info__withActivity'} tabIndex={0}>
								<div className={'controls_Person_theme-default ws-flexbox ws-flex-shrink-0 person-Photo__view ws-flex-shrink-0 person-BaseInfo__photo person-BaseInfo__textAlignment_fontsize-2xl'} data-qa={'person-Information__photo'} tabIndex={0} style={{height: '40px'}}>
									<span className={'activity__ActivityMarker icon-16 activity__ActivityMarker-withBorder   Activity-VDOM-Status__Indicator Activity-VDOM-Status__Indicator person-Photo__activityIndicatorContainer tw-absolute icon-disabled icon-PhoneGetManually '} data-person={'ac98fc35-cf44-490d-9b41-c35dadafa3dc'} title={''} tabIndex={0}>
										<div className={'activity__ActivityMarker__image '} />
									</span>
									<div className={'person-Wrapper__pictureContainer ws-flex-shrink-0 person-Wrapper__container undefined  controls-image_border-large controls-PopupPreviewer person-Wrapper__clickable'} tabIndex={0} style={{lineHeight: '40px', height: '40px', width: '40px'}}>
										<picture className={'ws-flexbox person-Wrapper__picture'}>
											<img loading={'lazy'} src={'/asset/resource/users/foto/' + null} className={'person-DefaultPhoto__image'} />
										</picture>
										<div style={{width: '40px'}}>&nbsp;</div>
									</div>
								</div>
								<div className={'ws-flexbox ws-flex-column ws-flex-grow-1 person-BaseInfo__content controls-padding_left-xs'}>
									<div className={'ws-flexbox person-BaseInfo__line  ws-align-items-baseline'}>
										<div className={'ws-inline-flexbox ws-align-items-baseline person-BaseInfo__titleContainer person-BaseInfo__content'}>
											<span data-qa={'person-Information__fio'} dir={'auto'} title={''} className={'edws-StaffChooser__suggestTemplate_fio ws-ellipsis'} tabIndex={0} key={i}>{this.lists[i]}</span>
										</div>
										{/*<span className={'controls-text-readonly ws-flexbox ws-align-items-baseline ws-ellipsis person-BaseInfo__additionalContent'} style={{minWidth: '0px'}}>*/}
										{/*	<span title={''} className={'controls-padding_left-s ws-ellipsis person-BaseInfo__additionalInfo'}>512</span>*/}
										{/*</span>*/}
									</div>
									{/*<span data-qa={'person-Information__secondLine'} title={''} className={'ws-ellipsis person-BaseInfo__line controls-fontsize-m controls-text-readonly person-BaseInfo__textAlignment_fontsize-m'}>123</span>*/}
								</div>
							</div>
						</div>
					</div>
				</div>
		}
		elems.unshift(
			<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-' + -2} item-key={-2} key={-2} data-qa={'item'} className={'controls-ListView__itemV-relative controls-ListView__itemV js-controls-ListView__editingTarget controls-ListView__itemV_cursor-pointer controls-ListView__item_default controls-ListView__item_showActions js-controls-ListView__measurableContainer controls-ListView__item__unmarked_default controls-ListView__item_highlightOnHover controls-hover-background-default'} tabIndex={0} onClick={this.getRecipe}>
				<div className={'controls-ListView__itemContent  controls-ListView__item_default-topPadding_default controls-ListView__item_default-bottomPadding_default controls-ListView__item-rightPadding_default controls-ListView__item-leftPadding_default  '}>
					<div className={''} tabIndex={0}>
						<div className={'person-BaseInfo ws-flexbox ws-align-items-baseline person-BaseInfo__textAlignment_fontsize-2xl controls_Person_theme-default person-Info__withActivity'} tabIndex={0}>
							<div className={'controls_Person_theme-default ws-flexbox ws-flex-shrink-0 person-Photo__view ws-flex-shrink-0 person-BaseInfo__photo person-BaseInfo__textAlignment_fontsize-2xl'} data-qa={'person-Information__photo'} tabIndex={0} style={{height: '40px'}}>
									<span className={'activity__ActivityMarker icon-16 activity__ActivityMarker-withBorder   Activity-VDOM-Status__Indicator Activity-VDOM-Status__Indicator person-Photo__activityIndicatorContainer tw-absolute icon-disabled icon-PhoneGetManually '} data-person={'ac98fc35-cf44-490d-9b41-c35dadafa3dc'} title={''} tabIndex={0}>
										<div className={'activity__ActivityMarker__image '} />
									</span>
								<div className={'person-Wrapper__pictureContainer ws-flex-shrink-0 person-Wrapper__container undefined  controls-image_border-large controls-PopupPreviewer person-Wrapper__clickable'} tabIndex={0} style={{lineHeight: '40px', height: '40px', width: '40px'}}>
									<picture className={'ws-flexbox person-Wrapper__picture'}>
										<img loading={'lazy'} src={'/asset/resource/users/foto/' + null} className={'person-DefaultPhoto__image'} />
									</picture>
									<div style={{width: '40px'}}>&nbsp;</div>
								</div>
							</div>
							<div className={'ws-flexbox ws-flex-column ws-flex-grow-1 person-BaseInfo__content controls-padding_left-xs'}>
								<div className={'ws-flexbox person-BaseInfo__line  ws-align-items-baseline'}>
									<div className={'ws-inline-flexbox ws-align-items-baseline person-BaseInfo__titleContainer person-BaseInfo__content'}>
										<span data-qa={'person-Information__fio'} dir={'auto'} title={''} className={'edws-StaffChooser__suggestTemplate_fio ws-ellipsis'} tabIndex={0} key={-1}>(В разработке) Редактировать предмет в БД</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
		elems.unshift(
			<div ws-creates-context={'true'} ws-delegates-tabfocus={'true'} attr-data-qa={'key-' + -1} item-key={-1} key={-1} data-qa={'item'} className={'controls-ListView__itemV-relative controls-ListView__itemV js-controls-ListView__editingTarget controls-ListView__itemV_cursor-pointer controls-ListView__item_default controls-ListView__item_showActions js-controls-ListView__measurableContainer controls-ListView__item__unmarked_default controls-ListView__item_highlightOnHover controls-hover-background-default'} tabIndex={0} onClick={this.getRecipe}>
				<div className={'controls-ListView__itemContent  controls-ListView__item_default-topPadding_default controls-ListView__item_default-bottomPadding_default controls-ListView__item-rightPadding_default controls-ListView__item-leftPadding_default  '}>
					<div className={''} tabIndex={0}>
						<div className={'person-BaseInfo ws-flexbox ws-align-items-baseline person-BaseInfo__textAlignment_fontsize-2xl controls_Person_theme-default person-Info__withActivity'} tabIndex={0}>
							<div className={'controls_Person_theme-default ws-flexbox ws-flex-shrink-0 person-Photo__view ws-flex-shrink-0 person-BaseInfo__photo person-BaseInfo__textAlignment_fontsize-2xl'} data-qa={'person-Information__photo'} tabIndex={0} style={{height: '40px'}}>
									<span className={'activity__ActivityMarker icon-16 activity__ActivityMarker-withBorder   Activity-VDOM-Status__Indicator Activity-VDOM-Status__Indicator person-Photo__activityIndicatorContainer tw-absolute icon-disabled icon-PhoneGetManually '} data-person={'ac98fc35-cf44-490d-9b41-c35dadafa3dc'} title={''} tabIndex={0}>
										<div className={'activity__ActivityMarker__image '} />
									</span>
								<div className={'person-Wrapper__pictureContainer ws-flex-shrink-0 person-Wrapper__container undefined  controls-image_border-large controls-PopupPreviewer person-Wrapper__clickable'} tabIndex={0} style={{lineHeight: '40px', height: '40px', width: '40px'}}>
									<picture className={'ws-flexbox person-Wrapper__picture'}>
										<img loading={'lazy'} src={'/asset/resource/users/foto/' + null} className={'person-DefaultPhoto__image'} />
									</picture>
									<div style={{width: '40px'}}>&nbsp;</div>
								</div>
							</div>
							<div className={'ws-flexbox ws-flex-column ws-flex-grow-1 person-BaseInfo__content controls-padding_left-xs'}>
								<div className={'ws-flexbox person-BaseInfo__line  ws-align-items-baseline'}>
									<div className={'ws-inline-flexbox ws-align-items-baseline person-BaseInfo__titleContainer person-BaseInfo__content'}>
										<span data-qa={'person-Information__fio'} dir={'auto'} title={''} className={'edws-StaffChooser__suggestTemplate_fio ws-ellipsis'} tabIndex={0} key={-1}>Добавить предмет в БД</span>
									</div>
									{/*<span className={'controls-text-readonly ws-flexbox ws-align-items-baseline ws-ellipsis person-BaseInfo__additionalContent'} style={{minWidth: '0px'}}>*/}
									{/*	<span title={''} className={'controls-padding_left-s ws-ellipsis person-BaseInfo__additionalInfo'}>512</span>*/}
									{/*</span>*/}
								</div>
								{/*<span data-qa={'person-Information__secondLine'} title={''} className={'ws-ellipsis person-BaseInfo__line controls-fontsize-m controls-text-readonly person-BaseInfo__textAlignment_fontsize-m'}>123</span>*/}
							</div>
						</div>
					</div>
				</div>
			</div>
		)
		return elems
	}
}

class RecipePage extends React.Component {
	render() {
		let i = 0
		return (
			<>
				<div className={'controls-Popup ws-float-area-show-complete ws-flexbox controls-Scroll_webkitOverflowScrollingTouch controls-StickyTemplate-animation controls-StickyTemplate-visibility controls-Popup-corner-vertical-bottom controls-Popup-corner-horizontal-left controls-Popup-align-horizontal-right controls-Popup-align-vertical-bottom   controls-Zoom'} style={{maxHeight: '900px', maxWidth: '300px'}}>
					<div className={'controls_suggestPopup_theme-default controls_popupTemplate_theme-default controls-Suggest__suggestionsContainer controls-Suggest__suggestionsContainer_popup  controls-Suggest__suggestionsContainer_popup_shadow_bottom controls-Suggest__suggestionsContainer_popup_bottom controls_popupTemplate_theme-default controls-Popup__template'} tabIndex={0}>
						<div className={'controls-Scroll-Container controls-Scroll controls_scroll_theme-default controls-Suggest__scrollContainer'} tabIndex={0}>
							<div className={'controls-Scroll-ContainerBase controls_scroll_theme-default controls-Scroll__content  controls-Scroll__content_hideNativeScrollbar controls-Scroll__content_hideNativeScrollbar_ff-ie-edge controls-Scroll-ContainerBase__scroll_vertical controls-Scroll-ContainerBase__scrollPosition-regular controls-Scroll-Container__base controls-BlockLayout__blockGroup undefined'} name={'content'} data-qa={'controls-Scroll__content'} tabIndex={0} style={{overscrollBehaviorY: 'auto'}}>
								<div className={'controls-Scroll-ContainerBase__content controls-Scroll-ContainerBase__content__vertical controls-Scroll-ContainerBase__content-direction_column'}>
									<div className={'controls-Suggest__wrapper controls-Suggest__wrapper_bottom controls-Suggest-offset-top controls-Scroll-containerBase_userContent'} tabIndex={0}>
										<div className={'controls-LoadingIndicator controls-Suggest__indicator'} tabIndex={0}>
											<div className={'edws-StaffChooser__Suggest_list controls-loading-indicator_content'} tabIndex={0} style={{width: '300px'}}>
												<div className={'controls_suggestPopup_theme-default controls-Suggest_list'} tabIndex={0}>
													<div className={'controls-BaseControl controls_list_theme-default controls_toggle_theme-default'} tabIndex={0}>
														<div name={'fakeFocusElem'} tabIndex={0} className={'controls-BaseControl__fakeFocusElem'} />
														<div name={'viewContainer'} className={'controls-BaseControl__viewContainer controls-BaseControl__View_31fc468f-c13f-4066-a63f-08643551097a'} tabIndex={0}>
															<div className={'controls-ListViewV controls_list_theme-default controls-ListView_default controls-itemActionsV_menu-hidden'} tabIndex={0}>
																<div name={'itemsContainer'} data-qa={'items-container'} className={'controls-ListViewV__itemsContainer controls-BaseControl_hover_enabled controls-BaseControl__itemsContainer_31fc468f-c13f-4066-a63f-08643551097a'}>
																	<GenList items={[
																		'Верстак (Форменный)',
																		'Верстак (Бесформенный)',
																		'Печь',
																		'Верстак (9х9) (Avaritia)',
																		'Высекатель (AE2)',
																		'(В разработке) Алтарь (Astral Sorcery)',
																		'(В разработке) Точильный камень (Astral Sorcery)',
																		'(В разработке) Колодец света (Astral Sorcery)',
																		'(В разработке) Взаимод. с жидкостью (Astral Sorcery)',
																		'(В разработке) Звезная инйузия (Astral Sorcery)',
																		'(В разработке) Звезная трансмутация (Astral Sorcery)',
																		'(В разработке) Завод сплавов (Ender Tweaker)',
																		'(В разработке) Зачарователь (Ender Tweaker)',
																		'(В разработке) Дробитель (Ender Tweaker)',
																		'(В разработке) Отруб и Сращиватель (Ender Tweaker)',
																		'(В разработке) Связыватель душ (Ender Tweaker)',
																		'(В разработке) The Var (Ender Tweaker)',
																		'(В разработке) BlastFurnace (IC2 Tweaker)',
																		'(В разработке) Block Cutter (IC2 Tweaker)',
																		'(В разработке) Canner (IC2 Tweaker)',
																		'(В разработке) Компрессор (IC2 Tweaker)',
																		'(В разработке) Эликтролизер (IC2 Tweaker)',
																		'(В разработке) Экстрактор (IC2 Tweaker)',
																		'(В разработке) Ферментор (IC2 Tweaker)',
																		'(В разработке) Heat exchanger (IC2 Tweaker)',
																		'(В разработке) Дробитель (IC2 Tweaker)',
																		'(В разработке) Металофармовочный механизм (IC2 Tweaker)',
																		'(В разработке) Рудопромывочная машина (IC2 Tweaker)',
																		'(В разработке) Утилизатор (IC2 Tweaker)',
																		'(В разработке) Semi-Fluid Gen (IC2 Tweaker)',
																		'(В разработке) Термальная цетрифуга (IC2 Tweaker)',
																		'(В разработке) Alloy Kiln (Immersive Engineering)',
																		'(В разработке) Arc Furnace (Immersive Engineering)',
																		'(В разработке) Blast Furnace (Immersive Engineering)',
																		'(В разработке) Blueprint (Immersive Engineering)',
																		'(В разработке) Bottling Machine (Immersive Engineering)',
																		'(В разработке) Coke Oven (Immersive Engineering)',
																		'(В разработке) Crusher (Immersive Engineering)',
																		'(В разработке) Diesel Helper (Immersive Engineering)',
																		'(В разработке) Excavator (Immersive Engineering)',
																		'(В разработке) Fermenter (Immersive Engineering)',
																		'(В разработке) Metal Press (Immersive Engineering)',
																		'(В разработке) Mixer (Immersive Engineering)',
																		'(В разработке) Refinery (Immersive Engineering)',
																		'(В разработке) Squeezer (Immersive Engineering)',
																		'(В разработке) Thermoelectric (Immersive Engineering)',
																		'(В разработке) Bio Reactor (Industrial Foregoing)',
																		'(В разработке) Laser Drill (Industrial Foregoing)',
																		'(В разработке) Protein Reactor (Industrial Foregoing)',
																		'(В разработке) Tree Fuel Extractor (Industrial Foregoing)',
																		'(В разработке) JEI',
																		'(В разработке) Alchemy Array (Blood Magic)',
																		'(В разработке) Alchemy Table (Blood Magic)',
																		'(В разработке) Blood Altar (Blood Magic)',
																		'(В разработке) Tartaric Forge (Blood Magic)',
																		'(В разработке) Brew (Botania)',
																		'(В разработке) Elven Trade (Botania)',
																		'(В разработке) Mana Infusion (Botania)',
																		'(В разработке) Orechid (Botania)',
																		'(В разработке) Orechid Ignem (Botania)',
																		'(В разработке) Petal Apothecary (Botania)',
																		'(В разработке) Pure Daisy (Botania)',
																		'(В разработке) Rune Altar (Botania)',
																		'(В разработке) Carpenter (Forestry)',
																		'(В разработке) Centrifuge (Forestry)',
																		'(В разработке) Charcoal Pile (Forestry)',
																		'(В разработке) Fermenter (Forestry)',
																		'(В разработке) Moistener (Forestry)',
																		'(В разработке) Squeezer (Forestry)',
																		'(В разработке) Still (Forestry)',
																		'(В разработке) Thermionic Fabricator (Forestry)',
																		'(В разработке) Alloying (Tinker\'s Construct)',
																		'(В разработке) Casting (Tinker\'s Construct)',
																		'(В разработке) Drying (Tinker\'s Construct)',
																		'(В разработке) Melting (Tinker\'s Construct)',
																		'(В разработке) Smeltery Fuel (Tinker\'s Construct)',
																		'(В разработке) Entity Aspect (Thaumcraft 6)',
																		'(В разработке) Item Aspect (Thaumcraft 6)',
																		'(В разработке) Arcane Workbench (Thaumcraft 6)',
																		'(В разработке) Crucible (Thaumcraft 6)',
																		'Infusion (Thaumcraft 6)',
																		'(В разработке) Salis Mundus (Thaumcraft 6)',
																		'(В разработке) Warp (Thaumcraft 6)',
																		'(В разработке) Alchemical Imbuer (Thermal Expansion)',
																		'(В разработке) Arcane Ensorcellator (Thermal Expansion)',
																		'(В разработке) Centrifugal Seperator (Thermal Expansion)',
																		'(В разработке) Compactor (Thermal Expansion)',
																		'(В разработке) Coolant (Thermal Expansion)',
																		'(В разработке) Energetic Infuser (Thermal Expansion)',
																		'(В разработке) Factorizer (Thermal Expansion)',
																		'(В разработке) Fluid Transposer (Thermal Expansion)',
																		'(В разработке) Fractionating Still (Thermal Expansion)',
																		'(В разработке) Induction Smelter (Thermal Expansion)',
																		'(В разработке) Magma Crucible (Thermal Expansion)',
																		'(В разработке) Redstone Furnace (Thermal Expansion)',
																		'(В разработке) Phytogenic Insolator (Thermal Expansion)',
																		'(В разработке) Pulvirizer (Thermal Expansion)',
																		'(В разработке) Sawmill (Thermal Expansion)',
																		'(В разработке) Fusion Crafting (Draconic Evolution)',
																		'(В разработке) Infusion de Sanguine (Blood Arsenal)'
																	]}/>
																</div>
															</div>
															<div className={'controls__BaseControl__footer'} tabIndex={0} />
														</div>
													</div>
													<div tabIndex={0} />
												</div>
												<div tabIndex={0} />
											</div>
										</div>
										<div />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={'nanomagicPage-MainLayout__middle ws-flexbox SbisEnvUI-ParkingBody_same-background'} style={{width: 'calc(100% - 315px)', position: 'absolute', right: '0px'}}>
					<div className={'recipe__result'} />
				</div>
			</>
		)
	}
}

export default RecipePage