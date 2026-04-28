import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "Какое образование нужно для работы инженером по автоматизации?",
    answer: "Подходит высшее техническое образование по направлениям: автоматизация и управление, электроэнергетика, мехатроника и робототехника. В Челябинске готовят таких специалистов ЮУрГУ и ЧелГУ. Некоторые предприятия принимают выпускников СПО с опытом.",
  },
  {
    question: "Где в Челябинской области больше всего вакансий?",
    answer: "Основные работодатели: Челябинский металлургический комбинат (ЧМК), Магнитогорский металлургический комбинат (ММК), КОНАР, Конар, ЧТПЗ, Уральская кузница и другие промышленные предприятия. Вакансии публикуются на hh.ru, SuperJob и корпоративных сайтах.",
  },
  {
    question: "Нужно ли знать иностранные языки?",
    answer: "Технический английский — большой плюс: большинство SCADA-систем и документация к оборудованию Siemens, Schneider Electric и других производителей на английском. Немецкий полезен для работы с оборудованием немецких производителей.",
  },
  {
    question: "Какие программы нужно освоить?",
    answer: "Ключевые инструменты: TIA Portal (Siemens), RSLogix (Allen-Bradley), CODESYS — для программирования ПЛК. WinCC, FactoryTalk, MasterSCADA — для SCADA. AutoCAD и EPLAN — для разработки схем. Знание этих инструментов значительно увеличивает вашу ценность на рынке.",
  },
]

export function FaqSection1() {
  return (
    <section className="bg-background py-16 md:py-24" aria-labelledby="faq-heading">
      <div className="max-w-2xl gap-12 mx-auto px-6 flex flex-col">
        <div className="flex flex-col text-center gap-5">
          <p className="text-sm md:text-base text-muted-foreground font-semibold">Вопросы</p>
          <h1 id="faq-heading" className="text-3xl md:text-4xl font-bold text-foreground">
            Часто задаваемые вопросы
          </h1>
          <p className="text-muted-foreground">
            Собрали главное о профессии инженера по автоматизации в Челябинской области. Не нашли ответ?{" "}
            <a href="#" className="text-primary underline">
              Напишите нам.
            </a>
          </p>
        </div>

        <Accordion type="single" collapsible defaultValue="item-1" aria-label="Часто задаваемые вопросы">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index + 1}`}>
              <AccordionTrigger className="text-base font-medium text-left">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="bg-muted/60 w-full rounded-xl p-6 md:p-8 flex flex-col items-center gap-6">
          <div className="flex flex-col text-center gap-2">
            <h2 className="text-2xl font-bold text-foreground">Хотите узнать больше?</h2>
            <p className="text-base text-muted-foreground">
              Расскажем о перспективах профессии и учебных программах в вашем регионе.
            </p>
          </div>
          <Button aria-label="Получить консультацию">Получить консультацию</Button>
        </div>
      </div>
    </section>
  )
}
