import commander from 'commander'
import XdebugController from '../controllers/xdebugController'

export default (program: typeof commander): commander.Command => program
    .command('xdebug <status>')
    .description('Enable or disable the xdebug PHP extension. Use \'on\' or \'off\'.')
    .action((status: string) => {
        (new XdebugController()).execute(status).catch(err => console.log(err.message))
    })