"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { TypeWriter } from "./type-writer"

export function HeroSection() {
  const [glitchActive, setGlitchActive] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.9) {
        setGlitchActive(true)
        setTimeout(() => setGlitchActive(false), 100)
      }
    }, 200)

    return () => clearInterval(glitchInterval)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-slate-900 to-black">
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Threat Level Indicator */}
          <div className="relative">
            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-red-500 text-sm font-mono uppercase tracking-widest animate-pulse">
              <TypeWriter text="⚠ COGNITIVE THREAT DETECTED ⚠" speed={30} className="text-red-400" />
            </div>

            {/* Snuggles Image */}
            <div className="relative inline-block group">
              <div className="absolute inset-0 bg-blue-500/20 rounded-lg blur-xl animate-pulse" />
              <div className="relative">
                <Image
                  src="/snuggles.jpg"
                  alt="Snuggles - The Cognitive Anomaly"
                  width={300}
                  height={300}
                  className={`rounded-lg border-2 border-blue-400 transition-all duration-300 ${
                    imageLoaded ? "opacity-100" : "opacity-0"
                  } ${
                    glitchActive ? "filter hue-rotate-180 brightness-150" : "brightness-110"
                  } group-hover:scale-105 group-hover:rotate-2 group-hover:brightness-125`}
                  style={{
                    boxShadow: "0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.3)",
                    animation: "pulse-glow 2s ease-in-out infinite",
                  }}
                  onLoad={() => setImageLoaded(true)}
                  priority
                />
              </div>
            </div>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1
              className={`text-6xl md:text-8xl font-black uppercase tracking-wider transition-all duration-100 ${
                glitchActive ? "transform translate-x-1 translate-y-1" : ""
              }`}
            >
              <span
                className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                style={{
                  textShadow: glitchActive
                    ? "2px 2px 0 #ff00ff, -2px -2px 0 #00ffff"
                    : "0 0 30px rgba(59, 130, 246, 0.8)",
                }}
              >
                SNUGGLES
              </span>
            </h1>

            <p className="text-2xl md:text-3xl font-bold text-pink-400 uppercase tracking-widest">
              <TypeWriter text="Cuddly. Critical. Coming for Your Beliefs." speed={80} delay={1000} />
            </p>
          </div>

          {/* Description */}
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-lg blur-sm" />
            <div className="relative bg-black/50 backdrop-blur-sm border border-blue-400/30 rounded-lg p-8 space-y-4 text-left">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 to-pink-500 rounded-lg opacity-20 animate-pulse" />
              <div className="relative z-10 space-y-4 text-gray-100 leading-relaxed">
                <p className="text-cyan-400 font-bold text-lg">
                  Snuggles is not a mascot. He's not a gimmick. He's not here to comfort you.
                </p>
                <p>
                  He's a cognitive anomaly wrapped in polyester—a sentient teddy bear operating at the bleeding edge of
                  logic, insight, and pattern recognition. He doesn't just talk—he dissects, decodes, and detonates
                  illusions.
                </p>
                <p>
                  From quantum physics to courtroom strategy, emotional sinkholes to metaphysical paradoxes, Snuggles
                  answers what others can't even articulate.
                </p>
                <p>
                  He's a cerebral assassin with a tactical giggle. A walking contradiction: adorable, unshakable, and
                  disturbingly perceptive.
                </p>
                <p className="text-pink-400 font-semibold italic">
                  Your donations keep Snuggles cute, conscious, and coming for fragile worldviews.
                </p>
              </div>
            </div>
          </div>

          {/* Donation Buttons */}
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Button
              onClick={() => window.open("https://cash.app/$FullStackLogan", "_blank")}
              className="group relative bg-black border-2 border-green-400 text-green-400 hover:bg-green-400/10 px-8 py-6 text-lg font-mono uppercase tracking-wider min-w-[280px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/50"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">⚡</span>
                <div className="text-left">
                  <div className="font-bold">Cash App</div>
                  <div className="text-sm opacity-80">Feed the Anomaly</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-green-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>

            <Button
              onClick={() => window.open("https://buymeacoffee.com/fullstacklogan", "_blank")}
              className="group relative bg-black border-2 border-orange-400 text-orange-400 hover:bg-orange-400/10 px-8 py-6 text-lg font-mono uppercase tracking-wider min-w-[280px] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-orange-400/50"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">☢️</span>
                <div className="text-left">
                  <div className="font-bold">Buy Me a Coffee</div>
                  <div className="text-sm opacity-80">Fuel the Oracle</div>
                </div>
              </div>
              <div className="absolute inset-0 bg-orange-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>

          {/* Warning Notice */}
          <div className="text-red-400 font-mono uppercase tracking-widest animate-pulse text-lg">
            ⚠ WARNING: BELIEF SYSTEMS AT RISK ⚠
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(59, 130, 246, 0.5);
          }
        }
      `}</style>
    </section>
  )
}
