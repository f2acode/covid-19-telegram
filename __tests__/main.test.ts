import {getCountrySnap} from '../src/data'

test('check return from covid data', async () => {
  const input = 'Brazil'
  const countrySnap = await getCountrySnap(input)

  expect(Object.keys(countrySnap)).toEqual([
    'date',
    'confirmed',
    'deaths',
    'recovered'
  ])
})
