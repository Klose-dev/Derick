import { SocialIcon, socialLinks } from './socialLinks'
import { QRCodeSVG } from 'qrcode.react'
import { Globe2 } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#mission', label: 'Mission' },
    { href: '#contact', label: 'Contact' },
  ]

  const whatsappLink = 'https://wa.me/237682324190'

  return (
    <footer className="bg-laurel-dark text-[#FAF9F5]">
      <div className="max-w-6xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="../image/Derick.jpeg"
                alt="Derick"
                className="w-12 h-12 object-cover rounded-full border-2 border-gold/40"
                loading="lazy"
              />

              <div>
                <p className="font-heading text-xl text-[#FAF9F5]">
                  Shey Derick
                </p>

                <p className="text-gold text-xs tracking-[0.2em] uppercase">
                  Teacher of the Word
                </p>
              </div>
            </div>

            <p className="text-[#FAF9F5]/60 text-sm leading-relaxed max-w-xs">
              Teaching Truth. Writing Depth. Restoring Hope. A life devoted
              to revealing God&apos;s heart through scripture, poetry, and
              servant ministry.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg text-[#FAF9F5] mb-4">
              Quick Links
            </h4>

            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#FAF9F5]/60 hover:text-gold text-sm transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg text-[#FAF9F5] mb-4">
              Contact
            </h4>

            <ul className="space-y-2.5 text-sm text-[#FAF9F5]/60">
              <li>
                <a
                  href="mailto:sheydericktamfuh@gmail.com"
                  className="hover:text-gold transition-colors"
                >
                  sheydericktamfuh@gmail.com
                </a>
              </li>

              <li>+237 682 324 190</li>
              <li>Cameroon / Yaoundé</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-lg text-[#FAF9F5] mb-4">
              Follow
            </h4>

            {/* Social Media Icons */}
            <div className="flex flex-wrap items-center gap-3">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-full border border-[#FAF9F5]/20 flex items-center justify-center text-[#FAF9F5]/60 hover:text-gold hover:border-gold/50 transition-all duration-300"
                >
                  <SocialIcon name={s.name} />
                </a>
              ))}
            </div>

            {/* WhatsApp QR Code */}
            <div className="mt-6 flex flex-col items-start">
              <p className="text-[#FAF9F5]/60 text-xs mb-3">
                Scan to chat on WhatsApp
              </p>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat with Derick on WhatsApp"
                className="bg-white p-2 rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <QRCodeSVG
                  value={whatsappLink}
                  size={120}
                  bgColor="#ffffff"
                  fgColor="#000000"
                  level="H"
                  includeMargin={false}
                />
              </a>

              <p className="text-[#FAF9F5]/40 text-[11px] mt-2">
                Scan to connect
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[#FAF9F5]/10 flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-[#FAF9F5]/40 text-sm">
            &copy; {currentYear} Derick Tamfuh || All rights reserved.
          </p>

          <p className="text-[#FAF9F5]/30 text-xs">
            •A tribute of love and gratitude•
          </p>

          {/* Website Link */}
          <a
            href="https://sheyderick.online"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#FAF9F5]/40 hover:text-gold text-sm transition-colors"
          >
            <Globe2 size={15} strokeWidth={1.8} />
            <span>sheyderick.online</span>
          </a>

        </div>
      </div>
    </footer>
  )
}