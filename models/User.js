const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        college: {
            type: String,
            default: "",
            trim: true
        },

        sem: {
            type: String,
            default: "",
            trim: true
        },

        goal: {
            type: String,
            default: null
        },

        skills: {
            type: [String],
            default: []
        }
    },

    {
        timestamps: true
    }
);

module.exports = mongoose.model(
    "User",
    userSchema
);