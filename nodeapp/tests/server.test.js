const request = require('supertest');
const app = require('../server'); // Import your Express app instance

describe('API Tests', () => {

  it('should_get_a_list_of_items', async () => {
    const response = await request(app).get('/items');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2); // Check the length of the array
  }); 
});

module.exports = app;