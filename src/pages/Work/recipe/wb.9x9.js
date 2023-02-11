import React from 'react'
import {
	inputs, version,
	changeVersion, allRemoveRecipe,
	showResult9x9, setInputs,
	showPopupO, clearContent, setMode,
	submitN, showPopupN, searchItem, renderTabs, saveRecipe
} from './functions.js'
import {ItemIngredient} from './ItemIngredient.js'

function RecipeWorkBench9x9() {
	setMode('avaritia')
	if (inputs === undefined || (inputs instanceof Array && inputs.length !== 81)) setInputs(81)
	setTimeout(ItemIngredient, 20)
	return (
		<>
			<div className={'nanomagicPage-MainLayout__backButton_wrapper ws-flexbox ws-align-items-center controls-maring_left-m ws-flexbox ws-flex-shrink-1 ws-flex-grow-0 ws-align-self-baseline'} tabIndex={0}>
				<div className={'controls-Header__caption controls-Header__fontweight-default controls-fontsize-5xl controls-Header-fontsize-5xl controls-Header_readonly controls-Header__caption_style-default nanomagicPage-MainLayout__title ws-flex-shrink-1 nanomagicPage-MainLayout__title_position-top'}>Верстак (9x9) (Avaritia)</div>
			</div>
			<div className={'crafting-holder'}>
				<div className={'crafting-wrapper'}>
					<div className={'crafting'}>
						<div className={'recipe'}>
							<div className={'table-grid table-grid-9x9'} />
						</div>
						<div className={'x_mark'} style={{position: 'absolute', top: '15px', left: '380px'}} onClick={clearContent}>
							<span className={'controls-BaseButton controls-Button_ghost controls-Button_radius-ghost controls-Button_hoverIcon controls-Button_clickable controls-Button_bg-same controls-Button_circle_height-xl controls-fontsize-m controls-Button_button__wrapper-fontsize-m controls-Button_ghost_shadow-none controls-Toolbar__button undefined controls-inlineheight-xl controls-Button-inlineheight-xl controls-Button_ghost_xl'} ws-creates-context={'true'} ws-delegates-tabfocus={'true'} tabIndex={0}>
								<span className={'controls-BaseButton__wrapper controls-Button__wrapper_viewMode-ghost controls-BaseButton__wrapper_captionPosition_end controls-Button_textAlign-center controls-Button__wrapper_ghost_xl'}>
									<i className={'controls-Button__icon controls-BaseButton__icon controls-icon_size-m controls-icon_style-danger controls-icon icon-Erase'} tabIndex={0}/>
								</span>
							</span>
						</div>
						<div className={'arrow'} />
						<div className={'crafting-table-output'}>
							<div className={'crafting-grid-item'} data-key={-1} onClick={showPopupO}>
								<span className={'grid-large'} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className={'tabs'} style={{position: 'absolute', top: '50px', right: '20px'}}>
				<div className={'nanomagicPage-MainLayout__backButton_wrapper ws-flexbox ws-align-items-center controls-maring_left-m ws-flexbox ws-flex-shrink-1 ws-flex-grow-0 ws-align-self-baseline'} tabIndex={0}>
					<div className={'controls-Header__caption controls-Header__fontweight-default controls-fontsize-5xl controls-Header-fontsize-5xl controls-Header_readonly controls-Header__caption_style-default nanomagicPage-MainLayout__title ws-flex-shrink-1 nanomagicPage-MainLayout__title_position-top'}>Опции</div>
				</div>
				<section style={{position: 'relative', top: '0px', left: '10px'}}>
					<button type={'submit'} className={'cybr-btn'} style={{padding: '15px', margin: 0}} data-type={'avaritia_9x9_shaped'} onClick={saveRecipe}><span /><span /><span /><span />Сохранить</button>
					<button type={'submit'} className={'cybr-btn'} style={{padding: '15px', margin: 0}} onClick={showResult9x9}><span /><span /><span /><span />Результат</button>
					{/*<button type={'submit'} className={'cybr-btn'} style={{padding: '15px', margin: 0}} onClick={showSaveRecipe}><span /><span /><span /><span />Сохраненные рецепты</button>*/}
					<div className={''}>
						<label><input name={'remove_recipe'} type={'checkbox'} value={''} onClick={allRemoveRecipe}/> Удалить все рецепты конечного результата</label>
					</div>
					{/*<div className={''}>*/}
					{/*	<button className={''} onClick={this.showResult}>Show result</button>*/}
					{/*</div>*/}
					<div className={''}>
						<button className={''} onClick={showPopupN}>Название рецепта (<span style={{color: "red"}}>ОБЯЗАТЕЛЬНО!!!</span>)</button>
					</div>
					<input className={'rname'} style={{display: 'none'}} placeholder={'Имя рецепта'} />
					<input className={'eng_rname'} type={'hidden'} value={''} />
					<button className={'rnamebtn'} style={{display: 'none'}} onClick={submitN}>Ok!</button>
				</section>
			</div>
			<div className={'panel panel-default craft avaritia9x9'} style={{display: 'none'}}>
				<div className={'panel-heading'}>
					{version === '1.7.10' ?
						<>
							<button type={'submit'} className={'cybr-btn'} style={{padding: '10px', margin: 0, marginRight: '2px', background: 'rgb(200, 200, 200)'}} data-version={'1.7.10'} disabled onClick={changeVersion}><span /><span /><span /><span />1.7.10</button>
							<button type={'submit'} className={'cybr-btn'} style={{padding: '10px', margin: 0}} data-version={'1.12.2'} onClick={changeVersion}><span /><span /><span /><span />1.12.2</button>
						</>
						: <>
							<button type={'submit'} className={'cybr-btn'} style={{padding: '10px', margin: 0}} data-version={'1.7.10'} onClick={changeVersion}><span /><span /><span /><span />1.7.10</button>
							<button type={'submit'} className={'cybr-btn'} style={{padding: '10px', margin: 0, marginLeft: '2px', background: 'rgb(200, 200, 200)'}} data-version={'1.12.2'} disabled onClick={changeVersion}><span /><span /><span /><span />1.12.2</button>
						</>
					}
					<div className={'creative_tabs'}>
						<div className={'tabs'}>
							{renderTabs()}
						</div>
					</div>
					<div className={"search-input.r"}>
						<div className={'form-group'}>
							<input type={'text'} className={'form-control'} name={'itemName'} placeholder={'Название предмета'} onChange={searchItem} />
						</div>
					</div>
				</div>
				<div className={'panel-body'}>
					<div className={'ingredients'} />
				</div>
			</div>
			<div className={'panel panel-default result'} style={{display: 'none'}}>
				<div className={'panel-heading'} />
				<div className={'panel-body'} />
			</div>
		</>
	)
}

export default RecipeWorkBench9x9