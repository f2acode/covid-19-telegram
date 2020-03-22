import * as core from '@actions/core'
import fetch from 'node-fetch'

interface CountrySnapshot {
  date: string
  confirmed: number
  deaths: number
  recovered: number
}

export async function getCountrySnap(
  country: string
): Promise<CountrySnapshot> {
  const res = await fetch('https://pomber.github.io/covid19/timeseries.json', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })

  const covid = await res.json()
  const countryCovid = covid[country] as CountrySnapshot[]

  const countryCovidSnap = countryCovid[countryCovid.length - 1]

  core.debug(JSON.stringify(countryCovidSnap))

  return countryCovidSnap
}
