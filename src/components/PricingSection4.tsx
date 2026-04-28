import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const levels = [
  {
    name: "Младший инженер",
    description: "0–2 года опыта. Базовые знания ПЛК и схемотехники.",
    salary: "от 65 000",
    features: [
      "Наладка и обслуживание оборудования",
      "Работа по готовым схемам",
      "Помощь старшим инженерам",
    ],
    variant: "secondary",
  },
  {
    name: "Инженер",
    description: "2–5 лет опыта. Самостоятельная разработка проектов.",
    badge: "Популярный",
    salary: "от 100 000",
    features: [
      "Разработка программ для ПЛК",
      "Проектирование систем SCADA",
      "Работа с промышленными сетями",
      "Запуск оборудования",
    ],
    variant: "default",
  },
  {
    name: "Ведущий инженер",
    description: "5+ лет опыта. Руководство проектами и командой.",
    salary: "от 160 000",
    features: [
      "Руководство командой инженеров",
      "Разработка технических решений",
      "Взаимодействие с заказчиком",
      "Оптимизация производства",
    ],
    variant: "secondary",
  },
]

export function PricingSection4() {
  return (
    <section className="py-16 md:py-24 pattern-1 bg-muted" aria-labelledby="salary-section-title">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-4 md:gap-5 max-w-xl text-center">
            <p className="text-base font-semibold text-muted-foreground">Зарплатные уровни</p>
            <h2 id="salary-section-title" className="text-3xl md:text-4xl font-bold">
              Сколько зарабатывают инженеры
            </h2>
            <p className="text-base text-muted-foreground">Актуальные данные по рынку труда Челябинской области, 2024–2025 гг.</p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:max-w-5xl w-full mx-auto">
            {levels.map((level, index) => (
              <Card key={level.name} className={`p-8 space-y-8 ${index === 2 ? "bg-foreground text-background" : ""}`}>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-semibold leading-7">{level.name}</h3>
                    <p className={`text-sm leading-5 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                      {level.description}
                    </p>
                  </div>

                  <div className="flex items-end gap-0.5">
                    <span className="text-3xl font-semibold leading-10">{level.salary}</span>
                    <span className={`text-base leading-6 ml-1 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                      ₽/мес
                    </span>
                  </div>

                  <Button variant={index === 2 ? "secondary" : "default"} className="w-full">
                    Узнать подробнее
                  </Button>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-medium">Что входит в обязанности:</p>
                  <div className="flex flex-col gap-4">
                    {level.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <Check className={`h-5 w-5 ${index === 2 ? "" : "text-primary"}`} />
                        <span className={`text-sm flex-1 ${index === 2 ? "opacity-70" : "text-muted-foreground"}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
