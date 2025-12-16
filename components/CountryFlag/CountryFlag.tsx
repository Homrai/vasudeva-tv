import ReactCountryFlag from 'react-country-flag'

export default function CountryItem({ code }: { code: string }) {
  return (
    <div>
      <ReactCountryFlag
        countryCode={code}
        svg
        style={{
          width: '2em',
          height: '2em',
        }}
      />
    </div>
  )
}
