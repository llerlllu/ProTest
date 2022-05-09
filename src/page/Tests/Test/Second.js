import React, { useState } from "react";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import { v4 as uuidv4 } from "uuid";
import Button from "@mui/material/Button";

import "../style.scss";

const arrayQuestions = [
  {
    title: "Что такое негативное тестирование?",
    array: [
      {
        text: "Вид тестирования программного обеспечения, состоящий из набора тестов, направленных на проверку работы наиболее важных функций",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Тестирование системы со значительной нагрузкой в течение значительного периода времени, чтобы выяснить, как система ведет себя при длительном использовании",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Вид тестирования программного обеспечения, который проверяет, что программное обеспечение, которое было ранее разработано и протестировано, все еще работает правильно после того, как оно было изменено или взаимодействовало с другим ПО",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Вид тестирования который гарантирует, что ваше приложение может корректно обрабатывать неверный ввод или неожиданное поведение пользователя",
        value: 1,
        id: uuidv4(),
      },
      {
        text: "Вид тестирования, который подтверждает, что новая версия продукта будет работать со старой версией",
        value: 0,
        id: uuidv4(),
      },
    ],
  },
  {
    title:
      "Этап процесса тестирования ПО, на котором проектируются и создаются тест-кейсы, в соответствии с определёнными ранее критериями качества и целями тестирования.",
    array: [
      {
        text: "Тестовое покрытие",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Контроль качества",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Тест-дизайн",
        value: 1,
        id: uuidv4(),
      },
      {
        text: "Баг",
        value: 0,
        id: uuidv4(),
      },
    ],
  },
  {
    title: "Что такое регрессионное тестирование?",
    array: [
      {
        text: "Проверка того, что старые ошибки исправлены",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Тестирование, которое может быть выполнено только при проверке функциональных багов ",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Проверка того, что старые ошибки исправлены и не повлекли появления новых",
        value: 1,
        id: uuidv4(),
      },
    ],
  },
  {
    title: "Что такое статическое тестирование?",
    array: [
      {
        text: "Кликать один и тот же элемент",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Проверка графического интерфейса",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Проверка, когда код не выполняется",
        value: 1,
        id: uuidv4(),
      },
      {
        text: "Проверка всех аспектов программы за постоянное время",
        value: 0,
        id: uuidv4(),
      },
    ],
  },
  {
    title: "Чтобы преодолеть «парадокс пестицидов», нужно:",
    array: [
      {
        text: "Тест-кейсы следует регулярно пересматривать и обновлять",
        value: 1,
        id: uuidv4(),
      },
      {
        text: "Среда тестирования должна быть изменена для каждой итерации теста",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Все тесты должны быть автоматизированы",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Не стоит даже пытаться избежать парадокса пестицидов",
        value: 0,
        id: uuidv4(),
      },
    ],
  },
  {
    title: "Что такое баг в тестировании?",
    array: [
      {
        text: "Жук в переводе в английского",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Дефект(ошибка) программного обеспечения",
        value: 1,
        id: uuidv4(),
      },
      {
        text: "Крошечный багор",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Секретный термин",
        value: 0,
        id: uuidv4(),
      },
    ],
  },
];

function Second() {
  const [activeStep, setActiveStep] = useState(0);
  const [current, setCurrent] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const onClickNext = () => {
    setActiveStep(activeStep + 1);
    setCorrectAnswers(correctAnswers + current);
    setCurrent(0);
  };

  const onClickRadio = (value) => {
    setCurrent(value);
  };

  const onClickAgain = () => {
    setActiveStep(0);
    setCorrectAnswers(0);
    setCurrent(0);
  };

  return (
    <div>
      <Stepper activeStep={activeStep} alternativeLabel>
        {arrayQuestions.map((item, index) => (
          <Step key={index}>
            <StepLabel />
          </Step>
        ))}
      </Stepper>
      <div className="item">
        {activeStep < arrayQuestions.length ? (
          <>
            <FormControl>
              <div className="item__title">
                {arrayQuestions[activeStep].title}
              </div>
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <div className="item__checkbox">
                  {arrayQuestions[activeStep].array.map((item, index) => (
                    <FormControlLabel
                      value={item.id}
                      key={item.text + index}
                      control={
                        <Radio onChange={() => onClickRadio(item.value)} />
                      }
                      label={item.text}
                    />
                  ))}
                </div>
              </RadioGroup>
              <div className="item__button">
                <Button size="large" variant="outlined" onClick={onClickNext}>
                  Дальше
                </Button>
              </div>
            </FormControl>
          </>
        ) : (
          <>
            <div className="item__title">
              Вы ответили правильно на {correctAnswers} вопросов из{" "}
              {arrayQuestions.length}
            </div>
            <div className="item__button">
              <Button size="large" variant="outlined" onClick={onClickAgain}>
                Заново
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Second;
