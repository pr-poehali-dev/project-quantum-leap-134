import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "Factory",
    title: "Высокий спрос",
    description: "Более 200 открытых вакансий в Челябинской области ежемесячно. Промышленные предприятия активно ищут специалистов.",
  },
  {
    icon: "TrendingUp",
    title: "Рост зарплат",
    description: "Средняя зарплата инженера по автоматизации в регионе — от 80 000 до 180 000 ₽ в зависимости от опыта.",
  },
  {
    icon: "ShieldCheck",
    title: "Стабильность",
    description: "Промышленный сектор Челябинской области — один из крупнейших в России. Занятость стабильна даже в кризис.",
  },
  {
    icon: "GraduationCap",
    title: "Перспективы роста",
    description: "Карьерный путь: младший инженер → ведущий специалист → руководитель проектов автоматизации.",
  },
]

export function FeatureSection9() {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-6 flex flex-col gap-12 md:gap-16">
        <div className="flex flex-col gap-4 md:gap-5 max-w-xl mx-auto text-center">
          <p className="text-sm md:text-base font-semibold text-muted-foreground">Почему эта профессия</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">Инженер по автоматизации — выбор с перспективой</h2>
          <p className="text-base text-muted-foreground">
            Ключевые факты о профессии на рынке труда Челябинской области
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-5 items-center text-center">
              <div className="flex justify-center items-center w-10 h-10 shrink-0 rounded-md bg-background border shadow-sm">
                <Icon name={feature.icon} size={20} className="text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
