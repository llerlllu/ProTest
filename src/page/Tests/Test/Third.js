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
    title: "Что такое тест-кейс?",
    array: [
      {
        text: "Список повторяющихся проверок",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Набор определенных шагов, по которым проверяется функциональность системы",
        value: 1,
        id: uuidv4(),
      },
    ],
  },
  {
    title: "Что такое чек-лист?",
    array: [
      {
        text: "Один из фундаментальных элементов тестирования ПО. Он состоит из набора тестов, по аналогии с тестовыми случаями, но имеет ряд сильных отличий",
        value: 1,
        id: uuidv4(),
      },
      {
        text: "Список повторяющихся проверок",
        value: 0,
        id: uuidv4(),
      },
    ],
  },
  {
    title: "Что такое чит-лист?",
    array: [
      {
        text: "Единый набор страниц, на котором вводятся данные",
        value: 0,
        id: uuidv4(),
      },
      {
        text: "Список повторяющихся проверок",
        value: 1,
        id: uuidv4(),
      },
    ],
  },
  {
    title: "Что такое тест-дизайн?",
    array: [
      {
        text: "Этап процесса тестирования ПО, на котором проектируются и создаются тестовые случаи в соответствии с определёнными ранее критериями качества и целями тестирования",
        value: 1,
        id: uuidv4(),
      },
      {
        text: "Метрика оценки качества тестирования, представляющая из себя плотность поерытия тестами требований либо исполнения кода",
        value: 0,
        id: uuidv4(),
      },
    ],
  },
  {
    title: "Что такое тестовый план?",
    array: [
      {
        text: "Документ, описывающий масштаб, подход, ресурсы и график тестирования, в котором определены тестовые элементы, отдельные части функционала, тестовые задания, специалисты, которые будут проводить конкретные тесты, и любые риски, требующие дополнительного планирования",
        value: 1,
        id: uuidv4(),
      },
      {
        text: "Стандартизированная методика измерения, предназначенная для диагностики свойств или состояний при решении практических задач",
        value: 0,
        id: uuidv4(),
      },
    ],
  },
];

function Third() {
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

export default Third;
