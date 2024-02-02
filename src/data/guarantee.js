import { v4 } from 'uuid';

export const listGuaranteeRules=[
    {
        id: v4(),
        rule: 'При підборі деталі за каталогом було допущено помилку (установка деталі проводилася на невідповідний автомобіль);',
        ruleEN: 'An error was made when selecting a part from the catalogue (the part was installed on the wrong vehicle);',
      },
      {
        id: v4(),
        rule: 'Деталь була деформована під час встановлення/зняття;',
        ruleEN: 'The part was deformed during installation/removal;'
      },
      {
        id: v4(),
        rule: 'Деталь була встановлена з порушенням правил її встановлення, що призвело до її несправності;',
        ruleEN: 'The part was installed in violation of the installation rules, which led to its malfunction;'
      },
      {
        id: v4(),
        rule: 'Деталь має видимі пошкодження, які були викликані її використанням та експлуатацією;',
        ruleEN: 'The part has visible damage caused by its use and operation;'
      },
      {
        id: v4(),
        rule: 'Конструкція деталі була змінена у процесі її монтажу на транспортний засіб;',
        ruleEN: 'The design of the part has been changed during the process of fitting it to the vehicle'
      },
      {
        id: v4(),
        rule: 'Деталь втратила свої корисні властивості через знос;',
        ruleEN: 'The part has lost its useful properties due to wear and tear;',
      },
      {
        id: v4(),
        rule: 'Комплектація деталі не відповідає тій, яка була в момент її придбання в магазині;',
        ruleEN: 'The part package does not match the one that was available when it was purchased in the store;',
      },
      {
        id: v4(),
        rule: 'Деталь експлуатувалася в екстремальних умовах (спортивні заходи);',
        ruleEN: 'The part was used in extreme conditions (sporting events);',
      }
]

export const listDocumentsForGuarantee=[
    {
        id: v4(),
        item: 'Гарантійний талон (якщо передбачений заводом-виробником) з печаткою продавця;',
        itemEN: "Warranty card (if provided by the manufacturer) with the seller's stamp;",
      },
      {
        id: v4(),
        item: "Ксерокопію наряд-замовлення із СТО, яке проводило процедуру встановлення та зняття деталі з транспортного засобу. Цей документ повинен включати повну інформацію про СТО та автомобіль, а також перелік усіх виконаних операцій. Обов'язково перевірте, щоб документ був із печаткою, якщо ж його немає, то потрібна буде копія витягу з держреєстру про реєстрацію; Копію чека, рахунок-фактури чи накладної;",
        itemEN: "A photocopy of the work order from the service station that carried out the procedure for installing and removing the part from the vehicle. This document must include full information about the service station and the vehicle, as well as a list of all operations performed. Be sure to check that the document is stamped, if not, you will need a copy of the extract from the state register of registration; A copy of the receipt, invoice or delivery note;"
      },
      {
        id: v4(),
        item: 'Акт рекламації (можна завантажити із нашого сайту). Цей документ має бути заповнений на СТО. У ньому детально має бути описано суть проблеми, наведено інформацію про стан інших деталей автомобіля та загальні дані про сам транспортний засіб. Акт має бути засвідчений печаткою або йти разом із копією виписки з держ.реєстру про реєстрацію (якщо СТО працює без друку);',
        itemEN: 'A complaint report (can be downloaded from our website). This document must be filled out at the service station. It should describe the nature of the problem in detail, provide information about the condition of other parts of the car and general information about the vehicle itself. The act must be stamped or accompanied by a copy of the extract from the state register of registration (if the service station operates without a stamp);'
      },
      {
        id: v4(),
        item: 'Висновок про проведення діагностики несправності (тільки для елементів електрообладнання, вартість яких перевищує 200 гривень з ПДВ).',
        itemEN: 'A conclusion on the diagnosis of the malfunction (only for electrical equipment items whose value exceeds 200 UAH including VAT).'
      }
]