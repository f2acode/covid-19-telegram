import * as core from '@actions/core'
import {getLastCountrySnap} from '../src/data'

async function run(): Promise<void> {
  try {
    core.debug('STARTING')

    const country: string = core.getInput('country')

    const snap = await getLastCountrySnap(country)

    core.debug(JSON.stringify(snap))

    core.setOutput('country', country)
    core.setOutput('date', snap.date)
    core.setOutput('confirmed', String(snap.confirmed))
    core.setOutput('deaths', String(snap.deaths))
    core.setOutput('recoveries', String(snap.recovered))
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
