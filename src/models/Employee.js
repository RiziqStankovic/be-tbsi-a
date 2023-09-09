const { Schema, model } = require('mongoose');

const schema = new Schema(
    {
        name: String,
        email: String,
        password: String,
        photo: String,
        role: {
            type: Schema.Types.ObjectId,
            ref: 'Role',
        },
        branch: {
            type: Schema.Types.ObjectId,
            ref: 'Branch',
        },
    },
    { timestamps: true }
);

module.exports = model('Employee', schema);