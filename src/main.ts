import * as core from '@actions/core'
import fetch from 'node-fetch'

async function run(): Promise<void> {
  try {
    core.debug('OLÁAAAAAAA')

    const res = await fetch(
      'https://pomber.github.io/covid19/timeseries.json',
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )

    const text = await res.text()

    core.debug(text)

    core.setOutput('numberOfCases', '1')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
