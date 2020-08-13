const request = require("supertest");
const server = require('./server.js');

describe('server.js', () => {
    test('that the test envinonment is set up', () => {
        expect(process.env.DB_ENV).toBe('testing');
    })

    describe("GET /", ()=> {
        let res = {};

        beforeEach(async () => {
            res = await request(server).get('/')
        })
    
        it("should return 200 ok", () => {
            return request(server).get('/')
            .then(res => {
                expect(res.status).toBe(200)
            });
        });
// The one above and the one below are the same... The bottom one is easier.
        it('should return 200 ok using async/await', async ()=> {
            const res = await request(server).get('/');
            expect(res.status).toBe(200)
        });

        it('should return a JSON object', async ()=> {
            const res = await request(server).get('/')
            expect(res.type).toBe('application/json')
        })

        it('should return {api: up', () => {
            expect(res.body).toEqual({ api: "up"})
        })
    })
})


// This is the server test