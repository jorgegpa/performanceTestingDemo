import {} from 'dotenv/config'
import chai from 'chai'
import baseTest from '../baseTest'

describe('Spotify API ENDPOINTS Tests', () => {
    const AUTH_SPOTIFY_TOKEN = baseTest.getAuthToken()
    const SWEET_CHILD_ID=process.env.SWEET_CHILD_ID
    const TRACKS_PATH = '/tracks'
    beforeEach(() => {
       baseTest.initSetup()
    })
    it('Get Sweet Child O Mine Track', () => {
        console.log(process.env.URL_BASE)
        chai.request(process.env.URL_BASE)
            .get(TRACKS_PATH+'/'+SWEET_CHILD_ID)
            .set('Authorization', 'Bearer ' +AUTH_SPOTIFY_TOKEN)
            .end((err, res) => {
                console.log(res.body)
                res.should.have.status(200)
                res.body.name.should.be.equal('Sweet Child O\' Mine')
                res.body.artists[0].name.should.be.equal('Guns N\' Roses')
                res.body.album.name.should.be.equal('Appetite For Destruction')
            })   
    })
})
