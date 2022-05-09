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
    title: "Выберите вид тестирования, когда доступен код приложения:",
    array: [
      {
        text: "Объемное тестирование",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Юзабилити тестирование",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Тестирование методом «белого ящика»",
        value: 1,
        id: uuidv4(),
      },
      {
        text: "Негативное тестирование",
        value: 0,
        id: uuidv4(),
      },
    ],
  },
  {
    title: "Выберите пункт, относящийся к уровню тестирования:",
    array: [
      {
        text: "Нагрузочное тестирование",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Модульное тестирование",
        value: 1,
        id: uuidv4(),
      },
      {
        text: "Тестирование методом «белого ящика»",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Системное тестирование",
        value: 0,
        id: uuidv4(),
      },
    ],
  },
  {
    title: "Выберите пункт, относящийся к степени автоматизации:",
    array: [
      {
        text: "Тестирование сборки",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Стресс-тестирование",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Тестирование безопасности",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Автоматизированное тестирование",
        value: 1,
        id: uuidv4(),
      },
    ],
  },
  {
    title: "Что из перечисленного чаще всего автоматизируется:",
    array: [
      {
        text: "Регрессионное тестирование",
        value: 1,
        id: uuidv4(),
      },
      {
        text: "Исследовательское тестирование",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Интеграционное тестирование",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Приемочное тестирование",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Модульное тестирование",
        value: 0,
        id: uuidv4(),
      },
    ],
  },
  {
    title:
      "Определить, к какому виду тестирования относится описываемая ситуация.\n" +
      "Загрузка файла с расширением «.txt« на YouTube.",
    array: [
      {
        text: "Объемное тестирование",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Юзабилити тестирование",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Функциональное тестирование",
        value: 1,
        id: uuidv4(),
      },
      {
        text: "Негативное тестирование",
        value: 0,
        id: uuidv4(),
      },
    ],
  },
  {
    title:
      "Определить, к какому виду тестирования относится описываемая ситуация.\n" +
      "Тестировщиков пригласили в проект и дали на ознакомления различную документацию, связанную с проектом.",
    array: [
      {
        text: "Приемочное тестирование",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Статическое тестирование",
        value: 1,
        id: uuidv4(),
      },
      {
        text: "Юзабилити тестирование",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Тестирование взаимодействия",
        value: 0,
        id: uuidv4(),
      },
    ],
  },
];

function First() {
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

export default First;
