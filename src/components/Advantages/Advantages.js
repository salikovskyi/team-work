import css from './Advantages.module.css'

export default function Advantages() {

    return (
        <div className={css.advantages_section}>
            <div className='container'>
            <h2 className={css.advantages_title}>Наші переваги</h2>
            <ul  className={css.advantages_list}>
                <li className={css.advantages_item}>
                    <p className={css.advantages_number}>01</p>
                    <div className={css.advantages_descr}>
                        <h3 className={css.advantages_caption}>Мобільність</h3>
                        <p className={css.advantages_descr_caption}>Проводимо зустрічі на об`єктах в затишних закладах Києва</p>
                    </div>
                </li>
                <li className={css.advantages_item}>
                    <p className={css.advantages_number}>02</p>
                    <div className={css.advantages_descr}>
                        <h3 className={css.advantages_caption}>Надійність</h3>
                        <p className={css.advantages_descr_caption}>Система нашої роботи зосереджена на якості та термінах завершення проекту</p>
                    </div>
                </li>
                <li className={css.advantages_item}>
                    <p className={css.advantages_number}>03</p>
                    <div className={css.advantages_descr}>
                        <h3 className={css.advantages_caption}>Якість</h3>
                        <p className={css.advantages_descr_caption}>Виготовляємо виключно з перевірених європейських брендів</p>
                    </div>
                </li>
                <li className={css.advantages_item}>
                    <p className={css.advantages_number}>04</p>
                    <div className={css.advantages_descr}>
                        <h3 className={css.advantages_caption}>Професіоналізм</h3>
                        <p className={css.advantages_descr_caption}>Наша команда - це клуб професіоналів, об`єднаних в одній компанії</p>
                    </div>
                </li>
                <li className={css.advantages_item}>
                    <p className={css.advantages_number}>05</p>
                    <div className={css.advantages_descr}>
                        <h3 className={css.advantages_caption}>Вигідність</h3>
                        <p className={css.advantages_descr_caption}>Ми відмовились від шоу-руму та офісу на користь вартості та мобільності</p>
                    </div>
                </li>
            </ul>
            </div>
        </div>
    )
}