import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export function HeroSection7() {
  return (
    <section className="bg-muted pattern-1 py-16 lg:py-24" aria-labelledby="hero-heading">
      <div className="container px-6 flex flex-col items-center gap-12 lg:gap-16 mx-auto">
        <div className="flex gap-12 lg:gap-16">
          <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8">
            <h1 id="hero-heading" className="text-foreground text-3xl lg:text-5xl font-bold flex-1">
              Инженер по автоматизации — <span className="text-primary">профессия будущего</span> в Челябинской области
            </h1>
            <div className="flex-1 w-full flex flex-col gap-8">
              <p className="text-muted-foreground text-base lg:text-lg">
                Одна из самых востребованных технических специальностей региона. Промышленный Урал активно внедряет автоматизацию производства — и специалисты нужны уже сейчас.
              </p>

              <div className="flex flex-col lg:flex-row gap-3">
                <Button>Узнать о профессии</Button>
                <Button variant="ghost">
                  Рынок труда
                  <ArrowRight className="ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full overflow-hidden rounded-xl border bg-background shadow-xl">
          <AspectRatio ratio={16 / 9}>
            <img
              src="https://cdn.poehali.dev/projects/d4ed435f-d8db-4f6d-89cb-00ed2d2c0795/files/902b6fbf-65cf-46cb-a00a-509f3a19e5e8.jpg"
              alt="Инженер по автоматизации за пультом управления на промышленном предприятии"
              className="object-cover w-full h-full"
            />
          </AspectRatio>
        </div>
      </div>
    </section>
  )
}
