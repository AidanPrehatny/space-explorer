const { RESTDataSource } = require('apollo-datasource-rest');

class LaunchAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.spacexdata.com/v2/';
  }

  async getAllLaunches() {
    const res = await this.get('launches');
    return res && res.length ? res.map(l => this.launchReducer(l)) : [];
  }
}

module.exports = LaunchAPI;