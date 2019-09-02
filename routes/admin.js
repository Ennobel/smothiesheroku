const express = require('express');
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

// hardcode
const ADMIN = {
    email: 'test@example.com',
    password: 'password',
}

// router = AdminBroExpress.buildRouter(adminBro, router)

const router = AdminBroExpress.buildAuthenticatedRouter(adminBro, {
    authenticate: async (email, password) => {
      if (ADMIN.password === password && ADMIN.email === email) {
        return ADMIN
      }
      return null
    },
    catch(e){

    },
    cookieName: 'adminbro',
    cookiePassword: 'somepassword',
  })

// const router = AdminBroExpress.buildRouter(adminBro);

module.exports = router;