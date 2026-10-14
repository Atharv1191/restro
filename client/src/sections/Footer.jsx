import React from 'react'
import Animated from '../components/Animated'
import { quickLinks, sitemapLinks, socialLinks } from '../data/data'
import { Mail, PhoneIcon } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="px-4 relative isolate mt-44 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* row */}
        <div className="flex flex-wrap gap-10 justify-between pb-8">
          {/* brand */}
          <div className="flex flex-col items-start text-left">
            <Animated>
              <img src="/assets/logo.svg" alt="Restro logo" />
            </Animated>
            <Animated delay={0.2}>
              <p className="mt-3 text-sm/5.5 text-zinc-600 max-w-82.25">
                Serving freshly prepared dishes with authentic flavors, premium
                ingredients and exceptional hospitality every day.
              </p>
            </Animated>
            <div className="flex items-center gap-1.5 mt-6">
              {socialLinks.map((item, index) => (
                <Animated key={index} delay={index * 0.05}>
                  <a
                    href={item.href}
                    className="size-7.5 rounded-full border border-slate-300 grid place-content-center"
                  >
                    {item.icon}
                  </a>
                </Animated>
              ))}
            </div>
          </div>

          {/* quick links */}
          <div>
            <p className="font-medium mb-5">Quick Links</p>
            <div className="flex flex-col gap-2.5">
              {quickLinks.map((link, index) => (
                <Animated key={link.name} delay={index * 0.05}>
                  <a href={link.href} className="text-zinc-600 hover:text-zinc-500">
                    {link.name}
                  </a>
                </Animated>
              ))}
            </div>
          </div>

          {/* contact */}
          <div>
            <p className="font-medium mb-5">Get in Touch</p>
            <div className="space-y-2">
              <Animated>
                <a
                  href="mailto:hello@example.com"
                  className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500"
                >
                  <Mail className="shrink-0" size={16} />
                  hello@example.com
                </a>
              </Animated>
              <Animated delay={0.2}>
                <a
                  href="tel:9021483429"
                  className="flex items-center gap-1 text-zinc-600 hover:text-zinc-500"
                >
                  <PhoneIcon className="shrink-0" size={16} />
                  9021483429
                </a>
              </Animated>
            </div>
          </div>

          {/* sitemap */}
          <div>
            <p className="font-medium mb-5">Sitemap</p>
            <div className="flex flex-col gap-2.5">
              {sitemapLinks.map((link, index) => (
                <Animated key={link.name ?? index} delay={index * 0.05}>
                  <a href={link.href} className="text-zinc-600 hover:text-zinc-500">
                    {link.name}
                  </a>
                </Animated>
              ))}
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="border-t text-zinc-500 border-slate-200 py-4.5 flex flex-col gap-2 sm:flex-row justify-between items-center">
          <p>© 2026. All Rights Reserved</p>
          <p>
            Designed by{' '}
            <a href="https://retro.com" target="_blank" rel="noopener noreferrer">
              Restro
            </a>
          </p>
        </div>
      </div>

      {/* watermark logo backdrop */}
      <div className="absolute inset-0 text-center select-none -z-10 pointer-events-none">
        <span className="text-[300px] leading-none tracking-wide font-urbanist font-semibold text-zinc-100/70">
          Restro
        </span>
      </div>
    </footer>
  )
}

export default Footer