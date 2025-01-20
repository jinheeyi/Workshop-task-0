Website link: https://jinheeyi.github.io/workshop_0/

## Introduction

- I successfully completed Workshop 0 and was inspired to create another animation using similar techniques for the workshop 1. For my next project, I decided to develop a butterfly animation, focusing primarily on changing its colors dynamically. I referred to the p5.js tutorial on variables and change (https://p5js.org/tutorials/variables-and-change/) and explored various online resources for creating butterfly animations. There were numerous exemplars and projects related to butterfly animations, many of which were highly engaging and provided valuable inspiration.
- https://www.artstation.com/artwork/VgaveP
- https://thecodingtrain.com/challenges/60-butterfly-generator / it was quite challenging on making a real butterfly, and may be too complicated so using this as a reference on my problem solving.
- so decided to make the shape oval and make it a flapping motion using **sin(angle)**. Using ellipse(oval) () too for the wing shape. 
- I began to follow the instructions on the Workshop 1, reading on p5js references and what code to work on.


## Notes(working progress)
**creating a simple butterfly**
![Screenshot 2025-01-16 145902](https://github.com/user-attachments/assets/ecc8e3d3-ebd6-4c21-bfbd-07839642836a)
**from the coding train, demonstrating on how to make a realisitc butterfly**

![Screenshot 2025-01-16 151459](https://github.com/user-attachments/assets/5e9bd9c0-b0d8-4cf9-8dca-0796b4a0c679)

![Screenshot 2025-01-16 151508](https://github.com/user-attachments/assets/d2d382ab-1d36-4201-b097-8fea534dcd44)

![Screenshot 2025-01-16 150939](https://github.com/user-attachments/assets/b257fd8e-1f2f-46c9-8500-91956219abc1)
**using sin(angle) was to use the flapping motion very smooth back and forth.**

![Screenshot 2025-01-16 160359](https://github.com/user-attachments/assets/d6a0605a-9dd0-4958-9ada-c85b01dd6343)

![Screenshot 2025-01-16 160250](https://github.com/user-attachments/assets/3adcbb97-3d10-4589-9576-434a691f2e34)

- Further more, I showed my friend the coding of the butterfly and said maybe with colour changing background and some moving the butterfly off the screen might come in handy, so decided to add on to the sketch, too.
  
```ruby
  butterflyX = width / 2;
  butterflyY = height / 2;
  speedX = random(2, 4);
  speedY = random(-2, 2);
}
```
**Intialising butterfly position and speed**
```ruby
let speedX, speedY;
```
**Using the speed of the butterfly**
```ruby
function draw() {
  bgColor = color(
    map(butterflyX, 0, width, 50, 150), 
    map(butterflyY, 0, height, 50, 200),
    map(butterflyX + butterflyY, 0, width + height, 100, 255) 
  );
  background(bgColor);
```
**Changing the colour dynamically**

![Screenshot 2025-01-16 164058](https://github.com/user-attachments/assets/2d26659a-6ab3-4ba2-b8af-0662bba4431e)

![Screenshot 2025-01-16 164115](https://github.com/user-attachments/assets/7c3166fc-c83d-41a1-b175-8c2779ddca17)
the full complete code:

## Conclusion (+ future development)

- Creating a loop animation with a bouncing screen effect worked very well, as I was able to successfully apply the technique by closely following the lecture videos for guidance. I was quite impressed with how smoothly the process went when coding basic animations, which motivated me to further improve my skills by exploring and experimenting with new coding techniques. Adding more and more on this movement animation was quite an achievement, because it brought me ideas on what to make and what to add. It has somehow 
- For this animation, it looks a butterfly is wandering off from the screen, even playing and bouncing around which was beginner step, and I am quite excited on what I could do next to the next level of coding. But if more advanced, then the butterfly might be different for the shape, just from the examples above. but I think it turned out very well. For further development, I will decide to learn more on researching complicated codes plus the compositions. 
