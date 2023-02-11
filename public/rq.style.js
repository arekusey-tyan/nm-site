let paths = window.location.pathname.split('/').filter(el => el !== ''),
	a = paths !== undefined ? paths.splice(0, 1)[0] : undefined,
	sa = paths !== undefined ? paths.join('/') : undefined,
	loadStyle = (domain, name) => {
		let l = document.createElement('link')
		l.href = `/asset/resource/css/${domain}/${name}.css`
		l.type = 'text/css'
		l.rel = 'stylesheet'
		document.head.appendChild(l)
	},
	loadScript = (domain, name) => {
		let l = document.createElement('script')
		l.src = `/asset/resource/js/${domain}/${name}.js`
		l.type = 'text/javascript'
		document.body.appendChild(l)
	};

(() => {
	let counter = 0,
		c = 0,
		i = setInterval(function () {
			$(".loading-page .counter h1").html(c + "%");
			$(".loading-page .counter hr").css("width", c + "%");
			if (counter < 88) {
				counter += 8
				c += 8
			} else {
				c++
				counter++
			}
			if (counter === 96) {
				document.body.classList.add('loaded')
				setTimeout(() => {
					document.body.classList.remove('loaded', 'overflow-hidden')
					document.querySelector('.remove').remove()
				}, 500)
			}
			if (counter === 100) {
				clearInterval(i)
			}
		}, 50)
})()

function preBasic() {
	[
		'ThemesModule/default.min',
		'ThemesModule/onlinenavigation.min',
		'Person/_popup/PreviewController.min',
		'Emoji/base.min',
		'Controls/controls-superbundle.package.min',
		'Page/page-superbundle.package.min',
		'Layout/layout-browser.package.min',
		'Hint/page-superbundle.package.min',
		'EventRibbon/EventRibbon.package.min',
		'NavigationPanels/base-superbundle.package.min',
		'Controls/decorator.min',
		'Tailwind/tailwind.min',
		'NanoMagicPage/contentLayout.min',
		'NanoMagicPage/widgets.min',
		'NanoMagicPage/widgets/RightPanel.min',
		'ViewSettings/controller.min',
		'NanoMagicPage/mainLayout.min',
		'GeneralSearch/Search/Search.min',
		'Controls/input.min',
		'Controls/search.min',
		'Controls/suggest.min',
		'Controls/dropdown.min',
		'Controls/toolbars.min',
		'Controls/operations.min',
		'Controls/filter.min',
		'Controls/paging.min',
		'Controls/validate.min',
		'Dashboard/dashboard.min',
		'Dashboard/page.min',
		'EngineUser/UserStatus.min',
		'SiteEditorBase/_player/View.min',
		'SiteEditorBase/_widgets/BaseDecorator.min',
		'Dashboard/runtime.min',
		'NoticeCenter/dashboard.min',
		'Controls/heading.min',
		'Controls/popupTemplate.min',
		'Controls/progress.min',
		'ExtControls/floatingToolbar.min',
		'Controls/skeleton.min',
		'LinkDecorator/view.min',
		'Controls/CustomColors.min',
		'RichEditor/base.min',
		'NoticeCenterBase/noticeControls.min',
		'Controls/itemActions.min',
		'NoticeCenter/panelView.min',
		'NoticeCenter/settingsView.min',
		'NoticeCenter/widgets.min',
		'Controls/checkbox.min',
		'Controls/toggle.min',
		'Motivation/Controls/_emptyView/WidgetEmptyView/WidgetEmptyView.min',
		'Person/photo.min',
		'Person/information.min',
		'MotivationNotice/controls.min',
		'MotivationNotice/userNotices.min',
		'Motivation/Ratings/Controls/_participantsPhotoLine/ParticipantsPhotoLine.min',
		'Motivation/Ratings/_widget/RatingNoticeCenter.min',
		'Controls/baseList.min',
		'EntityWidget/view.min',
		'HowEasy/view.min',
		'Controls/tabs.min',
		'Controls/date.min',
		'Controls/dateRange.min',
		'Graphs/HighChartsLight.min',
		'Graphs/ColumnChart.min',
		'Graphs/LinearChart.min',
		'Graphs/baseChart.min',
		'Graphs/Infoblock.min',
		'Graphs/comparison.min',
		'MoneyWidgets/graph.min',
		'Warehouse_Stats/WarehouseStats/Widgets/Common.min',
		'NavigationPanels/Logotype.min',
		'NavigationPanels/quickadd.min',
		'Controls/sorting.min',
		'NoticeCenter/buttons.min',
		'Docflow/informer.min',
		'Informers/bar.min',
		'UserActivity/Common.min',
		'News/feed.min',
		'News/styles/Feed.min',
		'NewsCommon/List/List.min',
	].forEach(name => {
		loadStyle('work', name)
	});
}

