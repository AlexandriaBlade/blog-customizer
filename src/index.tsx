import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';
import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import './styles/index.scss';
import styles from './styles/index.module.scss';

// Интерфейс для пользовательских CSS-переменных
interface CustomCSSProperties extends CSSProperties {
	'--font-family'?: string;
	'--font-size'?: string;
	'--font-color'?: string;
	'--container-width'?: string;
	'--bg-color'?: string;
}

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [formOpen, setFormOpen] = useState(false);

	// Переключатель для открытия/закрытия формы
	const toggler = () => setFormOpen((prev) => !prev);

	return (
		<div className={clsx(styles.main)}>
			<ArticleParamsForm formOp={formOpen} onToggle={toggler} />
			<Article onClick={() => setFormOpen(false)} />
		</div>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
