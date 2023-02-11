import React from 'react'
import { HeadProvider, Title } from 'react-head'
import { action, subaction } from './index.js'
import MainPage from './pages/Main.js'
import WorkPage from './pages/Work.js'

class App extends React.Component {
	render() {
		if (action === null) {
			return (
				<>
					<HeadProvider>
						<Title>NanoMagic RPG | LoliLand.ru</Title>
					</HeadProvider>
					<MainPage />
				</>
			)
		}
		if (action === 'work') {
			if ([''].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['tasks-in-work', 'tasks-controlled', 'tasks-done'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Задачи на мне | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['tasks-from-me', 'tasks-returned'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>От меня | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['tasks-process', 'tasks-stat', 'tasks-by-staff'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Задачи по сотрудникам | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['dialogs', 'people', 'contacts'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Контакты | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['staff-list', 'staff-posts', 'staff-statistic-new', 'staff-structure', 'staff-verification'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Сотрудники | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['documents-all'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Документы | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['contact-center'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Контакт-центр | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['support-service'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Сводно | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['support-service_clients'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Клиенты | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['support-service_statistic'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Статистика | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['support-service_state'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Текущее состояние | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['support-service_types'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>По видам | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['support-service_claims'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Обращения | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['my-general-info'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>О себе | Мой профиль | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['my-wall'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Стена | Мой профиль | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['my-training-skills'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Обучение и навыки | Мой профиль | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['notice-settings-my-page'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Уведомления | Мой профиль | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['mysystem-access'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Доступ в систему | Мой профиль | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['my-general-info'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title> | Мой профиль | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
			if (['settings-interface', 'security-settings'].includes(subaction)) {
				return (
					<>
						<HeadProvider>
							<Title>Настройки | Рабочая зона | NanoMagic RPG | LoliLand.ru</Title>
						</HeadProvider>
						<WorkPage />
					</>
				)
			}
		}
		if (action === 'guides') {
			return (
				<>
					<HeadProvider>
						<Title>Guide Page | NanoMagic RPG | LoliLand.ru</Title>
					</HeadProvider>
				</>
			)
		}
		if (action === 'prices') {
			return (
				<>
					<HeadProvider>
						<Title>Price Page | NanoMagic RPG | LoliLand.ru</Title>
					</HeadProvider>
				</>
			)
		}
		if (action === 'forum') {
			return (
				<>
					<HeadProvider>
						<Title>Forum | NanoMagic RPG | LoliLand.ru</Title>
					</HeadProvider>
				</>
			)
		}
	}
}

export default App;
