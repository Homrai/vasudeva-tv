'use client'

import ReactCountryFlag from 'react-country-flag'
import { ICountry } from '@/types/tv'
import './footer.css'

interface FooterProps {
  countries: ICountry[]
  onCountryClick: (country: ICountry) => void
  selectedCountry?: ICountry | null
}

export default function Footer({
  countries,
  onCountryClick,
  selectedCountry,
}: FooterProps) {
  return (
    <footer className="footer-main">
      {countries?.map((country) => (
        <button
          key={country.code}
          onClick={() => onCountryClick(country)}
          className={`footer-country-btn ${
            selectedCountry?.code === country.code
              ? 'global-selected global-selected-pulse global-nav-link active'
              : ''
          }`}
          style={{
            opacity: selectedCountry?.code === country.code ? 1 : 0.6,
            transform:
              selectedCountry?.code === country.code
                ? 'scale(1.1)'
                : 'scale(1)',
          }}
          title={country.name}
        >
          <ReactCountryFlag
            countryCode={country.code}
            svg
            className="footer-country-flag"
          />
        </button>
      ))}
    </footer>
  )
}
