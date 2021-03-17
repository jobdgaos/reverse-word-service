var app = require("../index");
var request = require("supertest")(app);
const chai = require('chai');
const expect = chai.expect;

describe('GET correct reverse text', () => {
    
    it('it should return status code 200',  async () => {
        let response = await request
                            .get("/iecho")
                            .query({ text: 'Ambulancia' })
                            .then(response => {
                                return response;
                            });
        expect(response.status, 'Status Successful').to.equal(200);
    });
    it('it should return the correct reverse text',  async () => {
        let response = await request
                            .get("/iecho")
                            .query({ text: 'Ambulancia' })
                            .then(response => {
                                return response;
                            });
        expect(response.body.text, 'Reverse Text').to.equal("aicnalubmA");
    });
    it('it should return palindrome to false',  async () => {
        let response = await request
                            .get("/iecho")
                            .query({ text: 'Ambulancia' })
                            .then(response => {
                                return response;
                            });
        expect(response.body.palindrome, 'Reverse Text').to.equal(false);
    });
});

describe('GET empty text', () => {
    
    it('it should return status code 400',  async () => {
        let response = await request
                            .get("/iecho")
                            .then(response => {
                                return response;
                            });
        expect(response.status, 'Status Successful').to.equal(400);
    });

    it('it should return error message',  async () => {
        let response = await request
                            .get("/iecho")
                            .then(response => {
                                return response;
                            });
        expect(response.body.error, 'Reverse Text').to.equal("no text");
    });
});

describe('GET correct reverse text w/palindrome', () => {
    
    it('it should return status code 200',  async () => {
        let response = await request
                            .get("/iecho")
                            .query({ text: 'Amor a Roma' })
                            .then(response => {
                                return response;
                            });
        expect(response.status, 'Status Successful').to.equal(200);
    });

    it('it should return the correct reverse text',  async () => {
        let response = await request
                            .get("/iecho")
                            .query({ text: 'Amor a Roma' })
                            .then(response => {
                                return response;
                            });
        expect(response.body.text, 'Reverse Text').to.equal("amoR a romA");
    });

    it('it should return palindrome to true',  async () => {
        let response = await request
                            .get("/iecho")
                            .query({ text: 'Amor a Roma' })
                            .then(response => {
                                return response;
                            });
        expect(response.body.palindrome, 'Reverse Text').to.equal(true);
    });
});
