"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="normal"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "The service was great! There attention to detail was excellent! Very nice, professional and my car looks brand new again! I would highly recommend.",
    name: "John H.",
    title: "Vanity Suds Customer",
  },
  {
    quote:
      "Jakobi showed up and was very friendly. I got the premium exterior, and basic interior package and he did a great job giving the cars paint a good cleaning which it needed. He really took his time and made sure it was done right car looks great and smells amazing inside",
    name: "Joshua Arbogast",
    title: "Vanity Suds Customer",
  },
  {
    quote: "Highly recommend! I googled “mobile detailers” and booked an appointment with the first company I saw with online booking.  They cancelled on me last minute, but thankfully Vanity Suds was able to fit my son`s car in the next day. Jonah & Jakobi did a fantastic job- super friendly and extremely thorough.",
    name: "Tracey Mozeyko",
    title: "Vanity Suds Customer",
  },
  {
    quote:
      "Amazing service, and GREAT attention to detail! Car smells and looks like I just pulled off the lot! Thank you guys! 10/10",
    name: "Jordan English",
    title: "Vanity Suds Customer",
  },
];
