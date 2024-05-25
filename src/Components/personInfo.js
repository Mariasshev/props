import React from 'react';
const person = {
    name: "Стивен",
    lastName: "Хокинг",
    birthDate: "8 января 1942 г",
    imageUrl: 'assets/img/Stiv.jpg',
    imageW: 400,
    imageH: 250
};

export function ShowInfo() {
    return (
        <>
            <p><span className='main'>Имя:</span>  {person.name} {person.lastName}</p>
            <p><span className='main'>Дата рождения:</span> {person.birthDate}</p>
        </>
    );
}
export function ShowPhoto() {
    return (
        <>
             <img
            src={person.imageUrl}
            alt={'Фото ' + person.name}
            style={{
            width: person.imageW,
            height: person.imageH
          }}
        />
        </>
    );
}

export function ShowBio() {
    return (
        <>
            <p><span className='main'>Биография:</span><br></br>
            Сти́вен Уи́льям Хо́кинг (англ. Stephen William Hawking; 8 января 1942, Оксфорд, Великобритания — 14 марта 2018, Кембридж, Великобритания) — британский физик-теоретик, космолог, астрофизик и писатель.

Директор по научной работе Центра теоретической космологии Кембриджского университета[10][11]. Автор ряда научных трудов, в том числе совместной с Роджером Пенроузом работы по теоремам о гравитационной сингулярности в рамках общей теории относительности и теоретическому предсказанию выделения чёрными дырами излучения, часто именуемого излучением Хокинга. Хокинг первым изложил космологическую теорию, в которой были объединены представления общей теории относительности и квантовой механики. Активно поддерживал многомировую интерпретацию квантовой механики[12][13].

Хокинг был почётным членом Королевского общества искусств, пожизненным членом Папской академии наук, был удостоен Президентской медали Свободы — высшей награды для гражданских лиц в США. В 2002 году по результатам опроса Би-би-си «100 величайших британцев» всех времён Хокинг занял 25-е место. Учёный был Лукасовским профессором математики Кембриджского университета в 1979–2009 годах, добился коммерческого успеха благодаря научно-популярным произведениям, в которых он рассуждает о собственных теориях и космологии в целом. Книга Хокинга «Краткая история времени» входила в список бестселлеров британского издания The Sunday Times на протяжении рекордных 237 недель.

У Хокинга была редкая медленно развивающаяся форма болезни моторных нейронов (также известна как боковой амиотрофический склероз или болезнь Лу Герига), которая постепенно на протяжении десятилетий парализовывала его[14][15]. После потери речи Хокинг был в состоянии общаться посредством синтезатора речи, изначально с помощью ручного переключателя, впоследствии — используя мышцу щеки. 14 марта 2018 года Стивен Хокинг умер в возрасте 76 лет[
            </p>
        </>
    );
}