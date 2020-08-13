const DB = require("../data/dbConfig.js")
const Hobbits = require('./hobbitsModel.js')

describe('hobbits model', () => {
    describe('insert', ()=> {


        //Clears the table
        beforeEach (async ()=> {
            await DB('hobbits').truncate()
        });

        //Checks if you inserted two into DB
        it('Shouls insert the provided hobbits in the db', async () => {
            await Hobbits.insert({name: 'gaffer'})
            await Hobbits.insert({name: 'sam'})

            const hobbits = await DB('hobbits');
            expect(hobbits).toHaveLength(2)
        });
        
        // Checks the inserted data is returned
        it ('should return the hobbit we inserted', async () => {
            let hobbit = await Hobbits. insert({ name: 'sam'})
            expect(hobbit.name).toBe('sam')

            hobbit = await Hobbits .insert({name: 'gaffer'});
            expect(hobbit.name).toBe('gaffer')
        });

        it("is pointless", ()=> {
            expect(true).toBe(true)
        })
    })
})

//  THis is the DB test