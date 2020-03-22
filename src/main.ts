import * as core from '@actions/core'
import {getCountrySnap} from '../src/data'

async function run(): Promise<void> {
  try {
    core.debug('STARTING')

    const country: string = core.getInput('country')

    const snap = await getCountrySnap(country)

    core.debug(JSON.stringify(snap))

    core.setOutput('country', country)
    core.setOutput('date', snap.date)
    core.setOutput('confirmed', snap.confirmed.toString())
    core.setOutput('deaths', snap.deaths.toString())
    core.setOutput('recoveries', snap.recovered.toString())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
