"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const subdomainController_1 = tslib_1.__importDefault(require("../controllers/subdomainController"));
exports.default = (program) => program
    .command('subdomain <option> <subdomain>')
    .description('Add or remove a subdomain to the current project.')
    .action((option, subdomain) => {
    (new subdomainController_1.default()).execute(option, subdomain).catch(err => console.log(err.message));
});
//# sourceMappingURL=subdomainCommand.js.map