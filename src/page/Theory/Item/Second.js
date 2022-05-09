import React from "react";

function Second() {
  return (
    <div className="item">
      <div className="item__text">
        Жизненный цикл ПО - это непрерывный процесс, который начинается с
        момента принятия решения о необходимости его создания и заканчивается в
        момент его полного изъятия из эксплуатации.
      </div>

      <div className="item__title">Методологии разработки ПО</div>
      <div className="item__text">
        Методология - это система принципов, а также совокупность идей, понятий,
        методов, способов и средств, определяющих стиль разработки ПО.
      </div>
      <div className="item__text">
        Методология представляет собой реализацию стандарта разработки. Сами
        стандарты лишь говорят, о том, что должно быть, оставляя свободу выбора
        и адаптации под реальные условия. Методология определяет, как будет
        выполняться разработка. Существует много успешных методологий создания
        ПО. Выбор конкретной методологии зависит от размера команды, от
        специфики и сложности проекта, от стабильности и зрелости процессов в
        компании, от личных качеств сотрудников и от предпочтений заказчика.
      </div>

      <div className="item__title">Каскадная модель</div>
      <div className="item__text">
        Каскадная модель (Waterfall model, модель «Водопад«) является одной из
        самых старых, упоминается с 1970 года. Модель разбивает жизненный цикл
        ПО на стадии: проектирование, дизайн, кодирование, тестирование,
        поддержка. Каждая стадия должна завершиться до начала следующей.
      </div>
      <div className="item__text">
        Преимущества применения каскадного подхода:
      </div>
      <div className="item__subtext">
        ● На каждом этапе формируется законченный набор проектной документации,
        отвечающий критериям полноты и согласованности;
      </div>
      <div className="item__subtext">
        ● Выполняемые в логической последовательности этапы работ позволяют
        планировать сроки завершения всех работ и соответствующие затраты
        Каскадный подход хорошо зарекомендовал себя при построении ПО, для
        которого в самом начале разработки можно достаточно точно и полно
        сформулировать все требования, при этом разработчики могут реализовать
        ПО как можно лучше, с технической точки зрения. В эту категорию попадают
        сложные расчетные системы, системы реального времени и другие подобные
        задачи. Однако в процессе использования этого подхода обнаружился ряд
        недостатков. Один из самых важных связан с тем, что реальный процесс
        создания ПО никогда полностью не укладывался в такую жёсткую схему. В
        процессе создания ПО постоянно возникала потребность в возврате к
        предыдущим этапам и уточнении или пересмотре ранее принятых решений.
        Однако, имея обратные связи с каждым предыдущим этапом жизненного цикла,
        возрастают затраты на разработку, возможно 10-кратное увеличение.
      </div>

      <div className="item__title">
        V-модель (разработка через тестирование)
      </div>
      <div className="item__text">
        Основной принцип V-образной модели заключается в том, что детализация
        проекта возрастает при движении слева направо, одновременно с течением
        времени, и ни то, ни другое не может повернуть вспять. Итерации в
        проекте производятся по горизонтали, между левой и правой сторонами
        буквы. V-модель унаследовала структуру «шаг за шагом« от каскадной
        модели, задачи разработки идут сверху вниз по левой стороне буквы V, а
        задачи тестирования — вверх по правой стороне буквы V. Внутри V
        проводятся горизонтальные линии, показывающие, как результаты каждой из
        фаз разработки влияют на развитие системы тестирования на каждой из фаз
        тестирования. Модель базируется на том, что приёмо-сдаточные испытания
        основываются, прежде всего, на требованиях, системное тестирование — на
        требованиях и архитектуре, комплексное тестирование — на требованиях,
        архитектуре и интерфейсах, а компонентное тестирование — на требованиях,
        архитектуре, интерфейсах и алгоритмах.
      </div>
      <div className="item__text">
        V-модель применима к системам, которым особенно важно бесперебойное
        функционирование. Например, прикладные программы в клиниках для
        наблюдения за пациентами, интегрированное ПО для механизмов управления
        аварийными подушками безопасности в транспортных средствах и так далее.
        Особенностью модели можно считать то, что она направлена на тщательную
        проверку и тестирование продукта, находящегося уже на первоначальных
        стадиях проектирования. Стадия тестирования проводится одновременно с
        соответствующей стадией разработки, например, во время кодирования
        пишутся модульные тесты.
      </div>

      <div className="item__title">Инкрементная модель</div>
      <div className="item__text">
        В инкрементной модели полные требования к системе делятся на различные
        сборки. Терминология часто используется для описания поэтапной сборки
        ПО. Имеют место несколько циклов разработки, и вместе они составляют
        жизненный цикл «мульти-водопад». Цикл разделён на более мелкие легко
        создаваемые модули. Каждый модуль проходит через фазы определения
        требований, проектирования, кодирования, внедрения и тестирования.
        Процедура разработки по инкрементной модели предполагает выпуск на
        первом большом этапе продукта в базовой функциональности, а затем уже
        последовательное добавление новых функций, так называемых «инкрементов».
        Процесс продолжается до тех пор, пока не будет создана полная система.
      </div>

      <div className="item__title">
        Agile модель (гибкая методология разработки)
      </div>
      <div className="item__text">
        В «гибкой« методологии разработки после каждой итерации заказчик может
        наблюдать результат и понимать, удовлетворяет он его или нет. Это одно
        из преимуществ гибкой модели. К её недостаткам относят то, что из-за
        отсутствия конкретных формулировок результатов сложно оценить
        трудозатраты и стоимость, требуемые на разработку. Экстремальное
        программирование (XP) является одним из наиболее известных применений
        гибкой модели на практике. В основе гибкой методологии лежат
        непродолжительные ежедневные встречи — Scrum и регулярно повторяющиеся
        собрания (раз в неделю, раз в две недели или раз в месяц), которые
        называются Sprint. На ежедневных совещаниях участники команды обсуждают:
      </div>
      <div className="item__subtext">
        ● отчёт о проделанной работе с момента последнего Scrum’a;
      </div>
      <div className="item__subtext">
        ● список задач, которые сотрудник должен выполнить до следующего
        собрания;
      </div>
      <div className="item__subtext">
        ● затруднения, возникшие в ходе работы.
      </div>
      <div className="item__text">
        Методология подходит для больших или нацеленных на длительный жизненный
        цикл проектов, постоянно адаптируемых к условиям рынка. Соответственно,
        в процессе реализации требования изменяются.
      </div>

      <div className="item__title">Итеративная (итерационная) модель</div>
      <div className="item__text">
        Итерационная модель жизненного цикла не требует для начала полной
        спецификации требований. Вместо этого создание начинается с реализации
        части функционала, становящейся базой для определения дальнейших
        требований. Этот процесс повторяется. Версия может быть не идеальна,
        главное, чтобы она работала. Понимая конечную цель, команда стремимся к
        ней так, чтобы каждый шаг был результативен, а каждая версия —
        работоспособна. На диаграмме показана итерационная «разработка» Мона
        Лизы. Как видно, в первой итерации есть лишь набросок Джоконды, во
        второй — появляются цвета, а третья итерация добавляет деталей,
        насыщенности и завершает процесс. В инкрементной же модели функционал
        продукта наращивается по кусочкам, продукт составляется из частей. В
        отличие от итерационной модели, каждый кусочек представляет собой
        целостный элемент.
      </div>

      <div className="item__title">Спиральная модель</div>
      <div className="item__text">
        Спиральная модель разработки ПО делает упор на начальные этапы ЖЦ:
        анализ и проектирование. На этих этапах реализуемость технических
        решений проверяется путём создания прототипов. Каждый виток спирали
        соответствует созданию фрагмента или версии ПО, на нём уточняются цели и
        характеристики проекта, определяется его качество и планируются работы
        следующего витка спирали. Таким образом углубляются и последовательно
        конкретизируются детали проекта и в результате выбирается обоснованный
        вариант, который доводится до реализации. Разработка итерациями отражает
        объективно существующий спиральный цикл создания системы. Неполное
        завершение работ на каждом этапе позволяет переходить на следующий этап,
        не дожидаясь полного завершения работы на текущем. При итеративном
        способе разработки недостающую работу можно будет выполнить на следующей
        итерации. Главная же задача – как можно быстрее показать пользователям
        системы работоспособный продукт, тем самым активизируя процесс уточнения
        и дополнения требований.
      </div>
      <div className="item__text">
        Спиральная модель предполагает 4 этапа для каждого витка:
      </div>
      <div className="item__subtext">1. планирование;</div>
      <div className="item__subtext">2. анализ рисков;</div>
      <div className="item__subtext">3. конструирование;</div>
      <div className="item__subtext">
        4. оценка результата и при удовлетворительном качестве переход к новому
        витку.
      </div>
      <div className="item__text">
        Эта модель не подойдёт для малых проектов, она резонна для сложных и
        дорогих, например, таких, как разработка системы документооборота для
        банка, когда каждый следующий шаг требует большего анализа для оценки
        последствий, чем программирование.
      </div>

      <div className="item__title">Цикл тестирования ПО</div>
      <div className="item__text">Этапы тестирования</div>
      <div className="item__text">
        Работа тестировщика не заключается просто в выполнении определённого
        набора тестов, оповещения команды об ошибках в ПО. Тестировщик
        занимается и умственным трудом, порой не меньше разработчиков.
      </div>

      <div className="item__title">1. Анализ требований</div>
      <div className="item__text">
        На этапе анализа требований тестировщик знакомится с ПО. Узнает для чего
        оно нужно. Знакомится с требованиями и вникает в проект.
      </div>
      <div className="item__text">
        На этапе анализа требований происходит тестирование требований и
        уточнение требований. После того как вопросы по требованиям и
        функциональности ПО решены, происходит переход на этап планирования
        тестирования.
      </div>

      <div className="item__title">2. Планирование тестирования</div>
      <div className="item__text">
        Этап планирование направлен на обдумывание того, что мы будем
        тестировать. Какой функциональностью обладает ПО.
      </div>
      <div className="item__text">Планирование тестирование состоит из:</div>
      <div className="item__subtext">● Создания тест-плана;</div>
      <div className="item__subtext">
        ● Продумывания стратегии тестирования;
      </div>
      <div className="item__subtext">● Оценки трудозатрат на тестирование;</div>
      <div className="item__subtext">
        ● Прогнозирование сроков и составление графика проведения тестирования;
      </div>
      <div className="item__subtext">● Деятельности по оценке рисков;</div>
      <div className="item__subtext">
        ● Определение используемых инструментов.
      </div>
      <div className="item__text">
        При создании тест-плана могут использоваться существующие шаблоны (RUP,
        IEEE 829) или свой собственный, например принятый в компании. В любом
        виде тест-план должен отвечать на следующие вопросы:
      </div>
      <div className="item__subtext">
        ● Что надо тестировать(объект тестирования: система, приложение,
        оборудование);
      </div>
      <div className="item__subtext">
        ● Что будете тестировать(список функций и компонентов тестируемой
        системы);
      </div>
      <div className="item__subtext">
        ● Как будете тестировать (стратегия тестирования – виды тестирования и
        их применение по отношению к тестируемому объекту);
      </div>
      <div className="item__subtext">
        ● Тестовые окружения, на которых необходимо проверять программный
        продукт;
      </div>
      <div className="item__subtext">
        ● Когда будете тестировать (последовательность проведения работ:
        подготовка, тестирование, анализ результатов, учёт зависимостей тестовых
        активностей от задач разработки и смежных групп);
      </div>
      <div className="item__subtext">
        ● Риски и стратегии по их разрешению. Если тест-план задаёт общую схему,
        по которой процесс тестирования будет строиться, то стратегия уточняет
        его и содержит информацию
      </div>
      <div className="item__subtext">
        ● Непосредственно типах тестов для каждого отдельного компонента
        программного обеспечения и его функционала
      </div>
      <div className="item__subtext">
        ● Требуемых инструментах и предполагаемых для использования техниках в
        тестировании
      </div>
      <div className="item__subtext">
        ● Необходимых конфигурационных настройках.
      </div>

      <div className="item__title">3. Разработка тестов</div>
      <div className="item__text">
        Следующим важным этапом служит тест-дизайн. тест-дизайн - это процесс
        тестирования ПО, на котором проектируются и создаются тесты, в
        соответствии с определёнными ранее критериями качества и целями
        тестирования.
      </div>
      <div className="item__text">
        При проектировании тестов мы анализируем проектные артефакты, которые у
        нас есть - это может быть ТЗ, спецификации, планы, а в особо плохих
        случаях - письмо от заказчика и содержимое из головы программистов.
      </div>
      <div className="item__text">
        Интернет-магазины, в отличие от специализированного ПО, должны обладать
        интуитивной понятностью. Если пользователю непонятно как купить или
        что-то не понравится, то он уйдёт к конкуренту.
      </div>
      <div className="item__text">
        Важным моментом при проектировании тестов является их фиксирование. В
        разных условиях тесты фиксируются по-разному. Некоторые используют для
        этого специальные инструменты (MTM, Sitechk, TestLink) или
        приспосабливают существующие (Excel, Mind Map).
      </div>

      <div className="item__title">
        4. Выполнение тестов и оценка результатов
      </div>
      <div className="item__text">
        После того как готовы тесты, происходит их выполнение. При выполнении
        тестов фиксируется версия ПО, на котором проводится тестирование и
        результат прохождения теста.
      </div>
      <div className="item__text">
        Полученные результаты сообщаются остальным членам команды и руководителю
        проекта. Если тесты провалились, то на их основе заводятся ошибки в
        баг-трекер.
      </div>

      <div className="item__title">
        Классификация видов и направлений тестирования
      </div>
      <div className="item__text">1. По запуску кода на исполнение</div>
      <div className="item__text">
        По запуску кода на исполнение тестирование делится на:
      </div>
      <div className="item__subtext">● Статическое тестирование;</div>
      <div className="item__subtext">● Динамическое тестирование.</div>
      <div className="item__text">
        Статическое тестирование выполняется без запуска ПО. Тестирование
        осуществляется путём анализа программного кода (code review) или
        скомпилированного кода. Анализ может производиться вручную, так и с
        помощью специальных инструментов. Целью анализа является раннее
        выявление ошибок и потенциальных проблем в продукте.
      </div>
      <div className="item__text">
        Статическое тестирование кода проводят разработчики. В рамках такого
        тестирования являются ошибки, связанные с эффективностью и правильностью
        программных конструкций. Помимо кода, статическое тестирование
        проводится при тестировании требований и тестировании дизайна по
        макетам.
      </div>
      <div className="item__text">
        В отличие от статического, динамическое тестирование производится путём
        запуска продукта и проверки его функционала. Проверка осуществляется с
        помощью ручного или автоматического выполнения заранее подготовленного
        набора тестов.
      </div>
      <div className="item__text">
        2. По доступу к коду и архитектуре приложения
      </div>
      <div className="item__subtext">● Метод белого ящика;</div>
      <div className="item__subtext">● Метод чёрного ящика;</div>
      <div className="item__subtext">● Метод серого ящика.</div>
      <div className="item__text">
        Что такое тестирование «чёрного ящика« — это стратегия или метод
        тестирования, базируется только на тестировании по функциональной
        спецификации и требованиям, при этом несмотря во внутреннюю структуру
        кода и без доступа к базе данных. Фактически мы знаем, какой должен быть
        результат при определённом наборе данных, которые подаются на вход.
        Результат проверяем с интерфейса на уровне простого пользователя. На
        данный момент такая стратегия является наиболее часто применима в
        IT-компаниях.
      </div>
      <div className="item__text">
        Чуть меньшее количество тестировщиков используют стратегиею «серого
        ящика«, который подразумевает частичный доступ, например, к структуре
        баз данных.
      </div>
      <div className="item__text">3. По степени автоматизации</div>
      <div className="item__subtext">● Ручное тестирование;</div>
      <div className="item__subtext">● Автоматизированное тестирование.</div>
      <div className="item__text">
        Ручное тестирование – это процесс поиска дефектов в работе программы,
        когда тестировщик проверяет работоспособность всех компонентов
        программы, как если бы он был пользователем. Для проведения тестирования
        тестировщики используют заранее заготовленные планы тестирования и тесты
        на основе требований к ПО.
      </div>
      <div className="item__text">
        При автоматизированном тестировании используются программные средства
        для выполнения тестов и проверки результатов. Применение
        автоматизированных тестов позволяет сократить время тестирования и
        упростить сам процесс. Однако не стоит думать, что автоматизация это
        просто и нужно все тесты сделать автоматизированными.
      </div>
      <div className="item__text">
        Автоматизированное тестирование бывает на разном уровне, часто
        разработчики автоматизируют тесты для проверки своих модулей или связи
        между модулями. Широкую популярность набрали автоматизированные тесты
        пользовательского интерфейса, которые эмулируют поведение пользователя,
        т.е. Передвигают указатель мышки по экрану, нажимают на кнопки, пишут
        тексты и.т.д.
      </div>
      <div className="item__text">4. По уровню детализации приложения</div>
      <div className="item__subtext">● Модульное тестирование;</div>
      <div className="item__subtext">● Интеграционное тестирование;</div>
      <div className="item__subtext">● Системное тестирование.</div>
      <div className="item__text">
        Модульное тестирование проверяет функциональность и ищет дефекты в
        частях приложения, которые доступны и могут быть протестированы по
        отдельности (модули программ, объекты, классы, функции и т.д.). Обычно
        модульное тестирование выполняют разработчики, разрабатывая и
        программируя специальные модульные тесты (юнит-тесты) в процессе
        разработки модуля программы.
      </div>
      <div className="item__text">
        Интеграционное тестирование предназначено для проверки связи между
        модулями ПО, а также взаимодействия с различными частями системы
        (операционной системой, оборудованием, взаимосвязи между различными
        системами).
      </div>
      <div className="item__text">
        Основной задачей системного тестирования является проверка как
        функциональных, так и нефункциональных требований в системе в целом. При
        этом выявляются дефекты, такие как неверное использование ресурсов
        системы, непредусмотренные комбинации данных пользовательского уровня,
        несовместимость с окружением, непредусмотренные сценарии использования,
        отсутствующая или неверная функциональность, неудобство использования и
        т.д. При проведении системного тестирования стараются создать
        специальные условия, приближенные к реальным или тем, которые будут у
        заказчика ПО.
      </div>
      <div className="item__text">
        5. По степени важности тестируемых функций
      </div>
      <div className="item__subtext">● Дымовое тестирование;</div>
      <div className="item__subtext">● Тестирование критического пути;</div>
      <div className="item__subtext">● Расширенное тестирование.</div>
      <div className="item__text">
        Дымовое тестирование означает минимальный набор тестов на явные ошибки.
        Успешное прохождение дымового тестирования говорит о том, что ПО можно
        тестировать более глубоко и основательно, если ПО не прошло дымовое
        тестирование, то проводить глубокое тестирование не имеет смысла. Первое
        своё применение этот термин получил у печников, которые, собрав печь,
        закрывали все заглушки, затапливали её и смотрели, чтобы дым шёл только
        из положенных мест.
      </div>
      <div className="item__text">
        Тестирование критического пути - это тестирование функциональности,
        используемой пользователями в типичной повседневной деятельности,
        наиболее часто используемые функции ПО.
      </div>
      <div className="item__text">6. По принципам работы с приложением</div>
      <div className="item__subtext">● Позитивное тестирование;</div>
      <div className="item__subtext">● Негативное тестирование.</div>
      <div className="item__text">
        При позитивном тестировании проверяются функции ПО строго по
        требованиям, по инструкциям, только с допустимыми действиями и
        корректными данными. Например, позитивным тестом для тестирования
        функции квадратного корня является ввод числа «4» и получения результата
        «+2» или «-2» или в поле «Возраст» ввести значение «18».
      </div>
      <div className="item__text">
        Негативное тестирование - это проверка поведения ПО при вводе
        некорректных данных, то, что не предусмотрено требованиями или типом
        данных и т.д
      </div>
      <div className="item__text">7. По цели тестирования</div>
      <div className="item__subtext">● Функциональное виды тестирования;</div>
      <div className="item__subtext">● Нефункциональные виды тестирования;</div>
      <div className="item__subtext">● Связанные с изменениями в коде.</div>
      <div className="item__text">
        Функциональное виды тестирования проверяет, правильно ли выполняет ПО
        функции, описанные в требованиях, а также взаимодействие с другими
        системами. К функциональному виду тестирования относятся модульное,
        интеграционное и системное тестирование.
      </div>
      <div className="item__text">
        К функциональным видам тестирования относят:
      </div>
      <div className="item__subtext">
        ● Функциональное тестирование. Тестирование, основанное на функциях,
        выполняемых системой.
      </div>
      <div className="item__subtext">
        ● Тестирование безопасности - проверка ПО на безопасность системы,
        правильного ограничения возможностей пользователей, защита от атак
        хакером.
      </div>
      <div className="item__subtext">
        ● Тестирование взаимодействия. Проверка взаимодействия ПО с различными
        внешними компонентами и системами.
      </div>
      <div className="item__text">
        Нефункциональное тестирование описывает тесты, необходимые для
        определения характеристик программного обеспечения, которые могут быть
        измерены различными величинами. В целом это тестирование того, «Как»
        система работает.
      </div>
      <div className="item__text">
        Основные виды нефункционального тестирования:
      </div>
      <div className="item__subtext">
        ● Нагрузочное тестирование. Тестирование, которое проводится для
        определения того, как быстро работает ПО под определённой нагрузкой.{" "}
      </div>
      <div className="item__subtext">
        ● Стресс-тестирование. Тестирование, которое позволяет проверить,
        насколько приложение и система в целом работоспособны в условиях стресса
        и также оценить способность к регенерации.
      </div>
      <div className="item__subtext">
        ● Тестирование стабильности и надёжности. Задачей тестирования
        стабильности (надёжности) является проверка работоспособности приложения
        при длительном (многочасовом) тестировании со средним уровнем нагрузки.
        Время выполнения операций может играть в данном виде тестирования
        второстепенную роль. При этом на первое место выходит отсутствие утечек
        памяти, перезапусков серверов под нагрузкой и другие аспекты, влияющие
        именно на стабильность работы.
      </div>
      <div className="item__subtext">
        ● Объёмное тестирование. Задачей объёмного тестирования является
        получение оценки производительности при увеличении объёмов данных в базе
        данных приложения, при этом происходит измерение времени выполнения
        выбранных операций и измерение количества пользователей, одновременно
        работающих с приложением.
      </div>
      <div className="item__subtext">
        ● Инсталляционное тестирование. Тестирование установки ПО, направлено на
        проверку успешной инсталляции и настройки, а также обновления и удаления
        ПО.
      </div>
      <div className="item__subtext">
        ● Юзабилити-тестирование - это метод тестирования, направленный на
        установление степени удобства использования, обучаемости, понятности и
        привлекательности для пользователей разрабатываемого ПО в контексте
        заданных условий.
      </div>
      <div className="item__subtext">
        ● Тестирование на отказ и восстановление. Тестирование, которое
        проверяет ПО с точки зрения способности противостоять и успешно
        восстанавливаться после возможных сбоев, возникших в связи с ошибками
        программного обеспечения, отказами оборудования или проблемами связи
        (например, отказ сети). Целью данного вида тестирования является
        проверка систем восстановления (или дублирующих основной функционал
        систем), которые, в случае возникновения сбоев, обеспечат сохранность и
        целостность данных тестируемого продукта. Тестирование на отказ и
        восстановление очень важно для систем, работающих по принципу «24x7».
      </div>
      <div className="item__subtext">
        ● Конфигурационное тестирование. Специальный вид тестирования,
        направленный на проверку работы программного обеспечения при различных
        конфигурациях системы (заявленных платформах, поддерживаемых драйверах,
        при различных конфигурациях компьютеров и т. д.)
      </div>
      <div className="item__text">
        Тестирование производительности ПО (нагрузочное, объёмное,
        стресс-тестирование) проводится с помощью специальных инструментов,
        которые имитируют работу пользователей, например, Jmeter.
      </div>
      <div className="item__subtext">
        ● Дымовое тестирование(рассматривали выше).
      </div>
      <div className="item__subtext">
        ● Регрессионное тестирование - это вид тестирования, направленный на
        проверку изменений, сделанных в приложении или окружающей среде (починка
        дефекта, слияние кода, миграция на другую операционную систему, базу
        данных, веб-сервер или сервер приложения), для подтверждения того факта,
        что существующая ранее функциональность работает, как и прежде.
        Регрессионными могут быть как функциональные, так и нефункциональные
        тесты. Как правило, для регрессионного тестирования используются тест
        кейсы, написанные на ранних стадиях разработки и тестирования. Это даёт
        гарантию того, что изменения в новой версии приложения не повредили уже
        существующую функциональность.
      </div>
      <div className="item__subtext">
        ● Тестирование сборки. Тестирование, направленное на определение
        соответствия, выпущенной версии, критериям качества для начала
        тестирования. По своим целям является аналогом Дымового Тестирования,
        направленного на приёмку новой версии в дальнейшее тестирование или
        эксплуатацию. Вглубь оно может проникать дальше, в зависимости от
        требований к качеству выпущенной версии.
      </div>
      <div className="item__subtext">
        ● Санитарное тестирование - это узконаправленное тестирование
        достаточное для доказательства того, что конкретная функция работает
        согласно заявленным в спецификации требованиям. Является подмножеством
        регрессионного тестирования. Используется для определения
        работоспособности определённой части приложения после изменений
        произведённых в ней или окружающей среде. Обычно выполняется вручную.
      </div>
      <div className="item__title">Домашнее задание</div>
      <div className="item__text">
        1. Проанализировать ТЗ (техническое задание на доработку системы) или
        «протестировать» ТЗ. Составить список вопросов для аналитика, вопросы
        написать в ДЗ (схема вы – тестировщик, вам нужно в будущем
        протестировать доработку системы, описанную в ТЗ
      </div>
    </div>
  );
}

export default Second;
