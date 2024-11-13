import arrow from 'src/images/arrow.svg';
import styles from './ArrowButton.module.scss';
import clsx from 'clsx';

export type OnClick = () => void;

export type PropsArrowButton = {
	onClick?: OnClick; // Опциональная функция для обработки клика
	isOpen: boolean; // Состояние, открыто ли меню
};


export const ArrowButton = ({ onClick, isOpen }: PropsArrowButton) => {
	return (
		<div
			onClick={onClick}
			role='button'
			aria-label='Открыть/Закрыть форму параметров статьи'
			tabIndex={0} // Позволяет элементу получать фокус, что улучшает доступность
			className={clsx(
				styles.container,
				{ [styles.container_open]: isOpen } // Изменение класса по состоянию
			)}>
			<img
				src={arrow}
				alt='иконка стрелочки'
				className={clsx(styles.arrow, { [styles.arrow_open]: isOpen })} // Изменение класса стрелки по состоянию
			/>
		</div>
	);
};
