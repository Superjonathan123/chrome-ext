// config.js - Toggle DEV_MODE when testing locally
const CONFIG = {
  // Set to true when testing against localhost:5432
  // Set to false before committing/shipping
  DEV_MODE: false,

  get API_BASE() {
    return this.DEV_MODE ? 'http://localhost:3000' : 'https://superltc.com';
  }
};

window.CONFIG = CONFIG;
