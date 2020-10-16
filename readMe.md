Creating the base HTML structure for the carousel

1) Create a parent div of 'carousel'
2) Create 3 divs within the div of 'carousel' called 'carousel-item'
3) Add images to each 'carousel-item' div, with the image src being 'images/1.jpg' - make sure to increment the image src number for each div, e.g. 'images/1.jpg', 'images/2.jpg', 'images/3.jpg' - all the images are provided in the images folder
4) Once you have a parent div of 'carousel', and 3 'carousel-item' divs with images inside, make a new div called 'carousel-actions' which sits inside 'carousel' and not within 'carousel-item'
5) Add two buttons inside 'carousel-actions', give them each an id, the first one being 'carousel-button-prev' and the second one being 'carousel-button-next'
6) The content for the prev button will be '<' and the content for the next button will be '>' - arrows that show left and right
7) On those buttons (prev & next) add aria-labels so that screen readers can read the text out loud to the user, on the previous slide button add 'Previous slide', and on the next slide button, add 'Next slide' - screen readers aren't great at describing '<' and '>' - so that's why we are adding aria-labels!
8) Add 'carousel-item-visible' to the first 'carousel-item' class - the reason for this is because we will eventually hide all carousel items, but we always want to show the first one on loading the page!
    