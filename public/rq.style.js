document.addEventListener('DOMContentLoaded', async function () {
	let paths = window.location.pathname.split('/').filter(el => el != ''),
		a = paths != undefined ? paths.splice(0, 1)[0] : undefined,
		sa = paths != undefined ? paths.join('/') : undefined,
		loadStyle = (domain, name) => {
			let l = document.createElement('link')
			l.href = `/asset/resource/css/${domain}/${name}.css`
			l.type = 'text/css'
			l.rel = 'stylesheet'
			document.head.appendChild(l)
		};
	if (a === undefined) {
		if (window.localStorage.getItem('user_id') == undefined) {
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
		loadStyle('work', 'Page/base.min');
		['TensorFont', 'TensorFontBold', 'cbuc-icons', 'cbuc-icons24', 'MaisonNeue', 'MaisonNeueBold', 'Accordion-Font', 'Accordion-Font-20', 'MaisonNeueExtendedDemi', 'MaisonNeueExtendedBook'].forEach(name => {
			let l = document.createElement('link')
			l.setAttribute('data-vdomignore', 'true')
			l.rel = 'preload'
			l.as = 'font'
			l.href = `/asset/resource/fonts/${name}.woff2`
			l.type = 'font/woff2'
			l.crossOrigin = 'anonymous'
			document.head.appendChild(l)
		});
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
		document.body.classList.add('ws-is-chrome', 'ws-is-windows-10', 'ws-is-desktop-platform', 'zIndex-context', 'ws-is-no-touch', 'ws-is-no-drag', 'Application-body', 'controls_theme-default', 'ru', 'ru-RU', 'nanomagicPage-MainLayout__body', 'ws-is-adaptive', 'undefined', 'ws-is-hover');
		document.body.dir = 'ltr';
		let r = document.getElementById('nanomagic-content');
		r.style.width = '100%';
		r.style.height = '100%';
		r.style.display = 'contents';
		if (['tasks-in-work', 'tasks-done', 'tasks-controlled', 'tasks-from-me', 'tasks-returned'].includes(sa)) {
			[
				'EDWS3/Tasks/MasterView/MasterView.min',
				'EDWS3/Tasks/Tabs/Tabs.min',
				'EDWS3/Tasks/Registry/InWork/InWork.min',
				'EDWS3/Tasks/MasterDetail/MasterDetail.min',
				'Controls/masterDetail.min',
				'EDO3/actions.min',
				'EntityChoice/utils.min',
				'EDO3/Marks/Styles.min',
				'EDO3/browser.min',
				'EDO3Core/browserTemplates.min',
				'Message/search.min',
				'Controls/grid.min',
				'EDWS3/Tasks/MasterView/MasterView.min',
				'Controls/list.min',
				'Controls/treeGrid.min',
				'EDWS3/Tasks/TopButtons/TopButtons.min',
				'EDWS3/Tasks/_transfer/Button.min',
				'EDWS3/Tasks/Registry/Registry.min',
				'Hint/_resources/ExtendedHelpButton/ExtendedHelpButton.min',
				'Controls/tile.min',
				'TabsLayout/_colored/HeadCounter/HeadCounter.min',
				'Controls/filterPanelPopup.min',
				'Controls/filterPopup.min',
				'EDWS3/Tasks/hint.min',
				'EDWS3/Tasks/_taskDialog/Dialog.min',
				'EDO3/document.min',
				'EDO3/Document/mainTabHeader.min',
				'EDO3/toolbar.min',
				'ExtControls/buttons.min',
				'Controls/editableArea.min',
				'SbisFile/ResourceGetter/_DropArea/style.min',
				'File/ResourceGetter/resourceGetter.min',
				'EDO3/Document/_ruleChanger/RuleChanger.min',
				'Controls/menu.min',
				'EDO3/Document/Sticker.min',
				'Controls/lookup.min',
				'RichEditor/extended.min',
				'DOCVIEW3Core/commands.min',
				'EDWS3/Tasks/_taskDialog/MainTabTemplate/MainTabTemplate.min',
				'EDWS3/Tasks/_taskDialog/MainInformation/MainInformation.min',
				'EDO3/attachments.min',
				'DOCVIEW3Core/fullviewer.min',
				'DOCVIEW3Core/list.min',
                'DOCVIEW3Core/preview.min',
                'DOCVIEW3Core/viewModeSwitcher.min',
                'DOCView3Core/Fullviewer/_tableView/View.min',
                'Controls/explorer.min',
                'DOCVIEW3Core/view.min',
                'SbisEnvUI/header.min',
                'SbisEnvUI/parking.min',
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
				'EDO3/filter.min',
				'Layout/Selector.min',
				'EDO3/Rule/Phase/Chooser.min',
				'EDO3/Rule/Pass/Chooser.min',
				'Addressee/field.min',
				'EDWS3/Docs/Contracts/SelectorButton/SelectorButton.min',
				'EDO3/Timeline/participants.min',
				'EDO3/Document/Spoiler.min',
				'Controls/spoiler.min',
				'ComplementaryFields/baseFields.min',
				'ComplementaryFields/editors.min',
				'Controls/propertyGrid.min',
				''
			].forEach(name => {
				loadStyle('work', name)
			});
		}
	}
})