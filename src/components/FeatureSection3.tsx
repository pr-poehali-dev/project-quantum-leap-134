import { AspectRatio } from "@/components/ui/aspect-ratio"
import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "Cpu",
    title: "Программирование ПЛК",
    description: "Разработка и настройка программируемых логических контроллеров (Siemens, Allen-Bradley, ОВЕН).",
  },
  {
    icon: "Monitor",
    title: "SCADA-системы",
    description: "Создание визуализации технологических процессов, диспетчеризация и мониторинг производства.",
  },
  {
    icon: "Cable",
    title: "Промышленные сети",
    description: "Работа с Profibus, Modbus, Ethernet/IP — объединение оборудования в единую систему управления.",
  },
]

export function FeatureSection3() {
  return (
    <section className="bg-muted py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row gap-12 md:gap-16 items-center">
        <div className="flex flex-col gap-8 flex-1">
          <div className="flex flex-col gap-4 md:gap-5">
            <p className="text-sm md:text-base font-semibold text-muted-foreground">Ключевые навыки</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Что умеет инженер по автоматизации?</h2>
            <p className="text-base text-muted-foreground">Востребованные технические компетенции на предприятиях Урала:</p>
          </div>
          <div className="flex flex-col gap-6">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                  <Icon name={step.icon} size={20} className="text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold text-foreground">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 w-full">
          <div className="overflow-hidden rounded-xl border bg-background shadow-xl">
            <AspectRatio ratio={1 / 1}>
              <img
                src="https://cdn.poehali.dev/projects/d4ed435f-d8db-4f6d-89cb-00ed2d2c0795/files/902b6fbf-65cf-46cb-a00a-509f3a19e5e8.jpg"
                alt="Инженер работает с системой автоматизации"
                className="object-cover w-full h-full"
              />
            </AspectRatio>
          </div>
        </div>
      </div>
    </section>
  )
}
