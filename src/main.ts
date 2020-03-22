import * as core from '@actions/core'

async function run(): Promise<void> {
  try {
    console.log('TESTANDO')
    core.debug('OLÁAAAAAAA')
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
