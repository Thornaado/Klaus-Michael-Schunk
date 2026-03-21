"use client"

import Image from "next/image"
import { Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useAnimateIn } from "@/hooks/use-animate-in"
import { PatientInfoModal } from "@/components/modals/patient-info-modal"

export function Hero() {
  const { ref: textRef, isVisible: textVisible } = useAnimateIn({ threshold: 0.2 })

  return (
    <section className="relative min-h-[90svh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero image.webp"
          alt="Zahnarztpraxis Dold Rheinfelden - Moderne Zahnheilkunde für die ganze Familie"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay for Readability */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      <div className="mx-auto max-w-[1440px] px-4 lg:px-8 w-full relative z-20">
        <div
          ref={textRef}
          className={`flex flex-col items-center text-center gap-6 lg:gap-8 transition-all duration-700 ease-out max-w-4xl mx-auto ${textVisible
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0"
            }`}
        >
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white lg:text-5xl 2xl:text-6xl text-balance drop-shadow-md">
            {"Moderne Zahnmedizin in Rheinfelden. Pr\u00E4zision, der Sie vertrauen."}
          </h1>

          <p className="text-base leading-relaxed text-white/90 lg:text-xl 2xl:text-2xl drop-shadow-md max-w-2xl">
            {"Spezialisierte Fachkompetenz in Endodontie und Parodontologie. Wir kombinieren modernste Technik mit einf\u00FChlsamer Behandlung."}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg font-semibold drop-shadow-sm"
            >
              <a href="tel:+4976237172407">
                <Phone className="mr-2 h-4 w-4" />
                Termin vereinbaren
              </a>
            </Button>
            <PatientInfoModal
              trigger={
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-lg border-white text-white hover:bg-white/10 hover:text-white text-base font-semibold drop-shadow-sm"
                >
                  Ihr erster Besuch?
                </Button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  )
}
