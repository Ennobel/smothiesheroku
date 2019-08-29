const AdminBro = require('admin-bro')
const AdminBroExpress = require('admin-bro-expressjs')
const AdminBroSequelize = require('admin-bro-sequelizejs')
const sequelizeDB = require('../models');

AdminBro.registerAdapter(AdminBroSequelize)

const adminBro = new AdminBro({
  resources: [
    { resource: sequelizeDB.sequelize.models.Trafo, 
        options: {
            parent: { name: "Model" }
        }  
    }
  ],
  branding: {
    companyName: 'SMOTHIE',
  },
})

const router = AdminBroExpress.buildRouter(adminBro);

module.exports = router;