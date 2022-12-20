# Find Free Podcasts 

## The Challenge

We have a list of podcasts and need the ability to filter by only
podcasts which are free.

Write a function that takes in the podcast data and returns an new
array of only those podcasts which are free.

Additionally, your new array should return only 
objects containing only the podcast title, rating, and whether or 
not it is paid. 

Expected output: 
[
    {title: "Scrimba Podcast", rating: 10, paid: false}, 
    {title: "Something about Witches", rating: 8, paid: false}, 
    {title: "Coding Corner", rating: 9, paid: false}
]

## Making it Christmassy

There are podcasts about everything under the sun these days, so it's no surprise that there are several with Christmas themes. I looked up which ones are popular and added their info to the data.js file so I could render info about the podcasts in the browser. The images are clickable links which direct to Spotify.