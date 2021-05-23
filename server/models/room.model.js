const mongoose = require('mongoose');



const Room = mongoose.model(
    "Room",
    new mongoose.Schema({
    // name: { type: String, lowercase: true, unique: true },
    users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    messages: [{
        from:{type:String},
        body:{type:String},
        date:{ type: Date, default: Date.now },
    }],
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    })
);

module.exports = Room;