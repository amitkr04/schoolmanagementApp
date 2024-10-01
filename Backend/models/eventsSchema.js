import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  event: {
    type: String,
    required: true,
  },
});

export const Event = mongoose.model("Event", eventSchema);