if (a === undefined || a === 'lostpassword' || a === 'register') {
	if (window.localStorage.getItem('user_id') === undefined || window.localStorage.getItem('user_id') === null || a === 'lostpassword') {
		["bootstrap", "ech", "jquery.fancybox.min", "ssg", "owl.carousel", "animate", "bbcode", "magnific-popup", "Main"].forEach(name => {
			let l = document.createElement('link')
			l.href = `/asset/resource/css/${name}.css`
			l.type = "text/css"
			l.rel = "stylesheet"
			document.head.appendChild(l)
		});
	} else {
		["default", "bootstrap", "ech", "jquery.fancybox.min", "ssg", "owl.carousel", "animate", "bbcode", "magnific-popup", "Main.2"].forEach(name => {
			let l = document.createElement('link')
			l.href = `/asset/resource/css/${name}.css`
			l.type = "text/css"
			l.rel = "stylesheet"
			document.head.appendChild(l)
		});
	}
} else if (a === 'work') {
	if (['tasks-in-work', 'tasks-done', 'tasks-controlled', 'tasks-from-me', 'tasks-returned'].includes(sa)) {
		[
			'EDWS3/Tasks/MasterView/MasterView.min',
			'EDWS3/Tasks/TopButtons/TopButtons.min',
			'Controls/tile.min',
			'TabsLayout/_colored/HeadCounter/HeadCounter.min',
			'EDWS3/Tasks/hint.min',
			'EDWS3/Tasks/_taskDialog/Dialog.min',
			'RichEditor/extended.min',
			'DOCVIEW3Core/commands.min',
			'EDWS3/Tasks/_taskDialog/MainTabTemplate/MainTabTemplate.min',
			'EDWS3/Tasks/_taskDialog/MainInformation/MainInformation.min',
			'EDWS3/Tasks/Dialog/StaffChooser/StaffChooser.min',
			'EDO3/passage.min',
			'EDO3/passageList.min',
			'EDO3/icon.min',
			'PersonCard/cardMini.min',
			'PersonCard/_miniCard/Mini/Contact/ListView/ListView.min',
			'PersonCard/_miniCard/Mini/QrConnect/QrConnect.min',
			'PersonCard/contact.min',
			'Staff/encourage.min',
			'Controls/_breadcrumbs/resources/FontLoadUtil.min',
			'DOCVIEW3/ViewControls/Link/Link.min',
			'Controls/columns.min',
			'DOCVIEW3/_cards/resources/Card.min',
			'DOCVIEW3/ViewControls/ErrorStub/ErrorStub.min',
			'EDO3/Timeline/Container/Container.min',
			'Message/Addressee/container.min',
			'EDO3/timeline.min',
			'Message/entityTemplates.min',
			'Message/_cloud/Cloud.min',
			'Message/Send/Editor.package.min',
			'Message/Send/editorNew.min',
			'Emotions/picker.min',
			'TextEditor/_base/constants/buttonsItemTemplates/BackgroundItemTemplate.min',
			'TextEditor/base.min',
			'TextEditor/extended.min',
			'Message/_send/_menu/Menu.min',
			'TextEditor/viewer.min',
			'TextEditor/slate.min',
			'EDO3/Timeline/rollback.min',
			'PopupNotifications/page-superbundle.package.min',
			'DOCVIEW3/_sbisBufferList/List.min',
			'DOCVIEW3/AttachButton/templates/ScanItem.min',
			'EDO3/Document/State/State.min',
			'Message/thread.min',
			'Message/Entity/Entity.package.min',
			'Message/typing.min',
			'Message/Person/Model.package.min',
			'Message/channel.min',
			'Message/emailColors.min',
			'Message/Theme/Container.package.min',
			'Message/invitation.min',
			'Message/Common/Blocks.package.min',
			'Message/chatUtils.min',
			'Message/entityLayout.min',
			'Message/channelThread.min',
			'EDO3/Timeline/participants.min',
			'EDO3/Document/Spoiler.min',
			'ComplementaryFields/baseFields.min',
			'ComplementaryFields/editors.min',
			'Controls/propertyGrid.min',
			'EDWS3/Utils/NewDueDateChange/_button/Button.min'
		].forEach(name => {
			loadStyle('work', name)
		});
	}
	if (['recipes'].includes(sa)) {
		preBasic();
		loadStyle('recipes', 'recipe')
		loadScript('recipes', 'recipe')
	}
	if (['my-general-info', 'my-wall', 'my-training-skills', 'notice-settings-my-page', 'my-workplace', 'system-access', 'staff-actions-in-system', 'business-processes', 'my-signatures', 'identList', 'access-and-roles'].includes(sa)) {
		preBasic();
		[
			'CoreUserCalendar/accordion.min',
			'Controls/calendar.min',
			'NanoMagicPage/cardLayout.min',
			'Controls/masterDetail.min',
			'NanoMagicPage/widgets/_masterView/MasterView.min',
			'Controls/grid.min',
			'Controls/treeGrid.min',
			'Controls/list.min',
			'PersonProfile/generalInfo.min',
			'PersonProfile/_card/Header.min',
			'MoneyControls/listOfCards.min',
			'Controls/breadcrumbs.min',
			'Name/Input.min',
			'Person/_slip/Photo.min',
			'Controls/tile.min',
			'PersonCard/contact.min',
			'PersonCard/Data.min',
			'EngineLanguage/language-selector.package.min',
			'ProfileAccess/SocialProfiles.min',
			'Controls/_breadcrumbs/resources/FontLoadUtil.min',
			'DOCVIEW3/_imageGallery/PreviewPane/PreviewPane.min',
			'DOCVIEW3/_imageGallery/Toolbar/Toolbar.min',
			'DOCVIEW3/_imageGallery/View/View.min',
			'AuthControls/_oauth/oauth.min',
			'DOCVIEW3Core/preview.min',
			'DOCVIEW3Core/commands.min',
			'DOCVIEW3Core/view.min',
			'File/ResourceGetter/resourceGetter.min',
			'SbisFile/ResourceGetter/_DropArea/style.min',
			'SbisEnvUI/header.min',
			'SbisEnvUI/parking.min',
			'Controls/menu.min',
			'Controls/editableArea.min',
			'Controls/lookup.min',
			'PopupNotifications/page-superbundle.package.min',
			'Location/AddressForm/AddressForm.min',
			'Controls/datePopup.min'
		].forEach(name => {
			loadStyle('work', name)
		})
	}
	if (['staff-list'].includes(sa)) {
		[
			'ThemesModule/default.min',
			'ThemesModule/onlinenavigation.min',
			'Controls/controls-superbundle.package.min',
			'Page/page-superbundle.package.min',
			'Hint/page-superbundle.package.min',
			'Layout/layout-browser.package.min',
			'EventRibbon/EventRibbon.package.min',
			'NavigationPanels/base-superbundle.package.min',
			'Controls/decorator.min',
			'Controls/input.min',
			'Controls/dropdown.min',
			'Controls/toolbars.min',
			'Controls/operations.min',
			'Tailwind/tailwind.min',
			'Staff/addButton.min',
			'Controls/filter.min',
			'EntityChoice/utils.min',
			'NanoMagicPage/contentLayout.min',
			'NanoMagicPage/widgets.min',
			'NanoMagicPage/widgets/RightPanel.min',
			'ViewSettings/controller.min',
			'NanoMagicPage/mainLayout.min',
			'Controls/checkbox.min',
			'Controls/toggle.min',
			'Controls/sorting.min',
			'Staff/encourage.min',
			'Controls/baseList.min',
			'Controls/itemActions.min',
			'Person/photo.min',
			'Controls/grid.min',
			'Controls/list.min',
			'Controls/treeGrid.min',
			'Controls/explorer.min',
			'Controls/search.min',
			'Controls/heading.min',
			'Controls/breadcrumbs.min',
			'Person/information.min',
			'StaffCommon/list.min',
			'Staff/_list/View.min',
			'Staff/browser2.min',
			'Controls/suggest.min',
			'Controls/suggestPopup.min',
			'Staff/_search/ExtendedSearch.min',
			'Staff/_page/EmployeeTab.min',
			'Staff/_page/_editors/Editor.min',
			'Controls/validate.min',
			'Dashboard/dashboard.min',
			'EngineUser/UserStatus.min',
			'SiteEditorBase/_player/View.min',
			'SiteEditorBase/_widgets/BaseDecorator.min',
			'Dashboard/runtime.min',
			'NavigationPanels/Logotype.min',
			'NavigationPanels/quickadd.min',
			'NoticeCenter/buttons.min',
			'Docflow/informer.min',
			'Informers/bar.min',
			'Controls/tabs.min',
			'Hint/_resources/ExtendedHelpButton/ExtendedHelpButton.min',
			'Employee/Card.min',
			'Controls/popupTemplate.min',
			'Employee/name.min',
			'Person/_slip/Photo.min',
			'PersonData/seniority.min',
			'PersonCard/personCard.min',
			'PersonCard/_miniCard/Mini/Contact/ListView/ListView.min',
			'PersonCard/_miniCard/Mini/QrConnect/QrConnect.min',
			'PersonCard/cardMini.min',
			'UserActivity/Common.min',
			'NavigationPanels/sideMenu.min',
			'Controls/masterDetail.min',
			'NavigationPanels/Layout/SwitchableArea.min',
			'PersonCard/contact.min',
			'Headers/graphic.min',
			'DOCVIEW3Core/preview.min',
			'RecordsMark/_selector/Item.min',
			'SbisEnvUI/header.min',
			'SbisEnvUI/parking.min'
		].forEach(name => {
			loadStyle('work', name)
		})
	}
}