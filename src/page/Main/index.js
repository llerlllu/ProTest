import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { MainLayout } from "../../components/layout";
import image1 from "../../img/image1.jpg";
import image2 from "../../img/image2.jpg";
import image3 from "../../img/image3.jpg";
import image4 from "../../img/image4.jpg";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./style.scss";

function Main() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <MainLayout>
      <div className="mainPage">
        <div className="mainPage__body">
          <div className="carousel">
            <Carousel>
              <div>
                <img src={image1} />
                <div className="carousel__text">Узнавай новое</div>
              </div>
              <div>
                <img src={image2} />
                <div className="carousel__text">Проходи тесты</div>
              </div>
              <div>
                <img src={image3} />
                <div className="carousel__text">Читай блог</div>
              </div>
              <div>
                <img src={image4} />
                <div className="carousel__text">Развивайся</div>
              </div>
            </Carousel>
          </div>
          <div className="selectBlock">
            <div className="selectBlock__body">
              <Accordion
                expanded={expanded === "panel1"}
                onChange={handleChange("panel1")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>О нас</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Сайт реализован студенткой в целях дипломной работы. ProTEst
                    - сайт для начинающих тестироващиков. Наш сайт позволяет
                    изучить теоритический материал и закрепить знания в виде
                    тестовых заданий.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel2"}
                onChange={handleChange("panel2")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>Зачем</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Сайт позволяет бесплатно ознакомиться с профессией ручного
                    тестирования, а так же прочитать мой блог, в котором я
                    делюсь своими мыслями и опытом.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel3"}
                onChange={handleChange("panel3")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Typography>Тестирование</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Тестирование вкдючает в себя проверку соответствия между
                    реальным и ожидаемым поведением программы, осуществляемая на
                    конечном наборе тестов, выбранном определенным образом.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion
                expanded={expanded === "panel4"}
                onChange={handleChange("panel4")}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel4a-content"
                  id="panel4a-header"
                >
                  <Typography>Цель тестирования</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Нахождение ошибок в программе до того, как их найдут
                    пользователи.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Main;
