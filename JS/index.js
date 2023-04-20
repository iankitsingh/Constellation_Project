function validation(){
  const userName = document.getElementById('name').value;
  const regex = /^[a-zA-Z]+$/; // regular expression to match alphabetic characters only

  if (!regex.test(userName)) {
      alert('Please enter a valid name with alphabetic characters only.');
      return;
  }
  else{
    check();
  }
}

const mappingConstellation = {
  aries: function() {
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Define a function to draw the next point and line in the generation
        const pointsAries = [
          { x: 80, y: 120 },
          { x: 200, y: 150 },
          { x: 250, y: 180 },
          { x: 260, y: 210 },
        ];
        const speedAries = 450; // Change this to adjust the speed of the animation
        let item8 = 0;
        const drawAries = setInterval(() => {
          ctx.beginPath();
          ctx.moveTo(pointsAries[item8].x, pointsAries[item8].y);
          ctx.lineTo(pointsAries[item8 + 1].x, pointsAries[item8 + 1].y);
          ctx.strokeStyle = "white"
          ctx.stroke();
          item8++;
          if (item8 >= pointsAries.length - 1) {
            clearInterval(drawAries);
            const downloadButton = document.querySelector("#downloadButton");
        downloadButton.addEventListener("click", downloadImage);

        function downloadImage() {
          const canvas = document.querySelector("#myCanvas");
          const link = document.createElement("a");
          link.download = "image.png";
          link.href = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          link.click();
        }
          }
          i = 0;
        }, speedAries);

        if(counter == 0){
          // Draw circles at the points
          for (let i = 0; i < pointsAries.length; i++) {
            ctx.beginPath();
            ctx.arc(pointsAries[i].x, pointsAries[i].y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "yellow"
            ctx.fill();
          }
        }
        else if(counter == 1){

          // draw cross
          
          console.log("entering in else if loop")
          console.log(counter)
          console.log("this is  counter value of else")
          // console.log("reset done")
          console.log(counter)
          for (let i = 0; i < pointsAries.length; i++) {
            ctx.beginPath();
            ctx.moveTo(pointsAries[i].x - 5, pointsAries[i].y - 5);
            ctx.lineTo(pointsAries[i].x + 5, pointsAries[i].y + 5);
            ctx.strokeStyle = "yellow"; // set the stroke style to white
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pointsAries[i].x - 5, pointsAries[i].y + 5);
            ctx.lineTo(pointsAries[i].x + 5, pointsAries[i].y - 5);
            ctx.strokeStyle = "yellow"; // set the stroke style to white
            ctx.stroke();

          }
        }
        else{
          // draw square
          counter = -1;
          console.log("zero done")
          for (let i = 0; i < pointsAries.length; i++) {
            ctx.beginPath();
            ctx.fillStyle = 'yellow'; // Set the fill style to red
            ctx.fillRect(pointsAries[i].x - 5, pointsAries[i].y - 5, 10, 10); // Draw a square instead of a circle
          }
        }
  
    },

    sagittarius: function(){

        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Define the points of the Sagittarius constellation
      const pointsSagi = [
        { x: 263, y: 423 },
        { x: 172, y: 414 },
        { x: 245, y: 370 },
        { x: 172, y: 413 },
        { x: 132, y: 341 },
        { x: 77, y: 238 },
        { x: 92, y: 225 },
        { x: 144, y: 174 },
        { x: 245, y: 186 },
        { x: 263, y: 213 },
        { x: 300, y: 165 },
        { x: 270, y: 160 },
        { x: 245, y: 185 },
        { x: 268, y: 159 },
        { x: 232, y: 106 },
        { x: 254, y: 93 },
        { x: 232, y: 106 },
        { x: 212, y: 103 },
        { x: 180, y: 77 },
        { x: 154, y: 68 },
        { x: 180, y: 77 },
        { x: 211, y: 103 },
        { x: 233, y: 106 },
        { x: 269, y: 159 },
        { x: 300, y: 165 },
        { x: 352, y: 133 },
        { x: 386, y: 62 },
        { x: 352, y: 133 },
        { x: 382, y: 190 },
        { x: 301, y: 165 },
        { x: 262, y: 213 },
        { x: 379, y: 249 },
        { x: 381, y: 189 },
        { x: 424, y: 192 },
        { x: 379, y: 249 },
        { x: 381, y: 189 },
        { x: 423, y: 192 },
        { x: 477, y: 151 },
        { x: 422, y: 192 },
        { x: 379, y: 249 },
        { x: 404, y: 283 },
      ];

      const speedSagi = 200; // Change this to adjust the speed of the animation

      // Draw the Cancer constellation
      let item11 = 0;
      const drawSagi = setInterval(() => {
        ctx.beginPath();
        ctx.moveTo(pointsSagi[item11].x, pointsSagi[item11].y);
        ctx.lineTo(pointsSagi[item11 + 1].x, pointsSagi[item11 + 1].y);
        ctx.strokeStyle = "white"
        ctx.stroke();
        item11++;
        if (item11 >= pointsSagi.length - 1) {
          clearInterval(drawSagi);
          const downloadButton = document.querySelector("#downloadButton");
        downloadButton.addEventListener("click", downloadImage);

        function downloadImage() {
          const canvas = document.querySelector("#myCanvas");
          const link = document.createElement("a");
          link.download = "image.png";
          link.href = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          link.click();
        }
        }
        i = 0;
      }, speedSagi);

      if(counter == 0){
        // Draw circles at the points
        for (let i = 0; i < pointsSagi.length; i++) {
          ctx.beginPath();
          ctx.arc(pointsSagi[i].x, pointsSagi[i].y, 5, 0, 2 * Math.PI);
          ctx.fillStyle = "yellow"
          ctx.fill();
        }
      }
      else if(counter == 1){
        for (let i = 0; i < pointsSagi.length; i++) {
          ctx.beginPath();
          ctx.moveTo(pointsSagi[i].x - 5, pointsSagi[i].y - 5);
          ctx.lineTo(pointsSagi[i].x + 5, pointsSagi[i].y + 5);
          ctx.strokeStyle = "yellow"; // set the stroke style to white
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(pointsSagi[i].x - 5, pointsSagi[i].y + 5);
          ctx.lineTo(pointsSagi[i].x + 5, pointsSagi[i].y - 5);
          ctx.strokeStyle = "yellow"; // set the stroke style to white
          ctx.stroke();
        }
      }
      else{
        counter = -1;
        for (let i = 0; i < pointsSagi.length; i++) {
          ctx.beginPath();
          ctx.fillStyle = 'yellow'; // Set the fill style to red
          ctx.fillRect(pointsSagi[i].x - 5, pointsSagi[i].y - 5, 10, 10); // Draw a square instead of a circle
        }
      }
    },

    
    virgo: function(){

        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const pointsVirgo = [
          { x: 412, y: 81 },
          { x: 396, y: 152 },
          { x: 363, y: 201 },
          { x: 308, y: 190 },
          { x: 229, y: 159 },
          { x: 308, y: 190 },
          { x: 280, y: 291 },
          { x: 377, y: 354 },
          { x: 344, y: 284 },
          { x: 362, y: 201 },
          { x: 343, y: 283 },
          { x: 377, y: 353 },
          { x: 279, y: 291 },
          { x: 214, y: 314 },
          { x: 141, y: 393 },
          { x: 213, y: 314 },
          { x: 280, y: 291 },
          { x: 376, y: 352 },
          { x: 301, y: 425 },
          { x: 263, y: 400 },
          { x: 226, y: 451 },
        ];
  
        const speedVirgo = 500; // Change this to adjust the speed of the animation
  
        // Draw the Cancer constellation
        let item6 = 0;
        const drawVirgo = setInterval(() => {
          ctx.beginPath();
          ctx.moveTo(pointsVirgo[item6].x, pointsVirgo[item6].y);
          ctx.lineTo(pointsVirgo[item6 + 1].x, pointsVirgo[item6+ 1].y);
          ctx.strokeStyle = "white"
          ctx.stroke();
          item6++;
          if (item6 >= pointsVirgo.length - 1) {
            clearInterval(drawVirgo);
            const downloadButton = document.querySelector("#downloadButton");
        downloadButton.addEventListener("click", downloadImage);

        function downloadImage() {
          const canvas = document.querySelector("#myCanvas");
          const link = document.createElement("a");
          link.download = "image.png";
          link.href = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          link.click();
        }
          }
          i = 0;
        }, speedVirgo);
  
        // Draw circles at the points
        //for circle
        if(counter==0){
        for (let i = 0; i < pointsVirgo.length; i++) {
          ctx.beginPath();
          ctx.arc(pointsVirgo[i].x, pointsVirgo[i].y, 5, 0, 2 * Math.PI);
          ctx.fillStyle = "yellow"
          ctx.fill();
        }}
        //for cross
        else if(counter==1){
          for (let i = 0; i < pointsVirgo.length; i++) {
            ctx.beginPath();
            ctx.moveTo(pointsVirgo[i].x - 5, pointsVirgo[i].y - 5);
            ctx.lineTo(pointsVirgo[i].x + 5, pointsVirgo[i].y + 5);
            ctx.strokeStyle = "yellow"; // set the stroke style to black
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pointsVirgo[i].x - 5, pointsVirgo[i].y + 5);
            ctx.lineTo(pointsVirgo[i].x + 5, pointsVirgo[i].y - 5);
            ctx.strokeStyle = "yellow"; // set the stroke style to black
            ctx.stroke();
          }
        }
        //for square
        else{
          counter=-1;
          for (let i = 0; i < pointsVirgo.length; i++) {
            ctx.beginPath();
            ctx.fillStyle = 'yellow'; // Set the fill style to red
            ctx.fillRect(pointsVirgo[i].x - 5, pointsVirgo[i].y - 5, 10, 10); // Draw a square instead of a circle
          }
          
        }
    },

    cancer: function(){

        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const points = [
          { x: 124, y: 51 },
          { x: 176, y: 152 },
          { x: 188, y: 197 },
          { x: 178, y: 302 },
          { x: 187, y: 197 },
          { x: 332, y: 276 },
        ];
  
        const speedCancer = 200; // Change this to adjust the speed of the animation
  
        // Draw the Cancer constellation
        let item = 0;
        const drawCancer = setInterval(() => {
          ctx.beginPath();
          ctx.moveTo(points[item].x, points[item].y);
          ctx.lineTo(points[item + 1].x, points[item + 1].y);
          ctx.strokeStyle = "white";
          ctx.stroke();
          item++;
          if (item >= points.length - 1) {
            clearInterval(drawCancer);
            const downloadButton = document.querySelector("#downloadButton");
        downloadButton.addEventListener("click", downloadImage);

        function downloadImage() {
          const canvas = document.querySelector("#myCanvas");
          const link = document.createElement("a");
          link.download = "image.png";
          link.href = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          link.click();
        }
          }
          i = 0;
        }, speedCancer);
        
        if(counter == 0){
          // Draw circles at the points
          for (let i = 0; i < points.length; i++) {
            ctx.beginPath();
            ctx.arc(points[i].x, points[i].y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "yellow"
            ctx.fill();
        }
        }
        else if(counter == 1){
          for (let i = 0; i < points.length; i++) {
            ctx.beginPath();
            ctx.moveTo(points[i].x - 5, points[i].y - 5);
            ctx.lineTo(points[i].x + 5, points[i].y + 5);
            ctx.strokeStyle = "yellow"; // set the stroke style to white
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(points[i].x - 5, points[i].y + 5);
            ctx.lineTo(points[i].x + 5, points[i].y - 5);
            ctx.strokeStyle = "yellow"; // set the stroke style to white
            ctx.stroke();
          }
        }
        else{
          counter = -1;
          for (let i = 0; i < points.length; i++) {
            ctx.beginPath();
            ctx.fillStyle = 'yellow'; // Set the fill style to red
            ctx.fillRect(points[i].x - 5, points[i].y - 5, 10, 10); // Draw a square instead of a circle
          }
        }
    },

    aquarius: function(){
        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const pointsAqua = [
          { x: 345, y: 464 },
          { x: 281, y: 410 },
          { x: 218, y: 415 },
          { x: 188, y: 473 },
          { x: 111, y: 359 },
          { x: 118, y: 324 },
          { x: 149, y: 314 },
          { x: 157, y: 253 },
          { x: 244, y: 305 },
          { x: 313, y: 304 },
          { x: 244, y: 306 },
          { x: 157, y: 253 },
          { x: 271, y: 180 },
          { x: 383, y: 109 },
        ];
  
        const speedAqua = 500; // Change this to adjust the speed of the animation
  
        // Draw the Cancer constellation
        let item3 = 0;
        const drawAqua = setInterval(() => {
          ctx.beginPath();
          ctx.moveTo(pointsAqua[item3].x, pointsAqua[item3].y);
          ctx.lineTo(pointsAqua[item3 + 1].x, pointsAqua[item3+ 1].y);
          ctx.strokeStyle = "white"
          ctx.stroke();
          item3++;
          if (item3 >= pointsAqua.length - 1) {
            clearInterval(drawAqua);
            const downloadButton = document.querySelector("#downloadButton");
        downloadButton.addEventListener("click", downloadImage);

        function downloadImage() {
          const canvas = document.querySelector("#myCanvas");
          const link = document.createElement("a");
          link.download = "image.png";
          link.href = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          link.click();
        }
          }
          i = 0;
        }, speedAqua);
  
        // Draw circles at the points
        //for circle
        if(counter==0){
          for (let i = 0; i < pointsAqua.length; i++) {
            ctx.beginPath();
            ctx.arc(pointsAqua[i].x, pointsAqua[i].y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "yellow"
            ctx.fill();
          }
        }
        //for cross
        else if(counter==1){
          for (let i = 0; i < pointsAqua.length; i++) {
            ctx.beginPath();
            ctx.moveTo(pointsAqua[i].x - 5, pointsAqua[i].y - 5);
            ctx.lineTo(pointsAqua[i].x + 5, pointsAqua[i].y + 5);
            ctx.strokeStyle = "yellow"; // set the stroke style to white
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pointsAqua[i].x - 5, pointsAqua[i].y + 5);
            ctx.lineTo(pointsAqua[i].x + 5, pointsAqua[i].y - 5);
            ctx.strokeStyle = "yellow"; // set the stroke style to white
            ctx.stroke();
          }
        }
        //for square
        else{
          counter=-1;
          for (let i = 0; i < pointsAqua.length; i++) {
            ctx.beginPath();
            ctx.fillStyle = 'yellow'; // Set the fill style to red
            ctx.fillRect(pointsAqua[i].x - 5, pointsAqua[i].y - 5, 10, 10); // Draw a square instead of a circle
          }
        }
    },

    capricorn: function(){

        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const pointsCap = [
          { x: 34, y: 154 },
          { x: 112, y: 245 },
          { x: 233, y: 313 },
          { x: 255, y: 284 },
          { x: 348, y: 129 },
          { x: 365, y: 96 },
          { x: 347, y: 102 },
          { x: 182, y: 165 },
          { x: 123, y: 161 },
          { x: 62, y: 160 },
          { x: 34, y: 153 },
        ];
  
        const speedCap = 200; // Change this to adjust the speed of the animation

      // Draw the Cancer constellation
      let item10 = 0;
      const drawCap = setInterval(() => {
        ctx.beginPath();
        ctx.moveTo(pointsCap[item10].x, pointsCap[item10].y);
        ctx.lineTo(pointsCap[item10 + 1].x, pointsCap[item10 + 1].y);
        ctx.strokeStyle = "white" ;
        ctx.stroke();
        item10++;
        if (item10 >= pointsCap.length - 1) {
          clearInterval(drawCap);
          const downloadButton = document.querySelector("#downloadButton");
        downloadButton.addEventListener("click", downloadImage);

        function downloadImage() {
          const canvas = document.querySelector("#myCanvas");
          const link = document.createElement("a");
          link.download = "image.png";
          link.href = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          link.click();
        }
        }
        i = 0;
      }, speedCap);

      if(counter == 0){
        // Draw circles at the points
        for (let i = 0; i < pointsCap.length; i++) {
          ctx.beginPath();
          ctx.arc(pointsCap[i].x, pointsCap[i].y, 5, 0, 2 * Math.PI);
          ctx.fillStyle = "yellow" ;
          ctx.fill();
        }
      }
      else if(counter == 1){
        for (let i = 0; i < pointsCap.length; i++) {
          ctx.beginPath();
          ctx.moveTo(pointsCap[i].x - 5, pointsCap[i].y - 5);
          ctx.lineTo(pointsCap[i].x + 5, pointsCap[i].y + 5);
          ctx.strokeStyle = "yellow"; // set the stroke style to white
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(pointsCap[i].x - 5, pointsCap[i].y + 5);
          ctx.lineTo(pointsCap[i].x + 5, pointsCap[i].y - 5);
          ctx.strokeStyle = "yellow"; // set the stroke style to white
          ctx.stroke();
        }
      }
      else{
        counter = -1;
        for (let i = 0; i < pointsCap.length; i++) {
          ctx.beginPath();
          ctx.fillStyle = 'yellow'; // Set the fill style to red
          ctx.fillRect(pointsCap[i].x - 5, pointsCap[i].y - 5, 10, 10); // Draw a square instead of a circle
        }
      }
    },

    pisces: function(){

        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const pointsPis = [
          { x: 41, y: 67 },
          { x: 22, y: 57 },
          { x: 26, y: 39 },
          { x: 40, y: 66 },
          { x: 37, y: 103 },
          { x: 45, y: 126 },
          { x: 40, y: 167 },
          { x: 41, y: 210 },
          { x: 58, y: 181 },
          { x: 73, y: 170 },
          { x: 90, y: 151 },
          { x: 98, y: 143 },
          { x: 121, y: 136 },
          { x: 133, y: 130 },
          { x: 173, y: 102 },
          { x: 204, y: 93 },
          { x: 217, y: 77 },
          { x: 228, y: 73 },
          { x: 241, y: 85 },
          { x: 232, y: 102 },
          { x: 213, y: 118 },
          { x: 204, y: 93 },
        ];
  
        const speedPis = 500; // Change this to adjust the speed of the animation
  
        // Draw the Cancer constellation
        let item4 = 0;
        const drawPis = setInterval(() => {
          ctx.beginPath();
          ctx.moveTo(pointsPis[item4].x, pointsPis[item4].y);
          ctx.lineTo(pointsPis[item4 + 1].x, pointsPis[item4+ 1].y);
          ctx.strokeStyle = "white"
          ctx.stroke();
          item4++;
          if (item4 >= pointsPis.length - 1) {
            clearInterval(drawPis);
          }
          i = 0;
        }, speedPis);
  
        // Draw circles at the points
        //for circle
        if(counter==0){
          for (let i = 0; i < pointsPis.length; i++) {
            ctx.beginPath();
            ctx.arc(pointsPis[i].x, pointsPis[i].y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "yellow"
            ctx.fill();
          }
        }
        //for cross
        else if(counter==1){
          for (let i = 0; i < pointsPis.length; i++) {
          ctx.beginPath();
            ctx.moveTo(pointsPis[i].x - 5, pointsPis[i].y - 5);
            ctx.lineTo(pointsPis[i].x + 5, pointsPis[i].y + 5);
            ctx.strokeStyle = "yellow"; // set the stroke style to white
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pointsPis[i].x - 5, pointsPis[i].y + 5);
            ctx.lineTo(pointsPis[i].x + 5, pointsPis[i].y - 5);
            ctx.strokeStyle = "yellow"; // set the stroke style to white
            ctx.stroke();
          }
        }
        //for square
        else{
          counter=-1;
          for (let i = 0; i < pointsPis.length; i++) {
            ctx.beginPath();
            ctx.fillStyle = 'yellow'; // Set the fill style to red
            ctx.fillRect(pointsPis[i].x - 5, pointsPis[i].y - 5, 10, 10); // Draw a square instead of a circle
          }
        }
    },

    gemini: function(){

        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const pointsGemini = [
          { x: 33, y: 165 },
          { x: 69, y: 179 },
          { x: 44, y: 222 },
          { x: 69, y: 178 },
          { x: 141, y: 253 },
          { x: 163, y: 338 },
          { x: 299, y: 377 },
          { x: 163, y: 338 },
          { x: 141, y: 253 },
          { x: 203, y: 266 },
          { x: 312, y: 314 },
          { x: 202, y: 267 },
          { x: 141, y: 253 },
          { x: 68, y: 178 },
          { x: 106, y: 161 },
          { x: 152, y: 113 },
          { x: 66, y: 95 },
          { x: 152, y: 113 },
          { x: 201, y: 42 },
          { x: 152, y: 113 },
          { x: 267, y: 179 },
          { x: 348, y: 205 },
          { x: 267, y: 179 },
          { x: 332, y: 245 },
          { x: 267, y: 179 },
          { x: 347, y: 205 },
          { x: 380, y: 196 },
        ];
  
        const speedGemini = 200; // Change this to adjust the speed of the animation
  
        // Draw the Cancer constellation
        let item0 = 0;
        const drawGemini = setInterval(() => {
          ctx.beginPath();
          ctx.moveTo(pointsGemini[item0].x, pointsGemini[item0].y);
          ctx.lineTo(pointsGemini[item0 + 1].x, pointsGemini[item0 + 1].y);
          ctx.strokeStyle = "white"
          ctx.stroke();
          item0++;
          if (item0 >= pointsGemini.length - 1) {
            clearInterval(drawGemini);
            const downloadButton = document.querySelector("#downloadButton");
        downloadButton.addEventListener("click", downloadImage);

        function downloadImage() {
          const canvas = document.querySelector("#myCanvas");
          const link = document.createElement("a");
          link.download = "image.png";
          link.href = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          link.click();
        }
          }
          i = 0;
        }, speedGemini);
        
        if(counter == 0){
          // Draw circles at the points
          for (let i = 0; i < pointsGemini.length; i++) {
            ctx.beginPath();
            ctx.arc(pointsGemini[i].x, pointsGemini[i].y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "yellow"
            ctx.fill();
          }
        }
        else if(counter == 1){
          for (let i = 0; i < pointsGemini.length; i++) {
            ctx.beginPath();
            ctx.moveTo(pointsGemini[i].x - 5, pointsGemini[i].y - 5);
            ctx.lineTo(pointsGemini[i].x + 5, pointsGemini[i].y + 5);
            ctx.strokeStyle = "yellow"; // set the stroke style to black
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pointsGemini[i].x - 5, pointsGemini[i].y + 5);
            ctx.lineTo(pointsGemini[i].x + 5, pointsGemini[i].y - 5);
            ctx.strokeStyle = "yellow"; // set the stroke style to black
            ctx.stroke();
          }
        }
        else{
          counter = -1;
          for (let i = 0; i < pointsGemini.length; i++) {
            ctx.beginPath();
            ctx.fillStyle = 'yellow'; // Set the fill style to red
            ctx.fillRect(pointsGemini[i].x - 5, pointsGemini[i].y - 5, 10, 10); // Draw a square instead of a circle
          }
        }
    },

    leo: function(){

        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const pointsLeo = [
          { x: 194, y: 34 },
          { x: 173, y: 29 },
          { x: 150, y: 69 },
          { x: 163, y: 98 },
          { x: 197, y: 104 },
          { x: 216, y: 137 },
          { x: 96, y: 183 },
          { x: 41, y: 222 },
          { x: 75, y: 148 },
          { x: 163, y: 96 },
        ];
      
        const speedLeo = 200; // Change this to adjust the speed of the animation

      // Draw the Cancer constellation
      let item1 = 0;
      const drawLeo = setInterval(() => {
        ctx.beginPath();
        ctx.moveTo(pointsLeo[item1].x, pointsLeo[item1].y);
        ctx.lineTo(pointsLeo[item1 + 1].x, pointsLeo[item1 + 1].y);
        ctx.strokeStyle = 'white';
        ctx.stroke();
        item1++;
        if (item1 >= pointsLeo.length - 1) {
          clearInterval(drawLeo);
          const downloadButton = document.querySelector("#downloadButton");
        downloadButton.addEventListener("click", downloadImage);

        function downloadImage() {
          const canvas = document.querySelector("#myCanvas");
          const link = document.createElement("a");
          link.download = "image.png";
          link.href = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          link.click();
        }
        }
        i = 0;
      }, speedLeo);

      if(counter == 0){
        // Draw circles at the points
      for (let i = 0; i < pointsLeo.length; i++) {
        ctx.beginPath();
        ctx.arc(pointsLeo[i].x, pointsLeo[i].y, 5, 0, 2 * Math.PI);
        ctx.fillStyle = "yellow"
        ctx.fill();
      }
      }
      else if(counter == 1){
        for (let i = 0; i < pointsLeo.length; i++) {
          ctx.beginPath();
          ctx.moveTo(pointsLeo[i].x - 5, pointsLeo[i].y - 5);
          ctx.lineTo(pointsLeo[i].x + 5, pointsLeo[i].y + 5);
          ctx.strokeStyle = "yellow"; // set the stroke style to white
          ctx.stroke();
          ctx.beginPath();
          ctx.moveTo(pointsLeo[i].x - 5, pointsLeo[i].y + 5);
          ctx.lineTo(pointsLeo[i].x + 5, pointsLeo[i].y - 5);
          ctx.strokeStyle = "yellow"; // set the stroke style to white
          ctx.stroke();
        }
      }
      else{
        counter = -1;
        // Draw circles at the points
        for (let i = 0; i < pointsLeo.length; i++) {
          ctx.beginPath();
          ctx.fillStyle = 'yellow';
          ctx.fillRect(pointsLeo[i].x - 5, pointsLeo[i].y - 5, 10, 10);
        }
      }
    },

    libra: function(){

        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const pointsLibra = [
          { x: 304, y: 52 },
          { x: 177, y: 142 },
          { x: 315, y: 146 },
          { x: 433, y: 142 },
          { x: 304, y: 52 },
          { x: 176, y: 143 },
          { x: 253, y: 254 },
          { x: 260, y: 300 },
          { x: 272, y: 347 },
          { x: 260, y: 301 },
          { x: 252, y: 254 },
          { x: 175, y: 142 },
          { x: 315, y: 146 },
          { x: 432, y: 141 },
          { x: 463, y: 284 },
          { x: 459, y: 302 },
          { x: 483, y: 313 },
        ];
  
        const speedLibra = 200; // Change this to adjust the speed of the animation
  
        // Draw the Cancer constellation
        let item2 = 0;
        const drawLibra = setInterval(() => {
          ctx.beginPath();
          ctx.moveTo(pointsLibra[item2].x, pointsLibra[item2].y);
          ctx.lineTo(pointsLibra[item2 + 1].x, pointsLibra[item2 + 1].y);
          ctx.strokeStyle = "white"
          ctx.stroke();
          item2++;
          if (item2 >= pointsLibra.length - 1) {
            clearInterval(drawLibra);
            const downloadButton = document.querySelector("#downloadButton");
        downloadButton.addEventListener("click", downloadImage);

        function downloadImage() {
          const canvas = document.querySelector("#myCanvas");
          const link = document.createElement("a");
          link.download = "image.png";
          link.href = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          link.click();
        }
          }
          i = 0;
        }, speedLibra);
  
        // Draw circles at the points
        //for circle
        if(counter==0){
          for (let i = 0; i < pointsLibra.length; i++) {
            ctx.beginPath();
            ctx.arc(pointsLibra[i].x, pointsLibra[i].y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "yellow"
            ctx.fill();
          }
        }
        //for cross
        else if(counter==1){
          for (let i = 0; i < pointsLibra.length; i++) {
            ctx.beginPath();
            ctx.moveTo(pointsLibra[i].x - 5, pointsLibra[i].y - 5);
            ctx.lineTo(pointsLibra[i].x + 5, pointsLibra[i].y + 5);
            ctx.strokeStyle = "yellow"; // set the stroke style to white
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pointsLibra[i].x - 5, pointsLibra[i].y + 5);
            ctx.lineTo(pointsLibra[i].x + 5, pointsLibra[i].y - 5);
            ctx.strokeStyle = "yellow"; // set the stroke style to white
            ctx.stroke();
          }
        }
        //for sqaure
        else{
          counter = -1;
          for (let i = 0; i < pointsLibra.length; i++) {
            ctx.beginPath();
            ctx.fillStyle = 'yellow'; // Set the fill style to red
            ctx.fillRect(pointsLibra[i].x - 5, pointsLibra[i].y - 5, 10, 10); // Draw a square instead of a circle
          }
        }
    },

    taurus: function(){

        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const pointsTau = [
          { x: 58, y: 210 },
          { x: 273, y: 328 },
          { x: 310, y: 362 },
          { x: 356, y: 375 },
          { x: 353, y: 341 },
          { x: 339, y: 326 },
          { x: 320, y: 279 },
          { x: 273, y: 327 },
          { x: 319, y: 280 },
          { x: 271, y: 195 },
          { x: 144, y: 67 },
          { x: 270, y: 195 },
          { x: 319, y: 279 },
          { x: 339, y: 326 },
          { x: 353, y: 341 },
          { x: 525, y: 264 },
          { x: 353, y: 341 },
          { x: 356, y: 374 },
          { x: 406, y: 468 },
          { x: 522, y: 545 },
          { x: 514, y: 513 },
        ];
  
        const speedTau = 200; // Change this to adjust the speed of the animation
  
        // Draw the Cancer constellation
        let item9 = 0;
        const drawTau = setInterval(() => {
          ctx.beginPath();
          ctx.moveTo(pointsTau[item9].x, pointsTau[item9].y);
          ctx.lineTo(pointsTau[item9 + 1].x, pointsTau[item9 + 1].y);
          ctx.strokeStyle = "white"
          ctx.stroke();
          item9++;
          if (item9 >= pointsTau.length - 1) {
            clearInterval(drawTau);
            const downloadButton = document.querySelector("#downloadButton");
        downloadButton.addEventListener("click", downloadImage);

        function downloadImage() {
          const canvas = document.querySelector("#myCanvas");
          const link = document.createElement("a");
          link.download = "image.png";
          link.href = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          link.click();
        }
          }
          i = 0;
        }, speedTau);

        if(counter == 0){
          // Draw circles at the points
          for (let i = 0; i < pointsTau.length; i++) {
            ctx.beginPath();
            ctx.arc(pointsTau[i].x, pointsTau[i].y, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "yellow"
            ctx.fill();
          }
        }
        else if(counter == 1){
          for (let i = 0; i < pointsTau.length; i++) {
            ctx.beginPath();
            ctx.moveTo(pointsTau[i].x - 5, pointsTau[i].y - 5);
            ctx.lineTo(pointsTau[i].x + 5, pointsTau[i].y + 5);
            ctx.strokeStyle = "yellow"; // set the stroke style to black
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(pointsTau[i].x - 5, pointsTau[i].y + 5);
            ctx.lineTo(pointsTau[i].x + 5, pointsTau[i].y - 5);
            ctx.strokeStyle = "yellow"; // set the stroke style to black
            ctx.stroke();
          }
        }
        else{
          counter = -1;
          for (let i = 0; i < pointsTau.length; i++) {
            ctx.beginPath();
            ctx.fillStyle = 'yellow'; // Set the fill style to red
            ctx.fillRect(pointsTau[i].x - 5, pointsTau[i].y - 5, 10, 10); // Draw a square instead of a circle
          }
        }
  
    },

    scorpio: function(){

        const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const pointScor = [
          // draw Taurus constellation
          { x: 141, y: 342 },
          { x: 97, y: 371 },
            { x: 117, y: 411 },
            { x: 171, y: 426 },
            { x: 213, y: 427 },
            { x: 259, y: 327 },
            { x: 311, y: 271 },
            { x: 343, y: 250 },
            { x: 375, y: 240 },
            { x: 428, y: 190 },
            { x: 376, y: 240 },
            { x: 432, y: 230 },
            { x: 375, y: 240 },
            { x: 410, y: 281 },
          ];
    
          const speedScor = 500; // Change this to adjust the speed of the animation
    
          // Draw the Cancer constellation
          let item5 = 0;
          const drawScor = setInterval(() => {
            ctx.beginPath();
            ctx.moveTo(pointScor[item5].x, pointScor[item5].y);
            ctx.lineTo(pointScor[item5 + 1].x, pointScor[item5+ 1].y);
            ctx.strokeStyle = "white"
            ctx.stroke();
            item5++;
            if (item5 >= pointScor.length - 1) {
              clearInterval(drawScor);
              const downloadButton = document.querySelector("#downloadButton");
        downloadButton.addEventListener("click", downloadImage);

        function downloadImage() {
          const canvas = document.querySelector("#myCanvas");
          const link = document.createElement("a");
          link.download = "image.png";
          link.href = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          link.click();
        }
            }
            i = 0;
          }, speedScor);
    
          // Draw circles at the points
          //for circle
          if(counter==0){
            for (let i = 0; i < pointScor.length; i++) {
              ctx.beginPath();
              ctx.arc(pointScor[i].x, pointScor[i].y, 5, 0, 2 * Math.PI);
              ctx.fillStyle = "yellow"
              ctx.fill();
            }
          }
          //for cross
          else if(counter==1){
            for (let i = 0; i < pointScor.length; i++) {
              ctx.beginPath();
              ctx.moveTo(pointScor[i].x - 5, pointScor[i].y - 5);
              ctx.lineTo(pointScor[i].x + 5, pointScor[i].y + 5);
              ctx.strokeStyle = "yellow"; // set the stroke style to black
              ctx.stroke();
              ctx.beginPath();
              ctx.moveTo(pointScor[i].x - 5, pointScor[i].y + 5);
              ctx.lineTo(pointScor[i].x + 5, pointScor[i].y - 5);
              ctx.strokeStyle = "yellow"; // set the stroke style to black
              ctx.stroke();
            }
          }
          //for square
          else{
            counter=-1;
            for (let i = 0; i < pointScor.length; i++) {
              ctx.beginPath();
              ctx.fillStyle = 'yellow'; // Set the fill style to red
              ctx.fillRect(pointScor[i].x - 5, pointScor[i].y - 5, 10, 10); // Draw a square instead of a circle
            }
          }
    },   
};

var counter = 0;

const prediction1 = {
    chh : "gemini",
    tha : "virgo",
}

const prediction2 = {
    bh : "sagittarius",
    dh : "sagittarius",
    dd : "cancer",
    sh : "aquarius",
    kh : "capricorn",
    ch : "pisces",
    th : "pisces",
    gh : "gemini",
    tt : "leo",
}

const prediction3 ={
    f : "sagittarius",
    p : "virgo",
    h : "cancer",
    g : "aquarius",
    s : "aquarius",
    j : "capricorn",
    d : "pisces",
    z : "pisces",
    a : "aries",
    l : "aries",
    e : "aries",
    i : "aries",
    o : "aries",
    k : "gemini",
    q : "gemini",
    c : "gemini",
    m : "leo",
    r : "libra",
    t : "libra",
    b : "taurus",
    v : "taurus",
    u : "taurus",
    w : "taurus",
    n : "scorpio",
    y : "scorpio"
}
function check(){
    let elem = document.getElementById('show-diagram');
    let img = document.getElementById('card-img');
    let para = document.getElementById('card-para');

    elem.style.display="block";
    let value = ""
    let name = document.getElementById('name').value.toLowerCase();
    let sub_str = name.slice(0,3);

    for(let i in prediction1){
        if(i == sub_str){
            value = prediction1[i];
            constellation = value;
            img.src = '../Resources/'+value+'.jpg';
            para.innerHTML =''+value+'';
            break;
        }
    }

    if(value == ""){
        sub_str = sub_str.slice(0,2);
        for(let i in prediction2){
            if(i == sub_str){
                value = prediction2[i];
                constellation = value;
                img.src = '../Resources/'+value+'.jpg';
                para.innerHTML =''+value+'';
                break;
            }
        }
    }

    if(value == ""){
        sub_str = sub_str.slice(0,1);
        if(sub_str == 'x'){
          alert("Oops! For The Character X There Is No Zodiac.")
          return
        }

        for(let i in prediction3){
            if(i == sub_str){
                value = prediction3[i];
                constellation = value;
                img.src = '../Resources/'+value+'.jpg';
                para.innerHTML =''+value+'';
                break;
            }
        }
    }
    let length_of_storage = localStorage.length;
    if(length_of_storage != 0){
      let last_value = localStorage.key(length_of_storage-1);
      if(value == last_value){
        counter = counter + 1;  
        console.log("this is counters val in the if where val == last");
        console.log(counter);
      }
      else{
        localStorage.clear();
        localStorage.setItem(value,value);
      }
    }
    else{
      localStorage.setItem(value,value);
    }
    for(let i in mappingConstellation){
        if(i == value){
            mappingConstellation[i]()
            break;
        }
    }

    if(value == ""){
        console.log("please fill hindu names");
        elem.innerHTML("please fill hindu names");
    }
 }


