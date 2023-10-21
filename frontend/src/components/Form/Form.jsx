import { useState } from 'react';
import css from './Form.module.css';
import { useEffect } from 'react';
import { Container } from './Container/Container';

const blogers = [
  'від Талпи Насті',
  'від Ксюші Манекен',
  'від Тані Коряк',
  'від Даріани',
  'від Галі Полудневич',
  'від Ані Алхім',
  'від Соні',
  'від Андріани',
  'від Марини Марусенко',
  'на Facebook',
];

export const Form = () => {
  const [copied, setCopied] = useState(false);
  // const [sexLeft, setSexLeft] = useState('залишала');
  const [jobType, setJobType] = useState('Оператор чату');
  const [blogerName, setBlogerName] = useState(blogers[0]);
  const [message, setMessage] = useState(`Вітаю👋
Мене звати Анна. Ви раніше залишали заявку на вакансію «${jobType}» за посиланням ${blogerName}.

Якщо актуально, перейдіть до нашого бота @dating_translators_bot, та напишіть, будь ласка, будь-яке повідомлення🙏
Буду чекати на Ваше повідомлення!`);

  useEffect(() => {}, []);

  useEffect(() => {
    setMessage(`Вітаю👋
Мене звати Анна. Ви раніше залишали заявку на вакансію «${jobType}» за посиланням ${blogerName}.

Якщо актуально, перейдіть до нашого бота @dating_translators_bot, та напишіть, будь ласка, будь-яке повідомлення🙏
Буду чекати на Ваше повідомлення!`);
  }, [blogerName, jobType]);

  // const changeSex = e => {
  //   setSexLeft(e.target.value);
  // };

  const changePosition = e => {
    setJobType(e.target.value);
  };

  const changeBloger = e => {
    setBlogerName(e.target.value);
  };

  const onCopy = () => {
    navigator.clipboard.writeText(message);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <Container>
      <div className={css.form}>
        <div className={css.inputsWrapper}>
          {/*         <div>
          <label className={css.options}>
            <input
              type="radio"
              name="sex"
              onChange={changeSex}
              value="залишав"
            />
            <span>Чоловік</span>
          </label>
          <label className={css.options}>
            <input
              type="radio"
              name="sex"
              defaultChecked
              onChange={changeSex}
              value="залишала"
            />
            <span>Жінка</span>
          </label>
        </div> */}
          <div>
            <label className={css.options}>
              <input
                type="radio"
                name="position"
                defaultChecked
                onChange={changePosition}
                value="Оператор чату"
              />
              <span>Оператор чату</span>
            </label>
            <label className={css.options}>
              <input type="radio" name="position" onChange={changePosition} value="Стрімер" />
              <span>Стрімер</span>
            </label>
          </div>
        </div>

        <div className={css.textWrapper}>
          <textarea value={message} className={css.textarea} onChange={() => null} />
          <div className={css.blogerWrapper}>
            {' '}
            {blogers.map((bloger, idx) => (
              <div key={bloger}>
                <label className={css.options}>
                  <input
                    type="radio"
                    name="bloger"
                    defaultChecked={idx === 0}
                    onChange={changeBloger}
                    value={bloger}
                  />
                  <span>{bloger}</span>
                </label>
              </div>
            ))}
          </div>
        </div>

        <button type="button" onClick={onCopy} className={css.btn}>
          Copy
        </button>
        {copied && <p className={css.copied}>Скопировано!</p>}
      </div>
    </Container>
  );
};
