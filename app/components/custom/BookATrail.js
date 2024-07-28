'use client'
import React, { useState } from 'react';

export default function BookATrail() {
    return (
        <div role='book a trail' className="bg-gray-200 bg-no-repeat bg-cover pt-10 pb-5">
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mb-20 animate-fade-up">
        <div className="text-2xl py-4 px-6 bg-gray-900 text-white text-center font-bold uppercase">
          Book a FREE Trail Class
        </div>
        <form className="py-4 px-6" action="" method="POST">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Parent Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Parent Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                Parent Phone
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="childName">
                Child Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="childName"
              type="tel"
              placeholder="Enter student name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="service">
              Board
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="service"
              name="service"
            >
              <option value="">Select a Board</option>
              <option value="CBSE">CBSE</option>
              <option value="ICSE">ICSE</option>
              <option value="NEET">NEET</option>
              <option value="JEE">JEE</option>
              <option value="PUC">PUC</option>
              <option value="ISC">ISC</option>
              <option value="IGCSE">IGCSE</option>
              <option value="GCSE">GCSE</option>
              <option value="other">Other Board</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="service">
              Class
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="service"
              name="service"
            >
              <option value="">Select a Class</option>
              <option value="LKG">LKG</option>
              <option value="UKG">UKG</option>
              <option value="1st">1st</option>
              <option value="2nd">2nd</option>
              <option value="3rd">3rd</option>
              <option value="4th">4th</option>
              <option value="5th">5th</option>
              <option value="6th">6th</option>
              <option value="7th">7th</option>
              <option value="8th">8th</option>
              <option value="9th">9th</option>
              <option value="10th">10th</option>
              <option value="11th">11th</option>
              <option value="12th">12th</option>
            </select>
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows={4}
              placeholder="Enter any additional information"
              defaultValue={""}
            />
          </div>
          <div className="mb-4">
  <h3 className="mb-4 font-semibold text-gray-900 dark:text-white">
    Do you have laptop?
  </h3>
  <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
    <li className="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
      <div className="flex items-center ps-3">
        <input
          id="horizontal-list-radio-license"
          type="radio"
          defaultValue=""
          name="list-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          htmlFor="horizontal-list-radio-license"
          className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Yes{" "}
        </label>
      </div>
    </li>
    
    <li className="w-full dark:border-gray-600">
      <div className="flex items-center ps-3">
        <input
          id="horizontal-list-radio-passport"
          type="radio"
          defaultValue=""
          name="list-radio"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 dark:bg-gray-600 dark:border-gray-500"
        />
        <label
          htmlFor="horizontal-list-radio-passport"
          className="w-full py-3 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          No
        </label>
      </div>
    </li>
  </ul>
</div>

          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Book Appointment
            </button>
          </div>
        </form>
      </div>    
      </div>  
    );
  }
