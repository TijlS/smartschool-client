const ss = require('../index')
// Import config
const conf = require('./config')
const util = require('util')

const main = async () => {
  try {
    // Initialiseer configuratie
    await ss.init(conf)

    // Alleen verplichte velden opgegegeven
    const res = await ss.createGroup({
      groupId: 'demoGroup1.2',
      parent: 'demoGroup1',
      description: 'demogroup smartschool-client'
    })

    console.log(util.inspect(res, { color: true, depth: null }))
  } catch (e) {
    console.log(e)
  }
  console.log('Done')
}
main()
