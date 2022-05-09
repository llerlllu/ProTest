import React, { useState } from "react";

import { MainLayout } from "../../components/layout";
import image5 from "../../img/image5.png";
import image6 from "../../img/image6.png";
import image7 from "../../img/image7.png";
import image8 from "../../img/image8.png";

import "./style.scss";

const array = [
  {
    img: image6,
    title: "Полезные ресурсы",
    arr: [
      "Heisenbug. YouTube канал от команды конференции Heisenbug ",
      "Видеолекции, курс тестирования от mail.ru. Плейлисту на YouTube уже пять лет, но он все еще полезен начинающим тестировщикам.",
      "Форум тестировщиков. Настоящий форум с ветками обсуждения.",
      "Radio QA. Сайт с подкастами для тестировщиков.",
    ],
  },
  {
    img: image5,
    title: "Как писать тест-кейс?",
    arr: [
      "1. Понять точное название, краткое и понятное, ничего лишнего",
      "2. Описать подробно каждый шаг",
      "3. Ввести данные, которые понадобятся при прохождении сценария",
      "4. Расписать фактический результат и ожидаемый",
    ],
  },
  {
    img: image8,
    title: "Что поможет уменьшить стресс?",
    arr: [
      "Распределение времени или всем известный тайм-менеджмент. Подумайте о том, как вовремя добраться к офису. Приедьте за 5-10 минут до начала рабочего дня.",
      "Внешность. Оденьтесь так, как ваши коллеги. Спросите своего менеджера, есть ли какой-то дресс-код."],
  },
  {
    img: image7,
    title: "Чего же ожидать?",
    arr: [
      "Менеджер покажет вам ваше новое рабочее место. График работы, перерывы тоже обсуждаются. ",
      "Вас знакомят с командой. Постарайтесь запомнить роли своих коллег и понять, к кому можно обращаться.",
      "Передача документации. Это своего рода база знаний, которая поможет Вам понять лучше фронт проделанной работы и скорее влиться в рабочий процесс.",
    ],
  },
  {
    img: image7,
    title: "На что еще обратить внимание",
    arr: [
      "Если у вас спросили, что такое тестирование, то не говорите, что это поиск ошибок. Это только часть тестирования. Главное проверить соответствие продукта запросу клиента.",
      "От вас ждут понимания принципов работы и конкретных определений. Список из более чем 100 вопросов, которые работодатель может задать тестировщику.",
    ],
  },
  {
    img: image7,
    title: "Небольшие советы",
    arr: [
      "Знание английского обязательно, с этим легче войти в IT",
      "Изучите Postman",
      "Знание системы контроля версий и SQL приветствуется",
    ],
  },
];

function Blog() {
  const [paginatination, setPagination] = useState(3);

  return (
    <MainLayout>
      <div className="blog">
        <div className="buttonBlock">
          <button
            disabled={!(paginatination - 3)}
            className="button"
            onClick={() => {
              setPagination(paginatination - 3);
            }}
          >
            {"<"}
          </button>
          <button
            className="button"
            disabled={paginatination + 1 > array.length}
            onClick={() => {
              setPagination(paginatination + 3);
            }}
          >
            {">"}
          </button>
        </div>

        <div className="grid">
          {array.map(
            (item, index) =>
              index > paginatination - 4 &&
              index < paginatination && (
                <div className="grid__item">
                  <div>
                    <img className="grid__image" src={item.img} />
                    <div className="grid__title">{item.title}</div>
                    <div className="grid__couner">
                      {item.arr.map((el) => (
                        <div className="grid__text">{el}</div>
                      ))}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>
      </div>
    </MainLayout>
  );
}

export default Blog;
