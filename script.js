windowWidth = $(window).width()
windowHeight = $(window).height()

mobileWidth = 1300

generatorLine = function() {
  cards_collector = $( ".cards-collector:first" )
  let height = windowHeight
  let width = windowWidth

  let a = -0.8
  let c = 550

  let step = 6

  if (width < mobileWidth){
    step = 20
  }
  let direction = 1

  if ((width > 500) && (width < 1300)){
    let x = -400
    let y = 900

    let delay = 0
    let delay_step = 40

    while (x < 1100) {
      let x_real = x * width/1000
      let y_real = y * height/1000

      let new_card = $("<div class='card'></div>")
      new_card.css({"top": y_real + "px",
                   "left": x_real + "px",
                  "display": "none"})
      $( ".cards-collector" ).append(new_card)
      new_card.delay(delay).fadeIn(0)

      delay = delay + delay_step
      x = x + step * direction
    }

  } else {

    let x = 1000
    let y

    let delay = 0
    let delay_step = 27

    // while (x < 600) {
    //   y = a * x + c
    //   let x_real = x * width/1000
    //   let y_real = y * height/1000
    //
    //   let new_card = $("<div class='card'></div>")
    //   new_card.css({"top": y_real + "px",
    //                "left": x_real + "px",
    //               "display": "none"})
    //   $( ".cards-collector" ).append(new_card)
    //   new_card.delay(delay).fadeIn(0)
    //
    //   delay = delay + delay_step
    //   x = x + step * direction
    // }
    //c = y - a*x

    a = 0.65
    direction = -1

    while (x > -30) {
      y = a * x + c
      let x_real = x * width/1000
      let y_real = y * height/1000

      let new_card = $("<div class='card'></div>")
      new_card.css({"top": y_real + "px",
                   "left": x_real + "px",
                  "display": "none"})
      $( ".cards-collector" ).append(new_card)
      new_card.delay(delay).fadeIn(0)

      delay = delay + delay_step
      x = x + step * direction
    }

    a = -0.4
    c = y - a*x
    direction = 1

    while (x < 950) {
      y = a * x + c
      let x_real = x * width/1000
      let y_real = y * height/1000

      let new_card = $("<div class='card'></div>")
      new_card.css({"top": y_real + "px",
                   "left": x_real + "px",
                  "display": "none"})
      $( ".cards-collector" ).append(new_card)
      new_card.delay(delay).fadeIn(0)

      delay = delay + delay_step
      x = x + step * direction
    }

  }

}

generatorSpiral = function() {
  cards_collector = $( ".cards-collector:first" )
  let height = windowHeight
  let width = windowWidth


  let radius = 200
  let delay_step = 27

  if (width < mobileWidth){
    radius = 300
  }
  let center_x = 500
  let center_y = 500 + 300

  let angle = 0
  let step = Math.PI/100

  let r = 0

  let x = center_x
  let y = center_y

  let delay = 0

  let x_real = width/2
  let y_real = height/2

  let x_last = x
  let y_last = y

  do  {
    let new_card = $("<div class='card'></div>")
    var a = x - x_last;
    var b = y - y_last;

    var range = Math.sqrt(a*a + b*b)

    if ((range > 10) || (range == 0.0)) {

      x_last = x
      y_last = y

      let x_real = (x - 30) * width/1000
      let y_real = (y - 100) * height/1000

      new_card.css({"top": y_real + "px",
                   "left": x_real + "px",
                  "display": "none"})
      $( ".cards-collector" ).append(new_card)
      new_card.delay(delay).fadeIn(0)

      delay = delay + delay_step
    }
    angle = angle + step
    r = radius * angle / (2*Math.PI)

    x = center_x + r*Math.cos(angle)
    y = center_y + r*Math.sin(angle)

    // if (!((x < 1200) && (x > -200) && (y < 1200) && (y > -200))) {
    //   break
    // }

  } while ((x < 1200) && (x > -200) && (y < 1200) && (y > -200))

}

 generatorParabola = function (start_x = 100, start_y = 120, direction = -1, step = 3){
   cards_collector = $( ".cards-collector:first" )
   let height = windowHeight
   let width = windowWidth
   let a = 0.03571428571428571
   let b = 8
   let c = 1100
   let x = start_x * 16.80
   console.log(x)
   let x_step = step * 1.68
   let offset = Math.sqrt(Math.abs((start_y * 9.71 * b - c)/a)) + x - width/4
   let delay = 0
   while ((x < 1680 * 1.5) && (x > -1680 * 0.2)) {
     x = x + x_step * direction
     let y = a * (x - offset ) * (x-offset) + c
     y = y/b
     let y_real = y * height/971
     let x_real = x * width/1680
     let new_card = $("<div class='card'></div>")
     new_card.css({"top": y_real + "px",
                  "left": x_real + "px",
                 "display": "none"})
     $( ".cards-collector" ).append(new_card)
     new_card.delay(delay).fadeIn(0)

     if (y < 1150) {
       delay = delay + 27}
     else {
       offset = x + direction * Math.sqrt(Math.abs((y * b - c)/a))
     }
   }}


setTimeout(function(){
  $( ".content" ).css( {"display": "block",
                        "opacity": "0"})
  $( ".content" ).css( {"transition": "5s"})
  $( ".text-3" ).css( {"transition": "5s"})
  $( ".text-2" ).css( {"transition": "5s"})
  $( ".text-4" ).css( {"transition": "5s"})
}, 100);

setTimeout(function(){
      $( ".content" ).css( {"opacity": "1"})
      $( ".text-1" ).css( {"opacity": "1"})
}, 4700);

setTimeout(function(){
  $( ".text-2" ).css( {"opacity": "1"})
}, 8000);

setTimeout(function(){
  $( ".text-3" ).css( {"opacity": "1"})
  $( ".text-4" ).css( {"opacity": "1"})

}, 10000);


setTimeout(function(){

  setInterval(function(){
      $( ".text-1" ).css( {"opacity": "0"})
  }, 100);

  setInterval(function(){
      $( ".text-1" ).css( {"opacity": "1"})
  }, 70);

}, 13000);

setInterval(function(){
  $( ".text-1" ).fadeOut(50)
 }, 15000);

 setInterval(function(){
  $( ".marquee2" ).css( {"display": "inline"})
}, 15000);

if (windowWidth < mobileWidth){
  setTimeout(generatorLine, 2000)
} else {
  var generators = [generatorLine, generatorSpiral, generatorParabola]
  var index = Math.floor(Math.random() * 3)
  console.log(index)
  console.log(generators)
  setTimeout(generators[index], 2000)
}
