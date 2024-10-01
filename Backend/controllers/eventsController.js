import { Event } from "../models/eventsSchema.js";

export const createEvent = async (req, res, next) => {
  const { event } = req.body;
  try {
    if (!event) {
      const error = new Error("Please provide an event!");
      error.statusCode = 400;
      return next(error);
    }

    await Event.create({ event });

    res.status(201).json({
      success: true,
      message: "Event created successfully!",
    });
  } catch (err) {
    next(err);
  }
};

export const getAllEvents = async (req, res, next) => {
  try {
    const events = await Event.find();
    res.status(200).json({
      success: true,
      events,
    });
  } catch (err) {
    next(err);
  }
};
