const {Song} = require('../models')

module.exports = {
  async index (req, res) {
    try {
      const songs = await Song.findAll({
        limit: 10
      })
      res.send(songs)
    } catch (err) {
      res.status(500).send({
        error: 'An error has occoured trying to fetch the songs'
      })
    }
  },
  async show (req, res) {
    try {
      const id = req.params.songId
      const song = await Song.findById(id)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'Something went wrong while fetching a single song'
      })
    }
  },
  async post (req, res) {
    try {
      const song = await Song.create(req.body)
      res.send(song)
    } catch (err) {
      res.status(500).send({
        error: 'Something went wrong while posting a new song'
      })
    }
  }
}
