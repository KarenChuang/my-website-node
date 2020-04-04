const mongoose = require('mongoose')

const vlogSchema = mongoose.Schema(
  {
    title: String,
    location: String,
    cover: String,
    link: String,
    date: Date,
    create_at: Date,
    update_at: Date
  },
  { collection: 'vlog_list' }
)

module.exports = mongoose.model('vlog', vlogSchema)