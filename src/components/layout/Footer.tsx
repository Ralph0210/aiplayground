import React from "react"
import Link from "next/link"
import { footer } from "@/content/sections"

export function Footer() {
  return (
    <footer className="bg-secondary-grey/30 mt-10">
      <div className="mx-auto px-20 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-body font-geist font-semibold text-primary-black">
              AI Playground
            </div>
          </div>
          <div>
            <div className="text-body font-geist text-primary-black">
              Product
            </div>
            <ul className="mt-2 space-y-1">
              {footer.product.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-body2 text-primary-dark-gray">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-body font-geist text-primary-black">
              Resources
            </div>
            <ul className="mt-2 space-y-1">
              {footer.resources.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-body2 text-primary-dark-gray">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-body font-geist text-primary-black">
              Company
            </div>
            <ul className="mt-2 space-y-1">
              {footer.company.map((item) => (
                <li key={item}>
                  <Link href="#" className="text-body2 text-primary-dark-gray">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 text-body2 text-primary-dark-gray">
          {footer.copyright}
        </div>
      </div>
    </footer>
  )
}

export default Footer
